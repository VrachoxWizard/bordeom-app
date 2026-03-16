# RULES.md

These are the core implementation rules for Boredom Gym.

They take precedence over convenience and “cool” ideas.

---

## 1. Product Rules

### 1.1 Preserve the product identity
Boredom Gym must remain:
- calm
- local-first
- private
- minimal
- premium
- editorial
- non-gamified
- emotionally mature

### 1.2 Do not drift into a different product
Do not casually turn it into:
- a generic productivity app
- a corporate dashboard
- a therapy platform
- a social habit tracker
- an AI assistant product
- a dopamine-optimised growth app

### 1.3 Prefer refinement over expansion
Default to:
- polishing existing flows
- fixing rough edges
- improving consistency
- improving repo quality
- improving accessibility and clarity

Do not add features by default.

---

## 2. Scope Rules

### 2.1 Out of scope unless explicitly justified
Do not add these without a very strong reason:
- authentication
- user accounts
- backend APIs
- cloud sync
- notifications
- social/community features
- badges, rewards, or streak pressure
- aggressive gamification
- AI-generated coaching
- enterprise-style architecture

### 2.2 Keep v1 frozen unless necessary
Treat the app as a finished v1.
Changes after v1 should be:
- bug fixes
- cleanup
- metadata corrections
- small polish
- focused improvements with clear benefit

---

## 3. Architecture Rules

### 3.1 Keep the architecture simple
This is a small, product-focused frontend app.

Do:
- keep logic close to the feature it serves
- use clear feature folders
- use `src/lib` for truly shared helpers and persistence utilities
- keep state models explicit

Do not:
- introduce repository patterns without real need
- add service layers just for formality
- over-abstract local logic
- reorganize stable code for style alone

### 3.2 Local-first is a core principle
Personal data should stay on-device unless the project direction changes intentionally.

Do:
- preserve IndexedDB / Dexie as the default persistence direction
- keep export/import clear and safe
- make local ownership obvious in the UX

Do not:
- introduce hidden remote persistence
- imply cloud sync if it does not exist
- add tracking or analytics for personal user data

### 3.3 Be conservative with dependencies
Add a dependency only if:
- it solves a real problem
- it clearly improves maintainability or correctness
- the benefit is larger than the cost

Do not add libraries for minor stylistic convenience.

---

## 4. UI / UX Rules

### 4.1 Calm first
The UI must feel calm before it feels impressive.

Do:
- use generous spacing
- maintain clear hierarchy
- keep actions focused
- use subtle motion
- prefer quiet clarity

Do not:
- overload screens
- add loud visual gimmicks
- create cluttered analytics panels
- use bright, attention-grabbing UI unless absolutely necessary

### 4.2 Consistency matters
Buttons, cards, spacing, helper text, headings, and empty states should feel like one product.

Before adding a new pattern, check if a good existing pattern already exists.

### 4.3 Low-friction flows
The main flows should stay fast and clean:
- start a session
- log an urge
- write a reflection
- review insights
- manage local data safely

Do not make these flows more complex without clear value.

### 4.4 Non-judgmental language only
Language must stay calm and neutral.

Do:
- use clear supportive copy
- respect the user’s agency
- keep tone concise and adult

Do not:
- shame the user
- pressure the user
- use fake motivational language
- frame the experience like self-improvement theatre

---

## 5. Styling Rules

### 5.1 Keep the visual system restrained
Preferred visual qualities:
- neutral zinc / stone palette
- editorial typography
- soft premium surfaces
- subtle glass or layered depth where already established
- elegant transitions

Avoid:
- flashy gradients everywhere
- random accent colors
- inconsistent shadows
- novelty styling that breaks the product tone

### 5.2 Typography should carry the interface
Use typography, spacing, and layout to create tone before adding extra decoration.

### 5.3 Motion should be quiet
Animation should:
- support focus
- improve feel
- remain smooth and understated

Do not use motion to show off.

Respect reduced motion preferences.

---

## 6. Code Quality Rules

### 6.1 Prefer clarity over cleverness
Write code that is easy to revisit.

Do:
- use explicit types
- choose readable names
- keep components reasonably small
- keep logic understandable

Do not:
- optimize prematurely
- write “smart” abstractions that reduce clarity
- hide business logic in vague utility layers

### 6.2 Comments should be rare and useful
Only add comments when they explain something non-obvious.

Do not narrate obvious code.

### 6.3 Remove rough edges when touched
If you edit a file and notice:
- dead code
- stale comments
- inconsistent naming
- placeholder text
- obvious visual drift

clean it up if the fix is small and safe.

---

## 7. Testing and Verification Rules

### 7.1 Verify meaningful changes
For meaningful changes, verify as appropriate:
- build passes
- lint passes
- tests pass
- no obvious broken states were introduced

### 7.2 Test critical logic, not everything
Prefer tests around:
- derived data logic
- import/export validation
- reflection/day logic
- aggregation helpers
- persistence shaping helpers

Do not overbuild tests for minor presentational components.

---

## 8. Documentation Rules

### 8.1 Docs must stay truthful
Docs must reflect the current shipped state of the project.

Keep aligned:
- `README.md`
- `context.md`
- `memory.md`
- `specs.md`
- `package.json` metadata

### 8.2 Remove planning drift
If a doc still sounds like the project is only a planned MVP, update it when appropriate.

### 8.3 Repo quality matters
The root of the repo should look intentional.

That includes:
- clean README
- consistent project naming
- accurate package metadata
- sensible ignore/config files
- no obvious placeholder traces

---

## 9. Decision Rules

When choosing between two options, prefer the one that is:

1. simpler
2. calmer
3. clearer
4. more maintainable
5. more truthful to the product identity

If an idea is interesting but increases noise, abstraction, or scope, reject it.

---

## 10. Final Rule

Boredom Gym should feel like a complete, thoughtful, personal product.

Every change should support at least one of these:
- stronger calmness
- better clarity
- better consistency
- better local-first integrity
- better polish
- better repo quality

If it does not clearly help one of those, do not do it.
