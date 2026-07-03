'use client';

import { useCallback, useState } from 'react';

import {
  getNextSceneIndex,
  getPreviousSceneIndex,
  isLastScene,
} from '@/utils/scene-navigation';

/**
 * Owns the "which memory are we in" state for a linear story.
 * The engine is the only intended consumer.
 */
export function useSceneProgress(sceneCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) => getNextSceneIndex(index, sceneCount));
  }, [sceneCount]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((index) => getPreviousSceneIndex(index));
  }, []);

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    isLast: isLastScene(currentIndex, sceneCount),
  };
}
