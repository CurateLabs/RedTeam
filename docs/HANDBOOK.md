# Handbook Reference

Source lineage: U.S. Army TRADOC G-2 / UFMCS *Red Team Handbook* v9.0 (~238 pages, text layer). This document is RedTeam's **working inventory** — a superset that **updates, extends, and modifies** the original. We do not reproduce handbook text verbatim and we do not commit to staying faithful to the source wording or structure over time.

**Scope:** Applied critical thinking, cultural analysis, and organizational decision support. **Not** cybersecurity penetration testing. In this project, "TTPs" means Red Teaming tools, techniques, and practices for improving individual and group decision-making.


> **Expanded docs:** Each chapter and catalog item has its own page under [`HANDBOOK/`](HANDBOOK/README.md).


> **Expanded docs:** Each chapter and catalog item has its own page under [`HANDBOOK/`](HANDBOOK/README.md).


> **Expanded docs:** Each chapter and catalog item has its own page under [`HANDBOOK/`](HANDBOOK/README.md).


> **Expanded docs:** Each chapter and catalog item has its own page under [`HANDBOOK/`](HANDBOOK/README.md).


> **Expanded docs:** Each chapter and catalog item has its own page under [`HANDBOOK/`](HANDBOOK/README.md).

The skill implementation lives in [`skill/reference/`](../skill/reference/). This doc is the canonical concept map; the skill catalog adds command mappings and facilitation detail.

---

## Chapter 1 — Foundational Concepts

| Term | One-line definition |
|------|---------------------|
| **Red Teaming** | A structured cognitive approach that challenges plans and decisions to surface hidden risks, unseen options, and flawed assumptions before commitment. |
| **UFMCS** | University of Foreign Military and Cultural Studies — the Army program that developed and taught Red Teaming methodology. |
| **Four Principles of UFMCS** | The pillars every Red Team practice rests on (see below). |

### Four Principles of UFMCS

RedTeam treats these as the organizing frame for all commands and TTPs. We may rename, merge, or extend them as the product evolves.

| Principle | What it means in practice |
|-----------|---------------------------|
| **Applied Critical Thinking (ACT)** | Deliberately analyze how we perceive, interpret, and reason — make implicit assumptions explicit and test them. |
| **Cultural Empathy** | Understand how others' cultural frames shape what they see, value, and fear; avoid projecting your own frame. |
| **Groupthink Mitigation & Decision Support (GTM)** | Design group process so dissent is safe, alternatives are generated, and decisions are stress-tested before approval. |
| **Self-Awareness & Reflection** | Know your own biases, temperament, and communication patterns before trying to challenge others'. |

**RedTeam command alignment:** `challenge`, `critique`, `review` span all four; `frame` and `assumptions` lean ACT; `groupthink` and `devils-advocate` lean GTM; cultural tools map to future `culture` commands; introspection informs facilitator behavior in every session.

---

## Chapter 2 — Self-Awareness & Reflection

| Term | One-line definition |
|------|---------------------|
| **Self-Authorship** | Developmental capacity to internally define beliefs, identity, and relationships rather than relying on external validation. Dimensions: cognitive, intrapersonal, interpersonal. |
| **Temperament / Personality Dimensions®** | Jungian-based typology (e.g. MBTI lineage) for understanding how people prefer to perceive and decide — useful for anticipating friction in groups. |
| **Emotional Intelligence Framework** | Self-competencies (self-awareness, self-regulation, motivation) and social competencies (empathy, social skills) that affect how we receive and deliver challenge. |
| **Interpersonal Communication** | How messages are sent, received, and distorted — foundation for productive devil's advocacy without personal attack. |
| **Interpersonal Conflict** | Patterns of disagreement escalation; Red Teamers must separate task conflict (healthy) from relationship conflict (destructive). |
| **Introspection** | Deliberate inward examination — journaling, reflection time, structured exercises. |
| **Who Am I?** | Introspective exercise: articulate identity, values, and biases before engaging others' frames. |

**RedTeam note:** We deprioritize military-student journaling requirements but keep introspection as a facilitator and solo-practitioner habit. Consider running a lightweight Who Am I? before high-stakes `review` sessions.

---

## Chapter 3 — Cultural Empathy

