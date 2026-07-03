import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSceneProgress } from './use-scene-progress';

describe('useSceneProgress', () => {
  it('starts at the first scene', () => {
    const { result } = renderHook(() => useSceneProgress(8));
    expect(result.current.currentIndex).toBe(0);
    expect(result.current.isLast).toBe(false);
  });

  it('advances and retreats through the story', () => {
    const { result } = renderHook(() => useSceneProgress(8));

    act(() => result.current.goToNext());
    expect(result.current.currentIndex).toBe(1);

    act(() => result.current.goToPrevious());
    expect(result.current.currentIndex).toBe(0);
  });

  it('flags the last scene and does not advance past it', () => {
    const { result } = renderHook(() => useSceneProgress(2));

    act(() => result.current.goToNext());
    expect(result.current.isLast).toBe(true);

    act(() => result.current.goToNext());
    expect(result.current.currentIndex).toBe(1);
  });
});
