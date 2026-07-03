import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const firstViewpoint: SceneConfig = {
  id: 'first-viewpoint',
  title: 'First Viewpoint — The Mount',
  background: 'linear-gradient(to bottom, #7dd3fc 0%, #a5f3fc 55%, #86efac 100%)',
  hotspots: [
    {
      id: 'view',
      position: { x: 55, y: 35 },
      label: 'The view',
      thought: '[Replace me] What you could see from up there.',
    },
    {
      id: 'walk-up',
      position: { x: 25, y: 70 },
      label: 'The walk up',
      thought: '[Replace me] Something said on the way up.',
    },
  ],
};
