import type { RequiredFluidOptions } from '../../../types';

import { extractValuesFromRegexMatch } from './regex.util';

interface ValidateUtilityRangeParams {
  range: string;
  utility: string | undefined;
  config: RequiredFluidOptions;
}

export function validateUtilityRange({ range, utility, config }: ValidateUtilityRangeParams) {
  if (!config.ranges) {
    throw new Error(`[unocss-vinicunca fluid] (${utility}) Trying to use predefined range ${range} but no ranges are defined.`);
  }

  if (!config.ranges[range]) {
    throw new Error(`[unocss-vinicunca fluid] (${utility}) Trying to use predefined range ${range} but it is not defined in ranges.`);
  }

  return true;
}

interface ValidateUtilityNameParams {
  match: RegExpMatchArray;
  config: RequiredFluidOptions;
}

export function validateUtilityName({ match, config }: ValidateUtilityNameParams) {
  const {
    utility,
    matchMin,
    matchMax,
    predefinedRangeName,
  } = extractValuesFromRegexMatch(match);

  if (!predefinedRangeName && matchMin && matchMax) {
    return true;
  }

  try {
    validateUtilityRange({ range: predefinedRangeName!, utility, config });
  } catch (error: any) {
    console.warn(error.message);
    return false;
  }

  return true;
}
