# TTP Catalog — Handbook v10

Tools, techniques, and practices from ***The Red Team Handbook*, Version 10**. Most support **ACT**, **GTM**, or both. See [lineage.md](lineage.md).

**Canonical handbook:** [The Red Team Handbook, Version 10](https://curatelabs.github.io/RedTeam/handbook/) — chapter index and concept map. This file is the facilitation-oriented subset with command mappings.

**Legend:** ACT = Applied Critical Thinking · GTM = Groupthink Mitigation

## Quick reference → command mapping

| Handbook technique | `/redteam` command |
|--------------|------------------|
| Premortem Analysis | `premortem` |
| Analysis of Competing Hypotheses | `ach` |
| Key Assumptions Check / Assumption Sensitivity / Shifting the Burden | `assumptions` |
| Devil's Advocacy | `devils-advocate` |
| 5 Whys | `5-whys` |
| Alternative Futures Analysis | `futures` |
| Frame Audit | `frame` |
| Ideal Group Process / GTM tools | `groupthink` |
| Divergent tools | `ideate` |
| Convergent tools | `converge` |
| General adversarial review | `challenge` |

---

## Groupthink Mitigation (GTM)

### 1-2-4-Whole Group
**ACT/GTM:** GTM | **Time:** 30–60 min | **Group:** 4+

Iterative: individual → pairs → fours → whole group. Everyone's voice enters before groupthink sets in.

1. **One:** Individual reflection, written pre-commitment
2. **Two:** Pairs share and refine
3. **Four:** Pairs combine; identify biases and gaps
4. **Whole:** Full group synthesis

### 1 on 1, 2 on 2, Exchange Emissaries
**ACT/GTM:** GTM | **Time:** 45–90 min | **Group:** 8+

Like 1-2-4 but emissaries carry views between subgroups for greater divergence.

### Circle of Voices
**ACT/GTM:** GTM | **Time:** 15–30 min

Structured round-robin; each person speaks once before anyone speaks twice.

### Fishbowl
**ACT/GTM:** GTM | **Time:** 30–60 min

Inner circle discusses while outer circle observes; swap roles. Surfaces dynamics.

### Think-Write-Share
**ACT/GTM:** GTM | **Time:** 10–20 min

Silent writing before any discussion. Prevents anchoring on first speaker.

### Troika Consulting
**ACT/GTM:** GTM | **Time:** 20–30 min

Three-person consulting rotation: client presents, consultants discuss while client listens.

### Yes...And
**ACT/GTM:** GTM | **Time:** ongoing

Build on ideas without blocking. Divergent phase only.

### Dot Voting
**ACT/GTM:** GTM | **Time:** 10 min

Each participant allocates dots across options. Quick convergence.

### Gallery Walk
**ACT/GTM:** GTM | **Time:** 20–40 min

Ideas posted; participants silently annotate and build on others' work.

---

## Applied Critical Thinking (ACT)

### 5 Whys
**ACT/GTM:** ACT | **Time:** 15–30 min

Iterative why questioning to root causes. → `5-whys`

### Premortem Analysis
**ACT/GTM:** ACT | **Time:** 30–60 min

Imagine failure, work backward. → `premortem`

### Analysis of Competing Hypotheses (ACH)
**ACT/GTM:** ACT | **Time:** 60–180 min

Matrix of evidence vs. hypotheses. → `ach`

### Devil's Advocacy
**ACT/GTM:** ACT/GTM | **Time:** 20–45 min

Structured opposition to prevailing view. → `devils-advocate`

### Key Assumptions Check
**ACT/GTM:** ACT | **Time:** 30–60 min

Surface and test what must be true. → `assumptions`

### Assumption Sensitivity Analysis
**ACT/GTM:** ACT | **Time:** 30–60 min

Which assumptions, if wrong, collapse the plan? → `assumptions`

### Frame Audit
**ACT/GTM:** ACT | **Time:** 30–45 min

Examine the lens shaping the problem. → `frame`

### Alternative Futures Analysis
**ACT/GTM:** ACT | **Time:** 60–120 min

Multiple plausible futures for contingency planning. → `futures`

### 4 Ways of Seeing
**ACT/GTM:** ACT | **Time:** 20–30 min

Reframe as problem, polarity, pattern, or opportunity.

### Problem Restatement
**ACT/GTM:** ACT | **Time:** 15–30 min

Rephrase the problem multiple ways before solving.

### 6 Words
**ACT/GTM:** ACT/GTM | **Time:** 5–10 min

Distill issue to six words. Forces clarity.

### SWOT Analysis
**ACT/GTM:** ACT | **Time:** 30–60 min

Strengths, Weaknesses, Opportunities, Threats. → `converge`

### Outside-In Thinking
**ACT/GTM:** ACT | **Time:** 20–40 min

How would an outsider from another domain approach this?

### Mind Mapping
**ACT/GTM:** ACT | **Time:** 20–40 min

Branching visual exploration of a concept.

### Logic of Failure
**ACT/GTM:** ACT | **Time:** 30–60 min

How could the logic of this system produce failure despite good intentions?

### Deception Detection
**ACT/GTM:** ACT | **Time:** 60+ min

MOM-POP-EVE-MOSES checklist + ACH for deception scenarios.

### Indicators / Signposts of Change
**ACT/GTM:** ACT | **Time:** 30 min

Early warnings that a scenario is unfolding.

### High Impact / Low Probability Analysis
**ACT/GTM:** ACT | **Time:** 30 min

Tail risks that are unlikely but catastrophic.

### Critical Variables
**ACT/GTM:** ACT | **Time:** 20–30 min

Dynamic factors that drive outcomes — map across an [Operating Landscape Map](operating-landscape-map.md) (power, economy, society, information, infrastructure, environment, time).

### Stakeholder Mapping
**ACT/GTM:** ACT/GTM | **Time:** 30 min

Who cares, who decides, who can block?

### Team A / Team B Analysis
**ACT/GTM:** ACT/GTM | **Time:** 45–60 min

Two teams argue competing options, then swap and defend the other side.

### Appreciative Interview
**ACT/GTM:** GTM | **Time:** 30 min

Explore what works before fixing what doesn't.

### 6 Empathetic Questions
**ACT/GTM:** ACT/GTM | **Time:** 15 min

Questions that build understanding of another's frame.

### Cultural Perception Framework
**ACT/GTM:** ACT | **Time:** 45+ min

How do cultural lenses shape perception of the situation?

### SEE-I (State, Elaborate, Exemplify, Illustrate)
**ACT/GTM:** ACT | **Time:** 10–15 min

Clarify concepts before debating them.

### String of Pearls
**ACT/GTM:** ACT | **Time:** 20–30 min

Sequential "what if" exploration.

### What If? Analysis
**ACT/GTM:** ACT | **Time:** 20–40 min

Explore consequences of a key variable changing.

### Who Else? Analysis
**ACT/GTM:** ACT | **Time:** 15 min

Whose perspective is missing from this analysis?

### Analogy Suitability Analysis
**ACT/GTM:** ACT | **Time:** 20 min

Is the analogy we're using actually apt?

### Argument Deconstruction
**ACT/GTM:** ACT | **Time:** 20–30 min

Separate premises, logic, and conclusion.

### Brainstorming
**ACT/GTM:** GTM | **Time:** 20–40 min

Volume-first idea generation. → `ideate`

### 5 Will Get You 25
**ACT/GTM:** GTM | **Time:** 20 min

Each person generates 5 ideas; combine for 25+. → `ideate`

### Divergent-Convergent
**ACT/GTM:** ACT/GTM | **Time:** 60+ min

Full cycle: generate, then narrow. → `ideate` then `converge`

### Ideal Group Process
**ACT/GTM:** ACT/GTM | **Time:** 60–180 min

Diverge → analyze → debate → converge with rotating critical-thinking and group-process tools. → `groupthink`

### BATNA (Best Alternative to a Negotiated Agreement)
**ACT/GTM:** ACT | **Time:** 30–45 min

Identify your best walk-away before negotiating; refuse deals worse than your BATNA. → `converge`

### TRIZ
**ACT/GTM:** ACT | **Time:** 45–90 min

Resolve contradictions in system design through systematic inventive principles. → `ideate`

### Who Am I?
**ACT/GTM:** ACT | **Time:** 20–30 min

Introspective exercise surfacing identity, values, and biases before engaging others. → `init`

### My 15%
**ACT/GTM:** GTM | **Time:** 15–20 min

Each participant owns the slice of the problem they can directly influence. → `ideate`

### Circular Response
**ACT/GTM:** GTM | **Time:** 15–30 min

Structured speaking order with respectful listening — everyone contributes once per round. → `groupthink`

### Shifting the Burden
**ACT/GTM:** ACT | **Time:** 20–30 min

Push past the obvious fix to ask who or what structurally bears the load. → `assumptions`

---

## RedTeam extensions (v0.2)

See [extensions-catalog.md](extensions-catalog.md) for commands: `outside-view`, `invert`, `incentives`, `ladder`, `steelman`, `calibrate`, `sequence`, `culture`, `ai-check`, `launch`, `rfc`, `misuse`, `reversibility`, `record`.

### Extension TTPs (embedded in commands above)

| TTP | Command |
|-----|---------|
| Reference class forecasting | `outside-view` |
| Pre-parade | `premortem` |
| Cynefin domain check | `frame` |
| Polarity mapping | `frame` |
| Discovery-driven planning | `assumptions` |
| Kill criteria | `review`, `record` |
| Second-order effects | `challenge` |
| Narrative vs evidence audit | `critique` |
| Decision journal | `record` |

Reference: [bias-catalog.md](bias-catalog.md) · [ai-anti-patterns.md](ai-anti-patterns.md)

---

## Lineage

Part of [*The Red Team Handbook*, Version 10](https://curatelabs.github.io/RedTeam/handbook/). RedTeam skill implementation. Predecessor: UFMCS v9.0. See [lineage.md](lineage.md) and [`docs/SOURCE.md`](../../docs/SOURCE.md).
