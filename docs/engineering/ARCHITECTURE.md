# Architecture

RedTeam is a **skills-only** package: markdown instructions + small Node scripts for context loading and command pinning. No server, no API, no model calls from code.

## Context diagram

```
User → AI harness (Claude / Cursor / ChatGPT / Codex / Copilot)
         ↓ invokes
       /redteam <command>
         ↓ loads
       skill/SKILL.md + reference/<command>.md
         ↓ optional
       scripts/context.mjs → CONTEXT.md
         ↓ optional
       .redteam/reviews/*.md + .redteam/sessions/*.md (persisted output)
```

## Components

| Component | Responsibility | Depends on |
|---|---|---|
| `skill/SKILL.md` | Command router and principles | reference/*.md |
| `skill/reference/` | Per-command flows and TTP catalog | Handbook v10 concepts |
| `skill/scripts/context.mjs` | Load CONTEXT.md from project | Node 22.12+ |
| `skill/scripts/pin.mjs` | Pin command shortcuts | Harness dirs |
| `.redteam/` | Decision context and review artifacts | User project |
| `cli/bin/cli.js` | GitHub-backed `npx` installer | scripts/build.mjs |
| `chatgpt/INSTRUCTIONS.md` | Custom GPT system prompt | — |
| `.claude-plugin/` | Claude Code marketplace manifest | plugin/ |
| `scripts/build.mjs` | Copy skill to provider directories and `dist/` (incl. ChatGPT knowledge bundle) | skill/ |
| `scripts/prepare-docs-site.mjs` | Stage `docs/` for Starlight | docs/ |
| `scripts/check-docs-site.mjs` | Validate built docs site links | `npm run docs:site` |
| `scripts/test-cli-install.mjs` | Smoke-test CLI install in a temp project | cli/bin/cli.js |
| `src/content/docs/` | Starlight site content (guide, handbook, synced developer docs) | Astro / Starlight |

## Data model

RedTeam has no database. State lives in the user's project as markdown and JSON files:

| Entity | Location | Role |
|---|---|---|
| Decision context | `CONTEXT.md` or `.redteam/CONTEXT.md` | Background the model loads for anchored reviews |
| Project config | `.redteam/config.json` | Shared settings; `config.local.json` is gitignored |
| Review artifacts | `.redteam/reviews/<slug>-<command>.md` | Persisted command output for retrospectives |
| Session notes | `.redteam/sessions/<date>-<slug>.md` | Facilitated session records (groupthink, ideate, converge) |
| Command flows | `skill/reference/<command>.md` | Read-only technique instructions |
| TTP catalog | `skill/reference/ttp-catalog.md` | Browseable technique index |

Context resolution order: root `CONTEXT.md` → `.redteam/` → `.agents/context/` → `docs/` → `$REDTEAM_CONTEXT_DIR`.

## Domain language and boundaries

| Domain concept | Meaning in this project | Boundary / owner |
|---|---|---|
| Command | A `/redteam <name>` entry point with a reference flow | `skill/SKILL.md` + `skill/reference/` |
| Technique | A handbook structured thinking method (premortem, ACH, …) | Handbook + TTP catalog |
| Review artifact | Persisted markdown output of a command | `.redteam/reviews/` |
| Decision context | Background constraints for anchored reviews | CONTEXT.md / `.redteam/` |
| Provider bundle | Harness-specific copy of the skill | `scripts/build.mjs` outputs |
| Developer docs | In-repo BDD lifecycle documentation | `docs/` |

## Key flows

### Chat-only review

1. User pastes plan and runs `/redteam challenge`
2. Skill loads principles + `challenge.md` reference
3. Model produces structured adversarial review in chat

### Project-anchored review

1. User runs `/redteam init` → writes CONTEXT.md
2. Later: `/redteam premortem launch` → `context.mjs` loads CONTEXT.md
3. Output saved to `.redteam/reviews/launch-premortem.md`

### Install

1. `npx --yes github:CurateLabs/RedTeam install` → `cli/bin/cli.js` runs `build.mjs`, detects harness dirs (`.cursor`, `.claude`, `.agents`, `.github`, `.gemini`) or honors `--providers=` / `--scope=global`, and copies the skill in
2. Creates `.redteam/` scaffold (`reviews/`, `sessions/`, `config.json`, `CONTEXT.template.md`) if missing
3. User reloads harness

## Cross-cutting concerns

- **Error handling:** Skill scripts fail fast with clear messages; missing CONTEXT.md does not block chat-only reviews
- **Configuration:** `.redteam/config.json` (shared), `config.local.json` (gitignored)
- **Security:** No network calls in skill scripts; no exploit content
- **Observability:** No runtime telemetry; review artifacts in `.redteam/reviews/` and GitHub issues serve as the feedback trail. See [`OBSERVABILITY.md`](OBSERVABILITY.md).

## Decisions

Significant architectural choices are recorded as ADRs in [`adrs/`](adrs/). Create the next one with `docslime add adr <short-slug>`.

| Decision | Status | Notes |
|---|---|---|
| Skills-only execution (no server, no model calls from code) | Accepted, ADR pending | See overview above |
| LLM-only quality gate (no deterministic validator) | Accepted, ADR pending | Quality depends on model following reference flows |
| Handbook techniques summarized, not reproduced verbatim | Accepted, ADR pending | See [`strategy/source-lineage.md`](../strategy/source-lineage.md) |

## Risks & trade-offs

- **LLM-only execution** — quality depends on model following reference flows; no deterministic validator
- **Handbook attribution** — techniques summarized, not reproduced verbatim
- **Multi-provider drift** — `npm run build` must keep provider copies in sync with `skill/`
