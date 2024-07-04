import { definePreset } from 'unocss';

import type { VinicuncaOptions } from './types';

import { getPreflights } from './core/preflights';
import { resolveOptions } from './resolver';

export const presetVinicunca = definePreset((options: VinicuncaOptions = {}) => {
  const resolvedOptions = resolveOptions(options);

  const { presets, animationTheme } = resolvedOptions;

  return {
    name: 'unocss-preset-vinicunca',
    presets,
    preflights: getPreflights(resolvedOptions),
    theme: {
      animation: animationTheme,
    },
  };
});
