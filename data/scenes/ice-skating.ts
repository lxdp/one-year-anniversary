import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const iceSkating: SceneConfig = {
  id: 'ice-skating',
  title: 'Ice Skating',
  background: 'linear-gradient(to bottom, #dbeafe 0%, #bfdbfe 55%, #eff6ff 100%)',
  atmosphere: { particles: 'snow' },
  hotspots: [
    {
      id: 'skates',
      position: { x: 30, y: 70 },
      label: 'The skates',
      thought: '[Replace me] What you were thinking when you laced up.',
    },
    {
      id: 'rink',
      position: { x: 60, y: 45 },
      label: 'The ice',
      thought: '[Replace me] A moment from out on the ice.',
    },
    {
      id: 'her-hand',
      position: { x: 78, y: 60 },
      label: 'Her hand',
      thought: '[Replace me] The first time you held hands to keep balance.',
    },
  ],
};
