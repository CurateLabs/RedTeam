---
type: concept
title: Design
source: /DESIGN/
path: /DESIGN/
updated: 2026-07-10
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-07-10T19:47:58.915Z"
---
<!-- LLM: This document captures the product's design context: brand, content, interaction,
accessibility, and component conventions that make the experience coherent. It is also
discoverable by tools that look for DESIGN.md. Read PRODUCT.md and 1-EXPERIENCES.md first.
Interview the user about any existing brand, UI kit, design system, Storybook, tokens,
screenshots, Figma files, terminal conventions, docs standards, or accessibility bar. Keep
implementation mechanics in 3-ENGINEERING/ unless they are necessary to explain a design
rule. Remove LLM comments as you go. -->

# Design

<!-- LLM: One short paragraph. Describe the role this design context plays for the project.
For services or CLIs, cover terminal/docs/API experience. For user-facing products, cover
visual and interaction experience too. -->

_What should stay consistent across the product experience?_

## Design Principles

<!-- LLM: Capture 3-6 principles that guide product decisions and UX trade-offs. These should
connect to the experience principles in 1-EXPERIENCES.md. -->

- **_Principle name_** - _what it means in practice._

## Brand And Voice

<!-- LLM: Document naming, tone, writing style, terminology, and visible personality. Include
words to use/avoid when that matters. -->

- **Tone:** _how the product should sound._
- **Terminology:** _preferred words and names._
- **Writing rules:** _short rules for labels, empty states, errors, docs, or prompts._

## Visual And Content Style

<!-- LLM: Capture visual/content rules that apply to the product. If the project has no
visual UI, state what is not applicable and document terminal, API, docs, or generated
artifact style instead. Link to tokens, CSS, Figma, brand assets, or Storybook when
available. -->

- **Color:** _palette, semantic usage, contrast expectations._
- **Typography:** _font choices, scale, hierarchy._
- **Spacing & layout:** _grid, density, alignment, rhythm._
- **Iconography & imagery:** _style, sourcing, usage rules._
- **Content structure:** _headings, tables, examples, screenshots, diagrams, or docs rules._

## Interaction Patterns

<!-- LLM: Document common interaction rules: navigation, forms, loading, empty/error/success
states, keyboard behavior, CLI output, API ergonomics, motion, and progressive disclosure. -->

- **Navigation:** _how users move through the product._
- **Controls:** _buttons, inputs, menus, toggles, commands, or API calls._
- **States:** _loading, empty, error, success, disabled._
- **Motion:** _animation principles or "none" if motion is not part of the experience._

## Components And Patterns

<!-- LLM: List reusable components, UI patterns, command patterns, API patterns, or docs
patterns. Link to code, Storybook, design files, or implementation docs where they exist. -->

| Component / pattern | Use it for | Notes / source |
|---|---|---|
| _Name_ | _When to use it_ | _Link or rule_ |

## Accessibility

<!-- LLM: Capture the accessibility bar. Include keyboard behavior, focus, contrast, reduced
motion, semantic HTML, screen-reader expectations, CLI equivalents, or docs accessibility. -->

- _Accessibility rule or target._

## References

<!-- LLM: Link the source of truth for design assets and implementation surfaces. Delete this
section if there are no references yet. -->

- _Figma / Storybook / token file / component directory / brand asset._
