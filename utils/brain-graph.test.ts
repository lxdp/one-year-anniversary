import { describe, it } from 'vitest';

/**
 * Behaviour contract for utils/brain-graph.ts. Convert each todo into
 * a real test as you implement the matching function.
 */

describe('getNodeById', () => {
  it.todo('returns the node with the given id');
  it.todo('returns undefined for an unknown id');
});

describe('getRevealedNodeIds', () => {
  it.todo('reveals only the entry node when nothing is visited');
  it.todo('reveals the connections of every visited node');
  it.todo('keeps visited nodes revealed');
  it.todo('does not duplicate ids when two visited nodes share a connection');
});

describe('getNodeState', () => {
  it.todo('is hidden when the node is neither revealed nor visited');
  it.todo('is revealed when lit but not yet viewed');
  it.todo('is visited once the memory has been viewed');
});

describe('isBrainFullyExplored', () => {
  it.todo('is false while any node is unvisited');
  it.todo('is true when every node has been visited');
});
