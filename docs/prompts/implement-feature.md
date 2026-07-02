# Prompt: Implement a Feature

Use this when starting a new feature. Paste and fill in the blanks.

---

```
I want to implement the following feature for the Replay project.

Feature: [name]
Scene(s) affected: [scene names or "all" or "none — shared system"]
Description: [one paragraph describing what it should do and feel like]

Before writing any code, please:
1. Read CLAUDE.md and confirm you understand the constraints.
2. Read docs/architecture/overview.md to understand where this feature fits.
3. Identify which existing primitives, hooks, or utils can be reused.
4. List any trade-offs or decisions I should make before you start.
5. If a data file needs to change, describe the shape change first.

Do NOT start writing code until I confirm your approach.

When you are ready to implement:
- Follow docs/standards/coding-standards.md throughout.
- Keep every new component under ~100 lines.
- Write tests for any new utility functions.
- Respect prefers-reduced-motion.
- Update docs/architecture/overview.md if you add a new reusable system.
```
