import type { FluidOptions } from '../../packages/core/src/types';

import { describe, expect, it } from 'vitest';

import { buildFluidRules, buildMultiplePropertiesRule, buildRule, buildSinglePropertyRule, FLUID_UTILITIES, REGEX_PATTERNS_NUMERIC_VALUES, REGEX_PATTERNS_RANGE_VALUES } from '../../packages/core/src/presets/fluid/utils';

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

const optionsWithRangesAndComments: FluidOptions = {
  ...defaultFluidOptions,
  commentHelpers: true,
  ranges,
};

describe('buildSinglePropertyRule', () => {
  it('build single property rule', () => {
    expect(
      buildSinglePropertyRule({
        match: ['fluid-text-10-20', '-10', '-20', '', ''],
        config: defaultFluidOptions,
        property: 'font-size',
      }),
    ).toMatchObject({
      'font-size': 'clamp(0.625rem, 0.4049rem + 0.9390vw, 1.25rem)',
    });
  });

  it('build single property rule with range', () => {
    expect(
      buildSinglePropertyRule({
        match: ['fluid-text-xl', '', '', '', 'xl'],
        config: optionsWithRanges,
        property: 'font-size',
      }),
    ).toMatchObject({
      'font-size': 'clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)',
    });
  });

  it('build single property rule with comments', () => {
    expect(
      buildSinglePropertyRule({
        match: ['fluid-text-10-20', '-10', '-20', '', ''],
        config: optionsWithRangesAndComments,
        property: 'font-size',
      }),
    ).toMatchObject({
      'font-size': 'clamp(0.625rem, 0.4049rem + 0.9390vw, 1.25rem)/* 10px -> 20px */',
    });
  });

  it('build single property rule with range and comments', () => {
    expect(
      buildSinglePropertyRule({
        match: ['fluid-text-xl', '', '', '', 'xl'],
        config: optionsWithRangesAndComments,
        property: 'font-size',
      }),
    ).toMatchObject({
      'font-size': 'clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)/* 28px -> 56px */',
    });
  });
});

describe('buildMultiplePropertiesRule', () => {
  it('build multiple property rule', () => {
    expect(buildMultiplePropertiesRule({
      match: ['fluid-mx-10-20', '-10', '-20', '', ''],
      config: defaultFluidOptions,
      properties: ['margin-left', 'margin-right'],
    })).toMatchObject({
      'margin-left': 'clamp(0.625rem, 0.4049rem + 0.9390vw, 1.25rem)',
      'margin-right': 'clamp(0.625rem, 0.4049rem + 0.9390vw, 1.25rem)',
    });
  });

  it('build multiple property rule with range', () => {
    expect(buildMultiplePropertiesRule({
      match: ['fluid-mx-xl', '', '', '', 'xl'],
      config: optionsWithRanges,
      properties: ['margin-left', 'margin-right'],
    })).toMatchObject({
      'margin-left': 'clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)',
      'margin-right': 'clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)',
    });
  });

  it('build multiple property rule with comments', () => {
    expect(buildMultiplePropertiesRule({
      match: ['fluid-mx-10-20', '-10', '-20', '', ''],
      config: optionsWithRangesAndComments,
      properties: ['margin-left', 'margin-right'],
    })).toMatchObject({
      'margin-left': 'clamp(0.625rem, 0.4049rem + 0.9390vw, 1.25rem)/* 10px -> 20px */',
      'margin-right': 'clamp(0.625rem, 0.4049rem + 0.9390vw, 1.25rem)/* 10px -> 20px */',
    });
  });

  it('build multiple property rule with range and comments', () => {
    expect(buildMultiplePropertiesRule({
      match: ['fluid-mx-xl', '', '', '', 'xl'],
      config: optionsWithRangesAndComments,
      properties: ['margin-left', 'margin-right'],
    })).toMatchObject({
      'margin-left': 'clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)/* 28px -> 56px */',
      'margin-right': 'clamp(1.75rem, 1.1338rem + 2.6291vw, 3.5rem)/* 28px -> 56px */',
    });
  });
});

