# Prompt: Write Tests

Use this when asking Claude to write or improve tests.

---

```
I want tests written for the following in the Replay project.

Target: [file, hook, util, or component]
What to cover: [behaviour to test, or "all untested behaviour"]

Before writing tests, please:
1. Read the target file completely.
2. List the distinct behaviours worth testing (not implementation details).
3. Identify any dependencies that need to be mocked and confirm the mocking strategy.

Test approach:
- Vitest + React Testing Library.
- Test behaviour, not internals.
- One describe per file, one it per behaviour.
- Avoid testing pure rendering with no interaction or logic.
- Prefer testing what a user would observe over what the code does internally.

Do NOT write tests that will become brittle if we rename a variable or restructure JSX.
Do NOT mock things unless they are I/O, timers, or out-of-scope modules.
```
