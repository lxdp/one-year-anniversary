# /refactor

Refactor code in the Replay project without changing behaviour.

## Objective

Improve structure, reduce duplication, or clarify intent — with zero behaviour change.

## Steps

1. **Read all affected files** — Understand what exists before proposing changes.
2. **Map all call sites** — List every file that imports or uses the target code.
3. **Propose the new structure** — Describe the refactor before writing code. Confirm the external API stays the same or list what changes.
4. **Check test coverage** — If tests are inadequate to verify the refactor is safe, write them first.
5. **Implement** — Change structure only. No feature additions, no bug fixes in the same commit.
6. **Update architecture docs** — If the layer structure changed, update `docs/architecture/overview.md`.

## Expected Output

- Refactored code with no behaviour change.
- All existing tests passing.
- An updated architecture doc if layers or module boundaries changed.

## Verification

- [ ] Behaviour is identical before and after.
- [ ] All existing tests pass.
- [ ] TypeScript compiles with zero errors.
- [ ] No new `any` types introduced.
- [ ] Architecture doc updated if applicable.

## Constraints

- Do not mix a refactor with a bug fix or feature in the same commit.
- Do not add speculative abstractions for features not yet planned.
