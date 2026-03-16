# Boredom Gym

A calm, local-first stillness training app for urge awareness, reflection, and quieter digital habits.

Boredom Gym is a premium-feeling personal web app built to help users reduce compulsive stimulation, sit with boredom more comfortably, and reflect on their relationship with stillness. It is intentionally private, local-first, and non-gamified.

## Why it exists

Most digital products are designed to maximize engagement, novelty, and compulsive checking. Boredom Gym explores the opposite direction.

Instead of chasing attention, it helps the user:
- practice stillness through timed sessions
- notice urges without reacting automatically
- reflect on patterns of restlessness
- review progress without turning it into a stressful dashboard

## Core features

- **Stillness Sessions**  
  Guided timed sessions with a focused, minimal interface and an immersive mode.

- **Urge Tracker**  
  A fast way to log impulses for stimulation such as phone use, social media, random browsing, or avoidance.

- **Daily Reflection**  
  A structured daily check-in for presence, restlessness, difficulty, and short notes.

- **Calm Insights**  
  Lightweight, non-gamified summaries built from local data.

- **Settings & Local Data Controls**  
  Export, import, reset, reduced motion preferences, and showcase/sample data mode.

- **Installable PWA**  
  Works like a private personal utility and remains usable offline.

## Local-first privacy

Boredom Gym stores data locally on the device using IndexedDB via Dexie.

There are:
- no accounts
- no cloud sync
- no analytics tracking
- no remote database for personal entries

Your data stays with you.

## Tech stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Custom CSS tokens and utility styling**
- **Zustand**
- **Dexie + IndexedDB**
- **Framer Motion**
- **Recharts**
- **Vitest + React Testing Library**
- **vite-plugin-pwa**

## Architecture

The project uses a feature-oriented structure:

- `src/app` — routing, layout, app wiring
- `src/pages` — route-level screens
- `src/features/session` — stillness session flow
- `src/features/urge` — urge logging
- `src/features/reflection` — daily reflection
- `src/features/insights` — derived summaries and analytics UI
- `src/features/settings` — preferences, import/export, demo data
- `src/components/ui` — shared UI primitives
- `src/lib` — persistence, selectors, data helpers, utilities

## Running locally

```bash
npm install
npm run dev
```

### Available scripts
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run test`
- `npm run check`

## Showcase mode

For demos and screenshots, the app includes a sample data mode so the interface can be reviewed without manually creating entries first.

## Design principles

Boredom Gym is built around a small set of product principles:
- **Quiet over noisy**
- **Editorial over dashboard-heavy**
- **Reflection over performance theatre**
- **Local ownership over account complexity**
- **Calm interaction over dopamine bait**

## Status

Version 1.0 focuses on a polished local-first MVP:
- stillness sessions
- urge tracking
- daily reflection
- calm insights
- installable PWA support
- accessibility and keyboard support
- sample/demo data for showcase

## Future ideas

- softer weekly summaries
- richer trend views without losing calmness
- improved screenshot/demo workflow
- optional session presets
- more refined offline/app-shell polish

## License

Currently shared as a public portfolio project.

If you want this repo to be open-source, add a real license file such as MIT.
If not, keep it unlicensed and marked as UNLICENSED in `package.json`.

Built by VrachoxWizard.
