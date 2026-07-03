import type { SceneConfig } from '@/types/scene';

// Placeholder thoughts — replace with your own memories before release.
export const drivingHome: SceneConfig = {
  id: 'driving-home',
  title: 'Driving Her Home',
  background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 65%, #b45309 100%)',
  hotspots: [
    {
      id: 'the-drive',
      position: { x: 50, y: 50 },
      label: 'The drive',
      thought: '[Replace me] The music, the streetlights, the quiet.',
    },
    {
      id: 'goodbye',
      position: { x: 72, y: 62 },
      label: 'The goodbye',
      thought: '[Replace me] Saying goodnight and not wanting to.',
    },
  ],
};
