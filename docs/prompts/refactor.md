# Prompt: Refactor

Use this when requesting a refactor. Fill in the blanks.

---

```
I want to refactor the following in the Replay project.

Target: [file, component, or system name]
Reason: [why this needs to change — duplication, complexity, wrong abstraction level, etc.]
Goal: [what "better" looks like when done]

Before making any changes, please:
1. Read all files affected by this refactor.
2. List every place that imports or uses the target code.
3. Describe your proposed new structure.
4. Confirm the external API (props, return values) will remain the same OR list what will change.
5. Estimate how many files will be touched.

Wait for my approval before writing any code.

Constraints:
- Do not change behaviour, only structure.
- Do not mix a refactor with a feature or bug fix in the same commit.
- All existing tests must still pass after the refactor.
- If tests are inadequate to verify the refactor is safe, write them first.
- Update docs/architecture/overview.md if the layer structure changes.
```
