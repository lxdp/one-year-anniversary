# /feature

Implement a new feature in the Replay project.

## Objective

Guide Claude through a structured feature implementation that respects existing architecture, reuses existing primitives, and produces clean, tested code.

## Steps

1. **Read context** — Read `CLAUDE.md`, `docs/architecture/overview.md`, and any relevant existing files before writing a line of code.
2. **Understand scope** — Identify which scenes or systems are affected. Identify which existing primitives, hooks, or utils can be reused.
3. **Propose before implementing** — Describe your intended approach and list any decisions the developer should make. Wait for approval.
4. **Create feature doc** — Copy `docs/features/feature-template.md` to `docs/features/[feature-name].md` and fill it in before writing code.
5. **Implement** — Write clean, typed, component-driven code following `docs/standards/coding-standards.md`.
6. **Test** — Write unit tests for any new utility functions or hooks.
7. **Update docs** — If a new reusable system was added, update `docs/architecture/overview.md`.

## Expected Output

- New or modified component files.
- New or modified data config files.
- A completed feature doc in `docs/features/`.
- Unit tests for new logic.
- An architecture doc update if applicable.

## Verification

Before marking complete:
- [ ] TypeScript compiles with zero errors.
- [ ] Existing tests pass.
- [ ] Feature works on both desktop (hover) and mobile (touch).
- [ ] Animations respect `prefers-reduced-motion`.
- [ ] No `console.log` left in code.
