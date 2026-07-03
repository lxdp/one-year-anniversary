import type { SceneConfig } from '@/types/scene';

import { FadeTransition } from '@/components/primitives/fade-transition';
import { Hotspot } from '@/components/primitives/hotspot';
import { SceneBackground } from '@/components/primitives/scene-background';
import { SceneTitle } from '@/components/primitives/scene-title';

interface SceneProps {
  config: SceneConfig;
}

/**
 * Renders any scene purely from its config. Location-specific components
 * (e.g. bespoke layouts or one-off animations) can wrap or replace this
 * later — the engine only cares that a scene accepts a config.
 */
export function Scene({ config }: SceneProps) {
  return (
    <FadeTransition className="absolute inset-0">
      <SceneBackground background={config.background} />
      <SceneTitle title={config.title} />
      {config.hotspots.map((hotspot) => (
        <Hotspot key={hotspot.id} config={hotspot} />
      ))}
    </FadeTransition>
  );
}
