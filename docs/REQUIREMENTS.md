# Requirements

These requirements cover the RedTeam skills package, CLI installer, provider build copies, project `.redteam/` scaffold, and developer documentation sync. They translate validated experience artifacts in [`experience/`](experience/) into a delivery contract engineering can test and publish.

## Functional requirements

| ID | Requirement | Derived from | Acceptance behavior |
|---|---|---|---|
| FR-1 | The system shall route `/redteam <command>` through `skill/SKILL.md` to the matching `skill/reference/<command>.md` flow. | `experience/chat-only-review.md` | Given an installed skill, when the user invokes a valid command, then the model follows that command's reference flow. |
| FR-2 | The system shall produce structured adversarial review output for challenge-style commands without requiring CONTEXT.md. | `experience/chat-only-review.md`, PRODUCT goals | Given no CONTEXT.md, when the user runs `/redteam challenge <target>`, then output includes assumptions, risks, a verdict, and follow-ups. |
| FR-3 | The system shall write decision context via `/redteam init` to CONTEXT.md and scaffold `.redteam/`. | `experience/project-anchored-review.md` | Given a project directory, when the user runs `/redteam init`, then CONTEXT.md and `.redteam/` scaffold exist. |
| FR-4 | The system shall load decision context via `scripts/context.mjs` using resolution order: root CONTEXT.md → `.redteam/` → `docs/` → `$REDTEAM_CONTEXT_DIR`. | `experience/project-anchored-review.md` | Given CONTEXT.md in a supported location, when context.mjs runs, then context content is available to the command flow. |
| FR-5 | The system shall persist project-anchored review output to `.redteam/reviews/<slug>-<command>.md`. | `experience/project-anchored-review.md` | Given project-anchored mode, when a review command completes, then a markdown artifact exists under `.redteam/reviews/`. |
| FR-6 | The CLI installer shall copy the skill into requested provider directories and create `.redteam/config.json` and `.redteam/CONTEXT.template.md` when missing. | `experience/install-and-run.md` | Given a clean directory, when install runs, then expected skill paths and `.redteam/` scaffold files exist. |
| FR-7 | The build script shall copy `skill/` to all configured provider destinations without manual editing. | `experience/install-and-run.md` | Given source skill, when `npm run build` runs, then provider skill directories match source content. |
| FR-8 | The developer docs site shall stage every `docs/**/*.md` file and resolve internal links for GitHub Pages under `/RedTeam/developers/`. | `engineering/TESTING.md`, README published site | Given `docs/` content, when `npm run docs:site` runs, then the build succeeds and local links resolve under the base path. |
| FR-9 | The system shall implement 29 handbook-aligned `/redteam` commands documented in the user guide. | PRODUCT goals | Given the command list in README, when each command is invoked, then a corresponding reference flow exists in `skill/reference/`. |

## Non-functional requirements

| ID | Quality attribute | Target / constraint | Why it matters |
|---|---|---|---|
| NFR-1 | Setup friction | Install to first command in under 5 minutes | Primary adoption metric in PRODUCT.md |
| NFR-2 | Runtime platform | Node `>=22.12.0` for CLI and skill scripts | Documented engine constraint |
| NFR-3 | Security | Skill scripts make no network calls; no exploit or penetration-testing content | Civilian product boundary |
| NFR-4 | Portability | Skill works in Claude, Cursor, Codex, ChatGPT, Copilot harnesses | Multi-harness distribution goal |
| NFR-5 | Attribution | Handbook techniques summarized, not reproduced verbatim | Legal and lineage policy in `strategy/source-lineage.md` |
| NFR-6 | Offline capability | Chat-only commands work without network after skill install | Pure-chat experience |

## Behavior trace

| Requirement | Given | When | Then |
|---|---|---|---|
| FR-2 | No CONTEXT.md | `/redteam challenge <plan>` | Structured review in chat |
| FR-5 | CONTEXT.md exists | `/redteam premortem launch` | `.redteam/reviews/launch-premortem.md` saved |
| FR-6 | Clean temp project | `redteam install --providers=agents` | Skill + `.redteam/` scaffold on disk |
| FR-8 | `docs/` tree complete | `npm run docs:site` | Build passes; `/RedTeam/`-prefixed links valid |

## Constraints & assumptions

- **Constraint:** Skills-only — no hosted API, database, or model calls from repository code
- **Constraint:** Apache-2.0 license; NOTICE and lineage docs must remain accurate
- **Assumption:** Users bring a capable LLM harness that follows skill instructions
- **Assumption:** Quality of review output depends on model adherence to reference flows (no deterministic validator)

## Dependencies

- **Node.js 22.12+** — CLI, build, context loading, docs site toolchain
- **GitHub** — `npx github:CurateLabs/RedTeam` distribution and Pages hosting
- **Astro / Starlight** — published handbook, guide, and developer docs
- **AI harness platforms** — Cursor, Claude, Codex, ChatGPT, Copilot for skill execution

## Open questions

- Which commands should gain automated output-shape evals beyond install/docs smoke tests? — maintainers
