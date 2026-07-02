# Coding Standards

> These standards apply to all code in this project. Claude should follow them without being reminded.

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| React components | PascalCase | `HotspotLayer` |
| Custom hooks | `use` + PascalCase | `useSceneTransition` |
| Utility functions | camelCase | `clampPosition` |
| Types and interfaces | PascalCase | `SceneConfig`, `HotspotData` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_HOTSPOTS_PER_SCENE` |
| Files | kebab-case | `hotspot-layer.tsx` |
| Directories | kebab-case | `scene-engine/` |
| CSS class names | Tailwind utilities only (no custom class names unless necessary) | |

---

## Component Size

- A component should fit comfortably in ~100 lines of JSX + logic.
- If a component exceeds this, extract sub-components or custom hooks.
- JSX should describe structure. Logic should live in hooks or utils.

---

## Function Size and Responsibility

- One function, one responsibility.
- Functions that return JSX should not also compute derived state inline — use `useMemo` or extract to a util.
- Prefer many small functions over one large function.
- Avoid deeply nested ternaries. Extract to a variable or function.

---

## TypeScript

- Strict mode is on. Do not disable it.
- No `any` without a comment explaining the constraint.
- Prefer `interface` for objects that will be composed or extended; `type` for unions and utility types.
- Export types from a central `types/` directory when shared across more than one file.
- Props interfaces are named `[ComponentName]Props`.

---

## Error Handling

- Components should not crash silently. If a required prop is missing, fail visibly in development.
- Use TypeScript to enforce required props at compile time.
- For asset loading (images, audio), always handle the failure case gracefully — show a fallback, not a broken UI.
- Do not `try/catch` unless you have a meaningful recovery action.

---

## Comments

Write comments only when the **why** is non-obvious. Never restate what the code does.

**Good:** `// Howler requires user gesture before first play — we defer initialisation`
**Bad:** `// Set the volume to 0.5`

Do not write JSDoc for internal functions. Write it only for exported utilities that form part of a reusable system.

---

## Logging

- No `console.log` in committed code.
- Use `console.warn` / `console.error` only for genuine developer warnings (e.g. missing config).
- Remove debug logging before committing.

---

## Animation

- All animation values live in constants or Framer Motion variants — not inline magic numbers.
- Respect `prefers-reduced-motion`. Wrap animated components with a reduced-motion check.
- Framer Motion variants should be defined outside the component render to avoid re-creation.

---

## Imports

- Absolute imports from `@/` alias.
- Order: React → third-party → internal by layer (types → utils → hooks → components → data).
- No barrel files (`index.ts` re-exporting everything) — they inflate bundle size for this project's scale.

---

## Testing

- Test file: `[filename].test.ts` or `[filename].test.tsx` alongside the file being tested.
- Test behaviour (what the user sees or triggers), not implementation (internals).
- Do not test pure rendering with no interaction.
- Prefer integration-style component tests over mocking everything.
- One `describe` per file, one `it` per behaviour.
