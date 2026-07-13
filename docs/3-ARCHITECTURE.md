# Architecture

RedTeam is a **skills-only** package: markdown instructions + small Node scripts for context loading. No server, no API, no model calls from code.

## Context diagram

```
User → AI harness (Claude / Cursor / ChatGPT / Codex)
         ↓ invokes
       /redteam <command>
         ↓ loads
       skill/SKILL.md + reference/<command>.md
         ↓ optional
       scripts/context.mjs → CONTEXT.md
         ↓ optional
       .redteam/reviews/*.md (persisted output)
```

## Components

| Component | Responsibility | Depends on |
|---|---|---|
| `skill/SKILL.md` | Command router and principles | reference/*.md |
| `skill/reference/` | Per-command flows and TTP catalog | Handbook v9 concepts |
| `skill/scripts/context.mjs` | Load CONTEXT.md from project | Node 18+ |
| `skill/scripts/pin.mjs` | Pin command shortcuts | Harness dirs |
| `.redteam/` | Decision context and review artifacts | User project |
| `cli/bin/cli.js` | GitHub-backed `npx` installer | scripts/build.mjs |
| `chatgpt/INSTRUCTIONS.md` | Custom GPT system prompt | — |
| `.claude-plugin/` | Claude Code marketplace manifest | plugin/ |

## Key flows

### Chat-only review

1. User pastes plan and runs `/redteam challenge`
2. Skill loads principles + challenge.md reference
3. Model produces structured adversarial review in chat

### Project-anchored review

1. User runs `/redteam init` → writes CONTEXT.md
2. Later: `/redteam premortem launch` → context.mjs loads CONTEXT.md
3. Output saved to `.redteam/reviews/launch-premortem.md`

### Install

1. `npx --yes github:CurateLabs/RedTeam install` → build.mjs copies skill to harness dirs
2. Creates `.redteam/` scaffold if missing
3. User reloads harness

## Cross-cutting concerns

- **Configuration:** `.redteam/config.json` (shared), `config.local.json` (gitignored)
- **Context resolution:** root CONTEXT.md → `.redteam/` → `docs/` → `$REDTEAM_CONTEXT_DIR`
- **Security:** No network calls in skill scripts; no exploit content

## Risks & trade-offs

- **LLM-only execution** — quality depends on model following reference flows; no deterministic validator
- **Handbook attribution** — techniques summarized, not reproduced verbatim
