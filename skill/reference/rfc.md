# RFC Flow

Technical decision record review — architecture, API, platform, or engineering RFCs.

## When to use

- Before approving an RFC, ADR, or technical design doc
- Engineering decisions with long-lived cost

## Review dimensions

| Dimension | Questions |
|-----------|-----------|
| **Problem** | Is the problem well-defined? Alternatives named? |
| **Options** | ≥2 viable options compared? Trade-offs honest? |
| **Reversibility** | One-way vs two-way doors? Migration path? |
| **Operations** | Operability, observability, on-call impact? |
| **Security & misuse** | Abuse cases? Data handling? |
| **Assumptions** | Load, scale, team skill, timeline — validated? |
| **Decision** | Clear recommendation with dissent recorded? |

## Steps

1. Read the RFC in full
2. Score each dimension 0–4 (same scale as `critique`)
3. P0/P1 findings
4. Missing sections vs standard RFC template
5. Recommend: **Approve | Approve with conditions | Revise | Reject**

## Output format

```markdown
## RFC Review: [target]

### Summary
...

### Scores
| Dimension | Score | Notes |
|-----------|-------|-------|

### Findings
#### P0
- ...

### Reversibility
[One-way / Two-way — describe]

### Recommendation
**[Approve | Approve with conditions | Revise | Reject]**

### Conditions
- ...
```

## Persistence

`.redteam/reviews/<slug>-rfc.md`

## Related

- `/redteam reversibility`
- `/redteam misuse`
- Link to project ADRs in `docs/engineering/adrs/` when present
