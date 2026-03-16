# context.md

## Project Overview

- Name: Boredom Gym
- Mission: Help users build boredom tolerance, focus, and emotional steadiness through quiet sessions, urge tracking, and reflective progress.
- Product Type: Local-first single-page web app / lightweight PWA
- Primary stack:
  - React 19
  - Vite
  - TypeScript
  - Tailwind CSS
  - Zustand
  - Framer Motion
  - Recharts
  - Dexie or localStorage
  - Vitest + Testing Library

## Product Philosophy

Boredom Gym is intentionally different from mainstream productivity apps.
It should feel like a calm digital tool for mental endurance rather than a hype-driven optimization platform.

Core product values:

- calm over stimulation
- consistency over intensity
- reflection over performance theater
- simplicity over feature sprawl
- local ownership over account complexity

## Target User

A user who wants to:

- reduce compulsive stimulation
- sit with boredom more comfortably
- build focus gradually
- track urges without shame
- reflect on patterns over time

The primary persona is someone actively trying to cut back on overuse of social media, YouTube, doomscrolling, or restless digital habits.

## Current Focus

- Build MVP v1 with strong visual identity and clean local-first architecture
- Ship core flows before adding advanced polish features
- Optimize for clarity and momentum during Antigravity-driven development

## MVP Scope

### Included in v1

1. Stillness Session
   - choose duration
   - start / pause / end session
   - minimal focus screen
   - complete session reflection

2. Urge Tracker
   - log urge category
   - log trigger or short note
   - timestamp automatically

3. Daily Reflection
   - short structured check-in
   - optional free-text note

4. Analytics
   - total quiet minutes
   - sessions completed
   - urge count by time/category
   - recent streak / consistency indicators

5. Settings
   - reduced motion toggle if needed
   - preferred session lengths
   - storage reset/export hooks placeholder

### Explicitly excluded from v1

- authentication
- multi-device sync
- social features
- AI assistant features
- billing
- backend database

## Key UX Direction

- sparse layout
- large readable typography
- low visual noise
- subtle motion
- strong sense of calm
- one obvious action per screen

Suggested visual direction:

- off-white / stone / zinc base palette
- one muted accent color
- editorial layout cues
- soft motion and fade transitions
- minimal borders and low-contrast surfaces

## Information Architecture

Suggested routes for v1:

- `/` — landing / home
- `/session` — stillness timer flow
- `/urge` — quick urge logging
- `/reflection` — daily reflection
- `/insights` — calm analytics dashboard
- `/settings` — preferences

## Key Architectural Decisions

### Routing

- Use React Router for simple client-side routes
- Keep route files thin
- Move feature logic into feature folders

### State Management

- Use Zustand stores for cross-screen domain state
- Keep store slices by domain if needed:
  - session
  - urges
  - reflections
  - settings

### Persistence

- Start simple
- Use localStorage for small preferences
- Use Dexie or a thin IndexedDB wrapper for session history if history becomes more structured
- Wrap persistence behind repository helpers

### API Layer

- No remote API in v1
- If mock APIs are needed, keep them inside local service modules

### Testing

- Vitest for logic
- Testing Library for component behavior
- Prioritize tests for domain logic over snapshots

## Suggested Folder Strategy

- `src/app` — app bootstrapping, router, providers
- `src/pages` — route-level screens
- `src/features/session`
- `src/features/urge`
- `src/features/reflection`
- `src/features/insights`
- `src/features/settings`
- `src/components/ui` — shared primitives only
- `src/lib` — utilities, storage, dates, formatting
- `src/store` — shared store setup if needed
- `src/test` — shared test utilities

## Known Risks / Design Tensions

- Too much gamification would weaken the product tone
- Too much analytics density would make the UI feel stressful
- Too much abstraction too early would slow development
- Using only localStorage may become limiting for richer analytics history

## Current Decision Bias

When in doubt, choose:

- fewer features
- smaller components
- clearer state
- calmer UI
- easier-to-read code
