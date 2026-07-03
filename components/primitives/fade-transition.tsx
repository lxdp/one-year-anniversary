'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * The default scene transition: a slow, even crossfade. Stateless —
 * mount/unmount (via AnimatePresence in the engine) drives it.
 */
export function FadeTransition({ children, className }: FadeTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
