# /release

Prepare a release for deployment to Vercel.

## Objective

Ensure the experience is complete, polished, and bug-free before it is shared with the intended recipient.

## Steps

1. **Run the full test suite** — `npm test`. All tests must pass.
2. **Run the build** — `npm run build`. Zero TypeScript errors, zero build warnings if avoidable.
3. **Run the review checklist** — Work through `docs/standards/review-checklist.md` for the full codebase.
4. **Check all 8 scenes** — Navigate through every scene and verify hotspots, animations, and transitions.
5. **Check on mobile viewport** — Verify the experience is usable on a phone (touch, no hover).
6. **Check audio** (if implemented) — Verify audio does not autoplay, respects mute, and degrades gracefully.
7. **Check performance** — Lighthouse score or manual check: images optimised, no layout shift, smooth animations.
8. **Deploy** — `git push origin main` triggers Vercel deployment automatically.
9. **Smoke test on production URL** — Click through all 8 scenes on the deployed URL.

## Expected Output

- Passing tests.
- Clean build.
- Successful Vercel deployment.
- Production smoke test passing.

## Verification

- [ ] All 8 scenes navigate correctly.
- [ ] All hotspots respond correctly on both desktop and mobile.
- [ ] Animations feel right — slow, intentional, cinematic.
- [ ] No console errors in browser devtools.
- [ ] Performance feels fast on initial load.
