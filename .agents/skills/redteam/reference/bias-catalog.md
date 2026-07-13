# Cognitive Bias Catalog

RedTeam superset reference. Maps common biases to counter-techniques (Handbook v9 + decision science). Use with `/redteam tools` or when a bias is suspected.

| Bias | Symptom | Counter-technique | Command |
|------|---------|-------------------|---------|
| **Confirmation bias** | Seeking evidence that fits | ACH, Devil's advocacy | `ach`, `devils-advocate` |
| **Anchoring** | Over-weighting first number/frame | Think-write-share, Outside view | `groupthink`, `outside-view` |
| **Planning fallacy** | Underestimating time/cost | Outside view, Reference class | `outside-view` |
| **Optimism bias** | Best-case as likely | Premortem, Invert | `premortem`, `invert` |
| **Uniqueness bias** | "This time is different" | Outside view, Base rates | `outside-view` |
| **Sunk cost** | Throwing good after bad | Reversibility, Review kill criteria | `reversibility`, `review` |
| **Groupthink** | Consensus without dissent | GTM tools, Devil's advocate | `groupthink`, `devils-advocate` |
| **Availability** | Recent/vivid = likely | Outside view, Calibrate | `outside-view`, `calibrate` |
| **Halo effect** | One trait colors all | Steelman, Ladder | `steelman`, `ladder` |
| **Fundamental attribution** | Their character, our situation | Culture, Ladder | `culture`, `ladder` |
| **Narrative fallacy** | Coherent story ≠ true | Calibrate, ACH | `calibrate`, `ach` |
| **Overconfidence** | High certainty, thin evidence | Calibrate, Outside view | `calibrate`, `outside-view` |
| **Survivorship bias** | Only winners visible | Outside view, Invert | `outside-view`, `invert` |
| **Goodhart / metric gaming** | Optimizing the measure | Incentives | `incentives` |
| **Status quo bias** | Default = safe | Invert, Ideate | `invert`, `ideate` |
| **Authority bias** | Boss said so | Think-write-share, Circle of voices | `groupthink` |
| **Framing effect** | Wording changes choice | Frame audit, 4 Ways of Seeing | `frame` |
| **Escalation of commitment** | Doubling down | Ladder, Review | `ladder`, `review` |

## AI-specific biases (see ai-anti-patterns.md)

| Pattern | Counter |
|---------|---------|
| Sycophancy | `ai-check` |
| False balance | `ai-check` dissent |
| Invented grounding | `ai-check` grounding |
| Shallow steel-man | `steelman` |

## Usage

When you spot a bias in analysis, name it, cite the row, and run the recommended command before continuing.
