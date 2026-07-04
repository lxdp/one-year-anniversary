/**
 * The core content type. Every photo in the experience is one Memory.
 * Contract: docs/api/README.md — update that file if this shape changes.
 */
export interface Memory {
  /** Unique identifier, kebab-case (e.g. 'lakeside-walk'). */
  id: string;
  /** Path to the photo asset (e.g. '/photos/lakeside-walk.jpg'). */
  src: string;
  /** Personal thought revealed on hover or tap — first person, present tense. */
  thought: string;
  /** Accessibility description — what is in the photo, not the feeling. */
  alt: string;
  /** Optional date label (e.g. 'March 2025'). */
  date?: string;
  /** Optional location label (e.g. 'The Mount'). */
  location?: string;
}
