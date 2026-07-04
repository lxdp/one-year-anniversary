import type { Memory } from './memory';

/**
 * Position as percentages of the brain canvas, so the network scales
 * with any viewport.
 */
export interface NodePosition {
  x: number;
  y: number;
}

/**
 * One node in the brain. Viewing its memory reveals the nodes listed
 * in `connections` — this is how the network progressively lights up.
 * Contract: docs/api/README.md — update that file if this shape changes.
 */
export interface MemoryNode {
  /** Unique identifier, kebab-case (e.g. 'ice-skating'). */
  id: string;
  position: NodePosition;
  /** IDs of nodes revealed once this node's memory has been viewed. */
  connections: string[];
  /** The photo + thought shown in the popup when this node is opened. */
  memory: Memory;
}

/**
 * hidden   — not yet discovered; invisible or barely visible.
 * revealed — lit up and clickable, memory not yet viewed.
 * visited  — memory has been viewed; stays lit.
 */
export type NodeState = 'hidden' | 'revealed' | 'visited';

/** The two phases of the experience. */
export type ExperiencePhase = 'welcome' | 'exploring';
