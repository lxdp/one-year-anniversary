# PROJECT_SPEC.md

# Project Specification
Version: 3.0

---

# Project Name

Replay

(An explorable brain — a neural network of memories of us.)

---

# Vision

Create an interactive web experience where my girlfriend can explore my brain — a network of glowing nodes, each one a memory of us.

This is not a gallery, a slideshow, or a presentation.

It should feel like being let inside my head: opening a node shows a real photo of us together with what I was thinking and feeling in that moment.

The emphasis is on emotional storytelling, atmosphere, and polish rather than features or complexity.

---

# Core Experience

A welcome screen greets her: **"Welcome to Lucas's Brain"** — a cheerful cartoon brain sprints across the screen, and she has to catch it (click it) to get in. Catching it sets off a little burst of hearts.

Inside is a neural-network interface — soft glowing nodes joined by faint synapses, starting from a single lit node.

Clicking a node opens that memory: the photo, plus my thoughts and feelings about it.

Viewing a memory lights up its connected nodes — the brain progressively wakes up as she explores.

When every node is lit, the brain is fully awake. A quiet completion moment, nothing loud.

The experience should feel romantic, sweet, and playful.

---

# Content Structure

All content lives in a single TypeScript data file: `data/brain.ts`

Each node contains:

- A position on the brain canvas (percentages)
- Connections — which nodes it reveals once viewed
- A memory: photo (from `public/photos/`), a personal thought/feeling, optional date and location labels, and an alt description for accessibility

There is no fixed number of memories. The graph — not code — shapes how the story unfolds. Add, remove, or rewire by editing the data file only.

---

# Design Philosophy

The project should prioritise:

- emotional impact
- smooth, slow animations
- elegant typography
- clean code
- simplicity over complexity
- accessibility
- mobile and desktop parity

The interface should disappear into the experience.

Avoid anything that feels like a website. It should feel like a mind.

---

# User Interaction

Primary interactions:

- click to enter the brain
- click or tap a lit node to open its memory
- close a memory to return to the network
- keyboard access for everything clickable
- optional: ambient audio

Keep interactions minimal. One node, one memory, one moment.

---

# Visual Style

Desired feeling:

romantic

sweet

warm

playful

soft

memory-like

Soft pinks and warm light everywhere. The brain is a character — cute, affectionate, alive.

Playful motion is welcome as long as it stays sweet, not chaotic.

Typography carries the emotional weight inside each memory.

---

# Technical Stack

Primary stack:

Next.js (App Router, static export)

React

TypeScript

TailwindCSS

Framer Motion

Deployment:

Vercel

Potential additions:

Howler.js (optional ambient audio)

No game engine. No graph library unless hand-rolled SVG proves insufficient. No backend. No database.

---

# Architecture Goals

Everything is component-driven.

Content is data-driven — the entire graph lives in one TypeScript file.

`NodeButton` is the single node primitive; `MemoryPopup` is the single memory primitive — no per-node or per-memory components.

Pure graph logic lives in `utils/brain-graph.ts`; exploration state in `hooks/use-brain-exploration.ts`.

Transitions are reusable and stateless.

Avoid duplicated logic.

---

# Content Pipeline

1. Add photo to `public/photos/`
2. Add one node object to `data/brain.ts`
3. Reference its id from another node's `connections` so it can be reached
4. Done — no code changes needed.

---

# Animation Philosophy

Animations should feel natural and full of heart.

Prioritise:

fade

scale

slow cross-dissolve

soft glow and gentle pulse on nodes

slow draw-in of new synapses

playful character motion (the running brain, heart bursts)

The animation supports the emotion — it never distracts from it.

---

# Audio Philosophy

Audio is optional.

Music must never autoplay without user interaction.

---

# Non Goals

Do not build:

backend infrastructure

user authentication

database

complex game mechanics

inventory or scoring systems

This project is intentionally lightweight and personal.

---

# Coding Philosophy

Readable code is preferred over clever code.

Small reusable components.

Strong typing.

Consistent naming.

Minimal side effects.

Functions should have one responsibility.

---

# Testing Expectations

Unit tests for reusable logic — the graph utils especially.

Component tests where interactions are non-trivial.

Focus testing on behaviour rather than implementation details.

---

# Performance Goals

Fast initial load.

Lazy load photos — only the open memory needs its image.

Optimise images using next/image.

Avoid unnecessary re-renders.

Prefer CSS animations over JavaScript where possible.

---

# Success Criteria

When finished, it should feel like wandering through someone's head and finding yourself everywhere in it.

She should finish it remembering the feelings, not the technology.
