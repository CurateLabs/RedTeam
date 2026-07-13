# Record Flow

Create a durable decision record (ADR-style) from a red team session — links assumptions, dissent, verdict, and tripwires.

## When to use

- After `review` with GO or GO WITH CONDITIONS
- End of a `sequence` playbook
- When the team will forget *why* a decision was made

## Template

Write to `.redteam/reviews/<slug>-decision-record.md` (or project ADR path if user specifies).

```markdown
# Decision Record: [title]

**Date:** [ISO date]
**Status:** [Proposed | Accepted | Superseded]
**Deciders:** [names/roles]
**Red team artifacts:** [links to premortem, review, etc.]

## Context
[What forced this decision]

## Decision
[One sentence]

## Alternatives considered
| Option | Pros | Cons | Why rejected |
|--------|------|------|--------------|

## Critical assumptions
| Assumption | Validated? | Owner |
|------------|------------|-------|

## Dissent
[Who disagreed, what they said, whether addressed]

## Confidence
[High / Medium / Low — with calibration notes]

## Tripwires & kill criteria
| Signal | Threshold | Action |
|--------|-----------|--------|

## Review date
[When to revisit this decision]
```

## Steps

1. Gather prior `.redteam/reviews/*` artifacts for this target
2. Fill template — do not invent; mark unknowns
3. Ask user to confirm deciders and dissent log
4. Set review date (default: 30–90 days by stakes)

## Also: Decision journal entry

For personal calibration (Duke/Kahneman style), optional short entry:

```markdown
### Journal
- **What I decided:**
- **What I expected:**
- **Confidence (0–100%):**
- **What would prove me wrong:**
```

Store in `.redteam/sessions/<date>-journal-<slug>.md` if user wants journaling separate from team record.

## Reference

Full template notes: [decision-record-template.md](decision-record-template.md)
