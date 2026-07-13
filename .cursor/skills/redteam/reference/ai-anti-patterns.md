# AI Anti-Patterns

RedTeam superset — failure modes specific to AI-assisted red teaming and analysis. Counter with `/redteam ai-check`.

## Agreement & tone

| Anti-pattern | Tell | Fix |
|--------------|------|-----|
| **Sycophancy** | "Great question!", uncritical praise | Mirror check; neutral tone rewrite |
| **Polite agreement** | Refines user's frame without challenging premises | List unchallenged assumptions |
| **Premature synthesis** | Single balanced paragraph before real opposition | Forced dissent (two verdicts first) |
| **User mirroring** | Repeats user's jargon and conclusions as facts | Grounding audit |

## Reasoning quality

| Anti-pattern | Tell | Fix |
|--------------|------|-----|
| **Shallow steel-man** | Weak opposition summarized to dismiss easily | Run `steelman` before `devils-advocate` |
| **Straw man opposition** | Attacks caricature of alternative | Steelman both sides |
| **False balance** | Two sides when evidence is asymmetric | State asymmetry explicitly |
| **Confident guessing** | Specific numbers/dates without source | `calibrate` — downgrade to Guess |
| **Phantom citations** | "Studies show…" without study | Grounding — remove or verify |

## Process

| Anti-pattern | Tell | Fix |
|--------------|------|-----|
| **Checklist theater** | Runs steps without changing conclusion | Require verdict change or explicit "unchanged because" |
| **Single-tool reflex** | Only premortem/challenge regardless of fit | `sequence` playbook |
| **Context amnesia** | Ignores CONTEXT.md or prior reviews | Run `context.mjs`; read `.redteam/reviews/` |
| **Blocking on init** | Refuses scoped review without CONTEXT | Skill rule: chat input is valid context |

## Group simulation

| Anti-pattern | Tell | Fix |
|--------------|------|-----|
| **Fake dissent** | Invented stakeholder quotes | Label simulated voices; ask user for real dissent |
| **Homogeneous roles** | All simulated voices agree | Culture + emissary-style separation |

## Hard rule

If `ai-check` rating is **Sycophantic** or grounding fails on critical claims, verdict must be **Do not use for decision** until human verification.