| Term | One-line definition |
|------|---------------------|
| **Ethnocentrism** | Judging other cultures by the standards of one's own — the primary bias cultural empathy counteracts. |
| **Operating Landscape Map** | Multi-domain map of the operating environment: power, security, economy, society, information, infrastructure, physical context, and time — systems lens for complex environments. |
| **Kluckhohn's Six Dimensions** | Age-old cultural variation axes (e.g. human nature, man-nature relationship, time, activity, relational, space) for comparing cultural defaults. |
| **Nisbett on Cognitive Differences** | How Western vs. East Asian (and other) cognitive styles differ in attention, causality, and holism — affects negotiation and planning assumptions. |
| **Hall on Communication Patterns** | High-context vs. low-context communication; use of space and time — explains why the same words land differently across cultures. |
| **Hofstede's Country Profiles** | Power distance, uncertainty avoidance, individualism/collectivism, masculinity/femininity, long-term orientation — comparative national culture indices. |
| **Five Operational Cultural Dimensions** | Army operationalization of cultural factors for planning in foreign environments. |
| **Onion Model** | Culture manifests in layers: artifacts → espoused values → underlying assumptions; peel outward-in to find drivers. |
| **Functional Systems Approach** | Analyze how cultural subsystems (political, economic, social, etc.) interact functionally rather than as isolated lists. |
| **Cultural Perception Framework** | Structured method to surface how different actors perceive the same situation through their cultural lens. |

**RedTeam note:** Operating Landscape Map and similar framing tools are **optional lenses** — valuable for geopolitical and org-political analysis, not required for product or business red teams. We generalize "cultural empathy" to include organizational subcultures, discipline silos, and stakeholder worldviews.

---

## Chapter 4 — Applied Critical Thinking

| Term | One-line definition |
|------|---------------------|
| **Applied Critical Thinking (ACT)** | Deliberate use of tools and methods to deconstruct arguments, challenge assumptions, examine analogies, and explore alternatives under time pressure. |
| **The Time Factor** | Decisions often lack time for full process — ACT includes reflexive shortcuts and scalable tools matched to available minutes. |
| **Creating Space and Time** | Leader responsibility to protect reflection time; without it, groups default to autopilot and assumption-fill. |

**RedTeam commands:** `challenge`, `assumptions`, `ach`, `5-whys`, `frame`, `futures`, `critique`, `review`.

---

## Chapter 5 — Groupthink Mitigation & Decision Support

| Term | One-line definition |
|------|---------------------|
| **Group Dynamics** | How groups form norms, status hierarchies, and cohesion — the substrate groupthink grows on. |
| **Groupthink** (Irving Janis) | Collective pressure for conformity that suppresses dissent and produces overconfident, under-examined decisions. |
| **Groupthink Mitigation (GTM)** | Deliberate practices that force independent thinking before consensus and protect dissenting voices. |
| **Confirmation bias** | Seeking and overweighting evidence that confirms what we already believe — ACT and ACH directly counter this. |
| **Decision Support** | Red Team role: improve the quality of the decision, not own the outcome — inform, don't replace, the decider. |

**Symptoms to watch for:** illusion of unanimity, self-censorship, mindguards, illusion of invulnerability, collective rationalization.

**RedTeam commands:** `groupthink`, `devils-advocate`, `ideate`, `converge`, `review`.

---

## Chapter 6 — Thinking Creatively

The creative thought process is a **sequence**, not a single brainstorm. RedTeam separates divergent and convergent phases explicitly (`ideate` → `converge`).

| Stage | One-line definition |
|-------|---------------------|
| **Problem-Finding** | Decide whether you're solving the right problem — reframe before generating solutions. |
| **Preparation** | Gather information, constraints, and diverse inputs before ideation. |
| **Ideation** | Generate volume and variety of options without premature judgment. |
| **Idea Verification** | Test ideas against evidence, feasibility, and assumptions — not the same as killing ideas early in ideation. |
| **Communication** | Package the outcome so decision-makers can act — clarity and narrative matter. |

**RedTeam commands:** `ideate`, `frame` (problem-finding), `converge`, `critique` (verification).

---

## Chapter 7 — Tools, Techniques & Practices (TTP Catalog)

The handbook's core inventory. Most tools support **ACT**, **GTM**, or **both** — see the ACT–GTM matrix concept. Tools are meant to **sequence**, not stand alone.

**Legend:** ACT = Applied Critical Thinking · GTM = Groupthink Mitigation · **Command** = `/redteam` shortcut when implemented

