import { SceneEngine } from '@/components/scene-engine/scene-engine';
import { scenes } from '@/data/scenes';

export default function HomePage() {
  return <SceneEngine scenes={scenes} />;
}
