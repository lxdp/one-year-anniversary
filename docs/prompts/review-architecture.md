# Prompt: Review Architecture

Use this periodically or before significant refactors to get an architectural assessment.

---

```
Please review the current architecture of the Replay project.

Focus areas: [list specific areas, or "overall"]

For each focus area, please:
1. Read docs/architecture/overview.md first to understand the intended design.
2. Read the relevant source files.
3. Identify any drift from the intended architecture (dependency violations, wrong layers, etc.)
4. Identify duplication that should be extracted into shared primitives.
5. Identify over-engineering or complexity that adds no value.
6. Identify missing abstractions that are causing code duplication.

Output format:
- Summary: overall health (good / minor issues / needs attention)
- Findings: each finding with severity (low / medium / high), description, and recommended action
- Priority: which findings to address first

Do NOT propose changes outside the scope of what you read.
Do NOT suggest adding new libraries unless there is a clear, significant benefit.
Frame all recommendations in terms of the project's goals: emotional storytelling, clean code, maintainability.
```