### Facilitation & group structure

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **ACT–GTM Matrix** | Meta | Table matching tools to ACT, GTM, or both — pick and sequence by situation. | `tools` |
| **Ideal Group Process** | Both | Diverge → analyze → debate → converge loop with rotating ACT/GTM tools. | `groupthink` |
| **1-2-4-Whole Group** | GTM | Individual → pairs → fours → whole group; staged inclusion of every voice. | `groupthink` |
| **1 on 1, 2 on 2, Exchange Emissaries** | GTM | Subgroup dialog with emissaries cross-pollinating between groups. | `groupthink` |
| **Circle of Voices** | GTM | Round-robin: each speaks once before anyone speaks twice. | `groupthink` |
| **Circular Response** | GTM | Structured response pattern ensuring respectful listening and ordered contribution. | `groupthink` |
| **Fishbowl** | GTM | Inner group discusses, outer observes; swap roles to surface dynamics. | `groupthink` |
| **Think-Write-Share** | GTM | Silent individual write before any discussion — defeats anchoring. | `groupthink` |
| **Troika Consulting** | GTM | Client + three consultants rotate; client listens while consultants discuss. | `groupthink` |
| **Gallery Walk** | GTM | Post ideas; participants silently annotate and build on others' work. | `ideate` |
| **Dot Voting** | GTM | Allocate limited votes across options for quick prioritization. | `converge` |

### Divergent & generative

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **Brainstorming** | GTM | Volume-first idea generation with deferred judgment. | `ideate` |
| **5 Will Get You 25** | GTM | Each person generates five ideas; combine for quantity before quality. | `ideate` |
| **Yes, And…** | GTM | Build on prior ideas without blocking — improv rule for ideation phases. | `ideate` |
| **Outside-In Thinking** | ACT | Import solutions or frames from unrelated domains. | `ideate` |
| **Mind Mapping** | ACT | Branching visual map from a central concept. | `ideate` |
| **String of Pearls** | ACT | Sequential "what if" chain along a narrative thread. | `ideate` |
| **What If? Analysis** | ACT | Explore consequences when a key variable changes. | `ideate` |
| **My 15%** | GTM | Each person owns a slice of the problem they can influence — reduces diffusion of responsibility. | `ideate` |
| **Appreciative Interview** | GTM | Explore what works before fixing what doesn't — expands the solution space. | `ideate` |

### Analytical & critical

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **5 Whys** | ACT | Iterative why-questions to reach root causes and hidden assumptions. | `5-whys` |
| **Analysis of Competing Hypotheses (ACH)** | ACT | Matrix scoring evidence against mutually exclusive hypotheses — minimize confirmation bias. | `ach` |
| **Key Assumptions Check** | ACT | List what must be true for the plan to work; flag critical unvalidated beliefs. | `assumptions` |
| **Assumption Sensitivity Analysis** | ACT | Rank assumptions by what happens if each is wrong (collapse vs. absorb). | `assumptions` |
| **Argument Deconstruction** | ACT | Separate premises, inference, and conclusion; test each link. | `challenge` |
| **Frame Audit** | ACT | Examine the lens defining the problem — scope, metrics, causality, values. | `frame` |
| **4 Ways of Seeing** | ACT | Reframe as problem, polarity, pattern, or opportunity. | `frame` |
| **Problem Restatement** | ACT | Rephrase the problem multiple ways before solving. | `frame` |
| **6 Words** | Both | Distill the issue to six words — forces clarity. | `challenge` |
| **SEE-I** (State, Elaborate, Exemplify, Illustrate) | ACT | Four-step clarification before debate. | `challenge` |
| **Analogy Suitability Analysis** | ACT | Test whether the analogy in use actually fits. | `challenge` |
| **Logic of Failure** | ACT | How can well-intentioned system logic still produce failure? | `challenge` |
| **Critical Variables (CVs)** | ACT | Dynamic factors that drive outcomes — often mapped to an Operating Landscape Map. | `assumptions` |
| **Who Else?** | ACT | Whose perspective is missing from this analysis? | `challenge` |
| **Who Am I?** | ACT | Introspective identity/bias surfacing before engaging others. | `init` |

### Adversarial & decision gates

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **Devil's Advocacy** | Both | Structured strongest-case against the prevailing view. | `devils-advocate` |
| **Premortem Analysis** | ACT | Assume failure; work backward to causes and preventions. | `premortem` |
| **Team A / Team B Analysis** | Both | Two teams argue opposing options, then swap and defend the other side. | `devils-advocate` |
| **BATNA** | ACT | Best Alternative to a Negotiated Agreement — know your walk-away before negotiating. | `converge` |
| **Divergence–Convergence** | Both | Explicit separate phases for generating vs. narrowing options. | `ideate` / `converge` |

