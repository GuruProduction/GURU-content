# guru-content — working notes for a fresh session

This repo is the published record of everything GURU's server serves to a phone: the prompts that assemble its system prompt, the skills, the tool definitions, the agent templates and the canvas packs. It exists so a sceptic can read the instruction set that ships to their device and diff it month to month.

**The database is the source of truth. This repo is a mirror, and the mirror is written by a script.**

## The one rule that matters

**Never write content into the GURU app source, and never hand-edit a file here.**

New prompts, skills, tools, agents and masks are written into the live database through the superadmin panel, then published here with `node scripts/publish.mjs`. Editing a file in this repo is erased by the next publish, and writing a prompt into Kotlin means the phone and the panel disagree with nobody able to say which is real. Steven has stated this twice: prompts go in the panel, never in the source.

The one historical exception is `GURUbeta-FULL/assets/skills/` in the app repo, which holds 13 skill folders that predate the feed. They are bundled so a fresh install works offline. Do not add to that folder; anything new belongs in the feed and therefore in this repo.

## Layout

`prompts/` holds one markdown file per prompt section, named by slug, with the row's identity in frontmatter and the body verbatim. `skills/` is the same shape for skills. `agents/` holds one markdown file per agent with its system prompt as the body. `tools/` and `packs/` are JSON, because a tool is a definition and a pack is a geometry tree rather than prose. `manifest.json` carries every item's slug, version, file path and sha256, plus a `bundle_sha256` over all of them.

The bundle hash is the thing the app can pin and a signature can cover. `bundle_version` is derived from it, so it changes whenever any published byte changes.

## Commands

```bash
node scripts/publish.mjs            # read the live stack and rewrite this repo
node scripts/publish.mjs --check    # exit 1 if this repo is behind the live stack
node scripts/publish.mjs --from dump.json   # publish from a dumped payload instead
```

The publisher talks to the live stack, so it needs `guru-postgres` running. The credentials are the container's own: user `guru_app`, database `guru_server`. It reads only; nothing here writes back.

## Conventions

Slugs are the identity and are carried through unchanged, including the empty slug on one `agi_law` prompt, which becomes a name derived from its uuid rather than being dropped. Frontmatter key order is fixed by the writer so that a publish produces byte-identical output when nothing changed, which is what makes the manifest hash useful as a diff signal.

Columns are selected by name in every query rather than with `select *`, so a column added to a table later cannot start appearing in published metadata without a decision.

## Gotchas

The directory for each kind is wiped and rewritten on every publish, on purpose. That is how a withdrawn item stops being published rather than lingering as a stale file, and it is why hand edits do not survive.

A tool row carries its parameters and permission list as JSON and almost no code; the 390 in the live table hold 80 KB of parameter schemas between them. Do not assume a tool here is executable source.

Prompts are assembled server-side and fetched by the phone, so a change to a prompt in this repo does nothing until the database changes and the device syncs. This repo is the record, not the delivery path; delivery is `/v1/manifest` and `/v1/prompts` on api.unuslumen.com.

## Do not touch

Do not change the shape of `manifest.json` without updating whatever pins it in the app, because the bundle hash is a trust root once a signature covers it. Do not add a second writable copy of any content type. Do not commit a `dump.json` containing unpublished or private rows.
