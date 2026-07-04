import type { MemoryNode } from '@/types';

interface ConnectionLayerProps {
  nodes: MemoryNode[];
  /** Only connections between two revealed nodes are drawn. */
  revealedNodeIds: string[];
}

/**
 * The synapses: an SVG layer of lines between revealed nodes, drawn
 * underneath the NodeButtons.
 *
 * TODO:
 * - full-bleed <svg> with a percentage viewBox so lines share the
 *   nodes' coordinate space
 * - one <line> per connection where both ends are revealed
 * - faint stroke; consider a slow draw-in (CSS stroke-dashoffset)
 *   when a line first appears
 */
export function ConnectionLayer({ nodes, revealedNodeIds }: ConnectionLayerProps) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* TODO: connection lines */}
    </svg>
  );
}
