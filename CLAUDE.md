# CLAUDE.md — Replay

> Keep this file under 200 lines. Reference docs/ for detail.

---

## Project Purpose

**Replay** is an interactive web experience that lets the developer's girlfriend relive their first date through a sequence of handcrafted, cinematic scenes. It is a personal gift — emotional impact, atmosphere, and polish take priority over feature scope or technical novelty.

---

## Technology Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | TailwindCSS |
| Animation | Framer Motion |
| Audio | Howler.js (optional) |
| Deployment | Vercel |

Do not introduce new libraries without explaining why and getting approval first.

---

## Architecture Principles

- Component-driven. Everything is a composable React component.
- Data-driven scenes. Scene content lives in config/data files, not JSX.
- Shared systems: scenes, hotspots, transitions, and animations are all reusable primitives.
- Composition over inheritance. Favour small, focused components composed together.
- No backend. No database. No auth. This is intentionally a static experience.

Full architecture: `docs/architecture/overview.md`

---

## Coding Philosophy

- Readable > clever.
- One responsibility per function. One concern per component.
- Strong TypeScript typing. No `any` without a comment explaining why.
- Minimal side effects. Prefer pure functions.
- Prefer CSS animations over JavaScript animations.
- Avoid unnecessary re-renders. Memoize only when measured.

Standards: `docs/standards/coding-standards.md`

---

## Naming Conventions

| Thing | Convention |
|---|---|
| Components | `PascalCase` |
| Hooks | `useCamelCase` |
| Utils/helpers | `camelCase` |
| Types/interfaces | `PascalCase` |
| Constants | `SCREAMING_SNAKE_CASE` |
| Files | `kebab-case.tsx` |
| Dirs | `kebab-case/` |

---

## Formatting Rules

- 2-space indent.
- Single quotes in JS/TS.
- Trailing commas in multiline expressions.
- Max ~80 chars per line (soft limit, not enforced by formatter alone).
- Prettier handles formatting — do not fight it.

---

## Testing Expectations

- Unit tests for reusable logic (hooks, utils).
- Component tests where interactions are non-trivial.
- Test behaviour, not implementation.
- No test for pure rendering with no logic.
- Use Vitest + React Testing Library.

---

## Git Workflow

- Branch from `main`. Name branches `feature/`, `fix/`, `refactor/`, `chore/`.
- Small, atomic commits. Commit messages explain *why*, not *what*.
- PRs use the template in `templates/pull-request.md`.
- Do not merge without a passing build.

---

## Visual & Animation Philosophy

The interface should disappear into the experience. Animations are slow, intentional, and narrative-supporting — never distracting.

- Prefer: fade, scale, slow transitions, parallax.
- Avoid: rapid movement, bounce effects, gratuitous effects.
- Whitespace is intentional. Do not fill it.

---

## What Claude Must NEVER Do

- Add libraries without justification.
- Invent requirements not in the spec or agreed in conversation.
- Silently change architecture — always propose first.
- Write complex logic inside JSX — extract to a hook or util.
- Skip TypeScript types to save time.
- Add backend infrastructure (no DB, no auth, no server routes beyond API routes if needed).
- Make scenes tightly coupled — every scene must be composable from shared primitives.
- Write comments that restate the code — explain *why* only.

---

## When Claude Should Ask Questions

- Requirements are ambiguous or conflict with project goals.
- A new library is needed.
- An architectural decision would affect multiple files.
- The requested change feels out of scope for a personal gift project.
- Two valid approaches exist with different trade-offs.

---

## When Claude Should Update Documentation

| Event | Update target |
|---|---|
| New architectural decision | `docs/decisions/` (new ADR) |
| New feature shipped | `docs/features/` |
| New reusable system added | `docs/architecture/overview.md` |
| API contract defined | `docs/api/` |
| Coding convention changed | `docs/standards/coding-standards.md` |

Do not update docs speculatively. Update them when the code ships.

---

## Key Reference Files

| Purpose | File |
|---|---|
| Architecture overview | `docs/architecture/overview.md` |
| Coding standards | `docs/standards/coding-standards.md` |
| Feature template | `docs/features/feature-template.md` |
| ADR template | `docs/decisions/adr-template.md` |
| Onboarding | `docs/onboarding/project-overview.md` |
| Prompt templates | `docs/prompts/` |

---

## Scene Inventory

1. Ice Skating
2. Nando's
3. First Viewpoint (The Mount)
4. My House (Monster Energy stop)
5. Sunset Viewpoint
6. Stargazing at The Mount
7. Driving Her Home
8. Ending Screen
