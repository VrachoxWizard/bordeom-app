# memory.md

This file is the high-signal project memory for the Antigravity workspace.
It should capture the current state of Boredom Gym, not a long historical transcript.

## Current State Snapshot

Boredom Gym is a shipped v1 local-first web app focused on stillness training, urge awareness, and daily reflection.

The app is already feature-complete enough for portfolio presentation and public GitHub hosting.

## What Exists

### Core product flows
- Stillness Session
- Urge Tracker
- Daily Reflection
- Calm Insights
- Settings / Local Data Controls
- About / Philosophy section
- Showcase / Sample Data mode

### Product polish
- Home dashboard with daily overview
- Focus / immersive mode for active sessions
- Quiet premium visual styling
- Responsive layout improvements
- Accessibility and keyboard pass
- PWA installability
- Test/build verification

## Technical Decisions That Matter

- Local-first persistence is a core product principle.
- Dexie / IndexedDB is the main data layer.
- Zustand is used where cross-screen session state benefits from it.
- The codebase uses a feature-oriented frontend structure.
- The app should remain simple, private, and non-gamified.
- The repo should present the project as a finished v1, not a rough prototype.

## Product Identity Rules

Always preserve these traits:

- calm
- minimal
- premium
- editorial
- non-preachy
- non-gamified
- local-first
- emotionally mature

Avoid turning the app into:
- a generic productivity dashboard
- a social habit app
- a dopamine-maximizing self-improvement product
- a backend-heavy system

## Root-Level Priorities

When improving the project, prioritize:

1. metadata and naming consistency
2. repo/documentation quality
3. PWA correctness
4. small visual cleanup
5. truthful README and root docs
6. keeping scope frozen unless a change is clearly worthwhile

## Important Repo-Level Notes

- The public repo name currently contains a typo: `bordeom-app`.
- The shipped product name should consistently be **Boredom Gym**.
- Root docs should describe the current shipped state, not just MVP planning.
- README should remain concise, polished, and truthful.
- If package/repo metadata still look scaffold-like, update them before expanding the product further.

## Recommended Working Style

- Do not add features by default.
- Prefer focused cleanup over expansion.
- Preserve the strongest parts of the product:
  - stillness session flow
  - local-first privacy
  - calm visual identity
  - low-friction urge logging
- Treat the app as a finished v1 unless a bug or high-value improvement appears.

## Future Ideas

Only consider later, not now:

- richer weekly summaries
- more refined trend views
- optional session presets
- deployment polish
- small screenshot/demo workflow improvements

These are optional and should never undermine the current simplicity.
