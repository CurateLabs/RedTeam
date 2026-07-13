# Tools Command

Browse and recommend techniques from the source handbook catalog and RedTeam extensions.

## When invoked

1. If user named a specific tool → explain from [ttp-catalog.md](ttp-catalog.md) or [extensions-catalog.md](extensions-catalog.md)
2. If user described a situation → recommend 2–3 tools with rationale
3. If no argument → show categorized summary + extensions

## Recommendation logic (source handbook)

| Situation | Primary tools |
|-----------|---------------|
| Plan might fail | Premortem, Assumptions, Challenge |
| Multiple explanations | ACH, 4 Ways of Seeing |
| Group too aligned | Groupthink session, Devil's Advocacy, 1-2-4-Whole |
| Wrong problem | Frame Audit, Problem Restatement, 6 Words |
| Need more options | Ideate tools (Brainstorming, Gallery Walk, Outside-In) |
| Need to choose | Converge tools (Dot Voting, SWOT, Team A/B) |
| Incident / root cause | 5 Whys, Logic of Failure, ACH |
| Strategic uncertainty | Alternative Futures, Indicators/Signposts |
| Deception concern | Deception Detection, ACH |

## Recommendation logic (RedTeam extensions)

| Situation | Command |
|-----------|---------|
| Timeline / budget forecast | `outside-view` |
| Guaranteed failure modes | `invert` |
| OKRs, KPIs, policy metrics | `incentives` |
| Blame, miscommunication | `ladder` |
| Weak debate / straw men | `steelman` |
| Overconfident memo | `calibrate` |
| Don't know which commands to run | `sequence` |
| Cross-stakeholder conflict | `culture` |
| AI wrote the analysis | `ai-check` |
| Shipping a feature | `launch` |
| Technical design doc | `rfc` |
| Abuse / harm scenarios | `misuse` |
| Irreversible commitment | `reversibility` |
| Document the decision | `record` |
| Named cognitive bias | [bias-catalog.md](bias-catalog.md) |

## Output

For a specific tool:

```markdown
## [Tool name]

**Category:** ACT / GTM / Extension
**Time:** ~X minutes

### When to use
...

### Method
...

### Run it
`/redteam <command> [target]`
```

Full catalogs: [ttp-catalog.md](ttp-catalog.md) · [extensions-catalog.md](extensions-catalog.md) · [bias-catalog.md](bias-catalog.md)
