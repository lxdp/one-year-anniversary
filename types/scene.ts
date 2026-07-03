/**
 * Position expressed as percentages of the scene viewport, so hotspots
 * stay anchored to the artwork at any screen size.
 */
export interface ScenePosition {
  x: number;
  y: number;
}

export interface HotspotConfig {
  id: string;
  position: ScenePosition;
  label: string;
  /** Text revealed on hover/focus — a thought or memory from that moment. */
  thought: string;
}

export type AtmosphereParticles = 'none' | 'snow' | 'stars';

export interface AtmosphereConfig {
  particles?: AtmosphereParticles;
  /** Path to an ambient audio file. Playback is always user-initiated. */
  audioSrc?: string;
}

export interface SceneConfig {
  id: string;
  title: string;
  /**
   * CSS background value. A gradient stands in until each scene has
   * final artwork, at which point this becomes an image URL.
   */
  background: string;
  atmosphere?: AtmosphereConfig;
  hotspots: HotspotConfig[];
}
