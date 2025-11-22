import type { RequiredFluidOptions } from '../../src/types';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { DEFAULT_FLUID_OPTIONS } from '../../src/constants';
import { extractRemBoundsFromMatch, validateUtilityName } from '../../src/presets/fluid/utils';

const ranges: {
  [key: string]: [number, number];
} = {
  xs: [12, 24],
  sm: [16, 32],
  md: [20, 40],
  lg: [24, 48],
  xl: [28, 56],
};

const optionsWithRanges: RequiredFluidOptions = {
  ...DEFAULT_FLUID_OPTIONS,
  ranges,
};

describe('fluid validation', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('extract rem bounds from invalid match ranges', () => {
    expect(() =>
      extractRemBoundsFromMatch({
        match: ['fluid-text-10xl', '', '', '', '10xl'],
        config: optionsWithRanges,
      }))
      .toThrowError('[unocss-vinicunca fluid] (fluid-text-10xl) Trying to use predefined range 10xl but it is not defined in ranges.');
  });

  it('extract rem bounds No ranges validation', () => {
    expect(() =>
      extractRemBoundsFromMatch({
        match: ['fluid-text-10xl', '', '', '', '10xl'],
        config: DEFAULT_FLUID_OPTIONS,
      }))
      .toThrowError('[unocss-vinicunca fluid] (fluid-text-10xl) Trying to use predefined range 10xl but no ranges are defined.');
  });

  it('validate utility name', () => {
    const consoleMock = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    validateUtilityName({
      match: ['fluid-text-10xl', '', '', '', '10xl'],
      config: optionsWithRanges,
    });
    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith('[unocss-vinicunca fluid] (fluid-text-10xl) Trying to use predefined range 10xl but it is not defined in ranges.');
  });

  it('validate undefined range', () => {
    const consoleMock = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    validateUtilityName({
      match: ['fluid-text-10xl', '', '', '', '10xl'],
      config: DEFAULT_FLUID_OPTIONS,
    });
    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith('[unocss-vinicunca fluid] (fluid-text-10xl) Trying to use predefined range 10xl but no ranges are defined.');
  });
});
