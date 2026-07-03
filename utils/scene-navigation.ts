/**
 * Pure helpers for linear scene progression. The story is intentionally
 * linear (see PROJECT_SPEC.md), so navigation never wraps or skips.
 */

export function getNextSceneIndex(
  currentIndex: number,
  sceneCount: number,
): number {
  if (sceneCount <= 0) return 0;
  return Math.min(currentIndex + 1, sceneCount - 1);
}

export function getPreviousSceneIndex(currentIndex: number): number {
  return Math.max(currentIndex - 1, 0);
}

export function isLastScene(currentIndex: number, sceneCount: number): boolean {
  return sceneCount > 0 && currentIndex >= sceneCount - 1;
}
