# /cleanup

Remove dead code, fix inconsistencies, and tighten the codebase without changing behaviour.

## Objective

Keep the codebase clean and consistent as the project grows.

## Steps

1. **Audit for dead code** — Unused imports, unused components, unused data fields.
2. **Audit for inconsistencies** — Naming that doesn't match `docs/standards/coding-standards.md`, files in wrong directories.
3. **Audit for duplicated logic** — Code that should be in a shared util or hook but has been written multiple times.
4. **Audit for stale comments** — Comments that describe what the code does (not why) or that reference removed behaviour.
5. **Propose changes** — List what you found before making any changes.
6. **Implement** — Make minimal, safe changes. No behaviour change. No feature additions.

## Expected Output

- A list of findings before implementation.
- Cleaned-up code with no behaviour change.
- All tests still passing.

## Constraints

- Do not rename things that are referenced in tests without updating the tests.
- Do not remove code that looks unused unless you have confirmed it is truly unreferenced.
- One cleanup commit per concern — do not bundle unrelated cleanups.
