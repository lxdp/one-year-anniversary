import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const stargazing: SceneConfig = {
  id: 'stargazing',
  title: 'Stargazing at The Mount',
  background: 'linear-gradient(to bottom, #020617 0%, #1e1b4b 70%, #312e81 100%)',
  atmosphere: { particles: 'stars' },
  hotspots: [
    {
      id: 'stars',
      position: { x: 60, y: 25 },
      label: 'The stars',
      thought: '[Replace me] What you talked about under the stars.',
    },
    {
      id: 'the-cold',
      position: { x: 35, y: 60 },
      label: 'The cold',
      thought: '[Replace me] Staying warm together.',
    },
  ],
};
