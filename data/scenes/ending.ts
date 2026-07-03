import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const ending: SceneConfig = {
  id: 'ending',
  title: 'One Year Later',
  background: 'linear-gradient(to bottom, #fef3c7 0%, #fde8e8 60%, #fdf2f8 100%)',
  hotspots: [
    {
      id: 'message',
      position: { x: 50, y: 55 },
      label: 'A note',
      thought: '[Replace me] Your closing message to her.',
    },
  ],
};
