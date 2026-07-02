# /test

Write or improve tests for a target file, hook, or component.

## Objective

Ensure critical behaviour is covered by fast, maintainable tests.

## Steps

1. **Read the target file completely** — Understand all exported behaviour.
2. **List testable behaviours** — Enumerate what is worth testing (not implementation details).
3. **Identify mocking needs** — List what needs to be mocked and why.
4. **Write tests** — Using Vitest + React Testing Library. One `describe` per file, one `it` per behaviour.
5. **Run tests** — Verify they pass.

## Expected Output

- Test file(s) alongside the tested file(s).
- All tests passing.
- Coverage of the primary behaviour and key edge cases.

## Constraints

- Test behaviour, not internals.
- Do not test pure rendering with no logic.
- Do not write tests that break on variable renames or JSX restructuring.
- Keep tests readable — a failing test should explain what broke without reading the implementation.

## Verification

- [ ] `npm test` passes.
- [ ] No tests mock more than necessary.
- [ ] Test names describe observable behaviour, not code paths.