describe('buildRules', () => {
  it('build multiple property rule with range and comments', () => {
    const ruleUtility = 'fluid-mx';

    const rule = buildRule({
      name: ruleUtility,
      properties: ['margin-left', 'margin-right'],
      config: defaultFluidOptions,
    });

    const regexPatternNumericValues = `^${ruleUtility}${REGEX_PATTERNS_NUMERIC_VALUES}`;
    const regexPatternRangeValues = `^${ruleUtility}${REGEX_PATTERNS_RANGE_VALUES}`;
    const regexPattern = `${regexPatternNumericValues}|${regexPatternRangeValues}`;
    const regex = new RegExp(regexPattern);

    expect(rule[0]![0]!.toString()).toBe(regex.toString());
  });

  it('build rules from utilities', () => {
    const rules = buildFluidRules(defaultFluidOptions);
    // @ts-expect-error overload regex type
    const rulesRegex = rules.map((rule) => new RegExp(rule[0]));

    const fluidUtilitiesPrefixes = Object.keys(FLUID_UTILITIES);

    rulesRegex.forEach((ruleRegex, index) => {
      const numericUtility = `${fluidUtilitiesPrefixes[index]}-10-20`;
      const negativeNumericUtility = `${fluidUtilitiesPrefixes[index]}--10--20`;
      const mixedNumericUtility = `${fluidUtilitiesPrefixes[index]}-10--20`;
      const mixedInvertedNumericUtility = `${fluidUtilitiesPrefixes[index]}--10-20`;
      const RangeUtility = `${fluidUtilitiesPrefixes[index]}-xl`;
      const RangeWithNumberUtility = `${fluidUtilitiesPrefixes[index]}-2xl`;
      expect(ruleRegex.test(numericUtility)).toBe(true);
      expect(ruleRegex.test(negativeNumericUtility)).toBe(true);
      expect(ruleRegex.test(mixedNumericUtility)).toBe(true);
      expect(ruleRegex.test(mixedInvertedNumericUtility)).toBe(true);
      expect(ruleRegex.test(RangeUtility)).toBe(true);
      expect(ruleRegex.test(RangeWithNumberUtility)).toBe(true);
    });
  });
});

describe('build rules from utilities', () => {
  const rules = buildFluidRules(defaultFluidOptions);
  // @ts-expect-error overload regex type
  const rulesRegex = rules.map((rule) => new RegExp(rule[0]));

  const fluidUtilitiesPrefixes = Object.keys(FLUID_UTILITIES);

  rulesRegex.forEach((ruleRegex, index) => {
    const numericUtility = `${fluidUtilitiesPrefixes[index]}-100-200`;
    const negativeNumericUtility = `${fluidUtilitiesPrefixes[index]}--12--23`;
    const mixedNumericUtility = `${fluidUtilitiesPrefixes[index]}-32--334`;
    const mixedInvertedNumericUtility = `${fluidUtilitiesPrefixes[index]}--32-43`;
    const RangeUtility = `${fluidUtilitiesPrefixes[index]}-xl`;
    const RangeWithNumberUtility = `${fluidUtilitiesPrefixes[index]}-2xl`;

    it(`test regex rule from ${numericUtility}`, () => {
      expect(ruleRegex.test(numericUtility)).toBe(true);
    });

    it(`test regex rule from ${negativeNumericUtility}`, () => {
      expect(ruleRegex.test(negativeNumericUtility)).toBe(true);
    });

    it(`test regex rule from ${mixedNumericUtility}`, () => {
      expect(ruleRegex.test(mixedNumericUtility)).toBe(true);
    });

    it(`test regex rule from ${mixedInvertedNumericUtility}`, () => {
      expect(ruleRegex.test(mixedInvertedNumericUtility)).toBe(true);
    });

    it(`test regex rule from ${RangeUtility}`, () => {
      expect(ruleRegex.test(RangeUtility)).toBe(true);
    });

    it(`test regex rule from ${RangeWithNumberUtility}`, () => {
      expect(ruleRegex.test(RangeWithNumberUtility)).toBe(true);
    });
  });
});
