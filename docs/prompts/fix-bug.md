# Prompt: Fix a Bug

Use this when reporting a bug. Fill in the blanks.

---

```
There is a bug in the Replay project.

Description: [what is happening vs. what should happen]
Where it occurs: [component name, scene, or route]
Steps to reproduce: [numbered list]
Expected behaviour: [what should happen]
Actual behaviour: [what actually happens]
Environment: [browser, device type, viewport size if relevant]

Before making any change, please:
1. Read the affected file(s) and identify the root cause.
2. Check whether the bug is caused by a missing edge case that other components might also have.
3. Propose your fix and explain why it addresses the root cause.
4. Confirm there are no side effects on other components.

Do NOT change anything outside the minimal scope needed to fix this bug.
Do NOT refactor unrelated code in the same commit.
After fixing, write a test that would have caught this bug.
```
