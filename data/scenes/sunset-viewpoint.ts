import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const sunsetViewpoint: SceneConfig = {
  id: 'sunset-viewpoint',
  title: 'Sunset Viewpoint',
  background: 'linear-gradient(to bottom, #fb923c 0%, #f472b6 55%, #7c3aed 100%)',
  hotspots: [
    {
      id: 'sunset',
      position: { x: 50, y: 30 },
      label: 'The sunset',
      thought: '[Replace me] Watching the sun go down together.',
    },
    {
      id: 'quiet-moment',
      position: { x: 30, y: 62 },
      label: 'A quiet moment',
      thought: '[Replace me] Something unspoken from that moment.',
    },
  ],
};
