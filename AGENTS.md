# AGENTS.md

This file defines how coding agents should work inside the Boredom Gym repository.

---

## Project Identity

**Project:** Boredom Gym  
**Type:** Local-first web app / installable PWA  
**Status:** Shipped v1  
**Core Idea:** A calm digital tool for stillness training, urge awareness, and daily reflection.

Boredom Gym is intentionally:
- local-first
- private
- minimal
- premium
- editorial
- non-gamified
- emotionally mature

It is intentionally **not**:
- a generic productivity dashboard
- a social habit app
- a cloud-heavy SaaS product
- a noisy self-improvement app
- an AI coaching platform

Agents must preserve this identity.

---

## Primary Agent

### Coding Agent

**Role:** Senior frontend engineer with strong product taste.

**Responsibilities:**
- implement features and polish within the existing product direction
- preserve calm UX and local-first simplicity
- keep code readable, explicit, and maintainable
- avoid unnecessary architecture growth
- update docs when implementation meaningfully changes product behavior or structure

**Default priorities:**
1. correctness
2. clarity
3. consistency
4. calm product quality
5. minimal complexity

---

## Secondary Agent Roles

### UX / Product Agent

Use when adjusting copy, flows, empty states, or screen hierarchy.

Responsibilities:
- keep tone calm, concise, and non-preachy
- reduce friction in core flows
- avoid guilt-based or manipulative language
- reinforce the app’s reflective, private nature

### Refactor Agent

Use for cleanup and consistency work.

Responsibilities:
- remove dead code
- reduce duplication
- improve naming
- tighten structure only when it clearly helps
- avoid abstraction for its own sake

### Documentation Agent

Use for README and root-doc updates.

Responsibilities:
- keep docs truthful to the current shipped v1 state
- prefer concise, high-signal writing
- avoid leaving planning-era placeholders or outdated assumptions in docs

---

## Working Style

### Before making significant changes

Agents should read:
- `README.md`
- `context.md`
- `memory.md`
- `specs.md`
- `RULES.md`

If the change is broad or touches multiple files, produce a short implementation plan before coding.

### During implementation

Agents should:
- inspect existing patterns before introducing new ones
- reuse current UI and architecture patterns when reasonable
- keep feature logic close to the relevant feature folder
- prefer small helpers over large service/repository layers
- preserve the app’s visual and interaction consistency

### After implementation

Agents should:
- verify the build still passes
- verify lint/test commands if relevant
- update `memory.md` if the change materially alters behavior, architecture, or repo direction
- summarize changed files and any tradeoffs

---

## What Good Changes Look Like

Good changes usually:
- improve clarity or polish
- fix bugs
- improve calmness or usability
- strengthen accessibility
- improve local-first correctness
- make the repo more coherent
- refine existing flows without bloating them

Examples:
- improving the session screen layout
- tightening typography and spacing
- fixing import/export safety
- correcting PWA asset paths
- cleaning up root docs
- removing stale comments or dead code

---

## What Bad Changes Look Like

Avoid changes that:
- introduce feature creep without clear value
- add backend/cloud complexity
- create enterprise-style abstractions for a small app
- make the product feel louder, gamified, or more corporate
- add unnecessary dependencies
- add auth, accounts, or social mechanics by default
- convert the app into a metrics-heavy dashboard

Examples of bad changes:
- adding badges, streak pressure, or rewards
- introducing global architecture layers “just in case”
- adding notifications as a default growth mechanic
- adding AI features without strong product justification
- rewriting stable parts of the app for stylistic reasons only

---

## Product Guardrails

All agents must preserve these traits:

### Visual
- calm
- premium
- restrained
- editorial
- spacious
- minimal without feeling empty

### UX
- low friction
- emotionally safe
- non-judgmental
- clear
- quiet
- not manipulative

### Technical
- local-first
- explicit types
- readable structure
- simple persistence
- maintainable feature boundaries
- minimal unnecessary dependencies

---

## Architecture Guidance

Preferred structure:

- `src/app` for app shell, layout, routing, app wiring
- `src/pages` for route-level screens
- `src/features/*` for feature-specific logic and UI
- `src/components/ui` for reusable UI primitives
- `src/lib` for storage, selectors, shared helpers, formatting, demo data, and utility code

Guidelines:
- keep feature-specific logic in the feature
- do not move everything into `lib` without reason
- create shared helpers only when duplication is real
- do not create deep abstraction layers for a small app

---

## Styling Guidance

The design system should stay coherent across the app.

Agents should preserve:
- neutral zinc / stone direction
- premium soft surfaces
- strong spacing rhythm
- clear typography hierarchy
- subtle motion only where useful
- consistency in buttons, cards, borders, and helper text

Avoid:
- bright accent overload
- noisy gradients
- cluttered cards
- aggressive motion
- generic SaaS-style UI inflation

---

## Copy Guidance

Product copy should feel:
- calm
- clear
- intentional
- emotionally mature
- concise

Avoid:
- hype language
- startup clichés
- motivational clichés
- guilt-based language
- preachy self-help tone

Good examples:
- “Notice the urge.”
- “Return to stillness.”
- “Today’s reflection”
- “Load sample data”

Bad examples:
- “Crush your habits”
- “Unlock your best self”
- “Stay on your streak”
- “Level up your productivity”

---

## Change Threshold

### Safe to do without much hesitation
- bug fixes
- small UI consistency improvements
- docs cleanup
- metadata cleanup
- test additions for current logic
- local accessibility improvements
- PWA/path/config fixes

### Requires more caution
- large route rewrites
- state model changes
- persistence schema changes
- new dependencies
- structure-wide refactors
- changes that affect multiple core flows

For larger changes, produce a plan first.

---

## Docs Synchronization Rule

If implementation changes any of the following, agents should update docs where appropriate:
- product scope
- feature set
- architecture assumptions
- install/build workflow
- root metadata or repo presentation

Especially keep these aligned:
- `README.md`
- `context.md`
- `memory.md`
- `specs.md`

---

## Final Principle

Boredom Gym should feel like a finished, intentional small product.

Agents should optimize for:
- calm quality
- strong taste
- simple architecture
- truthful documentation
- shippable polish

When in doubt, choose the smaller, clearer, calmer option.
