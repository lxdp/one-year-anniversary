import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const nandos: SceneConfig = {
  id: 'nandos',
  title: "Nando's",
  background: 'linear-gradient(to bottom, #7f1d1d 0%, #b45309 60%, #fbbf24 100%)',
  hotspots: [
    {
      id: 'table',
      position: { x: 50, y: 60 },
      label: 'Our table',
      thought: '[Replace me] What the conversation felt like.',
    },
    {
      id: 'order',
      position: { x: 28, y: 42 },
      label: 'The order',
      thought: '[Replace me] What you both ordered, or the spice-level debate.',
    },
  ],
};
