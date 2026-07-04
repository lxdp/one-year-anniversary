import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { WelcomeScreen } from './welcome-screen';

// next/font needs the Next.js build pipeline; a plain class stands in.
vi.mock('next/font/google', () => ({
  Fredoka: () => ({ className: 'font-fredoka' }),
}));

describe('WelcomeScreen', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('enters the brain only after the catch reaction finishes', () => {
    const onEnter = vi.fn();
    render(<WelcomeScreen onEnter={onEnter} />);

    fireEvent.click(screen.getByRole('button', { name: /catch the brain/i }));
    expect(onEnter).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1250);
    });
    expect(onEnter).toHaveBeenCalledTimes(1);
  });

  it('ignores repeat clicks while the reaction plays', () => {
    const onEnter = vi.fn();
    render(<WelcomeScreen onEnter={onEnter} />);
    const brain = screen.getByRole('button', { name: /catch the brain/i });

    fireEvent.click(brain);
    fireEvent.click(brain);
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(onEnter).toHaveBeenCalledTimes(1);
  });
});
