# memory.md

This file is a running memory log for the Antigravity workspace.
Append short, useful entries after meaningful work so future sessions keep context.

## Change Log

- [2026-03-16] Tailored the workspace from generic Antigravity starter templates into a project-specific setup for Boredom Gym. Rewrote `AGENTS.md`, `RULES.md`, `context.md`, `specs.md`, `README.md`, `ANTIGRAVITY_PROMPTS.md`, and added reusable workflow files.
- [2026-03-16] Established the v1 direction as a calm, local-first React app focused on stillness sessions, urge tracking, daily reflection, and lightweight analytics.
- [2026-03-16] Scaffolding complete. Implemented App Shell and Navigation. Switched to Vanilla CSS for maximum control over the "Quiet" aesthetic and to resolve experimental Vite/Tailwind v4 resolution issues.
- [2026-03-16] Stillness Session v1 implemented. Features persistent local storage (Dexie), Zustand session management, and a three-stage UI flow (Setup, Active, Completion).
- [2026-03-16] Urge Tracker v1 implemented. Low-friction progressive logging flow, Dexie persistence for carvings, and real-time recent history display.
- [2026-03-16] Core Feature Batch complete: Daily Reflection (End-of-day check-in), Calm Insights (Activity grid & pattern summary), and Settings (Experience preferences + JSON Export/Import).
- [2026-03-16] Data Layer Refactor: Migrated all lists/aggregates to reactive Dexie `useLiveQuery` for synchronized UI updates.
- [2026-03-16] Product Polish & RC Batch: Implemented Home v2 (Active Overview), Full-Screen Focus Mode, PWA support, and accessibility overhaul. Established automated testing with Vitest.
- [2026-03-16] Portfolio & Release: Finalized brand identity (Logo, Refined Nav), added About/Philosophy section, implemented Showcase Mode (Demo Data), and overhauled README for high-quality portfolio presentation.

## Current Priorities

- [x] All v1 core features and polish passes complete.
- [x] Portfolio-ready documentation and demo logic implemented.
- [ ] Final review and deployment to production.

## Known Issues / Open Questions

- [x] Local-first strategy confirmed via Dexie/IndexedDB.
- [x] Visual design tokens finalized (Zinc Scale, Playful Typographic Layout).
- [x] PWA fully functional.

## Implementation Notes

- The first build should prioritize shippable clarity over perfect abstraction.
- Stillness Session is the anchor feature and should define the tone for the rest of the app.
- Analytics should feel reflective, not competitive.
- Empty states and copy matter a lot for product identity.

## Future Ideas

- Session presets based on user mood or energy
- Quiet onboarding that adapts to the user's current overstimulation level
- Weekly reflection summaries generated locally from tracked patterns
- Data export/import for portability without accounts
- A dedicated full-screen "Silence Mode" with ultra-minimal UI
