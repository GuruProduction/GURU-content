#!/usr/bin/env node
// GURU by Unus Lumen - an AI framework that gives a language model real hands on an Android phone.
// Copyright (C) 2026 Steven Newman, Founder and Developer, Unus Lumen Ltd, Bristol UK.
// Licensed under the GNU AGPL v3.0-or-later. Full license text in the LICENSE file.

/**
 * THE PUBLISHER. Reads the live content tables and writes them to this repo.
 *
 * ONE DIRECTION ONLY. The database is the source of truth for what GURU serves,
 * and this repo is the published record of it. Nothing here writes back to the
 * database, so a hand edit to a file in this repo is a lie that the next publish
 * erases. That is deliberate: two writable copies of the same prompt is how a
 * repo and a phone end up disagreeing with nobody able to say which is real.
 *
 * WHAT IT WRITES. One file per item, named by slug, with the row's own identity
 * fields in frontmatter and the body verbatim. The verbatim part matters: a
 * reader has to be able to diff the instruction set that ships to their phone
 * against what it was last month, and that only works if the text is byte for
 * byte what the server hands out.
 *
 * WHAT IT LEAVES OUT. Anything the owner has switched off. The panel's delete
 * is a soft delete, so a withdrawn row keeps its place in the table with
 * `is_active = false`, and a publisher that wrote every row would republish
 * every deletion as public text. Only active rows are selected, only active
 * rows are written, and only active rows are counted.
 *
 * THE MANIFEST IS THE CONTRACT. manifest.json carries every item's slug,
 * version and sha256 of its file, plus `bundle_sha256` over the whole set. That
 * digest is what the server signs and what the app verifies, so this file also
 * carries the canonical encoder the other two sides implement. See
 * `bundleMaterial` below and `guru-server/src/feed_signing.rs` for the contract
 * in full.
 *
 * USAGE
 *   node scripts/publish.mjs                 write from the live stack
 *   node scripts/publish.mjs --check         fail if the repo is out of date
 *   node scripts/publish.mjs --from <json>   write from a dumped JSON payload
 *   node scripts/publish.mjs --selftest      print the shared fixture digest
 */

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, rmSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

/** The content types this repo publishes, in the order the README presents them. */
const KINDS = ["prompts", "skills", "tools", "agents", "packs"];

/**
 * A stable, readable filename for a slug.
 *
 * A slug is already the identity the server uses, so it is carried through
 * unchanged rather than re-cased. The one adjustment is the empty slug on a
 * single agi_law prompt, which is real in the live database and would otherwise
 * produce a file called `.md`. It gets a name that says what it is rather than
 * being dropped, because a published set that silently omits one row is worse
 * than a published set with an ugly filename.
 */
function fileNameFor(slug, id) {
  const clean = (slug ?? "").trim();
  if (clean.length === 0) return `untitled-${String(id).slice(0, 8)}`;
  return clean;
}

