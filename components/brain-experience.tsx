'use client';

import { useEffect, useRef, useState } from 'react';

import type { ExperiencePhase } from '@/types';

import { BrainView } from '@/components/brain-view';
import { Transition } from '@/components/transition';
import { WelcomeScreen, WELCOME_EXIT_MS } from '@/components/welcome-screen';

/**
 * Top-level shell: owns the ExperiencePhase. When she catches the
 * running brain, the network mounts underneath while the welcome
 * screen stays on top zooming into the brain, then unmounts.
 */
export function BrainExperience() {
  const [phase, setPhase] = useState<ExperiencePhase>('welcome');
  const [isWelcomeMounted, setIsWelcomeMounted] = useState(true);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    },
    [],
  );

  // ZOOM TRANSITION (6/6): the overlap. Unmounting an element kills
  // its animation instantly, so the welcome screen is NOT removed
  // when onEnter fires. Instead the network mounts immediately and
  // the welcome stays for WELCOME_EXIT_MS — exactly the zoom's
  // duration — then unmounts after it has fully dissolved.
  function handleEnter() {
    setPhase('exploring');
    exitTimerRef.current = setTimeout(
      () => setIsWelcomeMounted(false),
      WELCOME_EXIT_MS,
    );
  }

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#2E1B26]">
      {phase === 'exploring' && (
        <Transition isEntering isExiting={false} className="absolute inset-0">
          <BrainView />
        </Transition>
      )}

      {/* Part of (6/6): rendered AFTER BrainView so it paints on top.
          For ~1.25s both screens exist — the network fading in below,
          the welcome zooming and going transparent above. That
          layering is what makes it one continuous motion, not a cut. */}
      {isWelcomeMounted && <WelcomeScreen onEnter={handleEnter} />}
    </main>
  );
}
