import type { MemoryNode, NodeState } from '@/types';

/**
 * Pure graph helpers for the brain. All exploration state derives
 * from two inputs: the graph itself and the list of visited node IDs.
 *
 * Foundation stubs — signatures and behaviour are the contract;
 * implementations are TODO. Expected behaviour is spelled out in
 * utils/brain-graph.test.ts.
 */

export function getNodeById(
  nodes: MemoryNode[],
  nodeId: string,
): MemoryNode | undefined {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * A node is revealed if it is the entry node, or if any visited node
 * lists it in `connections`. Visited nodes are always revealed.
 */
export function getRevealedNodeIds(
  nodes: MemoryNode[],
  entryNodeId: string,
  visitedNodeIds: string[],
): string[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/** Resolves a single node's visual state from the two ID lists. */
export function getNodeState(
  nodeId: string,
  revealedNodeIds: string[],
  visitedNodeIds: string[],
): NodeState {
  // TODO: implement
  throw new Error('Not implemented');
}

/** True once every node in the graph has been visited. */
export function isBrainFullyExplored(
  nodes: MemoryNode[],
  visitedNodeIds: string[],
): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}
