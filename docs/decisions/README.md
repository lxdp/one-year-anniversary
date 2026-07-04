# Architecture Decision Records

ADRs document significant decisions made in this project — what was decided, why, and what alternatives were considered.

## When to write an ADR

Write an ADR when:
- A new library or tool is introduced
- A structural pattern is adopted project-wide (e.g. how scenes are structured)
- A meaningful trade-off was made that a future reader might question
- The "obvious" solution was rejected in favour of something else

Do NOT write an ADR for:
- Routine implementation details
- Decisions that are self-evident from the code
- Decisions that only affect a single file

## File naming

`NNNN-short-title.md` — e.g. `0001-use-framer-motion.md`

## Status values

- `proposed` — under discussion
- `accepted` — active decision
- `deprecated` — no longer applies
- `superseded-by: NNNN` — replaced by a later ADR

## Index

| # | Title | Status |
|---|---|---|
| [0001](0001-pivot-to-photo-memory-experience.md) | Pivot from illustrated scenes to a photo memory experience | superseded-by: 0002 |
| [0002](0002-pivot-to-explorable-brain.md) | Pivot from linear photo sequence to an explorable brain | accepted |

Update this table when you add a new ADR.
