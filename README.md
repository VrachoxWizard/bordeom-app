# Boredom Gym

**Train your capacity for stillness.**

Boredom Gym is a calm, local-first web application designed to help you regain agency over your attention. In an era of infinite stimulation, boredom has become an endangered state. This app provides the environment and tools to practice "doing nothing," notice compulsive urges, and build mental resilience.

## 🧘 Why It Exists

Compulsive screen-checking and "stimulation snacking" are often physiological responses to minor discomfort. By avoiding boredom, we lose the ability to focus deeply. Boredom Gym treats stillness as a muscle—one that requires intentional resistance training.

## ✨ Core Features

- **Stillness Sessions**: High-immersion, timed sessions to practice presence without external input.
- **Urge Tracker**: A low-friction way to log the impulsive itch for stimulation (phone, news, social media).
- **Daily Reflection**: End-of-day check-ins to map your mental state and identify patterns of restlessness.
- **Calm Insights**: Non-gamified data visualization to understand your progress over time.
- **PWA Capabilities**: Fully installable as a standalone app for an uninterrupted training environment.
- **Local-First & Private**: No accounts, no cloud, no tracking. Your data never leaves your device.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **State**: Zustand
- **Database**: Dexie.js (IndexedDB)
- **Animation**: Framer Motion
- **Testing**: Vitest + React Testing Library
- **Styling**: Tailwind CSS (Minimal & Accessible)

## 🏗️ Architecture

The project follows a **Feature-Based Architecture** to keep concerns separated and maintainable:

- `src/features/*`: Encapsulated logic for Session, Urge, Reflection, and Insights.
- `src/lib/db.ts`: Central Dexie database configuration.
- `src/app/*`: Global layout, routing, and PWA configuration.
- `src/components/ui/*`: Shared minimal component library.

## 🚀 Running Locally

1. **Clone the repo**
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Run tests**: `npm run test`
5. **Build for production**: `npm run build`

## 🎨 Design Philosophy

- **Quiet**: No notifications, no badges, no "streaks" that induce guilt.
- **Editorial**: High-quality typography and generous negative space.
- **Honest**: Clear indicators of data locality and personal autonomy.
- **Accessible**: High contrast, semantic HTML, and full keyboard navigability.

## 📂 Showcase Implementation

For reviewers and portfolio visitors, I've implemented a **Showcase Mode** in Settings that allows you to inject realistic sample data to immediately see the app's history and insights.

---

*Built with intention by [Your Name/Handle]*
