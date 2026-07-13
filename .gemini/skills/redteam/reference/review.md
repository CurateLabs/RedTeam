# Review Flow

Pre-commitment decision gate. Use before approval, launch, sign-off, or irreversible commitment.

## Purpose

Answer: "Should we proceed, and on what terms?" This is the last structured check before the point of no return.

## Prerequisites

If no CONTEXT.md and the user hasn't provided decision context in chat, run a 3-question minimum capture inline:
1. What is being approved?
2. What is irreversible if we proceed?
3. Who owns the decision?

## Steps

1. **Decision statement** — one sentence, testable
2. **Go / no-go criteria** — what must be true to proceed? Check each:
   - [ ] criterion — met / unmet / unknown
3. **Run rapid technique stack** (adapt to time):
   - Key assumptions check (top 5, mark critical)
   - Pre-mortem (top 3 failure modes)
   - Devil's advocate (strongest objection)
4. **Dissent log** — has dissent been heard and recorded? If not, flag as GTM risk
5. **Conditions** — if proceeding, what conditions, monitoring, or tripwires?
6. **Kill criteria** (RedTeam extension) — explicit signals that should trigger stop, pivot, or rollback (link to `/redteam record`)
7. **Reversibility** — if not already run, note one-way doors or run `/redteam reversibility`

## Output format

```markdown
## Decision Review: [target]

### Decision
...

### Go / No-Go Criteria
| Criterion | Status | Evidence |
|-----------|--------|----------|

### Critical assumptions
| Assumption | Critical? | Validated? |
|------------|-----------|------------|

### Failure modes
1. ...

### Dissent
[Recorded / not surfaced / suppressed — describe]

### Recommendation
**[GO | GO WITH CONDITIONS | NO-GO | DEFER]**

### Conditions (if GO WITH CONDITIONS)
- ...

### Kill criteria / tripwires
| Signal | Threshold | Action |
|--------|-----------|--------|

### Monitoring / tripwires
- ...
```

## Persistence

Write to `.redteam/reviews/<slug>-review.md`. This artifact should be referenceable at retrospectives.

## Hard stops

Recommend **NO-GO** or **DEFER** when:
- P0 findings from a prior critique remain open
- Critical assumptions are unvalidated and untestable before commitment
- Dissent exists but has not been addressed
- No rollback or mitigation plan for top failure mode
