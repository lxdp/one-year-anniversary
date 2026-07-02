# Feature: [Feature Name]

**Date:** YYYY-MM-DD
**Status:** planning | in-progress | shipped | deferred
**Branch:** `feature/name`

---

## Goal

One sentence: what does this feature do and why does it exist?

---

## Requirements

- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

Keep requirements observable and testable. Avoid vague requirements like "feels good".

---

## Scope Boundaries

**In scope:**
- What this feature includes

**Out of scope:**
- What this feature explicitly does NOT include (prevents scope creep)

---

## Edge Cases

List situations that could cause unexpected behaviour:

- What happens if the user hovers and immediately navigates away?
- What happens on a touch device (no hover)?
- What happens if the background image fails to load?
- What happens at very small or very large viewport sizes?

---

## Acceptance Criteria

The feature is done when:

- [ ] Criterion 1 (observable, specific)
- [ ] Criterion 2
- [ ] Criterion 3

---

## Testing Checklist

- [ ] Unit tests written for any new utility functions or hooks
- [ ] Component tests cover primary interaction
- [ ] Tested on mobile viewport (touch)
- [ ] Tested on desktop (hover)
- [ ] Tested with reduced-motion preference enabled
- [ ] Animations degrade gracefully if Framer Motion is unavailable

---

## Design Notes

Any visual or interaction details not captured in requirements. Reference assets, mockups, or scene descriptions here.

---

## Implementation Notes

Patterns or constraints to follow when implementing:

- Which primitives to compose
- Which hooks to reuse or create
- Where scene data should live

---

## Future Improvements

Things intentionally deferred from this feature that may be added later:

- Future improvement 1
- Future improvement 2
