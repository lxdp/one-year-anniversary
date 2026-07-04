'use client';

import type { Memory } from '@/types';

interface MemoryPopupProps {
  memory: Memory;
  onClose: () => void;
}

/**
 * The single memory primitive — every node opens through this
 * component (no per-memory components). Shows the photo with the
 * thought and feelings alongside it.
 *
 * TODO:
 * - dimmed backdrop; clicking it (or Escape) calls onClose
 * - photo via next/image, thought in the serif italic voice,
 *   location · date label above it
 * - slow fade/scale entrance (Transition or fade-in-slow)
 * - focus trap is overkill here, but move focus into the popup on
 *   open and restore it on close
 */
export function MemoryPopup({ memory, onClose }: MemoryPopupProps) {
  return (
    <div role="dialog" aria-label={memory.alt} aria-modal="true">
      {/* TODO: backdrop, photo, thought, close affordance */}
      <button type="button" onClick={onClose}>
        close
      </button>
    </div>
  );
}
