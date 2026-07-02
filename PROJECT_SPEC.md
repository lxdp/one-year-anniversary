# PROJECT_SPEC.md

# Project Specification
Version: 1.0

---

# Project Name

Replay

(Working title. A digital recreation of our first date.)

---

# Vision

Create an interactive web experience that allows my girlfriend to relive our first date through a sequence of handcrafted interactive scenes.

This is **not** intended to be a traditional game.

The experience should feel like stepping through a collection of memories.

The emphasis is on emotional storytelling, atmosphere and polish rather than gameplay mechanics.

The project should be maintainable, modular and enjoyable to continue improving after the initial release.

---

# Core Experience

The user progresses through a sequence of scenes representing different locations from our first date.

Each scene contains a beautiful illustration or background together with a handful of interactive hotspots.

Hovering over a hotspot reveals thoughts, memories or emotions from that moment.

Clicking progresses naturally to the next memory.

The experience should feel calm, reflective and cinematic.

---

# Story Structure

Current planned scenes:

1. Ice Skating
2. Nando's
3. First Viewpoint (The Mount)
4. My House (Monster Energy stop)
5. Sunset Viewpoint
6. Stargazing at The Mount
7. Driving Her Home
8. Ending Screen

This order should remain linear.

---

# Design Philosophy

The project should prioritise:

- emotional impact
- smooth animations
- elegant UI
- clean code
- modular architecture
- maintainability
- accessibility
- simplicity over unnecessary complexity

Avoid adding mechanics that distract from the story.

---

# User Interaction

Primary interactions:

- hover hotspots
- click navigation
- subtle animations
- scroll where appropriate
- optional ambient audio

The experience should never overwhelm the user with interaction.

Each scene should contain only a few meaningful interactive elements.

---

# Visual Style

Desired feeling:

warm

minimal

cinematic

soft

cozy

memory-like

The interface should disappear into the experience.

Animations should be slow and intentional.

Whitespace is encouraged.

---

# Technical Goals

Primary stack:

Next.js

React

TypeScript

TailwindCSS

Framer Motion

Deployment:

Vercel

Potential additions:

Howler.js (audio)

GSAP (only if needed)

No game engine unless absolutely necessary.

---

# Architecture Goals

The project should favour composition over inheritance.

Everything should be component driven.

Scenes should be reusable.

Interactive hotspots should be reusable.

Transitions should be reusable.

Animations should be reusable.

Avoid duplicated logic.

---

# Scene System

Every scene should follow the same structure.

Scene

- background
- title
- atmosphere
- hotspots
- dialogue/thoughts
- transition

Each scene should be configurable through data whenever possible.

---

# Hotspot System

Hotspots should support:

position

hover state

animation

tooltip

optional click action

optional unlock conditions (future)

The implementation should be generic enough that every scene can reuse it.

---

# Animation Philosophy

Animations should feel natural.

Avoid excessive movement.

Prioritise:

fade

scale

slow transitions

parallax (optional)

floating particles (optional)

The animation should support the narrative instead of distracting from it.

---

# Audio Philosophy

Audio should be optional.

Possible ambience:

ice rink

restaurant ambience

wind

birds

night ambience

Music should never autoplay without user interaction.

---

# Scalability

The project should support future additions such as:

new memories

multiple stories

save progress

mobile optimisation

accessibility improvements

voice narration

alternative endings

The architecture should make future expansion straightforward.

---

# Non Goals

Do not build:

inventory systems

combat

physics

pathfinding

NPC AI

character movement

complex game mechanics

backend infrastructure

user authentication

multiplayer

database

This project is intentionally lightweight.

---

# Coding Philosophy

Readable code is preferred over clever code.

Small reusable components.

Strong typing.

Consistent naming.

Minimal side effects.

Functions should generally have one responsibility.

---

# Testing Expectations

Unit tests for reusable logic.

Component tests where valuable.

Critical interactions should be tested.

Focus testing on behaviour rather than implementation details.

---

# Performance Goals

Fast initial load.

Lazy load assets where appropriate.

Optimise images.

Avoid unnecessary rerenders.

Prefer CSS animations over JavaScript when possible.

---

# Documentation Philosophy

Every reusable system should be documented.

Architecture decisions should be recorded using ADRs.

Documentation should explain *why* rather than restating the code.

---

# Git Workflow

Feature branches.

Small commits.

Meaningful commit messages.

Pull requests should explain why changes were made.

---

# Claude Expectations

Claude should:

Think before implementing.

Prefer existing abstractions.

Avoid duplicate code.

Keep components focused.

Update documentation whenever architecture changes.

Recommend better architecture when appropriate.

Ask questions whenever requirements are ambiguous.

Never introduce unnecessary complexity.

Never invent requirements.

Never silently change project architecture.

Never add libraries without explaining why.

---

# Success Criteria

When finished, the experience should feel like an interactive story rather than a website.

The user should finish the experience remembering the emotions of the date rather than noticing the technology behind it.
