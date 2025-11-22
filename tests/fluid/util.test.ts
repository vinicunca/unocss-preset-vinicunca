/* eslint-disable no-loss-of-precision */
import type { RequiredFluidOptions } from '../../src/types';

import { describe, expect, it } from 'vitest';

import { DEFAULT_FLUID_OPTIONS } from '../../src/constants';
import {
  calculateRelativeSize,
  extractRemBoundsFromMatch,
  getClamp,
  getClampComment,
  getIntersection,
  getRemMaxWidth,
  getRemMinWidth,
  getSlope,
  getSlopePercentage,
  invertAndParseNumber,
  toRem,
} from '../../src/presets/fluid/utils';

const extendedOptions: RequiredFluidOptions = {
  ...DEFAULT_FLUID_OPTIONS,
  extendMaxWidth: 1920,
  extendMinWidth: 300,
};

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

describe('fluid utils', () => {
  describe('rem utilities', () => {
    it('getRemMinWidth', () => {
      expect(getRemMinWidth(DEFAULT_FLUID_OPTIONS)).toBe(23.4375);

      // Extended options
      expect(getRemMinWidth(extendedOptions)).toBe(18.75);
    });

    it('getRemMaxWidth with extended options', () => {
      expect(getRemMaxWidth(DEFAULT_FLUID_OPTIONS)).toBe(90);

      // Extended options
      expect(getRemMaxWidth(extendedOptions)).toBe(120);
    });

    it('toRem', () => {
      expect(toRem(16, DEFAULT_FLUID_OPTIONS)).toBe(1);
    });

    it('toRem with different remBase', () => {
      expect(
        toRem(20, {
          ...DEFAULT_FLUID_OPTIONS,
          remBase: 20,
        }),
      ).toBe(1);
    });

    it('extract rem bounds from match positive values', () => {
      const { min, max } = extractRemBoundsFromMatch({
        match: ['', '-16', '-32', '', ''],
        config: DEFAULT_FLUID_OPTIONS,
      });
      expect(min).toBe(1);
      expect(max).toBe(2);
    });

    it('extract rem bounds from match negative values', () => {
      const { min, max } = extractRemBoundsFromMatch({
        match: ['', '16', '32', '', ''],
        config: DEFAULT_FLUID_OPTIONS,
      });
      expect(min).toBe(-1);
      expect(max).toBe(-2);
    });

    it('extract rem bounds from match mixed values', () => {
      const { min, max } = extractRemBoundsFromMatch({
        match: ['', '-16', '32', '', ''],
        config: DEFAULT_FLUID_OPTIONS,
      });
      expect(min).toBe(1);
      expect(max).toBe(-2);
    });

    it('extract rem bounds from match ranges', () => {
      Object.values(ranges).forEach(([min, max], index) => {
        const {
          min: extractedMin,
          max: extractedMax,
        } = extractRemBoundsFromMatch({
          match: ['', '', '', '', Object.keys(ranges)[index]!],
          config: optionsWithRanges,
        });
        expect(extractedMin).toBe(min / 16);
        expect(extractedMax).toBe(max / 16);
      });
    });
  });

  describe('clamp utilities', () => {
    it('slope', () => {
      expect(
        getSlope({ min: 10, max: 20, config: DEFAULT_FLUID_OPTIONS }),
      ).toBe(0.15023474178403756);

      expect(
        getSlope({ min: 25, max: 50, config: DEFAULT_FLUID_OPTIONS }),
      ).toBe(0.3755868544600939);

      expect(
        getSlope({ min: 0.5, max: 1, config: DEFAULT_FLUID_OPTIONS }),
      ).toBe(0.007511737089201878);

      // Extended options
      expect(
        getSlope({ min: 10, max: 20, config: extendedOptions }),
      ).toBe(0.09876543209876543);
      expect(
        getSlope({ min: 25, max: 50, config: extendedOptions }),
      ).toBe(0.24691358024691357);
      expect(
        getSlope({ min: 0.5, max: 1, config: extendedOptions }),
      ).toBe(0.0049382716049382715);
    });

    it('slope percentage', () => {
      expect(
        getSlopePercentage({ min: 10, max: 20, config: DEFAULT_FLUID_OPTIONS }),
      ).toBe(15.023474178403756);
      expect(
        getSlopePercentage({ min: 25, max: 50, config: DEFAULT_FLUID_OPTIONS }),
      ).toBe(37.558685446009385);
      expect(
        getSlopePercentage({ min: 0.5, max: 1, config: DEFAULT_FLUID_OPTIONS }),
      ).toBe(0.7511737089201878);

      // Extended options
      expect(
        getSlopePercentage({ min: 10, max: 20, config: extendedOptions }),
      ).toBe(9.876543209876543);
      expect(
        getSlopePercentage({ min: 25, max: 50, config: extendedOptions }),
      ).toBe(24.691358024691357);
      expect(
        getSlopePercentage({ min: 0.5, max: 1, config: extendedOptions }),
      ).toBe(0.49382716049382715);
    });

    it('intersection', () => {
      expect(getIntersection({ min: 3, slope: 1, minWidth: 1 })).toBe(2);
      expect(getIntersection({ min: 343, slope: 21, minWidth: 14 })).toBe(49);
    });

    it('clamp', () => {
      expect(getClamp({ min: 1, max: 10, config: DEFAULT_FLUID_OPTIONS })).toBe('clamp(1rem, -2.1690rem + 13.5211vw, 10rem)');
      expect(getClamp({ min: -1, max: -10, config: DEFAULT_FLUID_OPTIONS })).toBe('clamp(-10rem, 2.1690rem + -13.5211vw, -1rem)');
      expect(getClamp({ min: -1, max: 10, config: DEFAULT_FLUID_OPTIONS })).toBe('clamp(-1rem, -4.8732rem + 16.5258vw, 10rem)');
      expect(getClamp({ min: 1, max: -10, config: DEFAULT_FLUID_OPTIONS })).toBe('clamp(-10rem, 4.8732rem + -16.5258vw, 1rem)');

      // Extended options
      expect(getClamp({ min: 1, max: 10, config: extendedOptions })).toBe('clamp(1rem, -0.6667rem + 8.8889vw, 10rem)');
      expect(getClamp({ min: -1, max: -10, config: extendedOptions })).toBe('clamp(-10rem, 0.6667rem + -8.8889vw, -1rem)');
      expect(getClamp({ min: -1, max: 10, config: extendedOptions })).toBe('clamp(-1rem, -3.0370rem + 10.8642vw, 10rem)');
      expect(getClamp({ min: 1, max: -10, config: extendedOptions })).toBe('clamp(-10rem, 3.0370rem + -10.8642vw, 1rem)');
    });

    it('generate clamp comment should not appear', () => {
      expect(
        getClampComment({
          match: ['fluid-w-16-32', '-16', '-32', '', ''],
          config: DEFAULT_FLUID_OPTIONS,
        }),
      ).toBe('');
    });

    it('generate clamp comment 16px 32px', () => {
      expect(
        getClampComment({
          match: ['fluid-w-16-32', '-16', '-32', '', ''],
          config: {
            ...DEFAULT_FLUID_OPTIONS,
            commentHelpers: true,
          },
        }),
      ).toBe('/* 16px -> 32px */');
    });

    it('generate clamp comment -16px -32px', () => {
      expect(
        getClampComment({
          match: ['fluid-w--16--32', '16', '32', '', ''],
          config: {
            ...DEFAULT_FLUID_OPTIONS,
            commentHelpers: true,
          },
        }),
      ).toBe('/* -16px -> -32px */');
    });

    it('generate clamp comment 16px -32px', () => {
      expect(
        getClampComment({
          match: ['fluid-w-16--32', '-16', '32', '', ''],
          config: {
            ...DEFAULT_FLUID_OPTIONS,
            commentHelpers: true,
          },
        }),
      ).toBe('/* 16px -> -32px */');
    });

    it('generate clamp comment 1rem 2rem', () => {
      expect(
        getClampComment({
          match: ['fluid-w-1-2', '-1', '-2', '', ''],
          config: {
            ...DEFAULT_FLUID_OPTIONS,
            commentHelpers: true,
            useRemByDefault: true,
          },
        }),
      ).toBe('/* 1rem -> 2rem */');
    });
  });

  it('converts to signed int', () => {
    expect(invertAndParseNumber('1')).toBe(-1);
    expect(invertAndParseNumber('-1')).toBe(1);
    expect(invertAndParseNumber('-34')).toBe(34);
    expect(invertAndParseNumber('45')).toBe(-45);
  });

  it('calculate relative sizes with big viewport', () => {
    expect(
      calculateRelativeSize({
        originalViewPortMin: 375,
        originalMinSize: 20,
        originalMaxSize: 45,
        originalViewPortMax: 1440,
        newViewPortSize: 1920,
      }),
    ).toBe(56.267605633802816);
  });

  it('calculate relative sizes with small viewport', () => {
    expect(
      calculateRelativeSize({
        originalViewPortMin: 375,
        originalMinSize: 20,
        originalMaxSize: 45,
        originalViewPortMax: 1440,
        newViewPortSize: 320,
      }),
    ).toBe(18.708920187793428);
  });
});
