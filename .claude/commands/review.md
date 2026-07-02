# /review

Review changed code before merging.

## Objective

Verify that changed code is correct, well-structured, and consistent with project standards before it merges to main.

## Steps

1. **Read the diff** — Run `git diff main...HEAD` to see all changes.
2. **Read the full files for each changed component** — Do not review diffs in isolation.
3. **Check against `docs/standards/review-checklist.md`** — Go through every item.
4. **Check architecture rules** — Verify the dependency direction in `docs/architecture/overview.md` is not violated.
5. **Check for duplication** — Is there existing code that should have been reused instead?
6. **Check emotional quality** — Does this change serve the project's goal of a warm, cinematic, emotionally resonant experience?

## Expected Output

A structured review report:
- **Summary**: overall verdict (approve / needs changes / discuss)
- **Correctness issues**: bugs, missing edge cases
- **Architecture issues**: dependency violations, wrong layer
- **Style issues**: naming, comment quality, component size
- **Praise**: what was done particularly well (important for morale on a personal project)

## Verification

- [ ] All checklist items from `docs/standards/review-checklist.md` addressed.
- [ ] No correctness issues remain unresolved.
