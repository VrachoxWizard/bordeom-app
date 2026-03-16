# specs.md

This file contains the current shipped-v1 product spec for Boredom Gym.
It should describe what the project is now, what quality bar it should maintain, and what future changes are allowed.

---

# Product: Boredom Gym

## Summary

Boredom Gym is a local-first stillness training app designed to help users:

- practice quiet timed sessions
- notice and log compulsive urges
- reflect on daily mental state
- review patterns without pressure
- keep all personal data on-device

The product is intentionally quiet, private, and non-gamified.

## v1 Product Goals

The shipped v1 should successfully demonstrate:

1. a strong non-generic product concept
2. calm editorial UX
3. local-first data architecture
4. polished frontend implementation
5. meaningful daily-use core flows
6. portfolio-quality presentation and repo quality

---

# Feature: Stillness Session

## Goal

Provide a calm, reliable stillness practice flow that acts as the emotional anchor of the product.

## Functional Requirements

- User can choose a preset duration
- User can start a session from the Session route
- Timer supports:
  - idle
  - running
  - paused
  - completed
  - cancelled / ended early
- Active session UI shows:
  - large countdown
  - calm prompt text
  - pause / resume / cancel actions
- On completion, user can record:
  - mood / state
  - urge intensity or urge count
  - optional note
- Session data is stored locally

## Quality Requirements

- timer behavior must be reliable
- UI must remain uncluttered
- immersive/focus mode should feel premium, not flashy
- mobile and desktop readability must stay strong

## Acceptance Criteria

- [x] Session can be started from preset durations
- [x] Pause/resume works without timer corruption
- [x] Completion flow is shown after a finished session
- [x] Session data persists locally
- [x] Session supports a focused premium experience

---

# Feature: Urge Tracker

## Goal

Allow the user to quickly record urges for stimulation or avoidance with minimal friction.

## Functional Requirements

- User can log an urge quickly
- Urge record includes:
  - timestamp
  - urge type
  - intensity
  - trigger
  - optional short note
- Recent urge history is visible
- Data persists locally

## Quality Requirements

- flow should be completable very quickly
- language should remain non-judgmental
- UI should feel light, not form-heavy

## Acceptance Criteria

- [x] User can log an urge in a short flow
- [x] Timestamp is stored automatically
- [x] Optional metadata is persisted
- [x] Recent entries are visible and readable

---

# Feature: Daily Reflection

## Goal

Offer a short end-of-day check-in that helps the user notice restlessness, presence, and avoidance patterns.

## Functional Requirements

- One reflection per day
- Existing reflection for the day can be updated
- Reflection captures structured emotional state
- Optional note field
- Reflection data persists locally

## Quality Requirements

- should feel calm and emotionally safe
- should not feel like a long questionnaire
- should connect naturally to session and urge behavior

## Acceptance Criteria

- [x] User can save a daily reflection
- [x] Reflection for the same day can be edited
- [x] Reflection persists locally
- [x] Reflection contributes to insights/context views

---

# Feature: Calm Insights

## Goal

Show meaningful local summaries without turning the app into a stressful metrics dashboard.

## Functional Requirements

- Display useful high-level summaries such as:
  - total stillness minutes
  - sessions completed
  - urges logged
  - reflection activity
- Provide a recent activity or recent-days view
- Show a small number of derived pattern summaries
- Handle empty/low-data states gracefully

## Quality Requirements

- insights must remain readable and calm
- charts/visuals should support awareness, not competition
- the page should avoid clutter and KPI overload

## Acceptance Criteria

- [x] Summaries render from local data
- [x] At least one useful recent-activity view exists
- [x] Pattern summaries are present
- [x] Empty state is graceful and on-brand

---

# Feature: Settings & Local Data Controls

## Goal

Give the user meaningful control over preferences and on-device data without bloating the product.

## Functional Requirements

- support lightweight local preferences
- support export/import of local data
- support clear-all with confirmation
- support showcase/sample data loading
- communicate local-first behavior clearly

## Quality Requirements

- destructive actions must be understandable
- import/export should feel safe and intentional
- settings should remain focused and compact

## Acceptance Criteria

- [x] Local preferences persist
- [x] Export/import is available
- [x] Clear-all confirmation exists
- [x] Showcase/sample data flow exists

---

# Feature: Home Dashboard

## Goal

Provide a soft landing page that helps the user understand what to do today.

## Functional Requirements

- show a simple today overview
- expose quick actions into core flows
- show a small recent activity summary
- explain the product clearly for first-time users

## Quality Requirements

- should feel like a calm command center
- should not feel like a corporate dashboard
- should work well with both empty and populated data states

## Acceptance Criteria

- [x] Quick actions exist
- [x] Today summary exists
- [x] Recent activity exists
- [x] Empty state remains intentional

---

# Feature: About / Philosophy

## Goal

Explain the product’s purpose and perspective in a concise, thoughtful way.

## Functional Requirements

- communicate why the app exists
- explain stillness / urge awareness concept briefly
- explain local-first privacy clearly
- maintain an emotionally mature tone

## Acceptance Criteria

- [x] About / Philosophy content exists
- [x] Tone is calm and non-preachy
- [x] Privacy/local-first intent is visible

---

# Feature: Installability / PWA

## Goal

Make the app feel like a personal tool rather than a disposable web page.

## Functional Requirements

- installable PWA support
- coherent manifest/app identity
- usable offline shell appropriate for local-first behavior

## Acceptance Criteria

- [x] App is installable
- [x] Manifest/app identity is configured
- [x] Offline-oriented behavior exists for core shell

---

# Non-Goals

The following are explicitly out of scope unless intentionally revisited:

- authentication
- cloud sync
- social/community features
- achievements/badges
- aggressive gamification
- AI coaching features
- backend database
- enterprise-style architecture
- notifications as a core mechanic

---

# Design Constraints

All future changes must preserve:

- calm tone
- restrained visual language
- accessibility
- keyboard friendliness
- local-first privacy
- simple information architecture
- honest, non-hype copy

---

# Change Policy

Future work should default to:

- bug fixes
- metadata cleanup
- documentation quality
- small polish improvements
- PWA correctness
- repo presentation improvements

Do not expand scope casually.
Treat the product as a finished v1 unless there is a strong reason to change it.
