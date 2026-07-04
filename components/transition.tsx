'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Shared by the journey so unmount timing matches the fade. */
export const TRANSITION_DURATION_MS = 1400;

interface TransitionProps {
  isEntering: boolean;
  isExiting: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Stateless cross-dissolve. The caller decides which phase a card is
 * in; rendering an exiting card underneath an entering one overlaps
 * the two fades into a single slow dissolve.
 */
export function Transition({
  isEntering,
  isExiting,
  children,
  className,
}: TransitionProps) {
  return (
    <motion.div
      initial={isEntering ? { opacity: 0 } : false}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: TRANSITION_DURATION_MS / 1000, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
