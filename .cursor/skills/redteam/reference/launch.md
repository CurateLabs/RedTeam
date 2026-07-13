# Launch Flow

Product or feature launch readiness review — civilian red team for go-live.

## When to use

- Before public launch, GA, major release, or campaign start
- After `premortem` — launch is the operational checklist

## Checklist domains

### Product & experience
- [ ] Core user journey works end-to-end
- [ ] Edge cases and empty states handled
- [ ] Rollback or feature-flag path exists

### Operations
- [ ] On-call / support briefed
- [ ] Runbooks and escalation paths
- [ ] Capacity and performance validated

### Communications
- [ ] Internal alignment (sales, support, exec)
- [ ] External messaging matches reality
- [ ] Crisis comms draft if launch fails publicly

### Metrics & incentives
- [ ] Success metrics defined (run `/redteam incentives` if complex)
- [ ] Kill criteria / tripwires set
- [ ] Dashboards live

### Risk & misuse
- [ ] `/redteam misuse` completed or waived with rationale
- [ ] Legal / compliance sign-off if applicable

### Reversibility
- [ ] `/redteam reversibility` — one-way doors identified

## Steps

1. Walk checklist — mark met / unmet / N/A with evidence
2. Blockers — P0 must fix before launch
3. Waivers — anything shipping with known risk (owner + review date)
4. Verdict — **GO | GO with waivers | NO-GO**

## Output format

```markdown
## Launch Review: [target]

### Checklist
| Domain | Item | Status | Evidence |
|--------|------|--------|----------|

### P0 blockers
- ...

### Waivers
| Risk | Owner | Review date |
|------|-------|-------------|

### Verdict
**[GO | GO WITH WAIVERS | NO-GO]**
```

## Persistence

`.redteam/reviews/<slug>-launch.md`
