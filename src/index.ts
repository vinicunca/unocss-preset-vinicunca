import type { Theme } from '@unocss/preset-mini';
import type { PresetFactory } from 'unocss';

import { definePreset } from 'unocss';

import type { DeepPartial, PresetVinicuncaOptions } from './types';

import { animationRules } from './animation/animation.rule';
import { animationShortcuts } from './animation/animation.shortcut';
import { animationTheme } from './animation/animation.theme';
import { buildRulesFromUtilities } from './fluid/utils/rule.util';
import { getPreflights } from './preflights';
import { resolveOptions } from './resolver';

export const presetVinicunca = definePreset((options: DeepPartial<PresetVinicuncaOptions>) => {
  const resolvedOptions = resolveOptions(options);

  const { presets, fluidOptions, animationOptions } = resolvedOptions;

  return {
    name: 'unocss-preset-vinicunca',
    presets,
    preflights: getPreflights(resolvedOptions),
    theme: {
      animation: animationTheme,
    },
    rules: [
      ...animationRules,
      ...buildRulesFromUtilities(fluidOptions) as any,
    ],
    shortcuts: [
      ...animationShortcuts(animationOptions),
    ],
  };
}) as PresetFactory<Theme, DeepPartial<PresetVinicuncaOptions>>;
