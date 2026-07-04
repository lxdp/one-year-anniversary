# 0002 — Pivot from linear photo sequence to an explorable brain

**Date:** 2026-07-04
**Status:** accepted
**Deciders:** Lucas

---

## Context

The linear photo sequence (ADR 0001) worked, but in practice it read
like a presentation slideshow — press next, see photo, repeat. The
gift should feel like being let inside Lucas's head, not like sitting
through slides.

---

## Decision

Rebuild the experience as an explorable brain. A welcome screen
("Welcome to Lucas's brain") leads into a neural-network interface of
glowing nodes. Clicking a node opens that memory's photo with Lucas's
thoughts and feelings; viewing a memory reveals its connected nodes
(progressive reveal), so the network lights up as she explores.

The photo + thought content model from ADR 0001 carries over; the
linear card sequence, `MemoryJourney`, and `PhotoCard` are replaced by
a graph (`data/brain.ts`), `BrainView`, `NodeButton`, and
`MemoryPopup`.

---

## Reasoning

- "Inside his brain" is a stronger emotional frame than a slideshow —
  the medium itself says *you are what I think about*.
- Progressive reveal gives a narrative arc (the brain wakes up) and a
  natural ending (every node lit) without forcing a strict order.
- The graph is pure data: reshaping the story means editing
  `connections`, not code.

---

## Alternatives Considered

| Option | Why rejected |
|---|---|
| Keep the linear sequence, restyle it | Still reads as slides; the problem was the form, not the styling |
| Free exploration (all nodes visible immediately) | No arc, no ending; overwhelming on first load |
| Fixed guided path drawn as a network | Linear story in a graph costume — loses the point of exploring |

---

## Consequences

- Exploration state (visited/revealed) must be derived and managed —
  `utils/brain-graph.ts` (pure) + `hooks/use-brain-exploration.ts`.
- Every node must be reachable through `connections`; an unreferenced
  node silently never appears. The data contract documents this.
- Node positions are hand-placed percentages; layouts need care as
  the graph grows.
- Adding a memory is now three steps (photo, node, connection) instead
  of two.

---

## Related

- Supersedes [0001](0001-pivot-to-photo-memory-experience.md) — the
  photo + thought content model survives; the linear presentation does
  not.
- `docs/api/README.md` — the `MemoryNode` data contract
- `docs/architecture/overview.md` — updated to match
