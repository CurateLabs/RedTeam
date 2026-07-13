# Testing

RedTeam verifies behavior through **automated smoke tests** for install and docs publishing, plus **manual evaluation** of command output quality. Something is shippable when install smoke tests pass, the docs site builds with valid links, and changed reference flows have been spot-checked in at least one harness.

## Strategy

| Layer | What it verifies | Tools |
|---|---|---|
| Smoke / integration | CLI install creates expected skill and `.redteam/` scaffold | `scripts/test-cli-install.mjs` |
| Build | Provider copies match `skill/` source | `npm run build`, manual diff |
| Docs / behavior | Developer docs stage correctly; GitHub Pages links work under `/RedTeam/` | `npm run docs:site`, `scripts/check-docs-site.mjs` |
| Manual / qualitative | Command output structure and handbook alignment | Harness spot-checks, issue feedback |

## Behavior coverage

| Experience / Requirement | Scenario (Given/When/Then) | Test |
|---|---|---|
| Install / FR-6 | Given a clean directory, when `redteam install` runs, then skill and `.redteam/` scaffold exist | `npm run test:cli-install` |
| Build / FR-7 | Given source skill, when `npm run build` runs, then provider directories update | `npm run build` (CI/manual) |
| Docs publish / FR-8 | Given docs hosted at `/RedTeam/`, when a reader follows links or opens URLs directly, then styled pages load with valid local links | `npm run docs:site` |
| Chat-only review / FR-2 | Given no CONTEXT.md, when `/redteam challenge` runs, then structured output appears | Manual harness check (gap: no automated eval) |
| Project-anchored / FR-5 | Given CONTEXT.md, when premortem runs, then review artifact is saved | Manual harness check (gap: no automated eval) |

## Traceability contract

| Link | Evidence |
|---|---|
| Product goal → experience | [`PRODUCT.md`](../PRODUCT.md) → [`experience/`](../experience/) |
| Experience → requirement | Requirement IDs in [`REQUIREMENTS.md`](../REQUIREMENTS.md) |
| Requirement → BDD scenario | Given/When/Then in experience artifacts and Requirements behavior trace |
| Scenario → test | `test:cli-install`, `docs:site`, or flagged manual gap |
| Requirement → architecture/ADR | [`ARCHITECTURE.md`](ARCHITECTURE.md), [`adrs/`](adrs/) |

## Evaluation against product goals

- **Install under 5 minutes** — measured informally; `test:cli-install` guards the critical path
- **Structured actionable output** — qualitative review of command transcripts and `.redteam/reviews/` samples
- **Retrospective usefulness** — qualitative feedback on saved artifacts
- **`ai-check` before high-stakes decisions** — usage observation in real workflows

## Running the tests

```
npm run test:cli-install
npm run docs:site
```

Expect all commands to exit 0. `docs:site` runs prepare, Astro check, build, and link validation.

## Continuous integration

On push to `main`, [`.github/workflows/deploy.yml`](https://github.com/CurateLabs/RedTeam/blob/main/.github/workflows/deploy.yml) runs `npm run docs:site` via `withastro/action` and deploys to GitHub Pages. Docs build failure blocks publish. CLI install smoke test should be run locally before release; add to CI when a lightweight job is added.

## Test data & environments

- **CLI install test:** throwaway temp directory via `mkdtemp`, removed after assertion
- **Docs site:** `scripts/prepare-docs-site.mjs` stages `docs/` into `src/content/docs/developers/`; build output checked against `/RedTeam/` base path
- **Harness manual tests:** use a scratch project with `.redteam/` for anchored flows
