# /docs

Update or create documentation for a recently shipped feature or architectural change.

## Objective

Keep documentation accurate and concise as the codebase evolves.

## Steps

1. **Read the code being documented** — Do not document from memory.
2. **Identify the right doc location**:
   - New reusable system → `docs/architecture/overview.md`
   - Architectural decision → new ADR in `docs/decisions/`
   - Shipped feature → new doc in `docs/features/`
   - Data/type contract → `docs/api/README.md`
   - Coding standard change → `docs/standards/coding-standards.md`
3. **Write docs that explain *why*, not *what*** — The code already says what it does.
4. **Keep it concise** — If a doc grows beyond one screen, it is probably doing too much.
5. **Update CLAUDE.md index** if a new reference file is added.

## Expected Output

- Updated or created doc file(s).
- CLAUDE.md updated if a new key reference is added.

## Constraints

- Do not create docs for hypothetical future features.
- Do not duplicate what is already in `CLAUDE.md`.
- Do not write docs that will be immediately outdated by the next commit.
