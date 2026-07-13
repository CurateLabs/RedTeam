# Experience

This folder connects continuous discovery and experience design to delivery. It captures what the team has learned from users, the outcomes they need, the opportunities worth pursuing, and the behavior that would demonstrate improvement.

## Discovery practice

RedTeam is a skills product with no hosted runtime, so discovery is lightweight and evidence-driven:

- **Participants:** maintainers and power users at Curate Labs; feedback from GitHub issues and install friction reports
- **Evidence sources:** install smoke tests, command output quality in real decisions, `.redteam/reviews/` usefulness at retrospectives, handbook and guide usage on the docs site
- **Recording:** opportunities and journeys live here; validated behaviors become requirements in [`../REQUIREMENTS.md`](../REQUIREMENTS.md)
- **Threshold for requirements:** a behavior is required when it is part of the install path, a core command flow, or a published-docs contract users depend on

## Experience principles

- **Zero-setup by default** — paste a plan, run a command, get structured challenge output in chat
- **Loyal opposition** — challenge to improve decisions, not to win arguments or perform cybersecurity
- **Structured and actionable** — reviews surface assumptions, risks, verdicts, and follow-ups
- **Project-anchored when needed** — `.redteam/` holds decision context and review artifacts without forcing setup
- **Harness-agnostic** — same skill works across Claude, Cursor, Codex, ChatGPT, and Copilot

## Primary users

- **Decision-makers and strategists** — stress-test plans before commitment. See [`chat-only-review.md`](chat-only-review.md).
- **Product and engineering leads** — adversarial review of PRDs, RFCs, and launches. See [`project-anchored-review.md`](project-anchored-review.md).
- **AI power users** — install the skill and run handbook commands in any harness. See [`install-and-run.md`](install-and-run.md).

## Traceability

```text
evidence -> opportunity -> requirement -> architecture -> test -> release -> observation
     ^                                                                    |
     +--------------------------------------------------------------------+
```

## Index

| Document | Kind | Status | What it informs |
|---|---|---|---|
| [`chat-only-review.md`](chat-only-review.md) | Journey / product slice | Validated | FR-1, FR-2, NFR-1 |
| [`project-anchored-review.md`](project-anchored-review.md) | Journey / product slice | Validated | FR-3, FR-4, FR-5 |
| [`install-and-run.md`](install-and-run.md) | Journey / product slice | Validated | FR-6, FR-7, NFR-2 |
