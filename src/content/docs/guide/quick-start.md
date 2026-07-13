---
title: "Quick start"
description: "Get RedTeam running in a few minutes."
sidebar:
  order: 5
---

Get RedTeam running in a few minutes.

## 1. Install

```bash
npx --yes github:CurateLabs/RedTeam install
```

This detects harness folders (`.cursor`, `.claude`, `.agents`) and installs the skill. Customize with:

```bash
npx --yes github:CurateLabs/RedTeam install --providers=cursor,claude,agents --scope=project
```

## 2. Reload

Restart or reload your AI harness so it picks up the new skill.

## 3. Run a command

In chat:

```
/redteam challenge our plan to migrate to microservices by Q3
```

Or use a playbook for a common decision type:

```
/redteam sequence product launch for payments v2
```

## 4. (Optional) Persist context

For an ongoing decision, capture structured context once:

```
/redteam init
```

This creates a `.redteam/` directory with `CONTEXT.md` and review folders. See [`.redteam/` directory](/RedTeam/guide/redteam-directory/).

## Pin shortcuts

Create a pinned alias for a command you use often:

```
/redteam pin premortem
```

Then invoke `/premortem` directly.

## Next steps

- [All commands](/RedTeam/guide/commands/)
- [Installation options](/RedTeam/guide/installation/)
- [Handbook overview](/RedTeam/handbook/)
