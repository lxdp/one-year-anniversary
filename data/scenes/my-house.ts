import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const myHouse: SceneConfig = {
  id: 'my-house',
  title: 'My House',
  background: 'linear-gradient(to bottom, #1e293b 0%, #334155 60%, #14532d 100%)',
  hotspots: [
    {
      id: 'monster',
      position: { x: 45, y: 55 },
      label: 'The Monster Energy',
      thought: '[Replace me] The legendary Monster Energy stop.',
    },
    {
      id: 'doorstep',
      position: { x: 70, y: 65 },
      label: 'The doorstep',
      thought: '[Replace me] A small moment from the quick stop at home.',
    },
  ],
};
