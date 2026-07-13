# Product

RedTeam is a skills-only AI plugin for **applied critical thinking**. It implements ***The Red Team Handbook*, Version 10** — successor to UFMCS v9 — with decision-science and product extensions (29 commands).

## Problem

AI assistants default to agreement. Plans, strategies, and decisions ship without structured challenge. Teams lack accessible red teaming tools outside military training contexts.

## Audience

- **Decision-makers and strategists** — stress-test plans before commitment
- **Product and engineering leads** — adversarial review of PRDs, RFCs, launches
- **AI power users** — want `/redteam premortem`, `/redteam ai-check`, `/redteam sequence` in any harness

## Vision

Applied critical thinking becomes as easy as `/redteam challenge` — in chat or anchored to a `.redteam/` project directory.

## Goals

- Handbook v10 command flows plus v10-native extensions (outside-view, incentives, ai-check, launch, rfc, record, …)
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

## Stakeholders

- **Curate Labs** — publisher and maintainer of Handbook v10 and the RedTeam skill
- **Primary users** — decision-makers, product leads, and AI power users who run structured reviews
- **Harness platforms** — Cursor, Claude, Codex, ChatGPT, and Copilot as distribution surfaces for the skill
