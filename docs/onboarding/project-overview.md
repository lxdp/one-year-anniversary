# Project Overview

> Read this first. You should understand the project in under 5 minutes.

---

## What is Replay?

Replay is a **personal interactive web experience** — a gift built for the developer's girlfriend. She moves through a sequence of real photos from their relationship, one at a time. Each photo fills the screen. Hovering (desktop) or tapping (mobile) reveals a personal thought or feeling from that moment. Clicking progresses to the next memory.

This is not a gallery. It is not a slideshow. It is emotional storytelling through photos and words.

---

## What makes it work

There is one TypeScript data file — `data/memories.ts` — that contains every photo path and every personal thought. One reusable component — `PhotoCard` — renders all of them. Adding a new memory means dropping a photo in `public/photos/` and adding one object to the data file. No code changes needed.

---

## Technology

| Tool | Why |
|---|---|
| Next.js | Routing, SSG, image optimisation via `next/image` |
| TypeScript | Strong typing throughout |
| TailwindCSS | Utility-first styling |
| Framer Motion | Slow, cinematic animations and transitions |
| Vercel | Zero-config deployment |

---

## Project Values (in priority order)

1. **Emotional impact** — the experience should feel personal, warm, and intimate
2. **Polish** — animations are slow, intentional, never distracting
3. **Simplicity** — one data file, one card component, no unnecessary complexity
4. **Clean code** — readable, composable, well-typed

---

## Where Things Live

```
app/                        Next.js entry point
components/
  memory-journey.tsx        Manages sequence and navigation
  photo-card.tsx            Single reusable photo + thought component
  thought-bubble.tsx        Text revealed on hover/tap
  transition.tsx            Between-photo animation
hooks/                      Custom hooks
utils/                      Pure functions
data/
  memories.ts               ALL content lives here — photos + thoughts
types/
  index.ts                  Shared TypeScript interfaces
public/
  photos/                   All photo assets go here
  audio/                    Optional ambient audio
docs/                       This documentation
```

---

## The Memory Type

```ts
interface Memory {
  id: string
  src: string          // path to photo in public/photos/
  thought: string      // revealed on hover or tap
  alt: string          // accessibility description
  date?: string        // optional — e.g. 'March 2025'
  location?: string    // optional — e.g. 'The Mount'
}
```

---

## Where to Start

If you are Claude starting a new session:
1. Read `CLAUDE.md` — constraints and conventions.
2. Read this file — you just did.
3. Read `docs/architecture/overview.md` before touching any component files.
4. Only load other docs when needed for a specific task.

If you are a human starting development:
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`
4. Add photos to `public/photos/` and entries to `data/memories.ts`