### Strategic & futures

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **Alternative Futures Analysis** | ACT | Multiple plausible futures against which to stress-test the plan. | `futures` |
| **Indicators / Signposts of Change** | ACT | Early warnings that a given future is emerging. | `futures` |
| **High Impact / Low Probability Analysis** | ACT | Tail risks — unlikely but catastrophic scenarios. | `futures` |
| **SWOT Analysis** | ACT | Strengths, Weaknesses, Opportunities, Threats for an option or entity. | `converge` |
| **Stakeholder Mapping** | Both | Who decides, who influences, who blocks, who suffers consequences. | `review` |
| **Shifting the Burden** | ACT | Push past the obvious fix to ask who or what actually bears the structural load. | `assumptions` |

### Cultural, deception & negotiation

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **Cultural Perception Framework** | ACT | How different cultural actors perceive the same events. | `frame` |
| **Onion Model** | ACT | Peel cultural layers from artifacts to deep assumptions. | `frame` |
| **6 Empathetic Questions** | Both | Questions that build understanding of another's frame without judgment. | `challenge` |
| **Deception Detection** | ACT | MOM-POP-EVE-MOSES checklist + ACH when active deception is plausible. | `ach` |
| **TRIZ** | ACT | Systematic inventive problem-solving from contradictions (Russian engineering tradition). | `ideate` |

### Communication & narrative

| TTP | ACT/GTM | One-line definition | Command |
|-----|---------|---------------------|---------|
| **Storytelling** | Both | Narrative form to communicate findings and alternatives persuasively. | `critique` |
| **State–Elaborate–Exemplify–Illustrate** | ACT | See SEE-I above. | `challenge` |

---

## RedTeam superset & modifications

We explicitly reserve the right to:

| Area | Our stance |
|------|------------|
| **Terminology** | Plain-language aliases (e.g. "stress-test" alongside "premortem"); drop military jargon where it blocks civilian use. |
| **Scope** | Generalize operational culture tools to org/product/stakeholder contexts. |
| **TTP set** | Add techniques from negotiation, product discovery, pre-mortems (Klein), Kahneman, Minto, etc. |
| **Commands** | Not every handbook TTP gets a dedicated `/redteam` command — some roll up under `challenge`, `ideate`, `tools`. |
| **Sequencing** | Publish recommended tool chains (e.g. Frame Audit → Assumptions → Premortem → Review) independent of handbook chapter order. |
| **Fidelity** | Update definitions and methods as we learn what works in AI-assisted facilitation. |

### Planned extensions (not in v9)

**Implemented in v0.2** — see [HANDBOOK/chapters/08-redteam-extensions.md](HANDBOOK/chapters/08-redteam-extensions.md) and `skill/reference/extensions-catalog.md`.

| Extension | Command |
|-----------|---------|
| Outside view / base rates | `outside-view` |
| Inversion | `invert` |
| Incentives / Goodhart | `incentives` |
| Ladder of inference | `ladder` |
| Steelman | `steelman` |
| Calibration | `calibrate` |
| Playbooks | `sequence` |
| Worldview mapping | `culture` |
| AI quality check | `ai-check` |
| Launch readiness | `launch` |
| RFC review | `rfc` |
| Misuse / abuse cases | `misuse` |
| Reversibility | `reversibility` |
| Decision record | `record` |
| Cognitive bias catalog | [bias-catalog.md](../skill/reference/bias-catalog.md) |
| AI anti-patterns | [ai-anti-patterns.md](../skill/reference/ai-anti-patterns.md) |
| Decision record template | [decision-record-template.md](../skill/reference/decision-record-template.md) |

**Also extended in existing commands:** pre-parade (`premortem`), Cynefin + polarity (`frame`), discovery-driven planning (`assumptions`), kill criteria (`review`), second-order effects (`challenge`), narrative audit (`critique`).

---

## Source & attribution

Derived from *The Red Team Handbook*, Version 9.0, TRADOC G-2, UFMCS. **Extended** with decision science, product, and AI-quality techniques in v0.2. See [NOTICE.md](../NOTICE.md).

Implementation: [`skill/reference/ttp-catalog.md`](../skill/reference/ttp-catalog.md) · [`skill/reference/extensions-catalog.md`](../skill/reference/extensions-catalog.md) · Commands: [`skill/SKILL.md`](../skill/SKILL.md)
