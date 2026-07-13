# Engineering

Engineering begins with the shared requirements contract in [`../REQUIREMENTS.md`](../REQUIREMENTS.md) and follows it through design, pre-release evidence, continuous delivery, and production learning.

## Lifecycle

| Document | Responsibility |
|---|---|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | How domain boundaries and system components satisfy the requirements. |
| [`TESTING.md`](TESTING.md) | How tests and CI prove the system before release. |
| [`PUBLISHING.md`](PUBLISHING.md) | How verified artifacts are versioned, promoted, deployed, and rolled back. |
| [`OBSERVABILITY.md`](OBSERVABILITY.md) | How production health and user outcomes are measured and fed back into discovery. |
| [`adrs/`](adrs/) | Why significant product and technical decisions were made. |

## Supporting documentation

| Document | Description |
|---|---|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Skills-only system shape, components, data model, flows |
| [`TESTING.md`](TESTING.md) | CLI smoke test, docs site build, traceability contract |
| [`PUBLISHING.md`](PUBLISHING.md) | Build, `npx` install, GitHub Pages, plugin distribution |
| [`OBSERVABILITY.md`](OBSERVABILITY.md) | CI health, qualitative output review, feedback loop |

## Decision records

Create the next Architecture Decision Record with:

```sh
docslime add adr <short-slug>
```

Keep the decision log in [`adrs/README.md`](adrs/README.md) synchronized with accepted, superseded, and deprecated records.
