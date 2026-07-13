# Sequence Flow

Design a tool chain for a decision type — which `/redteam` commands to run, in what order, with time budgets.

## When to use

- User asks "what should I run?" for a complex decision
- Facilitating a multi-session red team
- Onboarding: teach the methodology as a playbook

## Built-in playbooks

### Strategic commitment (60–120 min)
1. `init` or confirm CONTEXT — 10 min
2. `frame` — problem and frame audit — 15 min
3. `steelman` — best cases for alternatives — 15 min
4. `assumptions` — key assumptions + sensitivity — 20 min
5. `outside-view` — base rates — 15 min
6. `premortem` — failure modes — 20 min
7. `review` — go/no-go — 15 min
8. `record` — decision artifact — 10 min

### Fast stress-test (20 min)
1. `challenge` — 10 min
2. `invert` — 5 min
3. `review` lite — 5 min

### Group decision workshop (half day)
1. `groupthink` session design — 15 min
2. `ideate` — diverge — 45 min
3. `steelman` + `devils-advocate` — 30 min
4. `converge` — 30 min
5. `review` — 20 min
6. `record` — 10 min

### Product launch
1. `misuse` — abuse cases — 20 min
2. `incentives` — metric gaming — 15 min
3. `premortem` — 20 min
4. `reversibility` — one-way doors — 10 min
5. `launch` — readiness checklist — 20 min
6. `review` — 15 min

### Technical RFC
1. `rfc` — structured RFC review — 30 min
2. `assumptions` — 15 min
3. `reversibility` — 10 min
4. `misuse` — 15 min
5. `review` — 10 min

### AI-assisted analysis quality
1. `ai-check` — 10 min
2. `calibrate` — 10 min
3. `steelman` — 10 min

### Cross-cultural / multi-stakeholder
1. `culture` — worldview map — 25 min
2. `ladder` — inference gaps — 15 min
3. `steelman` — 15 min
4. `converge` — 20 min

## Steps

1. **Classify decision** — strategic / launch / RFC / group / fast / analysis QA
2. **Time budget** — match playbook or trim
3. **Customize** — add/remove steps with one-line rationale
4. **Output schedule** — ordered commands with time and artifact paths

## Output format

```markdown
## Sequence: [target]

### Decision type
...

### Time budget
...

### Playbook
| Step | Command | Time | Output artifact |
|------|---------|------|-----------------|

### Skip / add rationale
- ...

### Start here
`/redteam [first-command] [target]`
```

## Persistence

`.redteam/sessions/<date>-sequence-<slug>.md`