function sha256(text) {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

// ---------------------------------------------------------------------------
// The canonical feed encoding. THE CONTRACT: this must produce byte-identical
// output to `guru-server/src/feed_signing.rs` and to `FeedSignature.kt` in the
// app. The Rust file documents the format; this is the same thing in JavaScript.
// ---------------------------------------------------------------------------

/**
 * Keys that are row-storage facts rather than served content and are therefore
 * removed before hashing. A uuid that changes on every re-seed, and a timestamp
 * whose text form differs between databases, would otherwise make the digest
 * impossible for anyone else to reproduce.
 */
const PROVENANCE_KEYS = new Set(["id", "created_at", "updated_at", "is_active"]);
const ELEMENT_PROVENANCE_KEYS = new Set(["id", "pack_id", "created_at"]);

/** Strip provenance from one item, descending once into a pack's elements. */
function stripProvenance(kind, value) {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return value;
  const out = {};
  for (const [key, v] of Object.entries(value)) {
    if (PROVENANCE_KEYS.has(key)) continue;
    out[key] = v;
  }
  if (kind === "packs" && Array.isArray(out.elements)) {
    out.elements = out.elements.map((element) => {
      if (element === null || typeof element !== "object" || Array.isArray(element)) return element;
      const cleaned = {};
      for (const [ key, v ] of Object.entries(element)) {
        if (ELEMENT_PROVENANCE_KEYS.has(key)) continue;
        cleaned[key] = v;
      }
      return cleaned;
    });
  }
  return out;
}

/**
 * The minimal escape set, in the same order the contract names: quote,
 * backslash, tab, newline, carriage return, then any other code point below
 * U+0020. Every other code point is emitted as its own UTF-8 bytes by the
 * writer. Deliberately NOT JSON.stringify's escaping, because the two disagree
 * on nothing here but would on U+2028 and on lone surrogates, and a second
 * opinion on escaping is a second chance to break the trust root.
 */
function escapeString(value) {
  let out = '"';
  for (const ch of value) {
    const code = ch.codePointAt(0);
    if (ch === '"') out += '\\"';
    else if (ch === "\\") out += "\\\\";
    else if (ch === "\t") out += "\\t";
    else if (ch === "\n") out += "\\n";
    else if (ch === "\r") out += "\\r";
    else if (code < 0x20) out += "\\u" + code.toString(16).padStart(4, "0");
    else out += ch;
  }
  return out + '"';
}

/** A real number as the 8 lowercase hex digits of its IEEE-754 binary32 bits. */
function encodeReal(value) {
  const buffer = Buffer.allocUnsafe(4);
  buffer.writeFloatBE(Math.fround(value), 0);
  return "f32" + buffer.toString("hex");
}

/**
 * The canonical encoding of a JSON value.
 *
 * NUMBERS. An integer is anything that is finite, has no fractional part, and
 * lies inside i64; it prints as decimal. Everything else takes the
 * `f32<8 hex>` form. THIS IS BY VALUE ON PURPOSE. `JSON.parse("1.0")` and
 * `JSON.parse("1")` are the same number to JavaScript, while Rust's serde_json
 * keeps them distinct and prints the first as `1.0`. Deciding by value is the
 * only rule all three runtimes can implement and agree on, and the live schema
 * needs it: `global_threshold` is a `double precision`, and every canvas
 * geometry column is a `real` where 0 is stored and must print as `0`.
 */
function canonicalEncode(value) {
  if (value === null || value === undefined) return "null";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "string") return escapeString(value);
  if (typeof value === "number") {
    if (
      Number.isFinite(value) &&
      Number.isInteger(value) &&
      value >= -9223372036854775808 &&
      value <= 9223372036854775807
    ) {
      // `String(-0)` is "0", which is what the contract requires.
      return String(value);
    }
    return encodeReal(value);
  }
  if (Array.isArray(value)) return "[" + value.map(canonicalEncode).join(",") + "]";
  const keys = Object.keys(value).sort((a, b) => Buffer.compare(Buffer.from(a), Buffer.from(b)));
  return "{" + keys.map((k) => escapeString(k) + ":" + canonicalEncode(value[k])).join(",") + "}";
}

/** The canonical bytes of one item, provenance stripped. */
function canonicalItem(kind, value) {
  return canonicalEncode(stripProvenance(kind, value));
}

/**
 * The bundle material: one `kind:slug:version:sha256` line per item, sorted,
 * joined with a newline and NO trailing newline. This is the exact byte string
 * the server signs a digest of and the app rebuilds to verify.
 *
 * ACTIVE ROWS ONLY, AND THAT IS NOT AN OPTIMISATION. The server's public
 * surface serves `WHERE is_active` and nothing else, so an inactive row cannot
 * reach a phone and must not be inside the signed bundle. It must not be inside
 * this repo either. A parked row is one the owner withdrew, and publishing it
 * here would put withdrawn text in front of the public on the owner's behalf.
 * The filter is applied at the query and again in the writer, because
 * `--from` takes a payload that has not been through the query.
 *
 * The item object must be the same served object the server serialises. For the
 * published record those objects are reconstructed from `readFromDatabase`,
 * which selects the same columns `/v1/prompts`, `/v1/skills`, `/v1/tools`,
 * `/v1/agents` and `/v1/canvas-packs/{slug}` select, so the digest here and the
 * digest the server signs are the same number for the same database.
 */
