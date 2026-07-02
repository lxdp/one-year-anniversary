# /bugfix

Fix a bug in the Replay project with minimal scope and a test to prevent regression.

## Objective

Identify the root cause of a bug, fix only what is broken, and prevent it from recurring.

## Steps

1. **Read the affected files** — Do not guess the cause. Read the actual code.
2. **Identify root cause** — State the root cause explicitly before proposing a fix.
3. **Check blast radius** — Determine if the same bug exists in other components.
4. **Propose fix** — Describe the change and why it addresses the root cause. Wait for approval on non-trivial changes.
5. **Implement** — Make the minimal change needed. Do not refactor unrelated code.
6. **Write a regression test** — Write a test that would have caught this bug before it was introduced.

## Expected Output

- A minimal, focused code change.
- A test covering the fixed behaviour.
- A commit message that explains the root cause, not just the symptom.

## Verification

- [ ] The bug no longer reproduces.
- [ ] No related components regressed.
- [ ] Existing tests still pass.
- [ ] TypeScript compiles with zero errors.
