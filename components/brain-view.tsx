'use client';

import { ENTRY_NODE_ID, memoryNodes } from '@/data/brain';
import { useBrainExploration } from '@/hooks/use-brain-exploration';

/**
 * The neural network. Renders the connection lines underneath the
 * node buttons, and the memory popup above everything when a node
 * is open.
 *
 * TODO:
 * - map memoryNodes → NodeButton, deriving each node's NodeState via
 *   utils/brain-graph (hidden nodes render nothing or a faint ghost)
 * - render ConnectionLayer beneath the nodes
 * - render MemoryPopup for the active node's memory; closing it
 *   returns to the network with the new connections lit
 * - some kind of quiet completion moment when isComplete turns true
 */
export function BrainView() {
  const exploration = useBrainExploration(memoryNodes, ENTRY_NODE_ID);

  return (
    <section
      aria-label="A network of memories"
      className="relative h-full w-full"
    >
      {/* TODO: ConnectionLayer, NodeButtons, MemoryPopup */}
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-light text-white/40">
        {exploration.revealedNodeIds.length} node revealed — TODO: render the
        network
      </p>
    </section>
  );
}
