# Design

RedTeam has no visual product UI. Design context governs **command output**, **review artifacts**, **handbook and developer docs**, and **terminology** so every harness presents the same applied-critical-thinking experience.

## Design Principles

- **Method visible in the output** — every command names the technique it applies and shows the reasoning, so results read as red teaming, not generic critique
- **Loyal opposition** — challenge thinking to improve decisions, not to win arguments
- **Evidence before confidence** — output separates observation from interpretation, states assumptions and uncertainty, and never invents support
- **Civilian framing** — decision, product, and strategy language; not military doctrine or cybersecurity
- **Structured output** — commands produce scannable sections (assumptions, risks, verdict, follow-ups)
- **Teach, don't just answer** — plain language that helps users learn the method, not only receive its result
- **Skills over scanners** — guide model behavior through reference flows, not deterministic rule engines
- **Attribution without reproduction** — summarize handbook techniques; link to v10 docs and [`strategy/source-lineage.md`](strategy/source-lineage.md)

These principles carry the [`PRODUCT.md`](PRODUCT.md) quality stance into command output and docs.

## Design tool context

Agents and contributors should load `PRODUCT.md` and this file before changing skill reference flows, handbook pages, or developer docs. Visual critique does not apply; focus on voice, structure, and command ergonomics. For UI work on the Starlight docs site, follow existing Starlight patterns in `src/content/docs/`.

## Brand And Voice

- **Tone:** Direct, skeptical-in-service-of-clarity, plain language; confident but not doctrinal
- **Terminology:** "Applied critical thinking" and "red teaming" (civilian sense); "commands" and "techniques"; avoid "penetration testing", "exploits", and military operational framing unless quoting lineage
- **Writing rules:** Use tables and headings for scanability; lead with the decision or plan under review; end reviews with explicit verdict and follow-ups

## Visual And Content Style

- **Visual system:** None for skill output (text-first); docs site uses Starlight defaults
- **Markdown structure:** Headings (`#`–`###`), tables, and code fences for commands in handbook and developer docs
- **Spacing & layout:** One idea per section; numbered steps in flows; avoid wall-of-text reviews
- **Iconography & imagery:** Handbook may use diagrams; skill output is text-first
- **Content structure:** Command references follow per-command templates in `skill/reference/`; handbook chapters in `src/content/docs/handbook/`; developer docs follow docslime lifecycle in `docs/`

## Interaction Patterns

- **Navigation:** Users invoke `/redteam <command> [target]` (29 commands); optional pins via `/redteam pin <command>`
- **Controls:** Chat commands only; CLI is for install (`npx --yes github:CurateLabs/RedTeam install`); Claude Code also installs via `/plugin marketplace add CurateLabs/RedTeam`
- **States:** Missing CONTEXT.md is valid for chat-only; missing skill install is an install error, not a silent fallback
- **Motion:** None

## Components And Patterns

| Component / pattern | Use it for | Notes / source |
|---|---|---|
| `/redteam <command>` router | All user-facing flows | `skill/SKILL.md` |
| Per-command reference flow | Structured technique output | `skill/reference/<command>.md` |
| TTP catalog | Browse handbook techniques | `skill/reference/ttp-catalog.md` |
| Extensions catalog | Browse v10-native extensions | `skill/reference/extensions-catalog.md` |
| CONTEXT.md | Project-anchored background | `.redteam/CONTEXT.template.md` |
| Review artifact | Persisted command output | `.redteam/reviews/<slug>-<command>.md` |
| Session notes | Facilitation session records | `.redteam/sessions/<date>-<slug>.md` |
| Decision record template | `record` command output | `skill/reference/decision-record-template.md` |
| Pin shortcut | `$<command>` direct invocation | `skill/scripts/pin.mjs` |
| Starlight developer sync | Published developer docs | `scripts/prepare-docs-site.mjs` |

## Accessibility

- Docs site inherits Starlight accessibility (semantic HTML, keyboard nav, contrast)
- Skill output should use headings and lists so screen-reader users can skim reviews
- Do not rely on color alone in any generated tables or diagrams

## References

- [Handbook v10](https://curatelabs.github.io/RedTeam/handbook/) — published concepts and techniques
- [User Guide](https://curatelabs.github.io/RedTeam/guide/) — install and command usage
- [`strategy/source-lineage.md`](strategy/source-lineage.md) — attribution and citation
- [`skill/SKILL.md`](https://github.com/CurateLabs/RedTeam/blob/main/skill/SKILL.md) — skill router implementation
