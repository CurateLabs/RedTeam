---
title: "Installation"
description: "Flags:"
sidebar:
  order: 4
---

## Option 1: CLI (recommended)

```bash
npx --yes github:CurateLabs/RedTeam install
```

Flags:

| Flag | Values | Default |
|------|--------|---------|
| `--providers` | `cursor`, `claude`, `agents`, `github`, `gemini` (comma-separated) | auto-detect |
| `--scope` | `project`, `global` | `project` |

## Option 2: Claude Code plugin

```
/plugin marketplace add CurateLabs/RedTeam
```

Then install from the plugin list.

## Option 3: ChatGPT Custom GPT

1. Create a Custom GPT
2. Paste `chatgpt/INSTRUCTIONS.md` from the repo into Instructions
3. Optionally upload `skill/reference/ttp-catalog.md` as knowledge

See `chatgpt/README.md` in the repository.

## Option 4: Copy from repo

```bash
# Cursor
cp -r .cursor/skills/redteam your-project/.cursor/skills/

# Claude Code
cp -r .claude/skills/redteam your-project/.claude/skills/

# Codex / Agents
cp -r .agents/skills/redteam your-project/.agents/skills/
```

Run `npm run build` in the repo first if installing from source.

## Option 5: Git submodule

```bash
git submodule add https://github.com/CurateLabs/RedTeam .redteam-plugin
node .redteam-plugin/cli/bin/cli.js install --providers=claude,cursor
```

## Requirements

- Node.js 22.12+
- An AI harness that supports skills or slash commands (Cursor, Claude Code, Codex, etc.)

## Verify

After install, try:

```
/redteam tools
```

You should get a browseable technique catalog with recommendations.
