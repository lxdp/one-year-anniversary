import type { SceneConfig } from '@/types/scene';

import { iceSkating } from './ice-skating';
import { nandos } from './nandos';
import { firstViewpoint } from './first-viewpoint';
import { myHouse } from './my-house';
import { sunsetViewpoint } from './sunset-viewpoint';
import { stargazing } from './stargazing';
import { drivingHome } from './driving-home';
import { ending } from './ending';

/** The story is linear — this array *is* the story order. */
export const scenes: SceneConfig[] = [
  iceSkating,
  nandos,
  firstViewpoint,
  myHouse,
  sunsetViewpoint,
  stargazing,
  drivingHome,
  ending,
];
