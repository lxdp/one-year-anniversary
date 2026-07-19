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
  // const STATE_STYLES : Record<Exclude<NodeState, 'hidden'>, string> = {
  //   revealed: 
  // }

  return (
    <button
      type="button"
      aria-label={node.memory.location ?? node.memory.alt}
      onClick={() => onSelect(node.id)}
      style={{
        position: 'absolute',
        left: `${node.position.x}%`,
        top: `${node.position.y}%`,
        // Centers the heart ON node.position instead of cornering it there.
        transform: 'translate(-50%, -50%)',
      }}
      className="cursor-pointer rounded-full outline-none focus-visible:ring-4 focus-visible:ring-[#E85C88]/40"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 100 100"
        style={{ filter: 'drop-shadow(0 4px 10px rgba(232, 92, 136, 0.45))' }}
      >
        <defs>
          {/* id is per-node — gradient ids must be unique in the DOM,
              and every node on screen renders one of these. */}
          <radialGradient id={`heart-glow-${node.id}`} cx="38%" cy="32%" r="70%">
            <stop offset="0%" stopColor="#FFC2D6" />
            <stop offset="46%" stopColor="#FF8FB1" />
            <stop offset="100%" stopColor="#E85C88" />
          </radialGradient>
        </defs>
        <path
          d="M50,88 C20,65 5,45 5,28 C5,12 18,2 32,2 C42,2 50,10 50,20 C50,10 58,2 68,2 C82,2 95,12 95,28 C95,45 80,65 50,88 Z"
          fill={`url(#heart-glow-${node.id})`}
        />
      </svg>
    </button>
    
  );
}
