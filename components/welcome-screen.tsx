'use client';

import { Fredoka } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

import { RunningBrain } from '@/components/running-brain';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

/** How long the caught reaction plays before entering the brain. */
const CATCH_REACTION_MS = 1250;

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
 * she has to catch it. Catching it plays a heart burst, then hands
 * off to the brain via onEnter.
 */
export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [isCaught, setIsCaught] = useState(false);
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current);
    },
    [],
  );

  function handleCatch() {
    if (isCaught) return;
    setIsCaught(true);
    enterTimerRef.current = setTimeout(onEnter, CATCH_REACTION_MS);
  }

  return (
    <section
      className={`${fredoka.className} absolute inset-0 overflow-hidden`}
      style={{
        background:
          'radial-gradient(120% 120% at 50% 10%, #FFF6F2 0%, #FDE3EA 55%, #F7CEDD 100%)',
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
          It&apos;s been running to you all year — click the brain 💕
        </p>
      </header>

      {/* the track it runs along */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[62%] h-0.5"
        style={{
          background:
            'repeating-linear-gradient(90deg, rgba(194,76,116,0.3) 0 26px, transparent 26px 52px)',
        }}
      />

      <RunningBrain isCaught={isCaught} onCatch={handleCatch} />
    </section>
  );
}
