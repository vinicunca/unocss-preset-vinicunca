import type { Preset, Rule } from 'unocss';
import type { FluidOptions } from './preset/types';

import { defu } from 'defu';
import { FluidPreset } from './preset';
import { DEFAULT_FLUID_OPTIONS } from './preset/constant';
import { fluidSizeUtilities } from './preset/utils';

export * from './preset/constant';
export * from './preset/types';

export function presetFluid(options: Required<FluidOptions>): Preset {
  const config = new FluidPreset(options);

  const {
    disableTheme = false,
    utilities: userUtilities = [],
    attributify = false,
    themeShortcuts = true,
  } = defu(options, DEFAULT_FLUID_OPTIONS);

  const userUtilityNames = new Set(userUtilities.map((u) => u[0]));
  const mergedUtilities = [
    ...userUtilities,
    ...fluidSizeUtilities.filter(([name]) => !userUtilityNames.has(name)),
  ];

  // Map enables CSS var rules to identify and auto-apply to matching utility properties
  const utilitiesMap = new Map(mergedUtilities);

  // Create rule factories
  const getRules = config.makeRulesFactory(false);
  const getCSSVarRules = config.makeRulesFactory(true, utilitiesMap);

  // Generate all rules
  const rules: Array<Rule<object>> = [];

  // Add utility-specific rules
  for (const [utility, properties] of mergedUtilities) {
    rules.push(...getRules(utility, properties));
  }

  // Add CSS var rules
  rules.push(...getCSSVarRules('', []));

  // Generate shortcuts
  const utilityNames = mergedUtilities.map((u) => u[0]);
  const shortcuts = config.getShortcuts(utilityNames, {
    attributify,
    disableTheme,
    themeShortcuts,
  });

  return {
    name: 'unocss-preset-fluid',
    rules,
    shortcuts,
  };
}
