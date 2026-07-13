---
type: concept
title: Engineering
source: /3-ENGINEERING/
path: /3-ENGINEERING/
updated: 2026-07-10
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-10T19:47:58.909Z"
---
<!-- LLM: This folder holds technical documentation that supports ../3-ARCHITECTURE.md and
../4-TESTING.md — things like setup guides, operational runbooks, API references, and the
Architecture Decision Records in ADRs/. Interview the user about what engineering docs exist
or are needed. Create focused files per topic. Update the index as files are added. Remove
LLM comments as you go. -->

# Engineering

This folder holds the deeper technical documentation behind
[`../3-ARCHITECTURE.md`](../3-ARCHITECTURE.md) and [`../4-TESTING.md`](../4-TESTING.md),
including the project's decision records.

## What lives here

<!-- LLM: Create the documents that fit this project. Common ones: -->

- **Development setup** — _how to get a working dev environment._
- **Build & release** — _how the project is built, versioned, and shipped._
- **Operations / runbook** — _how it's run, monitored, and recovered._
- **API / interface reference** — _contracts other code depends on._
- **[ADRs/](ADRs/)** — _Architecture Decision Records (one per significant decision)._

## Decision records

Significant engineering and product decisions are recorded as ADRs in [`ADRs/`](ADRs/).
Create the next one with:

```
docslime add adr <short-slug>
```

## Index

<!-- LLM: List the engineering documents in this folder with a one-line description each.
Update whenever a file is added. -->

| Document | Description |
|---|---|
| _filename.md_ | _what it covers_ |