function bundleMaterial(rowsByKind) {
  const lines = [];
  for (const kind of KINDS) {
    for (const row of rowsByKind[kind] ?? []) {
      if (row.is_active === false) continue;
      const slug = row.slug ?? "";
      // Agents have no version column; the server and the app both use 1.
      const version = row.version ?? 1;
      lines.push(`${kind}:${slug}:${version}:${sha256(canonicalItem(kind, row))}`);
    }
  }
  lines.sort();
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Frontmatter and writers (unchanged in shape from the original publisher)
// ---------------------------------------------------------------------------

/**
 * YAML frontmatter, written by hand rather than pulled from a library.
 *
 * WHY NOT A LIBRARY. The values here are strings, integers, booleans and string
 * arrays, and the arrays are the only thing worth care. A dependency that
 * serialises YAML would also be the thing that quietly reorders keys and
 * changes bytes between publishes, which would make the manifest hash useless
 * as a diff signal. This emits the same key order every time.
 */
function frontmatter(pairs) {
  const lines = ["---"];
  for (const [key, value] of pairs) {
    if (value === null || value === undefined) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push(`${key}: []`);
      } else {
        lines.push(`${key}:`);
        for (const item of value) lines.push(`  - ${JSON.stringify(String(item))}`);
      }
      continue;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      lines.push(`${key}: ${value}`);
      continue;
    }
    lines.push(`${key}: ${JSON.stringify(String(value))}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

/** Run a psql query against the live stack and return rows as JSON. */
function query(sql) {
  const out = execFileSync(
    "docker",
    ["exec", "guru-postgres", "psql", "-U", "guru_app", "-d", "guru_server", "-t", "-A", "-c", sql],
    { encoding: "utf8", maxBuffer: 512 * 1024 * 1024 },
  );
  return JSON.parse(out.trim() || "[]");
}

/**
 * Read every published item from the database.
 *
 * Columns are named explicitly rather than selected with `*`, because a column
 * added to a table later would otherwise start appearing in published
 * frontmatter without anybody deciding it should.
 *
 * THE COLUMNS ARE THE SERVER'S OWN. `/v1/prompts`, `/v1/skills`, `/v1/tools`,
 * `/v1/agents` and `/v1/canvas-packs/{slug}` each serialise a `PromptSection`,
 * `Skill`, `Tool`, `Agent` and `CanvasPack` from `guru-db/src/models.rs`, so the
 * list below is that struct, field for field, plus the pack's elements. A field
 * added to a model and not added here would make the published digest disagree
 * with the served one, which is the failure this whole file exists to prevent.
 */
function readFromDatabase() {
  const prompts = query(`
    select json_agg(row_to_json(t)) from (
      select id, slug, category, name, content, delivery_mode, trigger_keywords,
             match_threshold, global_threshold, is_active, version, created_at, updated_at
      from prompt_sections where is_active order by category, slug
    ) t;`);

  const skills = query(`
    select json_agg(row_to_json(t)) from (
      select id, slug, name, description, when_to_use, allowed_tools, content, version,
             source, author_label, price_cents, keywords, is_active, created_at, updated_at
      from skills where is_active order by slug
    ) t;`);

  const tools = query(`
    select json_agg(row_to_json(t)) from (
      select id, slug, name, description, category, parameters, permissions,
             execution_location, code, checksum, version, source, author_label,
             price_cents, is_active, created_at, updated_at
      from tools where is_active order by category, slug
    ) t;`);

  const agents = query(`
    select json_agg(row_to_json(t)) from (
      select id, slug, name, role_description, system_prompt, tool_permissions, wave,
             is_builtin, source, author_label, price_cents, category, is_active,
             created_at, updated_at
      from agents where is_active order by category, slug
    ) t;`);

  const packs = query(`
    select json_agg(row_to_json(t)) from (
      select p.id, p.slug, p.name, p.description, p.box_height_dp, p.max_elements,
             p.background_colour, p.entry_duration_ms, p.rotation_mode,
             p.transition_type, p.crossfade_duration_ms, p.slide_duration_ms,
             p.slide_direction, p.version, p.source, p.author_label, p.price_cents,
             p.is_active, p.created_at, p.updated_at,
             (select json_agg(row_to_json(e) order by e.entry_index, e.sort_order)
              from canvas_elements e where e.pack_id = p.id and e.is_active) as elements
      from canvas_packs p where p.is_active order by p.slug
    ) t;`);

  return {
    prompts: prompts ?? [],
    skills: skills ?? [],
    tools: tools ?? [],
    agents: agents ?? [],
    packs: packs ?? [],
  };
}

/** The body of each kind, and how its frontmatter is assembled. */
const WRITERS = {
  prompts: {
    dir: "prompts",
    ext: ".md",
    body: (row) => row.content ?? "",
    meta: (row) => [
      ["kind", "prompt"],
      ["slug", row.slug ?? ""],
      ["name", row.name],
      ["category", row.category],
      ["delivery", row.delivery_mode],
      ["keywords", row.trigger_keywords ?? []],
      ["match_threshold", row.match_threshold],
      ["global_threshold", row.global_threshold],
      ["version", row.version],
      ["active", row.is_active],
    ],
  },
  skills: {
    dir: "skills",
    ext: ".md",
    body: (row) => row.content ?? "",
    meta: (row) => [
      ["kind", "skill"],
      ["slug", row.slug],
      ["name", row.name],
      ["description", row.description],
      ["when_to_use", row.when_to_use],
      ["allowed_tools", row.allowed_tools ?? []],
      ["keywords", row.keywords ?? []],
      ["version", row.version],
      ["source", row.source],
      ["author", row.author_label],
      ["price_cents", row.price_cents],
      ["active", row.is_active],
    ],
  },
  tools: {
    dir: "tools",
    ext: ".json",
    // A tool is a definition, not prose. It is published as JSON so a reader and
    // a parser see the same bytes, and every key is in the row's own order.
    body: (row) =>
      JSON.stringify(
        {
          slug: row.slug,
          name: row.name,
          description: row.description,
          category: row.category,
          parameters: row.parameters ?? [],
          permissions: row.permissions ?? [],
          execution_location: row.execution_location,
          code: row.code ?? "",
          checksum: row.checksum,
        },
        null,
        2,
      ) + "\n",
    meta: null,
    noFrontmatter: true,
  },
  agents: {
    dir: "agents",
    ext: ".md",
    body: (row) => row.system_prompt ?? "",
    meta: (row) => [
      ["kind", "agent"],
      ["slug", row.slug],
      ["name", row.name],
      ["role", row.role_description],
      ["category", row.category],
      ["wave", row.wave],
      ["tool_permissions", row.tool_permissions ?? []],
      ["builtin", row.is_builtin],
      ["source", row.source],
      ["author", row.author_label],
      ["price_cents", row.price_cents],
      ["active", row.is_active],
    ],
  },
  packs: {
    dir: "packs",
    ext: ".json",
    // A pack is a sequence of scenes with geometry, so it is published whole.
    body: (row) => JSON.stringify(row, null, 2) + "\n",
    meta: null,
    noFrontmatter: true,
  },
};

/** Write one kind's files, returning manifest entries and the canonical values. */
function writeKind(kind, rows) {
  const spec = WRITERS[kind];
  const dir = join(ROOT, spec.dir);

  // Clear the directory so a withdrawn item cannot linger as a stale file. The
  // database is the truth, and a file here that the database no longer has is
  // exactly the drift this repo exists to prevent.
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });

  const entries = [];
  const canonical = [];
  for (const row of rows) {
    // THE WITHDRAWAL FILTER, SECOND OF TWO. The queries already select
    // `where is_active`, and this repeats it because `--from` feeds a payload
    // that never went through them. A parked row is one the owner deleted, and
    // publishing it would republish their deletion as public text.
    if (row.is_active === false) continue;
    const name = fileNameFor(row.slug, row.slug ?? "");
    const file = join(dir, name + spec.ext);
    const body = spec.body(row);
    const text = spec.noFrontmatter ? body : frontmatter(spec.meta(row)) + body + "\n";
    writeFileSync(file, text, "utf8");
    entries.push({
      slug: row.slug ?? "",
      name: row.name ?? "",
      file: `${spec.dir}/${name}${spec.ext}`,
      version: row.version ?? null,
      // The file's own hash, which is what a reader diffs. NOT the feed hash:
      // the feed covers the served JSON object, not this repo's presentation of
      // it, and conflating the two would make the app verify the wrong bytes.
      sha256: sha256(text),
      bytes: Buffer.byteLength(text, "utf8"),
    });
    canonical.push(row);
  }

  // Sorted by slug so the manifest is stable across publishes.
  entries.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
  canonical.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
  return { entries, canonical };
}

/**
 * The fixture the Rust and Kotlin tests pin. Every encoder must produce these
 * exact digest and signature bytes; `--selftest` prints them so the constants in
 * those tests are copied from an implementation rather than typed from memory.
 */
function selftest() {
  const fixture = {
    prompts: [
      {
        slug: "guru-voice",
        name: "Voice",
        category: "personality",
        content: "Say the true thing.",
        version: 3,
      },
    ],
    skills: [
      {
        slug: "test-skill",
        name: "Test Skill",
        description: "d",
        when_to_use: "w",
        allowed_tools: ["getScreenState", "deviceInfo"],
        content: "body",
        version: 2,
      },
    ],
    packs: [
      {
        slug: "demo",
        name: "Demo",
        description: "d",
        version: 1,
        elements: [
          {
            element_type: "lottie",
            name: "n",
            sort_order: 1,
            entry_index: 0,
            x_dp: 0.1,
            checksum: "abc",
          },
        ],
      },
    ],
    tools: [],
    agents: [],
  };

  const material = bundleMaterial(fixture);
  const digest = sha256(material);
  process.stdout.write("fixture material:\n" + material + "\n\n");
  process.stdout.write("fixture sha256: " + digest + "\n");
  return digest;
}

function main() {
  const args = process.argv.slice(2);
  const fromIndex = args.indexOf("--from");
  const check = args.includes("--check");

  if (args.includes("--selftest")) {
    selftest();
    return;
  }

  // Print the digest for a payload this repo has already dumped, without
  // touching the live stack or rewriting a file. This exists so the Rust side's
  // `live_parity` test can be checked against an independent encoder over the
  // same bytes, which is the only way to prove the two agree on real data.
  const digestIndex = args.indexOf("--digest-from");
  if (digestIndex >= 0) {
    const payload = JSON.parse(readFileSync(args[digestIndex + 1], "utf8"));
    const material = bundleMaterial(payload);
    process.stdout.write("lines " + (material === "" ? 0 : material.split("\n").length) + "\n");
    process.stdout.write("sha256 " + sha256(material) + "\n");
    return;
  }

  const data = fromIndex >= 0
    ? JSON.parse(readFileSync(args[fromIndex + 1], "utf8"))
    : readFromDatabase();

  const manifest = { bundle_version: null, counts: {}, kinds: {} };
  const canonical = {};
  for (const kind of KINDS) {
    const rows = data[kind] ?? [];
    const written = writeKind(kind, rows);
    manifest.kinds[kind] = written.entries;
    canonical[kind] = written.canonical;
    // Counted from what was written, not from what was read, so a payload that
    // carried parked rows cannot make the manifest claim a size the repo does
    // not have.
    manifest.counts[kind] = written.entries.length;
  }

  // The bundle hash covers every item's canonical served bytes plus its
  // identity, so it changes if any published byte changes anywhere. This is the
  // value the server signs and the app verifies against a pinned public key.
  const material = bundleMaterial(canonical);
  manifest.bundle_sha256 = sha256(material);
  // The active subset, with the canonical hash of each served object. This is
  // the published counterpart of the `entries` array the server puts on
  // `/v1/manifest`, in the same shape, so a reader can diff the two and see
  // whether the server signed what the database says it should have.
  manifest.items = KINDS.flatMap((kind) =>
    canonical[kind]
      .filter((row) => row.is_active !== false)
      .map((row) => ({
        kind,
        slug: row.slug ?? "",
        version: row.version ?? 1,
        sha256: sha256(canonicalItem(kind, row)),
      })),
  ).sort((a, b) =>
    a.kind !== b.kind ? (a.kind < b.kind ? -1 : 1) : a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0,
  );
  manifest.bundle_version = `b${manifest.bundle_sha256.slice(0, 12)}`;
  manifest.algo = "ed25519";
  manifest.key_id = "unus-lumen-feed-1";
  // The published record carries no signature: it is written by a script with
  // the database's credentials, not by the server holding the signing key. Its
  // job is to be the independent copy a reader compares against what the server
  // signs, so copying a signature here would make the check circular.
  manifest.signed_material_sha256 = manifest.bundle_sha256;
  manifest.generated_at = new Date().toISOString();
  manifest.counts.total = Object.values(manifest.counts).reduce((a, b) => a + b, 0);

  const manifestPath = join(ROOT, "manifest.json");
  if (check) {
    if (!existsSync(manifestPath)) {
      process.stderr.write("manifest.json is missing\n");
      process.exit(1);
    }
    const current = JSON.parse(readFileSync(manifestPath, "utf8"));
    if (current.bundle_sha256 !== manifest.bundle_sha256) {
      process.stderr.write(
        `content is out of date\n  repo:   ${current.bundle_version}\n  live:   ${manifest.bundle_version}\n` +
          `run: node scripts/publish.mjs\n`,
      );
      process.exit(1);
    }
    process.stdout.write(`content is current at ${current.bundle_version}\n`);
    return;
  }

  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");

  const summary = KINDS.map((k) => `${manifest.counts[k]} ${k}`).join(", ");
  process.stdout.write(`published ${manifest.counts.total} items (${summary})\n`);
  process.stdout.write(`bundle ${manifest.bundle_version}\n`);
  process.stdout.write(`sha256 ${manifest.bundle_sha256}\n`);
}

main();
