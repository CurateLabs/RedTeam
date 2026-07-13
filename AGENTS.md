# Agent instructions

This repository is **RedTeam** — applied critical thinking skills for AI agents.

## Architecture

- `skill/` — source skill (SKILL.md + reference/ + scripts/)
- `scripts/build.mjs` — copies skill to provider directories
- `.redteam/` — project decision context and review artifacts (analogous to `.impeccable/`)
- `plugin/` — Claude Code plugin bundle
- `chatgpt/` — Custom GPT instructions
- `cli/` — GitHub-backed `npx` installer

## Build

```bash
npm run build        # copy to .cursor, .claude, .agents, plugin, dist
npm run build:dist   # dist/ only
```

## Key files

| File | Purpose |
|------|---------|
| `skill/SKILL.md` | Main skill router |
| `skill/reference/*.md` | Per-command flows |
| `skill/reference/ttp-catalog.md` | Source handbook technique catalog (civilian labels) |
| `skill/scripts/context.mjs` | Loads CONTEXT.md |
| `.redteam/config.json` | Project config |

## Conventions

- Decision context lives in `CONTEXT.md` (root or `.redteam/`)
- Reviews persist to `.redteam/reviews/<slug>-<command>.md`
- Commands are invoked as `/redteam <command> [target]` (29 commands in v0.2)
- Red teaming = applied critical thinking, NOT cybersecurity

## Do not

- Add penetration testing or exploit content
- Copy the full UFMCS v9 handbook verbatim into the repo
- Block scoped reviews when CONTEXT.md is missing
