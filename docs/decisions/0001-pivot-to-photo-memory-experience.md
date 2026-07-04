# 0001 — Pivot from illustrated scenes to a photo memory experience

**Date:** 2026-07-04
**Status:** superseded-by: 0002
**Deciders:** Lucas

---

## Context

Replay was originally designed as eight illustrated, scene-based
locations, each with positioned interactive hotspots revealing thoughts.
That design depended on producing (or sourcing) eight pieces of bespoke
artwork, and hotspot positioning only makes sense against known artwork.
Real photos of the couple exist and carry more emotional weight than any
illustration would.

---

## Decision

Rebuild the experience around real photos. All content is a single
`memories` array in `data/memories.ts`; one reusable `PhotoCard`
component renders every photo and reveals its thought on hover or tap.
The scene/hotspot system (scene configs, scene engine, hotspot
primitives) was removed.

---

## Reasoning

- Real photos are the emotional core of the gift — no artwork pipeline
  needed.
- One `PhotoCard` + one data file makes adding a memory a two-step task
  (drop photo, add object) with no code changes.
- A single thought per photo replaces per-scene hotspot positioning,
  which was the most fragile part of the old design.

---

## Alternatives Considered

| Option | Why rejected |
|---|---|
| Keep scenes, use photos as backgrounds with hotspots | Hotspot coordinates are meaningless over arbitrary photos; two content systems to maintain |
| Hybrid: illustrated scenes with embedded photos | Doubles the asset workload for a solo personal project |

---

## Consequences

- Adding memories is trivial; the experience scales to any number of
  photos.
- Per-location bespoke layouts are no longer expressible — everything
  renders through `PhotoCard`. If a moment ever needs a unique layout,
  that requires a new ADR.
- The linear progression engine (`useMemoryProgress`,
  `MemoryJourney`) carries over conceptually unchanged.

---

## Related

- `docs/api/README.md` — the `Memory` data contract
- `docs/architecture/overview.md` — updated to match
