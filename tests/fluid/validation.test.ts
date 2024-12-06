import type { FluidOptions } from '../../packages/core/src/types';

import { describe, expect, it, vi } from 'vitest';

import { extractRemBoundsFromMatch, validateUtilityName } from '../../packages/core/src/presets/fluid/utils';
import { defaultFluidOptions } from '../../packages/core/src/resolver';

const ranges: {
  [key: string]: [number, number];
} = {
  xs: [12, 24],
  sm: [16, 32],
  md: [20, 40],
  lg: [24, 48],
  xl: [28, 56],
};

const optionsWithRanges: FluidOptions = {
  ...defaultFluidOptions,
  ranges,
};

describe('fluid validation', () => {
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
        config: defaultFluidOptions,
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
      config: defaultFluidOptions,
    });
    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith('[unocss-vinicunca fluid] (fluid-text-10xl) Trying to use predefined range 10xl but no ranges are defined.');
  });
});
