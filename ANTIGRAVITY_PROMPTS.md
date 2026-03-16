# ANTIGRAVITY PROMPTS

These prompts are tailored specifically for **Boredom Gym**.
Use them as copy-paste building blocks inside Antigravity.

---

## 1. Project Onboarding Prompt

```markdown
Act as a senior product-minded frontend engineer.

Read these files first:
- `README.md`
- `AGENTS.md`
- `RULES.md`
- `context.md`
- `memory.md`
- `specs.md`

Then inspect the repository and do the following:

1. Summarize the current project structure.
2. Identify the current stack, entry points, routing setup, styling setup, and state setup.
3. Point out anything missing compared to the intended Boredom Gym architecture.
4. Produce an Implementation Plan Artifact for the best next step.
5. Do not code yet if the next step touches multiple files. Wait for my approval.

Important constraints:
- Preserve the calm, minimal product identity.
- Prefer simple and readable implementation choices.
- Do not introduce backend/auth/cloud complexity.
- Do not turn the app into a generic dashboard.
```

---

## 2. Scaffold Review Prompt

```markdown
Act as a senior React 19 + Vite + TypeScript engineer.

Read:
- `README.md`
- `RULES.md`
- `context.md`

Inspect the current scaffold and verify whether the project is ready for feature work.

Check:
- app bootstrap
- router setup
- Tailwind setup
- folder structure
- testing setup
- linting/formatting assumptions

Then:
1. List what is already correct.
2. List what is missing or weak.
3. Propose a minimal cleanup plan.
4. Wait for approval before making broad structural changes.
```

---

## 3. App Shell Prompt

```markdown
Act as a senior frontend engineer with strong product taste.

Read:
- `RULES.md`
- `context.md`
- the “App Shell and Navigation” section in `specs.md`

Inspect the existing code first.
Then create an Implementation Plan Artifact for the app shell.

The plan should include:
- route structure
- page scaffolding
- layout strategy
- navigation strategy for desktop/mobile
- shared UI primitives needed now
- exact files to create or modify
- risks or trade-offs
- testing approach

Constraints:
- keep the UI calm and minimal
- avoid overbuilding a design system
- keep route files thin
- do not code until I approve the plan
```

---

## 4. Stillness Session Prompt

```markdown
Act as a senior product-minded frontend engineer.

Read:
- `RULES.md`
- `context.md`
- `memory.md`
- the “Stillness Session” section in `specs.md`

Inspect the current session-related code before proposing changes.

Then create an Implementation Plan Artifact that includes:
- user flow from idle to completed session
- timer state model
- storage model for session records
- separation between UI, timer logic, and persistence
- exact files to create or modify
- edge cases such as pause/resume, tab switching, early ending, and completion flow
- testing strategy for timer logic and completion behavior

Constraints:
- keep the session screen distraction-free
- do not add hype language or gamified clutter
- keep logic predictable and easy to test
- wait for approval before coding
```

---

## 5. Urge Tracker Prompt

```markdown
Act as a senior frontend engineer focused on fast, humane UX.

Read:
- `RULES.md`
- `context.md`
- `memory.md`
- the “Urge Tracker” section in `specs.md`

Inspect the current implementation first.
Then propose an Implementation Plan Artifact.

The plan must cover:
- quickest logging flow
- category model
- optional metadata fields
- local persistence structure
- how the data will later feed insights
- exact files to touch
- validation/testing approach

Constraints:
- the flow should feel lightweight
- avoid giant forms
- avoid shame-based copy
- keep the implementation simple and extensible
```

---

## 6. Daily Reflection Prompt

```markdown
Act as a senior frontend engineer with strong UX writing sensibility.

Read:
- `RULES.md`
- `context.md`
- `memory.md`
- the “Daily Reflection” section in `specs.md`

Inspect current reflection-related code.
Then create an Implementation Plan Artifact for the daily reflection flow.

Include:
- prompt structure
- one-entry-per-day logic
- editing behavior
- persistence model
- UI layout approach
- exact files to create or modify
- test coverage plan

Constraints:
- keep the experience calm and short
- avoid long journaling complexity
- avoid generic wellness cliches
- wait for approval before implementation
```

---

## 7. Calm Insights Prompt

