'use client';

import { useState } from 'react';

import type { HotspotConfig } from '@/types/scene';

interface HotspotProps {
  config: HotspotConfig;
  onActivate?: () => void;
}

/**
 * A single interactive point in a scene. Dumb by design: it reveals its
 * thought on hover/focus and defers any click behaviour to the caller.
 */
export function Hotspot({ config, onActivate }: HotspotProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${config.position.x}%`,
        top: `${config.position.y}%`,
      }}
    >
      <button
        type="button"
        aria-label={config.label}
        onClick={onActivate}
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        onFocus={() => setIsRevealed(true)}
        onBlur={() => setIsRevealed(false)}
        className="hotspot-pulse relative h-5 w-5 cursor-pointer rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.7)] outline-none transition-transform duration-500 hover:scale-125 focus-visible:scale-125 focus-visible:ring-2 focus-visible:ring-white/80"
      />
      <div
        role="tooltip"
        className={`pointer-events-none absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-lg bg-black/60 px-4 py-3 text-center text-sm font-light leading-relaxed text-white/95 backdrop-blur-sm transition-opacity duration-700 ${
          isRevealed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {config.thought}
      </div>
    </div>
  );
}
