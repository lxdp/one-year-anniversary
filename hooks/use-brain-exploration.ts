'use client';

import type { MemoryNode } from '@/types';

export interface BrainExploration {
  /** Nodes currently lit and clickable (includes visited). */
  revealedNodeIds: string[];
  /** Nodes whose memory has been viewed. */
  visitedNodeIds: string[];
  /** Node whose memory popup is open, or null when no popup. */
  activeNodeId: string | null;
  /** Opens a node's memory popup and marks it visited. */
  openNode: (nodeId: string) => void;
  /** Closes the popup; newly revealed connections stay lit. */
  closePopup: () => void;
  /** True once every node has been visited — the brain is fully awake. */
  isComplete: boolean;
}

/**
 * Owns all exploration state for the brain. BrainView is the only
 * intended consumer.
 *
 * Foundation stub — returns inert initial values so the app renders.
 * TODO: implement with useState for visited/active IDs, deriving
 * revealedNodeIds and isComplete from utils/brain-graph.
 */
export function useBrainExploration(
  nodes: MemoryNode[],
  entryNodeId: string,
): BrainExploration {
  return {
    revealedNodeIds: [entryNodeId],
    visitedNodeIds: [],
    activeNodeId: null,
    openNode: () => undefined,
    closePopup: () => undefined,
    isComplete: false,
  };
}
