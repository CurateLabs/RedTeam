# Chat-only review

## Observed need and evidence

AI assistants default to agreement. Users need structured adversarial review without installing anything or maintaining project files. This is the primary onboarding path and the fastest proof of value.

## Desired user and business outcome

A user pastes a plan or decision into chat, runs `/redteam challenge` (or another command), and receives a structured review they can act on before committing.

## Users and context

Decision-makers, strategists, and AI power users who want immediate challenge output with no `.redteam/` setup.

## Current journey

1. User has a plan, memo, or decision draft
2. User invokes `/redteam <command>` with the target in the message
3. Model loads `skill/SKILL.md` and the command reference flow
4. Model returns structured output in chat

## Opportunity and hypothesis

If challenge output is structured (assumptions, risks, verdict, follow-ups) without any install step, users will adopt RedTeam before anchoring a project directory.

## Intended behavior

The harness loads the skill and reference flow; the model produces adversarial review output aligned with the command template.

## Given / When / Then scenarios

- **Given** the RedTeam skill is available in the harness and the user has not run `/redteam init`
- **When** the user runs `/redteam challenge <plan>`
- **Then** the model produces structured review output (assumptions surfaced, risks ranked, verdict, follow-ups) without requiring CONTEXT.md

- **Given** CONTEXT.md is missing
- **When** the user runs any chat-only command
- **Then** the review proceeds using only the pasted target and skill reference — it must not error or block

## Constraints and domain language

- Red teaming here means **applied critical thinking**, not cybersecurity penetration testing
- Commands route through `/redteam <command>`; shortcuts may be pinned with `/redteam pin`

## Success signals and telemetry

- User completes a review in one session without setup
- Output includes actionable follow-ups (qualitative review of command transcripts and `.redteam/reviews/` when saved manually)

## Open questions

- Which commands are most used in pure chat vs project-anchored mode? — maintainers

## Related requirements, tests, architecture, and ADRs

- Requirements: FR-1, FR-2
- Architecture: [Chat-only review flow](../engineering/ARCHITECTURE.md#chat-only-review)
- Tests: [`engineering/TESTING.md`](../engineering/TESTING.md)
