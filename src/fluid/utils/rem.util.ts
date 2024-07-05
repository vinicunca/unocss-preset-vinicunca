import type { FluidOptions } from '../../types';

import { invertAndParseNumber } from './parser.util';
import { validateUtilityRange } from './validation.util';

export function getRemMaxWidth(config: FluidOptions) {
  const maxWidth = config.extendMaxWidth || config.maxWidth;

  if (config.useRemByDefault) {
    return maxWidth;
  } else {
    return maxWidth / config.remBase;
  }
}

export function getRemMinWidth(config: FluidOptions) {
  const minWidth = config.extendMinWidth || config.minWidth;
  if (config.useRemByDefault) {
    return minWidth;
  } else {
    return minWidth / config.remBase;
  }
}

export function toRem(value: number, config: FluidOptions) {
  if (config.useRemByDefault) {
    return value;
  } else {
    return value / config.remBase;
  }
}

/**
 * Calculates the relative size based on the original viewport size and the new viewport size.
 * This allows you to extend the min and max sizes of the fluid layout keeping the proportions.
 * This function is used for the extendMinWidth and extendMaxWidth options.
 * The result of this value is used to calculate the min and max values in rem when the viewport are extended.
 */
export function calculateRelativeSize(
  {
    originalViewPortMin,
    originalMinSize,
    originalMaxSize,
    originalViewPortMax,
    newViewPortSize,
  }:
  {
    originalViewPortMin: number;
    originalMinSize: number;
    originalMaxSize: number;
    originalViewPortMax: number;
    newViewPortSize: number;
  },
) {
  const slope = (originalMaxSize - originalMinSize)
    / (originalViewPortMax - originalViewPortMin);
  return slope * (newViewPortSize - originalViewPortMin) + originalMinSize;
}

interface ExtractRemBoundsFromMatchParams {
  match: RegExpMatchArray | string;
  config: FluidOptions;
}

/**
 * Returns the min and max values in rem for the given match.
 */
export function extractRemBoundsFromMatch({ match, config }: ExtractRemBoundsFromMatchParams) {
  let min, max;

  const [utility, matchMin, matchMax, , predefinedRangeName] = match;

  if (predefinedRangeName) {
    validateUtilityRange({ range: predefinedRangeName, utility, config });
    const [minRange, maxRange] = config.ranges![predefinedRangeName]!;
    min = toRem(minRange, config);
    max = toRem(maxRange, config);
  } else {
    min = toRem(invertAndParseNumber(matchMin), config);
    max = toRem(invertAndParseNumber(matchMax), config);
  }

  let relativeMin: number | undefined;
  let relativeMax: number | undefined;

  if (config.extendMinWidth) {
    relativeMin = calculateRelativeSize(
      {
        originalViewPortMin: config.minWidth,
        originalMinSize: min,
        originalMaxSize: max,
        originalViewPortMax: config.maxWidth,
        newViewPortSize: config.extendMinWidth,
      },
    );
  }

  if (config.extendMaxWidth) {
    relativeMax = calculateRelativeSize(
      {
        originalViewPortMin: config.minWidth,
        originalMinSize: min,
        originalMaxSize: max,
        originalViewPortMax: config.maxWidth,
        newViewPortSize: config.extendMinWidth!,
      },
    );
  }

  return {
    min: relativeMin ?? min,
    max: relativeMax ?? max,
  };
}
