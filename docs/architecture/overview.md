# Architecture Overview

> Update this file when a new reusable component or system is added.

---

## High-Level Architecture

Replay is a **client-side interactive experience** built on Next.js. There is no backend, no database, and no user accounts. All content is statically defined in a single TypeScript data file and deployed to Vercel as a static export.

```
User Browser
  └── Next.js App (Static/SSG)
        ├── MemoryJourney       ← manages current index, navigation
        ├── PhotoCard           ← single reusable photo + thought component
        ├── ThoughtBubble       ← text revealed on hover/tap
        ├── Transition          ← reusable between-photo animation
        ├── AudioPlayer         ← optional ambient audio (Howler.js)
        └── data/memories.ts    ← single source of truth for all content
```

---

## Project Layers

| Layer | Responsibility | Location |
|---|---|---|
| **Pages** | Route entry points only | `app/page.tsx` |
| **Journey** | Sequence state, navigation, current index | `components/memory-journey.tsx` |
| **Primitives** | Reusable UI building blocks | `components/photo-card.tsx`, `components/thought-bubble.tsx`, `components/transition.tsx` |
| **Hooks** | Shared stateful logic | `hooks/` |
| **Utils** | Pure functions | `utils/` |
| **Data** | All memory content | `data/memories.ts` |
| **Types** | Shared TypeScript interfaces | `types/index.ts` |
| **Assets** | Photos and audio | `public/photos/`, `public/audio/` |

---

## Dependency Rules

- Pages import MemoryJourney only.
- MemoryJourney imports Primitives, Hooks, and Data.
- Primitives import Hooks and Utils only. No cross-primitive imports.
- Hooks import Utils and Types only.
- Utils are pure — no imports from layers above.
- Data files are plain TypeScript — no component or hook imports.

**Direction:** `Pages → Journey → Primitives → Hooks → Utils`

---

## Module Interaction

```
MemoryJourney
  │
  ├── reads memories[] from data/memories.ts
  ├── tracks currentIndex in state
  ├── renders PhotoCard for active memory
  │     ├── displays full-screen photo (next/image)
  │     └── renders ThoughtBubble on hover/tap
  ├── renders Transition between photos (on index change)
  └── handles navigation (click, tap, keyboard arrow)
```

---

## Data Flow

```
data/memories.ts
  └── Memory[]
        ├── id: string
        ├── src: string          ← path to photo in public/photos/
        ├── thought: string      ← revealed on hover or tap
        ├── alt: string          ← accessibility description
        ├── date?: string        ← optional label
        └── location?: string    ← optional label
```

All content flows from this file downward. No component holds its own content — everything is passed as props from MemoryJourney.

---

## Key Design Rules

1. **One component for all photos.** `PhotoCard` is the single primitive. There are no per-photo or per-memory components.
2. **Data lives in one place.** Adding a memory means editing `data/memories.ts` only — no code changes.
3. **Transitions are stateless.** They receive `isEntering` / `isExiting` booleans and animate accordingly.
4. **ThoughtBubble is dumb.** It receives `text` and `isVisible` — it does not manage its own trigger logic.
5. **Audio is optional and user-initiated.** Never autoplay. Degrade gracefully if Howler is absent.
6. **No prop drilling beyond two levels.** If data needs to go deeper, restructure or use React context.

---

## Adding a New Memory

```
1. Copy photo → public/photos/your-photo.jpg
2. Open data/memories.ts
3. Add to the array:
   {
     id: 'unique-id',
     src: '/photos/your-photo.jpg',
     thought: 'What you were thinking or feeling.',
     alt: 'Brief description for screen readers',
     date: 'Month Year',       // optional
     location: 'Place name',   // optional
   }
4. Done.
```
