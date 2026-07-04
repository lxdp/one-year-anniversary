'use client';

import { WelcomeScreen } from '@/components/welcome-screen';

/**
 * Top-level shell: owns the ExperiencePhase and swaps the welcome
 * screen for the brain once she clicks in.
 *
 * TODO: hold ExperiencePhase state ('welcome' | 'exploring'), render
 * BrainView in the exploring phase, and wrap both in Transition so
 * entering the brain is a slow cross-dissolve, not a hard swap.
 */
export function BrainExperience() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black">
      <WelcomeScreen
        onEnter={() => {
          // TODO: advance phase to 'exploring'
        }}
      />
    </main>
  );
}
