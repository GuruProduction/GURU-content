---
kind: "skill"
slug: "test-skill"
name: "Test Skill"
description: "A simple skill that proves publishing, tool grants and body delivery all work end to end."
when_to_use: "When the person says 'test skill' or asks to run the test skill. Never for a real job."
allowed_tools:
  - "getScreenState"
  - "deviceInfo"
keywords: []
version: 2
source: "builtin"
author: "Unus Lumen"
price_cents: 0
active: true
---
# Test Skill

A deliberately simple skill for proving that publishing from the superadmin
reaches the app, that the allowed tools arrive intact, and that GURU can read
the body back.

## When to use

The person says "test skill", "run the test skill", or otherwise asks for the
skill named test-skill. Never use it for a real job.

## What to do

1. Call getScreenState to prove a tool call actually works from inside a skill.
2. Call deviceInfo and report the model and Android version in one sentence.
3. Say plainly that this is the test skill and that it worked.

## What success looks like

A short report naming the device and confirming that the skill ran, with no
invented detail and no claim of a step that did not happen.

