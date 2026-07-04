# CLAUDE.md — Replay

> Keep this file under 200 lines. Reference docs/ for detail.

---

## Project Purpose

**Replay** is an explorable brain — a personal gift. A welcome screen ("Welcome to Lucas's brain") leads into a neural-network interface of glowing nodes. Clicking a node opens a real photo of the couple with Lucas's thoughts and feelings about that moment; viewing a memory lights up its connected nodes, so the brain progressively wakes up as she explores. It is not a gallery or slideshow. It should feel intimate, cinematic, and handcrafted. Emotional impact and polish take priority over feature scope or technical novelty.

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
- Data-driven content. The whole brain — nodes, connections, memories — lives in `data/brain.ts`, not in JSX.
- The graph shapes the story: progressive reveal derives entirely from node `connections` + visited state. Pure logic lives in `utils/brain-graph.ts`; stateful logic in `hooks/use-brain-exploration.ts`.
- One reusable `NodeButton` renders every node; one reusable `MemoryPopup` renders every memory. No per-node or per-memory components.
- Transitions are stateless — they receive `isEntering` / `isExiting` and animate accordingly.
- No backend. No database. No auth. This is a static personal experience.

Full architecture: `@docs/architecture/overview.md`

---

## Content Pipeline

Adding a new memory requires exactly two steps:
1. Drop the photo into `public/photos/`
2. Add one node object to `data/brain.ts` (and reference its id from another node's `connections`, or it will never be revealed)

No code changes needed beyond the data file.

---

## Coding Philosophy

- Readable > clever.
- One responsibility per function. One concern per component.
- Strong TypeScript typing. No `any` without a comment explaining why.
- Minimal side effects. Prefer pure functions.
- Prefer CSS animations over JavaScript animations.
- Avoid unnecessary re-renders. Memoize only when measured.

Standards: `@docs/standards/coding-standards.md`

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
- Max ~80 chars per line (soft limit).
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

The interface should disappear into the experience. Animations are slow, intentional, and narrative-supporting — never distracting. The brain should feel alive but calm: soft glows, gentle pulses, faint synapses.

- Prefer: fade, scale, slow cross-dissolve, soft glow/pulse on nodes.
- Avoid: rapid movement, bounce effects, gratuitous transitions.
- Whitespace is intentional. Do not fill it.

---

## What Claude Must NEVER Do

- Add libraries without justification.
- Invent requirements not in the spec or agreed in conversation.
- Silently change architecture — always propose first.
- Write complex logic inside JSX — extract to a hook or util.
- Skip TypeScript types to save time.
- Create per-node or per-memory components — `NodeButton` and `MemoryPopup` are the single primitives.
- Add backend infrastructure (no DB, no auth, no API routes).
- Write comments that restate the code — explain *why* only.

---

## When Claude Should Ask Questions

- Requirements are ambiguous or conflict with project goals.
- A new library is needed.
- An architectural decision would affect multiple files.
- Two valid approaches exist with different trade-offs.

---

## When Claude Should Update Documentation

| Event | Update target |
|---|---|
| New architectural decision | `docs/decisions/` (new ADR) |
| New feature shipped | `docs/features/` |
| New reusable component added | `docs/architecture/overview.md` |
| Data contract changes | `docs/api/README.md` |
| Coding convention changed | `docs/standards/coding-standards.md` |

---

## Key Reference Files

> Load with `@filename` only when the task requires it.

| Purpose | File | Load when |
|---|---|---|
| Architecture overview | `@docs/architecture/overview.md` | Adding/changing any system |
| Coding standards | `@docs/standards/coding-standards.md` | Reviewing or writing code |
| Feature template | `@docs/features/feature-template.md` | Starting a new feature |
| ADR template | `@docs/decisions/adr-template.md` | Making a significant decision |
| Onboarding | `@docs/onboarding/project-overview.md` | Cold session start |
| Review checklist | `@docs/standards/review-checklist.md` | Running /review |
| Data contract | `@docs/api/README.md` | Working on memories data |
