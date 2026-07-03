interface SceneTitleProps {
  title: string;
}

export function SceneTitle({ title }: SceneTitleProps) {
  return (
    <h1 className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 font-serif text-3xl font-light tracking-widest text-white/90 drop-shadow-md md:text-4xl">
      {title}
    </h1>
  );
}
