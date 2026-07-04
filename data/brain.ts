import type { MemoryNode } from '@/types';

/** The node already lit when she first enters the brain. */
export const ENTRY_NODE_ID = 'ice-skating';

/**
 * The brain. Every memory is one node; `connections` decide which
 * nodes light up after a memory is viewed, so the graph — not code —
 * shapes how the story unfolds.
 *
 * To add a memory:
 *   1. Drop the photo into public/photos/
 *   2. Add one node here and reference it from another node's
 *      `connections` (or it will never be revealed)
 *
 * Every `src` points at the placeholder — swap in real photos, and
 * replace each [Replace me] thought with your own words.
 */
export const memoryNodes: MemoryNode[] = [
  {
    id: 'ice-skating',
    position: { x: 20, y: 42 },
    connections: ['nandos'],
    memory: {
      id: 'ice-skating',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] What I am thinking as we step onto the ice.',
      alt: 'Us at the ice rink',
      location: 'The Ice Rink',
    },
  },
  {
    id: 'nandos',
    position: { x: 34, y: 26 },
    connections: ['first-viewpoint', 'monster-stop'],
    memory: {
      id: 'nandos',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] What the conversation feels like across the table.',
      alt: "Our table at Nando's",
      location: "Nando's",
    },
  },
  {
    id: 'first-viewpoint',
    position: { x: 50, y: 16 },
    connections: ['sunset-viewpoint'],
    memory: {
      id: 'first-viewpoint',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] What I notice from the first viewpoint.',
      alt: 'The view from The Mount in the afternoon',
      location: 'The Mount',
    },
  },
  {
    id: 'monster-stop',
    position: { x: 46, y: 46 },
    connections: ['sunset-viewpoint'],
    memory: {
      id: 'monster-stop',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] The legendary Monster Energy stop.',
      alt: 'The quick stop at my house',
      location: 'My House',
    },
  },
  {
    id: 'sunset-viewpoint',
    position: { x: 63, y: 30 },
    connections: ['stargazing'],
    memory: {
      id: 'sunset-viewpoint',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] Watching the sun go down together.',
      alt: 'The sunset from the viewpoint',
      location: 'Sunset Viewpoint',
    },
  },
  {
    id: 'stargazing',
    position: { x: 76, y: 20 },
    connections: ['driving-home'],
    memory: {
      id: 'stargazing',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] What we talk about under the stars.',
      alt: 'The night sky over The Mount',
      location: 'The Mount',
    },
  },
  {
    id: 'driving-home',
    position: { x: 80, y: 52 },
    connections: ['one-year-later'],
    memory: {
      id: 'driving-home',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] The music, the streetlights, not wanting it to end.',
      alt: 'The drive home at night',
    },
  },
  {
    id: 'one-year-later',
    position: { x: 58, y: 68 },
    connections: [],
    memory: {
      id: 'one-year-later',
      src: '/photos/placeholder.svg',
      thought: '[Replace me] Your closing message to her, one year on.',
      alt: 'Us, one year later',
      date: 'July 2026',
    },
  },
];
