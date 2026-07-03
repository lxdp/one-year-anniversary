interface SceneBackgroundProps {
  /** Any CSS background value — gradient now, image URL once artwork exists. */
  background: string;
}

export function SceneBackground({ background }: SceneBackgroundProps) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 bg-cover bg-center"
      style={{ background }}
    />
  );
}
