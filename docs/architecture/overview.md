# Architecture Overview

> Update this file when a new reusable component or system is added.

---

## High-Level Architecture

Replay is a **client-side explorable brain** built on Next.js. There is no backend, no database, and no user accounts. All content is statically defined in a single TypeScript data file and deployed to Vercel as a static export.

```
User Browser
  └── Next.js App (Static Export)
        ├── BrainExperience     ← phase shell: welcome → exploring
        │     ├── WelcomeScreen ← catch the running brain to get in
        │     │     └── RunningBrain ← the cartoon brain character
        │     └── BrainView     ← the neural network canvas
        │           ├── ConnectionLayer ← SVG synapses between revealed nodes
        │           ├── NodeButton      ← one glowing neuron per memory
        │           └── MemoryPopup     ← photo + thought for the open node
        ├── Transition          ← stateless cross-dissolve (isEntering/isExiting)
        └── data/brain.ts       ← single source of truth: nodes, edges, memories
```

---

## Project Layers

| Layer | Responsibility | Location |
|---|---|---|
| **Pages** | Route entry points only | `app/page.tsx` |
| **Experience** | Phase state (welcome ↔ exploring) | `components/brain-experience.tsx` |
| **Brain** | Network rendering, popup orchestration | `components/brain-view.tsx` |
| **Primitives** | Reusable UI building blocks | `components/node-button.tsx`, `components/connection-layer.tsx`, `components/memory-popup.tsx`, `components/welcome-screen.tsx`, `components/running-brain.tsx`, `components/transition.tsx` |
| **Hooks** | Exploration state | `hooks/use-brain-exploration.ts` |
| **Utils** | Pure graph logic | `utils/brain-graph.ts` |
| **Data** | The entire brain | `data/brain.ts` |
| **Types** | Shared TypeScript interfaces | `types/` (re-exported from `types/index.ts`) |
| **Assets** | Photos | `public/photos/` |

---

## Dependency Rules

- Pages import `BrainExperience` only.
- `BrainExperience` imports `WelcomeScreen`, `BrainView`, and `Transition`.
- `BrainView` imports Primitives, Hooks, and Data. It is the only component that touches exploration state.
- Primitives are dumb: props in, callbacks out. They never import Data or Hooks.
- Hooks import Utils and Types only.
- Utils are pure — no imports from layers above.
- `data/brain.ts` imports Types only — no component or hook imports.

**Direction:** `Pages → BrainExperience → BrainView → Primitives → Hooks → Utils`

---

## Progressive Reveal Model

All exploration state derives from two inputs: the graph and the set of visited node IDs.

```
ENTRY_NODE_ID                        ← always revealed
visited node                         ← stays lit ("visited")
visited node's connections[]         ← become clickable ("revealed")
everything else                      ← "hidden"
all nodes visited                    ← isComplete (the brain is awake)
```

`utils/brain-graph.ts` holds the pure derivations (`getRevealedNodeIds`, `getNodeState`, `isBrainFullyExplored`); `hooks/use-brain-exploration.ts` owns the visited/active state and exposes `openNode` / `closePopup`.

---

## Module Interaction

```
BrainExperience
  ├── phase: 'welcome' → WelcomeScreen
  │     └── RunningBrain (catching it plays a heart burst,
  │         then onEnter advances the phase)
  └── phase: 'exploring' → BrainView
        ├── useBrainExploration(memoryNodes, ENTRY_NODE_ID)
        ├── ConnectionLayer (lines between revealed nodes, beneath)
        ├── NodeButton per node (hidden | revealed | visited)
        │     └── onSelect(id) → openNode(id) → marks visited,
        │         reveals its connections
        └── MemoryPopup (active node's memory; onClose → back to network)
```

---

## Data Flow

All content is one typed array. The full contract lives in `docs/api/README.md`.

```
data/brain.ts
  ├── ENTRY_NODE_ID: string          ← the first lit node
  └── memoryNodes: MemoryNode[]
        ├── id, position { x, y }    ← % of the brain canvas
        ├── connections: string[]    ← nodes revealed after viewing
        └── memory                   ← id, src, thought, alt, date?, location?
```

---

## Key Design Rules

1. **The graph is the story.** Which nodes exist, where they sit, and what they unlock is all data — no code changes to reshape the experience.
2. **One NodeButton, one MemoryPopup.** No per-node or per-memory components.
3. **Primitives are dumb.** `NodeButton` receives its `NodeState`; `MemoryPopup` receives a `Memory` and `onClose`. Neither reads exploration state.
4. **Transitions are stateless.** They receive `isEntering` / `isExiting` booleans and animate accordingly.
5. **Every node must be reachable.** Each node (except the entry) must appear in some other node's `connections`, or it can never be revealed.
6. **No prop drilling beyond two levels.** If data needs to go deeper, restructure or use React context.

---

## Adding a New Memory

```
1. Copy photo → public/photos/your-photo.jpg
2. Open data/brain.ts
3. Add a node:
   {
     id: 'unique-id',
     position: { x: 50, y: 50 },      // % of the canvas
     connections: [],                  // what this memory unlocks
     memory: {
       id: 'unique-id',
       src: '/photos/your-photo.jpg',
       thought: 'What you were thinking or feeling.',
       alt: 'Brief description for screen readers',
       date: 'Month Year',            // optional
       location: 'Place name',        // optional
     },
   }
4. Add 'unique-id' to another node's connections so it can be reached.
5. Done.
```
