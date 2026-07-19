'use client';

import { ENTRY_NODE_ID, memoryNodes } from '@/data/brain';
import { useBrainExploration } from '@/hooks/use-brain-exploration';
import { NodeButton } from './node-button';
import { MemoryPopup } from './memory-popup';

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
  const reading_picture = memoryNodes[0];

  const activeNode = memoryNodes.find((node) => node.id === exploration.activeNodeId);

  return (
    <section
      aria-label="A network of memories"
      className="relative h-full w-full"
    >
      <NodeButton node={reading_picture} state="revealed" onSelect={exploration.openNode}/>
      { activeNode && (
          <MemoryPopup memory={activeNode.memory} onClose={exploration.closePopup}/>
        )
        
      }
    </section>
  );
}
