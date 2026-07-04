interface WelcomeScreenProps {
  onEnter: () => void;
}

/**
 * The landing page. Static by design — its only job is to set the
 * mood and hand off to the brain via onEnter.
 *
 * TODO: slow fade-in on mount, and a gentle pulse on the prompt.
 */
export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-8 text-center">
      <h1 className="font-serif text-4xl font-light tracking-wide text-white/90 md:text-5xl">
        Welcome to Lucas&apos;s brain
      </h1>
      <button
        type="button"
        onClick={onEnter}
        className="cursor-pointer rounded-full px-6 py-2 text-sm font-light tracking-[0.3em] text-white/50 transition-colors duration-700 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
      >
        click to get started
      </button>
    </section>
  );
}
