---
type: concept
title: "Architecture Decision Records"
source: /3-ENGINEERING/ADRs/
path: /3-ENGINEERING/ADRs/
updated: 2026-07-10
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-10T19:47:58.908Z"
---
<!-- LLM: This file is the index for the Architecture Decision Records. It is NOT itself an
ADR. Keep it as a short explainer plus a table of the decisions recorded so far. When you add
or fill in an ADR, add a row to the log below. Remove LLM comments as you go. -->

# Architecture Decision Records

An **Architecture Decision Record (ADR)** captures one significant decision — the context,
the choice made, and its consequences — so the reasoning lives in the repo alongside the
code. Decisions are immutable once accepted: to change one, add a new ADR that supersedes it.

## Creating an ADR

```
docslime add adr <short-slug>
```

This creates the next-numbered record, e.g. `0001-<short-slug>.md`. Fill it in (the file
carries inline guidance), then add a row to the log below.

## Status values

- **Proposed** — under discussion.
- **Accepted** — decided and in effect.
- **Superseded by ADR-NNNN** — replaced by a later decision.
- **Deprecated** — no longer relevant.

## Decision log

<!-- LLM: Keep this table in sync with the ADR files in this folder. One row per ADR. -->

| ADR | Title | Status | Date |
|---|---|---|---|
| _0001_ | _short title_ | _Proposed_ | _YYYY-MM-DD_ |
