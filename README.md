# GURU content

Everything GURU's server sends to a phone, published so you can read it and diff it.

GURU is an Android app that gives a language model a Linux userland, a large tool surface and real control of a device. Its behaviour comes from text: a system prompt assembled from sections, skills that teach it procedures, tool definitions that describe what it can call, agent templates, and the canvas packs it plays while thinking. That text is served from `api.unuslumen.com` rather than compiled into the APK, so a new capability reaches an install the day it is built instead of the day the next release ships.

This repo is that text, in the open.

## What is in here

| Directory | Contents | Count |
| --- | --- | --- |
| `prompts/` | The system prompt sections, one file each, with category, delivery mode and trigger keywords in frontmatter | 85 |
| `skills/` | Skills: a procedure, its trigger phrases, and the tools it needs | 1 |
| `tools/` | Tool definitions: slug, description, parameter schema, permissions | 390 |
| `agents/` | Agent templates and their system prompts | 20 |
| `packs/` | Canvas packs: the animated scenes shown while GURU thinks | 1 |

`manifest.json` lists every item with its slug, version, file and sha256, and carries a `bundle_sha256` over the whole set. That hash is what an install can pin, so you can verify that the content your phone received is the content published here.

## Why publish this

Because "open source" and "the interesting part is on a server" do not sit comfortably together, and the honest answer is to publish the part that reaches your device while keeping the serving infrastructure closed.

Two properties make that a real answer rather than a gesture:

The content is not secret anyway. Once a phone syncs a prompt or a skill, it sits readable in that phone's storage. Publishing it changes nothing about what a determined reader could already see, and everything about what an ordinary reader can check.

The served text is the part that defines behaviour. A review that reads the app source but not the prompts is reading the body and skipping the mind. If you want to know what GURU is told to do, this is where that is written down.

## How it is published

The live database is the source of truth and this repo is a mirror of it, written by a script. `node scripts/publish.mjs` reads the content tables and rewrites every directory, then writes the manifest. Hand edits here are overwritten on the next publish, which is deliberate: two writable copies of the same prompt is how a repo and a phone end up disagreeing with nobody able to say which is real.

Only active items are published. Switching an item off in the panel withdraws it here on the next publish, and its file is removed rather than left behind.

Changes land as one commit per publish, so the diff is the change. If Flipper Zero support arrives on a Tuesday, the prompt and tool entries that teach it arrive in the same commit.

## Reading a prompt

Prompts are the clearest place to start. Each file opens with frontmatter naming its category and its delivery mode. `always` means it is in every assembled prompt. `keyword_injection` means it is only included when the owner's words match one of its trigger keywords, which is how a capability announces itself without costing tokens on every turn.

The body is the instruction exactly as the model receives it, including the `${human}` and `${guru}` tokens, which are substituted with the owner's chosen names at assembly time on the device.

## Licence

AGPL-3.0-or-later, the same as GURU itself. The full text is in the app repository.

GURU is built by Steven Newman, founder of Unus Lumen in Bristol.
