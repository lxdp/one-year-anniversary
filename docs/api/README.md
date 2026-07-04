# Data Contract

> This project has no external API. This file documents the internal data contract that drives all content.

---

## MemoryNode

The core type. Every neuron in the brain is one `MemoryNode`.

```ts
interface MemoryNode {
  id: string             // unique identifier, kebab-case (e.g. 'ice-skating')
  position: {            // % of the brain canvas, so the graph scales
    x: number
    y: number
  }
  connections: string[]  // node ids revealed once this memory is viewed
  memory: Memory         // the photo + thought shown in the popup
}

interface Memory {
  id: string           // matches the node id
  src: string          // path to photo asset (e.g. '/photos/ice-skating.jpg')
  thought: string      // personal thought/feelings revealed in the popup
  alt: string          // accessibility description of the photo
  date?: string        // optional date label (e.g. 'March 2025')
  location?: string    // optional location label (e.g. 'The Mount')
}
```

---

## The brain

The whole graph is exported from `data/brain.ts`:

```ts
// data/brain.ts
import type { MemoryNode } from '@/types'

export const ENTRY_NODE_ID = 'ice-skating'  // the first lit node

export const memoryNodes: MemoryNode[] = [
  {
    id: 'example',
    position: { x: 50, y: 50 },
    connections: ['next-memory'],
    memory: {
      id: 'example',
      src: '/photos/example.jpg',
      thought: 'What you were thinking or feeling in this moment.',
      alt: 'Brief description for screen readers',
      date: 'Month Year',
      location: 'Place name',
    },
  },
]
```

---

## Rules

- `id` must be unique across all nodes; `memory.id` matches its node's `id`.
- Every node except the entry node must appear in at least one other node's `connections`, or it can never be revealed.
- `connections` must only contain ids that exist in the array.
- `src` must point to a file that exists in `public/photos/`.
- `thought` is the emotional core — write it in first person, present tense.
- `alt` is required for accessibility — describe what is in the photo, not the feeling.
- `position` values are percentages (0–100) of the brain canvas.

---

## Adding a memory

1. Copy photo to `public/photos/your-filename.jpg`
2. Add one node object to `memoryNodes` in `data/brain.ts`
3. Reference its id from another node's `connections`
4. No other files need changing

---

## Update policy

Update this file when:
- A new field is added to `MemoryNode` or `Memory`
- The shape of the data contract changes
- A new optional field is introduced

Do not add fields speculatively — only when they are needed by a shipped feature.
