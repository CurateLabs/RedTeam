# Groupthink Mitigation Flow

Design a session or intervention to break groupthink and surface dissent. From Handbook v10 Chapter 5.

## When to use

- Team aligned suspiciously fast
- Junior voices silent in meetings
- Leader stated preference before discussion
- High-stakes decision with homogeneous group
- Post-incident "how did we miss this?"

## Steps

1. **Diagnose** — which groupthink symptoms are present?

| Symptom | Present? | Evidence |
|---------|----------|----------|
| Illusion of unanimity | | |
| Self-censorship | | |
| Pressure on dissenters | | |
| Mindguards | | |
| Illusion of invulnerability | | |
| Collective rationalization | | |

2. **Select GTM tools** from [ttp-catalog.md](ttp-catalog.md). Match to time and group size:

| Time | Suggested tools |
|------|-----------------|
| 15 min | Think-Write-Share, 6 Words, Circle of Voices |
| 30 min | 1-2-4-Whole Group, Devil's Advocacy |
| 60+ min | 1 on 1 / 2 on 2 / Exchange Emissaries, Fishbowl, Ideal Group Process |

3. **Assign roles**:
   - **Contrarian / Devil's Advocate** — experienced, rewarded for opposition
   - **Recorder** — captures dissent, not just consensus
   - **Visualizer** — diagrams competing views
   - **Leader speaks last**

4. **Design the session** — agenda with timings, rules, and tool sequence
5. **Define rules of engagement** — let the group set them; defaults:
   - No attribution of bad ideas to people
   - Dissent is expected, not disloyal
   - Silence ≠ agreement
   - Evidence beats rank

## Output format

```markdown
## Groupthink Mitigation Plan: [target]

### Diagnosis
[Symptoms observed]

### Session design
| Time | Activity | Tool | Purpose |
|------|----------|------|---------|

### Roles
- Contrarian: ...
- Recorder: ...
- ...

### Rules of engagement
1. ...

### Pre-work (if any)
- ...

### Success criteria
[How we'll know dissent was surfaced]
```

## Persistence

`.redteam/sessions/<date>-groupthink-<slug>.md`

## Facilitation

If the user wants to run this now in chat, execute the selected tool (e.g. think-write-share) step by step rather than only designing the session.
