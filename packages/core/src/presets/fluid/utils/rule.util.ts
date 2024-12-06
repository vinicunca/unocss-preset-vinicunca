import type { RequiredFluidOptions } from '../../../types';
import { getClamp, getClampComment } from './clamp.util';
import { FLUID_UTILITIES } from './constant.util';
import { REGEX_PATTERNS_NUMERIC_VALUES, REGEX_PATTERNS_RANGE_VALUES } from './regex.util';
import { extractRemBoundsFromMatch } from './rem.util';
import { validateUtilityName } from './validation.util';

interface BuildSinglePropertyRuleParams {
  match: RegExpMatchArray;
  config: RequiredFluidOptions;
  property: string;
}

export function buildSinglePropertyRule({ match, config, property }: BuildSinglePropertyRuleParams) {
  if (!validateUtilityName({ match, config })) {
    return '';
  }

  const { min, max } = extractRemBoundsFromMatch({ match, config });

  return {
    [`${property}`]: getClamp({ min, max, config }) + getClampComment({ match, config }),
  };
}

interface BuildMultiplePropertiesRuleParams {
  match: RegExpMatchArray;
  config: RequiredFluidOptions;
  properties: Array<string>;
}

export function buildMultiplePropertiesRule({ match, config, properties }: BuildMultiplePropertiesRuleParams) {
  if (!validateUtilityName({ match, config }) || !Array.isArray(properties)) {
    return '';
  }

  const { min, max } = extractRemBoundsFromMatch({ match, config });

  const selectors: Record<string, string> = {};

  properties.forEach((property) => {
    selectors[property] = getClamp({ min, max, config }) + getClampComment({ match, config });
  });

  return {
    ...selectors,
  };
}

interface BuildRuleParams {
  name: string;
  properties: Array<string> | string;
  config: RequiredFluidOptions;
}

export function buildRule({ name, properties, config }: BuildRuleParams) {
  const regexPattersNumericValues = `^${name}${REGEX_PATTERNS_NUMERIC_VALUES}`;
  const regexPattersRangeValues = `^${name}${REGEX_PATTERNS_RANGE_VALUES}`;

  const regexPattern = `${regexPattersNumericValues}|${regexPattersRangeValues}`;
  const regex = new RegExp(regexPattern);

  if (Array.isArray(properties)) {
    return [
      [
        regex,
        (match: RegExpMatchArray) => buildMultiplePropertiesRule({ match, config, properties }),
      ],
    ];
  } else {
    return [
      [
        regex,
        (match: RegExpMatchArray) => buildSinglePropertyRule({ match, config, property: properties }),
      ],
    ];
  }
}

export function buildFluidRules(config: RequiredFluidOptions) {
  return Object.entries(FLUID_UTILITIES)
    .flatMap(([name, property]) => {
      return buildRule({ name, properties: property, config });
    });
}
