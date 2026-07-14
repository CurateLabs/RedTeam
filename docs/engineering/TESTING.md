# Testing

RedTeam verifies behavior through **automated smoke tests** for install and docs publishing, plus **manual evaluation** of command output quality. Something is shippable when install smoke tests pass, the docs site builds with valid links, and changed reference flows have been spot-checked in at least one harness.

## Strategy

| Layer | What it verifies | Tools |
|---|---|---|
| Smoke / integration | CLI install creates expected skill and `.redteam/` scaffold | `scripts/test-cli-install.mjs` |
| Build | Provider copies match `skill/` source | `npm run build`, manual diff |
| Docs / behavior | Developer docs stage correctly; GitHub Pages links work under `/RedTeam/` | `npm run docs:site`, `scripts/check-docs-site.mjs` |
| Manual / qualitative | Command output structure; handbook case narrative, cumulative learning, and reference paths | Harness spot-checks, editorial review, issue feedback |

## Behavior coverage

| Experience / Requirement | Scenario (Given/When/Then) | Test |
|---|---|---|
| Install / FR-6 | Given a clean directory, when `redteam install` runs, then skill and `.redteam/` scaffold exist | `npm run test:cli-install` |
| Build / FR-7 | Given source skill, when `npm run build` runs, then provider directories update | `npm run build` (CI/manual) |
| Docs publish / FR-8 | Given docs hosted at `/RedTeam/`, when a reader follows links or opens URLs directly, then styled pages load with valid local links | `npm run docs:site` |
| Chat-only review / FR-2 | Given no CONTEXT.md, when `/redteam challenge` runs, then structured output appears | Manual harness check (gap: no automated eval) |
| Project-anchored / FR-5 | Given CONTEXT.md, when premortem runs, then review artifact is saved | Manual harness check (gap: no automated eval) |
| Command coverage / FR-9 | Given the `skill/SKILL.md` command table, then each of the 29 commands has a `skill/reference/<command>.md` flow | Manual diff of table vs directory (gap: no automated check) |
| Method fidelity / NFR-7 | Given an evaluative command output, then the technique is named and evidence, interpretation, assumptions, and uncertainty are distinguishable | Manual sampled-session review (gap: no rubric yet — see REQUIREMENTS open questions) |
| Handbook learning model / FR-12 | Given any chapter, when an editor reviews it, then an unresolved decision case supplies stakes, incomplete information, competing perspectives, and a reason to apply the chapter's concepts and TTPs; the final chapter culminates in the full spell book | Manual editorial review (gap: chapter rubric and case corpus not yet implemented) |
| Handbook entry paths / FR-13 | Given the handbook landing page, when a reader chooses how to enter, then both the sequential case journey and direct concept/TTP lookup are explicit and linked | `npm run docs:site` plus manual landing-page review |

## Traceability contract

| Link | Evidence |
|---|---|
| Product goal → experience | [`PRODUCT.md`](../PRODUCT.md) → [`experience/`](../experience/) |
| Experience → requirement | Requirement IDs in [`REQUIREMENTS.md`](../REQUIREMENTS.md) |
| Requirement → BDD scenario | Given/When/Then in experience artifacts and Requirements behavior trace |
| Scenario → test | `test:cli-install`, `docs:site`, or flagged manual gap |
| Requirement → architecture/ADR | [`ARCHITECTURE.md`](ARCHITECTURE.md), [`adrs/`](adrs/) |

## Evaluation against product goals

These trace to PRODUCT.md "Evidence of success"; all are currently qualitative:

- **Install under 5 minutes (NFR-1)** — measured informally; `test:cli-install` guards the critical path
- **Method visible in the work** — sampled transcripts and `.redteam/reviews/` artifacts name the technique and separate evidence, interpretation, assumptions, and uncertainty
- **Decision work materially changes** — saved artifacts record a changed assumption, option, risk response, or an explicit "challenge did not change it"
- **Retrospective usefulness** — qualitative feedback on saved artifacts
- **Accountability preserved (NFR-8)** — high-stakes outputs state uncertainties and name the human decision owner

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
