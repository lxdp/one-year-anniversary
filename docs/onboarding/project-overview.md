# Project Overview

> Read this first. You should understand the project in under 5 minutes.

---

## What is Replay?

Replay is a **personal interactive web experience** — a digital recreation of a first date, built as a gift. The user (the developer's girlfriend) progresses through 8 cinematic scenes representing locations from that date. Each scene has interactive hotspots that reveal memories and emotions on hover.

This is not a game. There are no mechanics, no scoring, no backend. It is emotional storytelling delivered through clean web technology.

---

## The 8 Scenes (in order)

1. Ice Skating
2. Nando's
3. First Viewpoint (The Mount)
4. My House (Monster Energy stop)
5. Sunset Viewpoint
6. Stargazing at The Mount
7. Driving Her Home
8. Ending Screen

Navigation is strictly linear — no branching.

---

## Technology

| Tool | Why |
|---|---|
| Next.js | Routing, SSG, image optimisation |
| TypeScript | Type safety throughout |
| TailwindCSS | Utility-first styling, no CSS files to manage |
| Framer Motion | Declarative, high-quality animations |
| Vercel | Zero-config deployment, fast CDN |

---

## Project Values (in priority order)

1. **Emotional impact** — the experience should feel personal, warm, and cinematic
2. **Polish** — animations are slow, intentional, and never distracting
3. **Clean code** — readable, composable, well-typed
4. **Simplicity** — no unnecessary complexity, no backend, no over-engineering

---

## Key Architectural Facts

- All scene content is **data-driven** — scene config files, not hardcoded JSX.
- All interactive elements are **reusable primitives** — hotspots, transitions, and animations are shared components.
- There is a **strict dependency direction**: Pages → Engine → Scenes → Primitives → Hooks → Utils.
- Scenes must NOT import each other.

Full architecture: `docs/architecture/overview.md`

---

## Where Things Live

```
app/                    Next.js pages/routes
components/
  scene-engine/         Controls which scene is active
  scenes/               One directory per scene
  primitives/           Shared: Hotspot, SceneBackground, Transition, etc.
hooks/                  Custom hooks (useSceneTransition, useHotspot, etc.)
utils/                  Pure functions
data/scenes/            Config for each scene (hotspot positions, text, etc.)
types/                  Shared TypeScript interfaces
public/                 Static assets (backgrounds, audio)
docs/                   This documentation
```

---

## Where to Start

If you are Claude starting a new session:
1. Read `CLAUDE.md` — your constraints and conventions.
2. Read this file — you just did.
3. Read `docs/architecture/overview.md` — before touching any component files.
4. Only load other docs when you need them for a specific task.

If you are a human starting development:
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`
