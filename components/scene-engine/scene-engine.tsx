'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import type { SceneConfig } from '@/types/scene';

import { Scene } from '@/components/scenes/scene';
import { useSceneProgress } from '@/hooks/use-scene-progress';

interface SceneEngineProps {
  scenes: SceneConfig[];
}

/**
 * Controls which scene is active and how the story advances.
 * Progression: the "continue" affordance, or ArrowRight / Enter.
 * ArrowLeft steps back, so a missed thought is never lost.
 */
export function SceneEngine({ scenes }: SceneEngineProps) {
  const { currentIndex, goToNext, goToPrevious, isLast } = useSceneProgress(
    scenes.length,
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'Enter') goToNext();
      if (event.key === 'ArrowLeft') goToPrevious();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  const activeScene = scenes[currentIndex];
  if (!activeScene) return null;

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <Scene key={activeScene.id} config={activeScene} />
      </AnimatePresence>

      {!isLast && (
        <button
          type="button"
          onClick={goToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 text-sm font-light tracking-[0.3em] text-white/70 transition-colors duration-700 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
        >
          continue
        </button>
      )}
    </main>
  );
}
