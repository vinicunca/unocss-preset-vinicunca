import type { RequiredFluidOptions } from '../../../types';

import { extractValuesFromRegexMatch } from './regex.util';
import { getRemMaxWidth, getRemMinWidth } from './rem.util';

interface GetSlopeParams {
  min: number;
  max: number;
  config: RequiredFluidOptions;
}

/**
 * Calculates the slope value for fluid.
 *
 * @param options - GetSlopeParams.
 * @param options.min - The minimum value in the fluid range.
 * @param options.max - The maximum value in the fluid range.
 * @param options.config - Configuration object for additional settings.
 *
 * @returns The calculated slope value.
 */
export function getSlope({ min, max, config }: GetSlopeParams) {
  const remMaxWidth = getRemMaxWidth(config);
  const remMinWidth = getRemMinWidth(config);
  return (
    (max - min) / (remMaxWidth - remMinWidth)
  );
}

interface GetIntersectionParams {
  min: number;
  slope: number;
  minWidth: number;
}

/**
 * Calculates the intersection point for the fluid formula.
 *
 * @param options - GetIntersectionParams.
 * @param options.min - The minimum value in the fluid range.
 * @param options.slope - The slope value calculated for the fluid.
 * @param options.minWidth - The minimum viewport width.
 *
 * @returns The calculated intersection point.
 */
export function getIntersection({ min, slope, minWidth }: GetIntersectionParams) {
  return (-minWidth * slope + min);
}

interface GetSlopePercentageParams {
  min: number;
  max: number;
  config: RequiredFluidOptions;
}

/**
 * Calculates the slope percentage for the CSS 'clamp' function.
 *
 * @param options - GetSlopePercentageParams.
 * @param options.min - The minimum value in the fluid range.
 * @param options.max - The maximum value in the fluid range.
 * @param options.config - Configuration object.
 *
 * @returns The slope value as a percentage for use in the 'clamp' function.
 */
export function getSlopePercentage({ min, max, config }: GetSlopePercentageParams) {
  const slope = getSlope({ min, max, config });
  return (slope * 100);
}

interface GetClampParams {
  min: number;
  max: number;
  config: RequiredFluidOptions;
}

/**
 * Generates a CSS 'clamp' function value for fluid.
 *
 * @param options - GetClampParams.
 * @param options.min - The minimum value in the fluid range.
 * @param options.max - The maximum value in the fluid range.
 * @param options.config - Configuration object.
 *
 * @returns A string representing the CSS 'clamp' function.
 */
export function getClamp({ min, max, config }: GetClampParams) {
  const slope = getSlope({ min, max, config });
  const intersection = getIntersection({ min, slope, minWidth: getRemMinWidth(config) });
  const slopePercentage = getSlopePercentage({ min, max, config });

  const clampMin = Math.min(min, max);
  const clampMax = Math.max(min, max);

  return `clamp(${clampMin}rem, ${intersection.toFixed(4)}rem + ${slopePercentage.toFixed(4)}vw, ${clampMax}rem)`;
}

interface GetClampCommentParams {
  match: RegExpMatchArray;
  config: RequiredFluidOptions;
}

/**
 * Generates a comment with the fluid values for the clamp CSS.
 *
 * @param options - GetClampCommentParams.
 * @param options.match - The match array from the regex.
 * @param options.config - Configuration object.
 *
 * @returns A string representing the comment for the 'clamp' function with fluid real values.
 */
export function getClampComment({ match, config }: GetClampCommentParams) {
  if (!config.commentHelpers) {
    return '';
  }

  const { predefinedRangeName, matchMin, matchMax } = extractValuesFromRegexMatch(match);
  const predefinedRange = config.ranges && config.ranges[predefinedRangeName!];
  const isRem = config.useRemByDefault;
  const min = predefinedRange ? predefinedRange[0] : -Number.parseInt(matchMin!);
  const max = predefinedRange ? predefinedRange[1] : -Number.parseInt(matchMax!);
  const unit = isRem ? 'rem' : 'px';

  return `/* ${min}${unit} -> ${max}${unit} */`;
}
