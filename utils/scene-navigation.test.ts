import { describe, expect, it } from 'vitest';

import {
  getNextSceneIndex,
  getPreviousSceneIndex,
  isLastScene,
} from './scene-navigation';

describe('getNextSceneIndex', () => {
  it('advances to the next scene', () => {
    expect(getNextSceneIndex(0, 8)).toBe(1);
  });

  it('stays on the final scene instead of wrapping', () => {
    expect(getNextSceneIndex(7, 8)).toBe(7);
  });

  it('handles an empty scene list', () => {
    expect(getNextSceneIndex(0, 0)).toBe(0);
  });
});

describe('getPreviousSceneIndex', () => {
  it('steps back one scene', () => {
    expect(getPreviousSceneIndex(3)).toBe(2);
  });

  it('stays on the first scene instead of going negative', () => {
    expect(getPreviousSceneIndex(0)).toBe(0);
  });
});

describe('isLastScene', () => {
  it('is false mid-story', () => {
    expect(isLastScene(3, 8)).toBe(false);
  });

  it('is true on the final scene', () => {
    expect(isLastScene(7, 8)).toBe(true);
  });

  it('is false for an empty scene list', () => {
    expect(isLastScene(0, 0)).toBe(false);
  });
});
