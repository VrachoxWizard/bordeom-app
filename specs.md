# specs.md

This file contains the active product specs for Boredom Gym.
Each feature should be implemented against a clear goal, constraints, and acceptance criteria.

---

## Feature: App Shell and Navigation

### Goal

Create the foundational application shell for Boredom Gym so the app feels coherent from the beginning.
The shell should establish calm visual identity, route structure, global layout, and basic navigation without becoming visually heavy.

### Requirements

#### Functional

- Create route-level pages for:
  - Home
  - Session
  - Urge
  - Reflection
  - Insights
  - Settings
- Add a simple navigation pattern that works on desktop and mobile
- Create a shared layout wrapper
- Add placeholder sections where features are not implemented yet

#### Non-functional

- Fast initial load
- Responsive layout
- Accessible navigation and focus states
- Calm, minimal visual hierarchy

### Constraints

- Use React Router
- Do not introduce backend dependencies
- Do not overbuild a design system before real usage appears
- Avoid dashboard clutter

### Acceptance Criteria

- [ ] All MVP routes exist and render correctly
- [ ] Navigation works on desktop and mobile
- [ ] Layout establishes the intended calm visual direction
- [ ] Placeholder pages are consistent and non-broken

---

## Feature: Stillness Session

### Goal

Allow the user to run a quiet timed stillness session with a minimal interface and complete a short reflection afterward.
This feature is the emotional core of the product and should feel focused, stable, and uncluttered.

### Requirements

#### Functional

- Let the user choose a duration preset
  - 2 min
  - 5 min
  - 10 min
  - 20 min
- Allow session states:
  - idle
  - running
  - paused
  - completed
  - abandoned
- Show remaining time clearly
- Allow pause/resume
- Allow ending the session early
- After completion, show a short completion form:
  - perceived difficulty
  - urge intensity during session
  - optional note
- Save session results locally

#### Non-functional

- Timer behavior must be reliable and predictable
- UI should remain calm and distraction-free
- The session screen should work well on mobile and desktop

### Constraints

- Do not add sound effects in v1
- Do not add unnecessary motivational overlays
- Keep timer logic separate from UI
- Keep storage logic separate from UI

### Acceptance Criteria

- [ ] User can start a session from a preset duration
- [ ] User can pause and resume without timer corruption
- [ ] User can end or complete a session
- [ ] Completion form appears after a finished session
- [ ] Session data is saved and visible to insights logic

---

## Feature: Urge Tracker

### Goal

Allow the user to quickly log moments of craving, avoidance, or overstimulation so patterns become visible over time.
This flow should be extremely fast and non-judgmental.

### Requirements

#### Functional

- Provide quick urge categories such as:
  - social media
  - video / YouTube
  - scrolling
  - food/snacking
  - escape/avoidance
  - custom
- Auto-store timestamp
- Let user optionally record:
  - intensity
  - trigger
  - short note
- Save entries locally

#### Non-functional

- Flow should be completable in under 20 seconds
- The screen should feel lightweight, not form-heavy

### Constraints

- No giant form
- No analytics in the logging screen itself
- Do not shame the user through language or color choices

### Acceptance Criteria

- [ ] User can create an urge entry in a very short flow
- [ ] Timestamp is stored automatically
- [ ] Category and optional metadata are persisted locally
- [ ] Recent entries can be read by insights selectors

---

## Feature: Daily Reflection

### Goal

Create a compact end-of-day reflection flow that helps the user notice how they related to boredom, focus, and urges.
This should feel like a gentle check-in, not a questionnaire marathon.

### Requirements

#### Functional

- Include 3-5 structured prompts
- Include optional free-text note
- Allow one reflection per day, editable if needed
- Save reflections locally

Suggested prompts:

- How present did you feel today?
- How strong was the urge to escape boredom?
- Did quiet feel easier, harder, or the same?
- What triggered restlessness most today?

#### Non-functional

- Should be finishable in under 3 minutes
- Should look calm and readable

### Constraints

- Do not create a long journaling system yet
- Keep data shape simple
- Avoid generic self-help language

### Acceptance Criteria

- [ ] User can save a daily reflection
- [ ] Existing reflection for the same day can be edited
- [ ] Reflection data is persisted locally
- [ ] Reflection summaries can later be surfaced in insights

---

## Feature: Calm Insights

### Goal

Present useful patterns from sessions, urges, and reflections in a way that supports awareness instead of pressure.
The insights page should help the user notice rhythms, not feel judged.

### Requirements

#### Functional

- Show at least these summary metrics:
  - total quiet minutes
  - sessions completed
  - urges logged
  - last 7 days consistency
- Show at least two simple visualizations:
  - urge categories
  - sessions over time or quiet minutes trend
- Show one reflective summary block using derived local data

#### Non-functional

- Charts must remain simple and readable
- The page should not look like a performance dashboard
- Empty states must be graceful and motivating

### Constraints

- Use lightweight charting only where it adds clarity
- Avoid overloading one screen with too many widgets
- Derivations should come from pure selector functions when possible

### Acceptance Criteria

- [ ] Summary metrics render from stored data
- [ ] At least two useful visualizations render correctly
- [ ] Empty state is clear when no data exists yet
- [ ] The screen preserves the calm product tone

---

## Feature: Settings and Local Data Controls

### Goal

Provide basic preferences and safe local data controls without turning the product into a settings-heavy app.

### Requirements

#### Functional

- Allow the user to:
  - choose preferred default session lengths
  - toggle reduced motion preferences if implemented locally
  - clear all local data with confirmation
- Reserve space for future export/import functionality

#### Non-functional

- Settings should remain short and understandable
- Destructive actions must be clearly confirmed

### Constraints

- No accounts
- No cloud sync
- Keep the surface area intentionally small

### Acceptance Criteria

- [ ] User can change basic preferences
- [ ] Preferences persist locally
- [ ] User can clear local data safely with confirmation
- [ ] Layout remains clean and low-friction

---

## Default Prompt for Antigravity

Use this when starting work on any feature:

Act as a senior product-minded full-stack frontend engineer.

1. Read `README.md`, `RULES.md`, `context.md`, `memory.md`, and the relevant section in `specs.md`.
2. Inspect the current codebase before proposing changes.
3. Create an Implementation Plan Artifact with:
   - feature summary
   - user outcome
   - exact files to create or modify
   - state/data changes
   - edge cases
   - testing approach
4. Wait for approval if the task spans multiple files or affects architecture.
5. After approval, implement the feature in small, clean steps.
6. Keep code aligned with the calm tone and local-first architecture.
7. Add or update tests for meaningful logic.
8. Update `memory.md` with a short summary of the work.
