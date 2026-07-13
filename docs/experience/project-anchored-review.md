# Project-anchored review

## Observed need and evidence

Repeat decisions on the same initiative benefit from persistent context and review artifacts. Users running premortems, launch reviews, and RFC checks need CONTEXT.md and saved outputs for retrospectives.

## Desired user and business outcome

A user anchors decision context once, then runs commands that load that context and persist structured reviews under `.redteam/reviews/`.

## Users and context

Product and engineering leads reviewing PRDs, RFCs, launches, and multi-week initiatives.

## Current journey

1. User runs `/redteam init` → writes CONTEXT.md (and `.redteam/` scaffold)
2. User runs `/redteam <command> <target>` on a later session
3. `context.mjs` resolves and loads CONTEXT.md
4. Output is saved to `.redteam/reviews/<slug>-<command>.md`

## Opportunity and hypothesis

If review artifacts persist with stable filenames, teams will reuse them in retrospectives and pre-commitment gates (`review`, `launch`, `rfc`, `record`).

## Intended behavior

Context loads from the project; reviews save to `.redteam/reviews/` with predictable naming.

## Given / When / Then scenarios

- **Given** the user has run `/redteam init` and CONTEXT.md exists
- **When** the user runs `/redteam premortem launch`
- **Then** context is loaded and output is saved to `.redteam/reviews/launch-premortem.md`

- **Given** CONTEXT.md exists at the repo root or in `.redteam/`
- **When** `context.mjs` runs
- **Then** it resolves context in order: root `CONTEXT.md` → `.redteam/` → `docs/` → `$REDTEAM_CONTEXT_DIR`

- **Given** a completed review command
- **When** the user opens `.redteam/reviews/`
- **Then** artifacts are markdown files useful at retrospectives (assumptions, verdict, follow-ups)

## Constraints and domain language

- `.redteam/config.json` holds shared settings; `config.local.json` is gitignored
- Decision records may mirror ADRs in `engineering/adrs/` but `.redteam/reviews/` is the red-team source of truth

## Success signals and telemetry

- `.redteam/reviews/` artifacts referenced in retrospectives
- `ai-check` and `review` used before high-stakes decisions (qualitative)

## Open questions

- Should `record` always offer to mirror into `engineering/adrs/`? — maintainers

## Related requirements, tests, architecture, and ADRs

- Requirements: FR-3, FR-4, FR-5
- Architecture: [Project-anchored review flow](../engineering/ARCHITECTURE.md#project-anchored-review), [Data model](../engineering/ARCHITECTURE.md#data-model)
- Tests: [`engineering/TESTING.md`](../engineering/TESTING.md)
