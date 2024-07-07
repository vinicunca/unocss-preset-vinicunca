import type { Theme } from '@unocss/preset-mini';
import type { PresetFactory } from 'unocss';

import { definePreset } from 'unocss';

import type { DeepPartial, VinicuncaOptions } from './types';

import { getPreflights } from './core/preflights';
import { buildRulesFromUtilities } from './fluid/utils/rule.util';
import { resolveOptions } from './resolver';

export const presetVinicunca = definePreset((options: DeepPartial<VinicuncaOptions>) => {
  const resolvedOptions = resolveOptions(options);

  const { presets, animationTheme, fluidOptions } = resolvedOptions;

  return {
    name: 'unocss-preset-vinicunca',
    presets,
    preflights: getPreflights(resolvedOptions),
    theme: {
      animation: animationTheme,
    },
    rules: [
      ...buildRulesFromUtilities(fluidOptions) as any,
    ],
  };
}) as PresetFactory<Theme, DeepPartial<VinicuncaOptions>>;
