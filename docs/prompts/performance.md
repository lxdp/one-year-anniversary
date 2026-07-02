# Prompt: Performance Optimisation

Use this when investigating or fixing a performance problem.

---

```
There is a performance issue in the Replay project.

Symptom: [what is slow, jank, or expensive]
Where: [scene, component, or system]
Measured: [any data — FPS, LCP, network waterfall, profiler output if available]

Before making any changes, please:
1. Read the relevant component(s) and identify likely causes.
2. Distinguish between perceived performance (animation jank) and actual performance (render cost, bundle size, network).
3. Propose a fix with reasoning. Prefer:
   - CSS animations over JS animations
   - next/image for image optimisation
   - Lazy loading for off-screen assets
   - useMemo/useCallback only where a re-render is measured to be expensive
4. Confirm the fix does not change visible behaviour.

Do NOT optimise speculatively. Only change what you can demonstrate is expensive.
After optimising, describe how to verify the improvement.
```