```markdown
Act as a senior frontend engineer who can design analytics without making them feel stressful.

Read:
- `RULES.md`
- `context.md`
- `memory.md`
- the “Calm Insights” section in `specs.md`

Inspect the codebase first.
Then create an Implementation Plan Artifact.

The plan should include:
- which metrics to compute first
- selector and derivation strategy
- which charts/components are truly necessary
- empty state strategy
- exact files to touch
- testing strategy for derived analytics

Constraints:
- keep the screen quiet and readable
- do not overpopulate with widgets
- prefer pure selectors for data derivation
- wait for approval before coding
```

---

## 8. Settings Prompt

```markdown
Act as a senior frontend engineer.

Read:
- `RULES.md`
- `context.md`
- `memory.md`
- the “Settings and Local Data Controls” section in `specs.md`

Inspect current settings-related code and propose an Implementation Plan Artifact.

Include:
- which settings belong in MVP
- how to persist them
- how to safely handle clear-data actions
- how to keep the screen small and calm
- exact files to create or modify
- testing considerations

Constraints:
- do not add settings bloat
- destructive actions need explicit confirmation
- keep the implementation local-first
```

---

## 9. Safe Refactor Prompt

```markdown
Act as a senior engineer performing a safe refactor.

Read:
- `RULES.md`
- `context.md`
- `memory.md`

Inspect the relevant files and then:
1. Explain the current structure.
2. Identify the refactor goal clearly.
3. Produce an Implementation Plan Artifact with:
   - exact files/symbols to change
   - what behavior must remain identical
   - risk assessment
   - test updates needed
4. Wait for approval before making the refactor.

Constraints:
- no unrelated feature work
- preserve behavior
- improve readability and maintainability
```

---

## 10. Bug Fix Prompt

```markdown
Act as a senior debugging engineer.

Read:
- `RULES.md`
- `context.md`
- `memory.md`

Inspect the relevant code and the bug description I provide.

Then:
1. Restate the bug clearly.
2. Identify the most likely root cause.
3. Show 1-2 plausible hypotheses if uncertain.
4. Point to the exact files/functions to inspect or change.
5. Suggest the smallest safe fix.
6. Propose regression tests.
7. Wait for approval before changing multiple files.
```

---

## 11. UI Polish Prompt

```markdown
Act as a senior product designer + frontend engineer.

Read:
- `RULES.md`
- `context.md`
- `memory.md`

Inspect the relevant UI screens first.
Then propose a polish plan that improves:
- spacing
- typography hierarchy
- calmness of layout
- empty states
- button hierarchy
- transitions/motion

Output:
- issues found
- proposed improvements
- exact files to change
- any risks to usability or consistency

Constraints:
- keep the UI minimal
- do not add decorative clutter
- use motion sparingly
- preserve accessibility
```

---

## 12. Prompt Optimizer Prompt

```markdown
You are Danny, the prompt engineer for this project.

I will give you:
- a rough prompt
- what I wanted
- optionally what Antigravity output instead

Your job:
1. Explain why the original prompt is weak.
2. Rewrite it into a better Antigravity prompt.
3. Use this structure:
   - Goal
   - Product context
   - Constraints
   - Files to read first
   - Expected output
   - Steps
4. If useful, provide:
   - a fast version
   - a thorough version

Do not execute the prompt. Only improve it.
```

---

## 13. Daily Driver Inline Template

```markdown
Build [feature] for Boredom Gym.

Before coding:
- read `README.md`, `RULES.md`, `context.md`, `memory.md`, and the relevant spec in `specs.md`
- inspect the current code
- summarize current behavior
- produce an Implementation Plan Artifact
- wait for approval if multiple files or architecture are involved

Constraints:
- calm, minimal, local-first
- React 19 + Vite + TypeScript + Tailwind
- readable code over clever code
- separate UI, logic, and persistence where practical
- add or update tests for non-trivial logic

After implementation:
- summarize files changed
- mention trade-offs
- update `memory.md`
```

---

## 14. Recommended Order Of Use

1. Project Onboarding Prompt
2. Scaffold Review Prompt
3. App Shell Prompt
4. Stillness Session Prompt
5. Urge Tracker Prompt
6. Daily Reflection Prompt
7. Calm Insights Prompt
8. Settings Prompt
9. UI Polish Prompt
10. Refactor / Bug Fix prompts as needed
