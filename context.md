# context.md

## Project Overview

- **Name:** Boredom Gym
- **Tagline:** Train your capacity for stillness.
- **Product Type:** Local-first web app / installable PWA
- **Status:** Shipped v1, publicly available as a portfolio-quality project
- **Mission:** Help users reduce compulsive stimulation, build boredom tolerance, and develop a calmer relationship with urges, stillness, and reflection.

Boredom Gym is intentionally built as a quiet alternative to overstimulating digital products. It is not a performance dashboard, not a gamified habit app, and not a social platform. It is a private, local-first personal tool.

## Current Product State

Boredom Gym v1 currently includes:

1. **Stillness Sessions**
   - Preset session durations
   - Active timer flow
   - Pause / resume / cancel controls
   - Completion reflection
   - Immersive / focus mode

2. **Urge Tracker**
   - Fast, low-friction urge logging
   - Type, intensity, trigger, and optional note
   - Recent history display

3. **Daily Reflection**
   - One reflection per day
   - Structured check-in fields
   - Update/edit support for current day

4. **Calm Insights**
   - Local summaries and trends
   - Activity visualization
   - Pattern highlights without gamified pressure

5. **Settings & Data Control**
   - Local preferences
   - Export/import
   - Clear-all confirmation
   - Showcase / sample data mode

6. **PWA / Product Polish**
   - Installable local-first experience
   - Responsive layout
   - Keyboard and accessibility improvements
   - Quiet premium visual system

## Product Philosophy

Boredom Gym should feel:

- calm, not loud
- intentional, not addictive
- reflective, not performative
- premium, not corporate
- private, not account-driven
- minimal, not empty
- supportive, not preachy

Core values:

- **calm over stimulation**
- **agency over compulsion**
- **reflection over performance theatre**
- **clarity over feature sprawl**
- **local ownership over cloud complexity**

## Target User

Boredom Gym is designed for a user who wants to:

- reduce compulsive phone or social media checking
- become more comfortable with boredom and stillness
- notice urges without immediately obeying them
- reflect on daily restlessness and presence
- use a private tool without accounts, feeds, or tracking

The ideal user is not looking for hype, motivation hacks, or social accountability. They want a cleaner, quieter digital environment.

## Positioning

Boredom Gym is best understood as:

- a stillness training tool
- a calm local-first reflection app
- a private digital environment for boredom tolerance
- a portfolio project demonstrating product thinking, frontend architecture, and calm UX design

It is **not**:

- a generic productivity dashboard
- a social habit tracker
- a therapy product
- an AI wellness assistant
- a content-heavy meditation platform

## Current Technical Stack

- React
- TypeScript
- Vite
- Tailwind CSS + custom styling polish
- Zustand
- Dexie / IndexedDB
- Framer Motion
- Recharts
- Vitest + React Testing Library
- vite-plugin-pwa

## Architecture Direction

The project follows a simple feature-oriented frontend architecture.

### Main structure

- `src/app` — app shell, routing, layout, providers
- `src/pages` — route-level screens
- `src/features/session` — stillness session flow
- `src/features/urge` — urge tracking
- `src/features/reflection` — daily reflection
- `src/features/insights` — summaries and derived views
- `src/features/settings` — preferences, local data actions, showcase mode
- `src/components/ui` — shared UI elements
- `src/lib` — persistence, selectors, utility helpers, formatting, demo data

### Architectural principles

- keep logic close to the feature it serves
- prefer small explicit helpers over large abstraction layers
- keep persistence local-first and readable
- separate storage/query concerns from display components
- avoid enterprise-style structure for a small product

## UX Direction

The app should preserve a **quiet luxury / calm editorial** feel.

### Visual guidance

- zinc / stone / neutral palette
- soft depth and restrained glass surfaces
- large readable typography
- generous spacing
- low-clutter screens
- smooth but subtle motion
- strong hierarchy with minimal chrome

### Interaction guidance

- one obvious action per screen
- low-friction logging
- non-judgmental language
- graceful empty states
- calm confirmations and warnings
- no guilt mechanics, streak pressure, or artificial urgency

## Current Priorities

Post-v1 priorities should stay small and high-value:

1. maintain repo quality and documentation consistency
2. keep root files accurate and clean
3. fix small polish bugs only when clearly worth it
4. avoid unnecessary scope expansion
5. preserve the product’s calm identity as the main differentiator

## Non-Goals

Do not add these unless there is a very strong reason:

- accounts / auth
- cloud sync
- notifications
- social features
- achievement systems
- noisy gamification
- AI-generated wellness coaching
- backend complexity without a real need
- overbuilt analytics dashboards

## Decision Bias

When in doubt, choose:

- fewer features
- smaller scope
- calmer UI
- clearer copy
- simpler architecture
- stronger polish
- faster ship decisions
