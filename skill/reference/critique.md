# Critique Flow

Structured review of a document, plan, proposal, design, or argument. More formal than `challenge`; produces a scored assessment.

## Purpose

Evaluate clarity, logic, evidence, assumptions, and decision-readiness of a written artifact or articulated plan.

## Steps

1. **Read the target** in full. If it's a file, read the file. If it's in chat, use the provided text.
2. **Summarize** the document's core claim and recommended action in ≤3 sentences.
3. **Score six dimensions** (0–4 each):

| Dimension | 0 | 4 |
|-----------|---|---|
| **Clarity** | Unclear what is being proposed | Unambiguous decision ask |
| **Evidence** | Assertion only | Strong, sourced, disconfirmable |
| **Logic** | Conclusions don't follow | Sound reasoning throughout |
| **Assumptions** | Hidden and unexamined | Explicit and tested |
| **Alternatives** | None considered | Credible options compared |
| **Risk** | Unaddressed | Identified with mitigations |

4. **Findings** — P0 (blocks decision), P1 (must fix), P2 (should fix), P3 (minor)
5. **Strengths** — what the document does well (minimum 2)
6. **Narrative vs evidence** (RedTeam extension) — where does story outrun data? Flag **narrative fallacy** risks.
7. **Questions for the author** — provocative, specific, unanswered by the text

## Output format

```markdown
## Critique: [target]

### Summary
...

### Scores
| Dimension | Score | Note |
|-----------|-------|------|
| Clarity | /4 | |
| Evidence | /4 | |
| Logic | /4 | |
| Assumptions | /4 | |
| Alternatives | /4 | |
| Risk | /4 | |
| **Total** | **/24** | |

### Findings
#### P0 — Blocks decision
- ...

#### P1 — Must fix
- ...

### Strengths
- ...

### Questions
1. ...
```

## Persistence

Write to `.redteam/reviews/<slug>-critique.md` when `.redteam/` exists.

## Thresholds

- **≥20/24** — decision-ready with minor polish
- **15–19** — viable but needs revision on flagged items
- **<15** — not ready; specify what must change before `/redteam review`
