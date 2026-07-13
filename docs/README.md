# Developer documentation

Living documentation for the **RedTeam** project — product context, experience evidence, requirements, design, architecture, testing, publishing, and observability. Structured for behavior-driven development so people and AI coding agents have full in-repo context.

> **User-facing content** (install guide, handbook) lives in the repository's [Starlight content directory](https://github.com/CurateLabs/RedTeam/tree/main/src/content/docs) and is published separately on the docs site. This folder is **project documentation only**.

## How the docs are organized

Follow this lifecycle rather than treating the filenames as a numbered checklist:

| Document | Question it answers |
|---|---|
| [`PRODUCT.md`](PRODUCT.md) | What is this product, who is it for, and why does it exist? |
| [`DESIGN.md`](DESIGN.md) | What should stay consistent in product, docs, and UX experience? |
| [`experience/`](experience/) | What have we learned from users, and what outcomes and behaviors do they need? |
| [`REQUIREMENTS.md`](REQUIREMENTS.md) | What must the delivered system demonstrably do as a result? |
| [`engineering/ARCHITECTURE.md`](engineering/ARCHITECTURE.md) | How is the system built? |
| [`engineering/TESTING.md`](engineering/TESTING.md) | How do we prove it before release and gate continuous integration? |
| [`engineering/PUBLISHING.md`](engineering/PUBLISHING.md) | How does a verified change reach users safely? |
| [`engineering/OBSERVABILITY.md`](engineering/OBSERVABILITY.md) | How do we know it works in production and feed learning back into discovery? |

Supporting detail lives in subfolders:

| Folder | Contents |
|---|---|
| [`strategy/`](strategy/) | Market, positioning, handbook lineage, roadmap, and strategic bets. |
| [`experience/`](experience/) | Continuous discovery, journeys, hypotheses, and behavior scenarios. |
| [`engineering/`](engineering/) | Architecture, CI, delivery, observability, operations, and decision records. |
| [`engineering/adrs/`](engineering/adrs/) | Architecture Decision Records. |

## Published site

| Section | Source | URL path |
|---------|--------|----------|
| User Guide | `src/content/docs/guide/` | `/guide/` |
| Handbook v10 | `src/content/docs/handbook/` | `/handbook/` |
| Developer Docs | `docs/` (synced at build) | `/developers/` |

Build: `npm run docs:site` → https://curatelabs.github.io/RedTeam/

## Conventions

- **Keep docs current.** When behavior changes, update the doc in the same change.
- **Link, don't duplicate.** Reference detail in subfolders rather than copying it.
- **Trace evidence through delivery.** User evidence should lead to requirements, tests, architecture, telemetry, and production learning.
- **Decisions are recorded.** Significant choices get an ADR (see `engineering/adrs/`).
- **Keep context discoverable.** `PRODUCT.md` and `DESIGN.md` stay in `docs/` so design and coding agents can load them without duplicate root files.
- **Close the loop.** Observability should measure both system health and the user outcomes named in product, experience, and requirements docs.
