'use client';

import { Fredoka } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

import { RunningBrain } from '@/components/running-brain';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

/**
 * ZOOM TRANSITION (2/6) — the choreography constants.
 * ZOOM_START_MS: pause after the click so the heart burst is seen
 * before the dive begins.
 */
export const ZOOM_START_MS = 650;

/**
 * WELCOME_EXIT_MS: how long the zoom runs. MUST match the 1.25s
 * .zoom-into-brain transition duration in globals.css — the parent
 * keeps this screen mounted exactly this long after onEnter, so the
 * animation is never cut off by an early unmount.
 */
export const WELCOME_EXIT_MS = 1250;

interface FloatingDecor {
  emoji: string;
  top: string;
  left: string;
  size: number;
  durationSeconds: number;
  delaySeconds: number;
}

const FLOATING_DECOR: FloatingDecor[] = [
  { emoji: '💗', top: '14%', left: '9%', size: 26, durationSeconds: 4.2, delaySeconds: 0 },
  { emoji: '💕', top: '24%', left: '83%', size: 20, durationSeconds: 5.1, delaySeconds: 0.4 },
  { emoji: '🌸', top: '70%', left: '15%', size: 22, durationSeconds: 3.6, delaySeconds: 0.8 },
  { emoji: '💗', top: '78%', left: '75%', size: 28, durationSeconds: 4.8, delaySeconds: 0.2 },
  { emoji: '✨', top: '33%', left: '45%', size: 16, durationSeconds: 4.4, delaySeconds: 1.1 },
  { emoji: '💕', top: '58%', left: '90%', size: 18, durationSeconds: 5.4, delaySeconds: 0.6 },
];

interface WelcomeScreenProps {
  onEnter: () => void;
}

/**
 * The landing page: a cheerful brain sprints across the screen and
 * she has to catch it. Catching it plays a heart burst, then the
 * whole screen zooms into the point she clicked — diving into the
 * brain — while the network fades in underneath (the parent keeps
 * this screen mounted for WELCOME_EXIT_MS after onEnter).
 */
export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [isCaught, setIsCaught] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [origin, setOrigin] = useState('center');
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    () => () => {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    },
    [],
  );

  function handleCatch(event: MouseEvent<HTMLButtonElement>) {
    if (isCaught) return;
    setIsCaught(true);

    // ZOOM TRANSITION (3/6): capture WHERE to zoom. clientX/Y is the
    // click in viewport coordinates; subtracting the section's rect
    // converts it to a point inside the section, which is what
    // transform-origin expects. That point stays pinned while the
    // rest of the screen scales past the edges — that pinning is the
    // entire "diving into the brain" illusion.
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setOrigin(`${x}px ${y}px`);
    }

    // ZOOM TRANSITION (4/6): capture WHEN. One timer fires after the
    // burst beat and does two things at the same instant: flips
    // isZooming (adding the CSS class starts the animation) and calls
    // onEnter (the parent mounts the network underneath).
    enterTimerRef.current = setTimeout(() => {
      setIsZooming(true);
      onEnter();
    }, ZOOM_START_MS);
  }

  return (
    <section
      ref={sectionRef}
      // ZOOM TRANSITION (5/6): the trigger. Adding .zoom-into-brain
      // changes the section's target transform/opacity, and the CSS
      // transition animates the change — no JS animation loop.
      // pointer-events-none stops the giant fading screen from eating
      // clicks meant for the network appearing underneath.
      className={`${fredoka.className} absolute inset-0 overflow-hidden ${
        isZooming ? 'zoom-into-brain pointer-events-none' : ''
      }`}
      style={{
        background:
          'radial-gradient(120% 120% at 50% 10%, #FFF6F2 0%, #FDE3EA 55%, #F7CEDD 100%)',
        // The point captured in handleCatch — scale() grows outward
        // from here, keeping it fixed on screen.
        transformOrigin: origin,
      }}
    >
      {FLOATING_DECOR.map((decor, index) => (
        <span
          key={`${decor.emoji}-${index}`}
          aria-hidden
          className="float-dot absolute"
          style={{
            top: decor.top,
            left: decor.left,
            fontSize: decor.size,
            animationDuration: `${decor.durationSeconds}s`,
            animationDelay: `${decor.delaySeconds}s`,
          }}
        >
          {decor.emoji}
        </span>
      ))}

      <header className="absolute inset-x-0 top-[12%] px-6 text-center">
        <p className="text-base font-semibold uppercase tracking-[4px] text-[#E85C88]">
          One year of us
        </p>
        <h1 className="mt-1.5 text-[clamp(48px,8vw,104px)] font-bold leading-[0.98] text-[#3A2333]">
          Welcome to Lucas&apos;s Brain
        </h1>
        <p className="prompt-pulse mt-5 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[clamp(18px,2.2vw,24px)] font-medium text-[#5A3B48] shadow-[0_12px_28px_rgba(180,80,120,0.18)]">
          Click the brain to start the experience my love!
        </p>
      </header>

      {/* the track it runs along */}
      <div aria-hidden className="absolute inset-x-0 top-[62%] h-0.5" />

      {/* Plain wrapper — no transform styling here.
          The zoom lives on <section> above. */}
      <div>
        <RunningBrain isCaught={isCaught} onCatch={handleCatch} />
      </div>

      <div className="absolute inset-x-0 top-[calc(62%+110px)] px-2 text-center">
        <p className="rounded-full bg-white mx-auto inline-flex max-w-200 w-full items-center justify-center gap-2.5 px-6 py-1 text-[clamp(18px,2.2vw,22px)] font-medium text-[#5A3B48] break-words shadow-[0_12px_28px_rgba(180,80,120,0.18)]">
          Hey my love, this is a little something that I have been working on
          for you as a show of my appreciation and love that I have for you
          for putting up with me for a whole year. I hope that you enjoy!
        </p>
      </div>
    </section>
  );
}
