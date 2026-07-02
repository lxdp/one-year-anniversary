# Architecture Overview

> Update this file when a new reusable system is added or the layer structure changes.

---

## High-Level Architecture

Replay is a **client-side interactive experience** built on Next.js. There is no persistent backend, no database, and no user accounts. All content is statically defined and the app is deployed to Vercel as a static/SSG export.

```
User Browser
  └── Next.js App (Static/SSG)
        ├── Scene Engine         ← controls which scene is active
        ├── Scene Components     ← one per date location
        ├── Hotspot System       ← reusable interactive elements
        ├── Transition System    ← reusable scene transitions
        ├── Animation Primitives ← shared Framer Motion wrappers
        ├── Audio System         ← optional Howler.js integration
        └── Scene Data/Config    ← JSON/TS data files per scene
```

---

## Project Layers

| Layer | Responsibility | Examples |
|---|---|---|
| **Pages** | Route entry points only | `app/page.tsx`, `app/[scene]/page.tsx` |
| **Scene Engine** | Sequence control, current scene state | `components/scene-engine/` |
| **Scenes** | Per-location layout and composition | `components/scenes/ice-skating/` |
| **Primitives** | Reusable building blocks | `components/primitives/` |
| **Hooks** | Shared stateful logic | `hooks/` |
| **Utils** | Pure functions | `utils/` |
| **Data** | Scene config, hotspot data | `data/scenes/` |
| **Types** | Shared TypeScript types | `types/` |

---

## Dependency Rules

- Pages may import Scene Engine only.
- Scene Engine may import Scenes and Primitives.
- Scenes may import Primitives, Hooks, Utils, and Data. Scenes must NOT import other Scenes.
- Primitives may import Hooks and Utils only. No cross-primitive imports.
- Hooks may import Utils and Types only.
- Utils are pure — no imports from the layers above.
- Data files are plain TS/JSON — no component imports.

**Direction:** `Pages → Engine → Scenes → Primitives → Hooks → Utils`

---

## Module Interaction

```
Scene Engine
  │
  ├── reads current index from state
  ├── renders active Scene component
  └── handles scene progression (click / keyboard)
        │
        └── Scene Component
              ├── renders SceneBackground
              ├── renders HotspotLayer
              │     └── Hotspot[] (position, hover, tooltip, click)
              ├── renders DialogueBubble (optional)
              └── renders SceneTransition (on exit)
```

---

## Data Flow

```
data/scenes/[scene-id].ts
  └── Scene Config Object
        ├── id, title, background
        ├── atmosphere (particles, audio cue)
        └── hotspots[]
              ├── position: { x, y } (% of viewport)
              ├── label
              ├── thought (text revealed on hover)
              └── onClick? (optional action)
```

Scene components receive their config as a prop. No scene reads global state directly — the engine passes what it needs.

---

## Design Principles

1. **Data drives scenes.** If you can express it in a config file, do so.
2. **Scenes are leaves.** They compose primitives; they never contain primitives' logic.
3. **Transitions are stateless.** They receive `isEntering` / `isExiting` booleans and animate accordingly.
4. **Hotspots are dumb.** They receive callbacks; they do not manage their own navigation state.
5. **Audio is optional and user-initiated.** Never autoplay. Always gracefully degrade if Howler is absent.
6. **No prop drilling beyond two levels.** If data needs to go deeper, use React context or restructure.
