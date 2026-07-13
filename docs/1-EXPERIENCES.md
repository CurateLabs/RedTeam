<!-- LLM: This document describes the intended user experience — the behaviors the product
must deliver, framed from the user's point of view. It is the bridge between product context and
the requirements. Read PRODUCT.md first so experiences trace back to goals. Interview the
user section by section. Detailed personas and full journey maps belong in 1-JOURNEYS/ —
keep this file to the primary experiences and link out for depth. Remove LLM comments as you
go. -->

# Experiences

<!-- LLM: One-paragraph overview of what using this product is like at its best. Ask:
"If a user described this product to a friend after a great session, what would they say?" -->

_What is it like to use this, when it works well?_

## Primary users

<!-- LLM: Summarize the main user types here (1-2 sentences each) and link to full personas
in 1-JOURNEYS/. Ask the user who the product is primarily for, and whether there are distinct
secondary users. Don't build full personas here — that's 1-JOURNEYS/. -->

- **_User type_** — _who they are, what they want._ See [`1-JOURNEYS/`](1-JOURNEYS/).

## Key experiences

<!-- LLM: This is the core of the document. For each important thing a user does, write it as
a behavior-driven scenario. Interview the user for the handful of experiences that matter
most. Use Given/When/Then so they map cleanly onto behavior tests in 4-TESTING.md. Ask for
each: "What does the user want to accomplish? What's the happy path? What should NOT happen?"
Duplicate the block below per experience. -->

### _Experience name_

> **As a** _user type_
> **I want** _capability_
> **So that** _benefit_

- **Given** _starting context_
- **When** _the user acts_
- **Then** _the expected, observable outcome_

<!-- LLM: Add edge cases / things that must not happen for this experience. -->

## Experience principles

<!-- LLM: Capture the cross-cutting qualities the experience must have (e.g. fast, forgiving,
keyboard-first, works offline). Ask: "What should always be true of how this feels, across
every screen or command?" -->

- _Principle 1_
- _Principle 2_

## Out of scope

<!-- LLM: Experiences explicitly NOT being designed for, at least for now. Keep this honest;
it pairs with PRODUCT.md's non-goals. -->

- _Out-of-scope experience_
