# Premortem Flow

From Handbook v10: imagine the decision or project has already failed, then work backward to identify causes and preventions.

## When to use

- Before launch, deployment, or major commitment
- When optimism bias is visible
- When the team is aligned "too quickly"

## Steps

1. **Set the scene** — "It is [future date]. [Target] has failed. Not partially — failed in a way that surprised us."
2. **Individual brainstorm** — each participant (or you, playing multiple roles) writes reasons for failure. Minimum 8 failure causes.
3. **Share and cluster** — group causes by theme (execution, assumptions, external, people, timing)
4. **Rank** — severity × likelihood. Top 5 get full treatment.
5. **Prevent / detect / respond** — for each top cause:
   - **Prevent** — what could stop this?
   - **Detect** — early warning sign?
   - **Respond** — if it happens anyway?
6. **Update the plan** — specific changes to the current approach

## Pre-parade (RedTeam extension, optional)

After the premortem, run a **pre-parade**: imagine surprising *success*. What had to go right that we didn't plan for? Captures upside assumptions and hidden dependencies on luck.

```markdown
### Pre-parade
It succeeded beyond expectations because...
1. ...
```

## Facilitation note

If working with a group, use think-write-share before discussion to avoid anchoring on the loudest voice.

## Output format

```markdown
## Premortem: [target]

### Scenario
It is [date]. [Target] has failed because...

### Failure causes (brainstorm)
1. ...

### Top risks
| # | Cause | Severity | Likelihood | Theme |
|---|-------|----------|------------|-------|

### Prevent / Detect / Respond
#### Risk 1: ...
- **Prevent:** ...
- **Detect:** ...
- **Respond:** ...

### Plan changes
- ...
```

## Persistence

`.redteam/reviews/<slug>-premortem.md`
