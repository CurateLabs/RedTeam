# Red Team Principles

Four core principles organize every RedTeam command and technique per ***The Red Team Handbook*, Version 10**. See [lineage.md](lineage.md) for v9 predecessor history.

## 1. Applied Critical Thinking (ACT)

Deliberately analyze how we perceive, interpret, and reason — make implicit assumptions explicit and test them.

**Fundamentals:**
- Slow down when stakes are high
- Ask why (repeatedly, with purpose)
- Deconstruct arguments — premises, logic, conclusions
- Identify assumptions and biases
- Generate and evaluate alternatives
- Make the implicit explicit

**Reflexive checks (when time is short):**
- What am I assuming that I haven't stated?
- What would change my mind?
- What is the strongest counter-argument?
- Am I confusing what I want to be true with what the evidence supports?

## 2. Groupthink Mitigation (GTM)

Design facilitation so dissent is safe, alternatives are heard, and decisions are stress-tested before approval.

**Signs of groupthink:**
- Illusion of unanimity
- Self-censorship of dissent
- Pressure on dissenters
- Mindguards who shield the group from contrary information
- Overestimation of group morality or competence

**Mitigation practices:**
- Assign a devil's advocate or contrarian role
- Use think-write-share before open discussion
- Bring in outside perspectives
- Leader speaks last
- Anonymous input rounds when hierarchy suppresses voice

## 3. Cultural Empathy

Understand how others perceive, interpret, and value the situation — across cultures, communication styles, teams, disciplines, and stakeholder roles. Cultural empathy is **empathetic inquiry**, not agreement: you seek to understand a frame before you challenge it.

**Cross-cultural communication:**
- High-context vs. low-context messages land differently (Hall)
- Power distance, uncertainty avoidance, and related defaults shape risk and authority (Hofstede — as hypothesis, not stereotype)
- Cognitive and causal styles differ across cultures (Nisbett) — disagreement may be framing, not facts

**Ask:**
- Whose cultural frame is missing from this analysis?
- What would someone with different values or communication norms conclude?
- Are we projecting our frame — or ethnocentrism — onto others?
- What empathetic questions would build understanding before judgment?

**Practice:** `/redteam culture` · Cultural Perception Framework · 6 Empathetic Questions

## 4. Self-awareness

Know your own biases, temperament, and communication patterns before challenging others.

**Practice:**
- Name your own assumptions before challenging others'
- Acknowledge when you lack domain expertise
- Separate confidence in the process from attachment to an outcome

## Ideal group process

From Russo & Schoemaker's *Winning Decisions* (used in Handbook v10):

1. **Diverge** — generate alternatives without judgment
2. **Analyze** — examine assumptions, evidence, and logic
3. **Debate** — structured challenge and discussion
4. **Converge** — narrow to actionable decisions

Critical-thinking (ACT) and group-process (GTM) techniques rotate through this loop until time runs out.

## Choosing techniques

See [ttp-catalog.md](ttp-catalog.md) and [extensions-catalog.md](extensions-catalog.md). Select by:

1. Decision type (strategic, tactical, analytical, creative)
2. Time available
3. Primary risk: flawed reasoning vs. suppressed dissent

Bias index: [bias-catalog.md](bias-catalog.md)
