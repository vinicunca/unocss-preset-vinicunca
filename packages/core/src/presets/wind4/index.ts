import type { PresetOptions } from '@unocss/core';
import type { Theme } from './theme';
import { definePreset } from '@unocss/core';

import { preflights } from './preflights';
import { rules } from './rules';
import { theme } from './theme';
import { PRESET_NAME, trackedTheme } from './utils';

export interface PresetWind4Options extends PresetOptions {
  /**
   * Reset the default preflight styles.
   *
   * @default true
   */
  reset?: boolean;

  /**
   * Generate theme keys as CSS variables.
   *
   * - `true`: Generate theme keys fully.
   * - `false`: Disable theme keys. (Not recommended ⚠️)
   * - `'on-demand'`: Generate theme keys only when used.
   *
   * @default 'on-demand'
   */
  themePreflight?: boolean | 'on-demand';
}

export const presetWind4 = definePreset<PresetWind4Options, Theme>((options = {}) => {
  options.themePreflight = options.themePreflight ?? 'on-demand';

  return {
    name: PRESET_NAME,
    rules,
    theme,
    layers: {
      'cssvar-property': -200,
      'theme': -150,
    },
    preflights: preflights(options),
    options,
    meta: {
      themeDeps: trackedTheme,
    },
    configResolved() {
      trackedTheme.clear();
    },
  };
});
