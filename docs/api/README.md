# Data Contract

> This project has no external API. This file documents the internal data contract that drives all content.

---

## Memory

The core type. Every photo in the experience is described by one `Memory` object.

```ts
interface Memory {
  id: string           // unique identifier, kebab-case (e.g. 'lakeside-walk')
  src: string          // path to photo asset (e.g. '/photos/lakeside-walk.jpg')
  thought: string      // personal thought revealed on hover or tap
  alt: string          // accessibility description of the photo
  date?: string        // optional date label (e.g. 'March 2025')
  location?: string    // optional location label (e.g. 'The Mount')
}
```

---

## memories array

All memories are exported as a typed array from `data/memories.ts`:

```ts
// data/memories.ts
import { Memory } from '@/types'

export const memories: Memory[] = [
  {
    id: 'example',
    src: '/photos/example.jpg',
    thought: 'What you were thinking or feeling in this moment.',
    alt: 'Brief description for screen readers',
    date: 'Month Year',
    location: 'Place name',
  },
]
```

---

## Rules

- `id` must be unique across all memories.
- `src` must point to a file that exists in `public/photos/`.
- `thought` is the emotional core of each memory — write it in first person, present tense.
- `alt` is required for accessibility — describe what is in the photo, not the feeling.
- `date` and `location` are optional labels rendered as small text on the card.

---

## Adding a memory

1. Copy photo to `public/photos/your-filename.jpg`
2. Add one object to the `memories` array in `data/memories.ts`
3. No other files need changing

---

## Update policy

Update this file when:
- A new field is added to the `Memory` interface
- The shape of the data contract changes
- A new optional field is introduced

Do not add fields speculatively — only when they are needed by a shipped feature.
