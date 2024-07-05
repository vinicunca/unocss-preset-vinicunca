import { describe, expect, it } from 'vitest';

import { REGEX_PATTERNS_NUMERIC_VALUES, REGEX_PATTERNS_RANGE_VALUES } from '../../src/fluid/utils/regex.util';

describe('fluid regex', () => {
  it('regex catch utility with numeric values', () => {
    const utilityPrefix = 'fluid-mx';
    const utility = 'fluid-mx-10-20';

    const regexPatternNumericValues = `^${utilityPrefix}${REGEX_PATTERNS_NUMERIC_VALUES}`;
    const regex = new RegExp(regexPatternNumericValues);
    expect(regex.test(utility)).toBe(true);

    expect(Object.values(utility.match(regex)!)).toMatchObject([
      utility,
      '-10',
      '-20',
      0,
      utility,
      undefined,
    ]);
  });

  it('regex catch utility with numeric negative values', () => {
    const utilityPrefix = 'fluid-mx';
    const utility = 'fluid-mx--10--20';

    const regexPatternNumericValues = `^${utilityPrefix}${REGEX_PATTERNS_NUMERIC_VALUES}`;
    const regex = new RegExp(regexPatternNumericValues);
    expect(regex.test(utility)).toBe(true);

    expect(Object.values(utility.match(regex)!)).toMatchObject([
      utility,
      '10',
      '20',
      0,
      utility,
      undefined,
    ]);
  });

  it('regex catch utility with numeric mixed values', () => {
    const utilityPrefix = 'fluid-mx';
    const utility = 'fluid-mx-10--20';

    const regexPatternNumericValues = `^${utilityPrefix}${REGEX_PATTERNS_NUMERIC_VALUES}`;
    const regex = new RegExp(regexPatternNumericValues);
    expect(regex.test(utility)).toBe(true);

    expect(Object.values(utility.match(regex)!)).toMatchObject([
      utility,
      '-10',
      '20',
      0,
      utility,
      undefined,
    ]);
  });

  it('regex catch utility with numeric mixed values inverted', () => {
    const utilityPrefix = 'fluid-mx';
    const utility = 'fluid-mx--10-20';

    const regexPatternNumericValues = `^${utilityPrefix}${REGEX_PATTERNS_NUMERIC_VALUES}`;
    const regex = new RegExp(regexPatternNumericValues);
    expect(regex.test(utility)).toBe(true);

    expect(Object.values(utility.match(regex)!)).toMatchObject([
      utility,
      '10',
      '-20',
      0,
      utility,
      undefined,
    ]);
  });

  it('regex catch utility with range value', () => {
    const utilityPrefix = 'fluid-mx';
    const utility = 'fluid-mx-xl';

    const regexPatternNumericValues = `^${utilityPrefix}${REGEX_PATTERNS_RANGE_VALUES}`;
    const regex = new RegExp(regexPatternNumericValues);
    expect(regex.test(utility)).toBe(true);

    expect(Object.values(utility.match(regex)!)).toMatchObject([
      utility,
      undefined,
      'xl',
      0,
      utility,
      undefined,
    ]);
  });
});
