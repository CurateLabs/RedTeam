<!-- LLM: This document turns the experiences (1-EXPERIENCES.md) into concrete, checkable
requirements. Read PRODUCT.md and 1-EXPERIENCES.md first so every requirement traces back
to an experience or goal. Interview the user to elicit requirements, then write each as a
testable statement. Give every requirement a stable ID so 4-TESTING.md and ADRs can reference
it. Remove LLM comments as you complete each section. -->

# Requirements

<!-- LLM: One-paragraph summary of the scope these requirements cover. -->

_What must the system do, at a high level?_

## Functional requirements

<!-- LLM: The behaviors the system must exhibit. Interview the user, then write each as a
single testable "the system shall..." statement with a stable ID. Group by area if helpful.
Link each back to the experience it serves. Ask probing questions: inputs, outputs, edge
cases, error handling, permissions. -->

| ID | Requirement | Traces to |
|---|---|---|
| FR-1 | _The system shall …_ | _Experience / goal_ |
| FR-2 | _The system shall …_ | _Experience / goal_ |

## Non-functional requirements

<!-- LLM: Qualities and constraints rather than behaviors — performance, reliability,
security, accessibility, portability, cost. Ask the user for concrete targets where possible
("responds within Xms", "runs offline", "supports macOS and Linux"). -->

| ID | Requirement | Target / constraint |
|---|---|---|
| NFR-1 | _Performance / reliability / security / …_ | _Measurable target_ |
| NFR-2 | _…_ | _…_ |

## Constraints & assumptions

<!-- LLM: Capture fixed constraints (tech, regulatory, timeline, budget) and assumptions the
requirements rely on. Ask: "What is non-negotiable? What are we taking for granted that, if
wrong, would change these requirements?" -->

- **Constraint:** _…_
- **Assumption:** _…_

## Dependencies

<!-- LLM: External systems, services, libraries, or teams this depends on. Note anything that
could block delivery. Remove if none. -->

- _Dependency — why it matters_

## Open questions

<!-- LLM: Track unresolved requirement questions here rather than guessing. Each should name
who needs to answer it. Clear them as they're resolved. -->

- _Question — owner_
