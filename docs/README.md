<!-- LLM: This is the entry point to the project's documentation. Keep it short and
navigational. Do NOT interview the user for this file first — fill it in last, once the
other docs exist, so the descriptions match what was actually written. Remove LLM comments
as you complete each section. -->

# Documentation

This folder holds the living documentation for this project. It is structured for
**behavior-driven development**: product and design context lead into experiences,
requirements, architecture, testing, and ADRs. The docs stay in-repo so both people and AI
coding agents have full context without reaching for an external source.

## How the docs are organized

Read the top-level docs in this order:

| Document | Question it answers |
|---|---|
| [`PRODUCT.md`](PRODUCT.md) | What is this product, who is it for, and why does it exist? |
| [`1-EXPERIENCES.md`](1-EXPERIENCES.md) | What should it feel like to use? |
| [`2-REQUIREMENTS.md`](2-REQUIREMENTS.md) | What must the system do? |
| [`DESIGN.md`](DESIGN.md) | What should stay consistent in product, docs, and UX experience? |
| [`3-ARCHITECTURE.md`](3-ARCHITECTURE.md) | How is the system built? |
| [`4-TESTING.md`](4-TESTING.md) | How do we prove it works? |
| [`HANDBOOK.md`](HANDBOOK.md) | Handbook v9 concept inventory — summary index |
| [`HANDBOOK/`](HANDBOOK/) | **Expanded handbook docs** — one page per chapter, concept, and TTP |

Supporting detail lives in subfolders:

| Folder | Contents |
|---|---|
| [`0-PRODUCT/`](0-PRODUCT/) | Product, market, and positioning detail beyond `PRODUCT.md`. |
| [`1-JOURNEYS/`](1-JOURNEYS/) | User personas, journeys, and experience detail. |
| [`3-ENGINEERING/`](3-ENGINEERING/) | Technical documentation, including testing and decision records. |
| [`HANDBOOK/`](HANDBOOK/) | Handbook v9 — chapters, concepts, and TTP pages (generated via `npm run docs:handbook`) |

## Conventions

- **Keep docs current.** When behavior changes, update the doc in the same change.
- **Link, don't duplicate.** Reference detail in subfolders rather than copying it.
- **Decisions are recorded.** Significant choices get an ADR (see `3-ENGINEERING/ADRs/`).
- **Keep context discoverable.** `PRODUCT.md` and `DESIGN.md` stay in `docs/` so design and
  coding agents can load them without duplicate root files.
