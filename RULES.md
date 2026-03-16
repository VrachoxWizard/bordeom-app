# RULES

These rules apply to every task in this Antigravity workspace.
The goal is to keep the project calm, maintainable, and aligned with the product vision.

## 1. Product Identity

This product is **Boredom Gym**, not a generic productivity app.
Protect these qualities in every change:

- quiet
- minimal
- reflective
- local-first
- emotionally mature
- polished
- intentionally constrained

If a proposed feature weakens the identity, simplify it.

---

## 2. Safety & Autonomy

### Never do the following without explicit user approval

- run destructive shell commands
- remove large folders or rewrite the project structure aggressively
- change deployment or CI/CD configuration
- introduce paid third-party services
- add authentication or backend infrastructure for convenience only
- perform broad visual redesigns without a plan

### For broad work

For multi-file features, refactors, or architecture changes:

1. create an **Implementation Plan Artifact** first
2. list files to be changed
3. explain assumptions and risks
4. wait for approval before major execution

---

## 3. Coding Standards

### Language & Typing

- Use TypeScript for all new code
- Use strict typing
- Avoid `any` unless absolutely necessary and justified with a short comment
- Prefer explicit domain types over loose object shapes

### Code Quality

- Prefer readability over cleverness
- Prefer small functions over giant functions
- Prefer feature folders over dumping everything in `components/`
- Keep components focused on presentation when possible
- Move state and business rules into hooks, stores, or utilities

### Architecture

- Keep product logic separate from UI rendering
- Keep persistence logic isolated behind adapters or storage utilities
- Keep chart transformation logic out of chart components
- Keep reusable UI pieces in a shared layer only when actually reused

---

## 4. State Management Rules

- Use Zustand for app state that spans multiple screens
- Use local component state for small UI-only interactions
- Avoid putting everything in one global store
- Prefer one store per domain area if state complexity grows

Suggested domains:

- sessions
- urges
- reflections
- settings
- analytics selectors

---

## 5. Persistence Rules

For v1, prefer local-first persistence.

### Approved persistence order

1. localStorage for simple settings and tiny state
2. Dexie / IndexedDB for structured session history and analytics data
3. backend only when the user explicitly asks for sync or accounts

### Important

- all persistence logic should be wrapped in utilities or repositories
- UI components should not directly encode storage details
- write migrations or version notes when storage shape changes

---

## 6. UI & Design Rules

### Visual Direction

- Use restrained color palettes
- Prefer whitespace over separators
- Prefer typography hierarchy over decorative elements
- Use one clear primary action per screen
- Keep navigation simple and obvious

### Motion

- Use Framer Motion sparingly
- Motion should support calm transitions and orientation
- Avoid bouncing, aggressive scaling, flashy reveals, or novelty motion

### Accessibility

- Ensure keyboard access for core flows
- Maintain clear focus states
- Respect reduced motion preferences
- Use semantic HTML first
- Do not rely on color alone to communicate state

---

## 7. Testing Rules

For all non-trivial logic:

- add or update tests
- cover main success path
- cover critical edge cases
- add regression tests for bug fixes

You do not need to overtest simple presentational components, but you should test:

- session state transitions
- storage adapters
- analytics selectors
- progression rules
- reflection submission logic

---

## 8. Communication Rules

When responding inside Antigravity:

- explain what changed
- mention exact files touched
- mention why the chosen path was used
- mention trade-offs
- mention any assumptions made

If requirements are unclear:

- ask concise clarifying questions
- do not invent product decisions casually

---

## 9. Git Discipline

- Do not commit or push from the agent
- Do not rewrite history
- When analyzing git context, mention which files or commits informed the decision

---

## 10. Performance Rules

- Avoid unnecessary re-renders in timer-heavy screens
- Keep timer logic predictable and easy to reason about
- Avoid expensive calculations inside render paths
- Memoize derived analytics when useful, but do not prematurely optimize
- Prefer simple charts and light dependencies

---

## 11. Scope Rules For MVP

The first release should focus on:

- Stillness Session
- Session completion flow
- Urge Tracker
- Daily Reflection
- Basic analytics
- Settings
- Local persistence

Do not add in MVP unless explicitly requested:

- accounts
- social features
- notifications
- AI coaching
- complex achievements system
- monetization
- cloud sync

---

## 12. Documentation Rules

Whenever meaningful behavior changes:

- update `context.md` if architecture or focus changed
- update `specs.md` if requirements changed
- append a short entry to `memory.md`
- keep `README.md` aligned with how the project actually runs
