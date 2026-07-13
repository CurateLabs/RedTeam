# Product

RedTeam is a skills-only AI plugin for **applied critical thinking** — U.S. Army Red Team Handbook v9 core plus decision-science and product extensions (v0.2: 29 commands).

## Problem

AI assistants default to agreement. Plans, strategies, and decisions ship without structured challenge. Teams lack accessible red teaming tools outside military training contexts.

## Audience

- **Decision-makers and strategists** — stress-test plans before commitment
- **Product and engineering leads** — adversarial review of PRDs, RFCs, launches
- **AI power users** — want `/redteam premortem`, `/redteam ai-check`, `/redteam sequence` in any harness

## Vision

Applied critical thinking becomes as easy as `/redteam challenge` — in chat or anchored to a `.redteam/` project directory.

## Goals

- Handbook v9 command flows plus RedTeam superset (outside-view, incentives, ai-check, launch, rfc, record, …)
- Work in pure chat with no setup
- Support `.redteam/` for persistent CONTEXT.md and review artifacts
- Install into Claude, Cursor, Codex, ChatGPT, and GitHub Copilot harnesses

## Non-goals

- Cybersecurity penetration testing or exploit development
- Hosting the full Army handbook PDF
- Deterministic rule engines or CLI scanners (skills-only)

## Success Metrics

- Users can install and run a command in under 5 minutes
- Reviews produce structured, actionable output (assumptions, verdict, follow-ups)
- `.redteam/reviews/` artifacts are useful at retrospectives
- AI-assisted sessions pass `ai-check` before high-stakes decisions
