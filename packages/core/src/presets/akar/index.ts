import type { Preflight, Preset } from '@unocss/core';
import type { VinicuncaAkarOptions } from '../../types';
import { drawerPreflight } from './akar.drawer-preflights';
import { resolveAkarThemeColors } from './akar.theme';

export function presetAkar(options: VinicuncaAkarOptions): Preset {
  const preflights: Array<Preflight> = [];

  if (options.enableDrawer) {
    preflights.push(drawerPreflight);
  }

  const colorThemes = resolveAkarThemeColors(options);

  return {
    name: 'unocss-preset-akar',

    preflights,

    theme: {
      colors: colorThemes,
    },
  };
}
