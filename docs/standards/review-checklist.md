# Code Review Checklist

Use this before merging any PR or before asking Claude to review changes.

---

## Correctness

- [ ] Does the code do what was specified?
- [ ] Are edge cases handled (no hover on touch, failed image load, empty data)?
- [ ] Are there any off-by-one errors or incorrect conditions?
- [ ] Does the TypeScript compile with zero errors?

---

## Architecture

- [ ] Does the change follow the dependency rules in `docs/architecture/overview.md`?
- [ ] Is scene data in a data file, not hardcoded in JSX?
- [ ] Are new components composing primitives rather than reimplementing them?
- [ ] Are there any circular dependencies introduced?

---

## Code Quality

- [ ] No `any` without justification?
- [ ] No `console.log` left in?
- [ ] Functions have one responsibility?
- [ ] No logic written inline in JSX that should be in a hook or util?
- [ ] Are component files under ~100 lines?

---

## Animations

- [ ] Are animation variants defined outside the component render?
- [ ] Does `prefers-reduced-motion` degrade the animation gracefully?
- [ ] Are animation durations consistent with the project's slow, intentional style?

---

## Performance

- [ ] Are images optimised (using `next/image`)?
- [ ] Are assets lazy loaded where appropriate?
- [ ] Is anything triggering unnecessary re-renders?

---

## Tests

- [ ] Are new utility functions or hooks covered by unit tests?
- [ ] Are critical interactions covered by component tests?
- [ ] Do existing tests still pass?

---

## Documentation

- [ ] If a new reusable system was introduced, is `docs/architecture/overview.md` updated?
- [ ] If a significant architectural decision was made, is there a new ADR?
- [ ] If a feature was shipped, is there a feature doc in `docs/features/`?

---

## Polish

- [ ] Does it feel consistent with the emotional tone of the project?
- [ ] Does the UI disappear into the experience, or does it call attention to itself?
- [ ] Are whitespace and spacing intentional?
