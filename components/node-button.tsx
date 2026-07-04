'use client';

import type { MemoryNode, NodeState } from '@/types';

interface NodeButtonProps {
  node: MemoryNode;
  state: NodeState;
  onSelect: (nodeId: string) => void;
}

/**
 * A single neuron. Dumb by design: position and state come in,
 * selection goes out — it never touches exploration state.
 *
 * TODO:
 * - absolutely position from node.position (% of the canvas)
 * - hidden: render nothing (or a barely-visible ghost)
 * - revealed: soft glow + slow CSS pulse, inviting a click
 * - visited: steady warm glow, no pulse
 * - accessible name from node.memory.location or alt
 */
export function NodeButton({ node, state, onSelect }: NodeButtonProps) {
  if (state === 'hidden') return null;

  return (
    <button
      type="button"
      aria-label={node.memory.location ?? node.memory.alt}
      onClick={() => onSelect(node.id)}
    >
      {/* TODO: the glowing neuron */}
    </button>
  );
}
