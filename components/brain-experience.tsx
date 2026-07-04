'use client';

import { useState } from 'react';

import type { ExperiencePhase } from '@/types';

import { BrainView } from '@/components/brain-view';
import { Transition } from '@/components/transition';
import { WelcomeScreen } from '@/components/welcome-screen';

/**
 * Top-level shell: owns the ExperiencePhase and swaps the welcome
 * screen for the brain once she catches the running brain.
 */
export function BrainExperience() {
  const [phase, setPhase] = useState<ExperiencePhase>('welcome');

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-[#2E1B26]">
      {phase === 'welcome' ? (
        <WelcomeScreen onEnter={() => setPhase('exploring')} />
      ) : (
        <Transition isEntering isExiting={false} className="absolute inset-0">
          <BrainView />
        </Transition>
      )}
    </main>
  );
}
