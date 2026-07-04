# PROJECT_SPEC.md

# Project Specification
Version: 2.0

---

# Project Name

Replay

(A photo memory experience — an interactive journey through our relationship.)

---

# Vision

Create an interactive web experience where my girlfriend can move through a curated sequence of real photos from our relationship, each one revealing a personal thought or feeling from that moment.

This is not a gallery or a slideshow.

It should feel like stepping through memories — intimate, cinematic, and handcrafted — even though the only "art" is the photos themselves.

The emphasis is on emotional storytelling, atmosphere, and polish rather than features or complexity.

---

# Core Experience

The user moves through a sequence of photos, one at a time.

Each photo fills the screen.

Hovering over the photo (desktop) or tapping it (mobile) reveals a personal thought or feeling from that moment.

Clicking or tapping progresses to the next memory.

The experience should feel calm, intimate, and cinematic.

---

# Content Structure

All content lives in a single TypeScript data file: `data/memories.ts`

Each memory contains:

- A photo (loaded from `public/photos/`)
- A personal thought revealed on hover or tap
- An optional date label
- An optional location label
- An alt description for accessibility

There is no fixed number of memories. Add or remove by editing the data file only — no code changes needed.

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

The interface should disappear into the photos.

Avoid anything that feels like a website. It should feel like a memory.

---

# User Interaction

Primary interactions:

- hover to reveal thought (desktop)
- tap to reveal thought (mobile)
- click or tap to progress to next memory
- optional: keyboard arrow navigation
- optional: ambient audio

Keep interactions minimal. One photo, one thought, one moment.

---

# Visual Style

Desired feeling:

warm

intimate

cinematic

soft

memory-like

Animations should be slow and intentional.

Whitespace is encouraged.

Typography carries the emotional weight.

---

# Technical Stack

Primary stack:

Next.js (App Router)

React

TypeScript

TailwindCSS

Framer Motion

Deployment:

Vercel

Potential additions:

Howler.js (optional ambient audio)

No game engine. No backend. No database.

---

# Architecture Goals

Everything is component-driven.

Content is data-driven — all memories live in one TypeScript file.

The photo card component is the single reusable primitive.

Transitions are reusable and stateless.

One component handles all photos — no per-photo components.

Avoid duplicated logic.

---

# Content Pipeline

1. Add photo to `public/photos/`
2. Add one object to `data/memories.ts`
3. Done — no code changes needed.

---

# Animation Philosophy

Animations should feel natural and unhurried.

Prioritise:

fade

scale

slow cross-dissolve between photos

subtle parallax (optional)

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

Unit tests for reusable logic.

Component tests where interactions are non-trivial.

Focus testing on behaviour rather than implementation details.

---

# Performance Goals

Fast initial load.

Lazy load photos not yet visible.

Optimise images using next/image.

Avoid unnecessary re-renders.

Prefer CSS animations over JavaScript where possible.

---

# Success Criteria

When finished, the experience should feel like holding a photo album that talks back.

She should finish it remembering the feelings, not the technology.
