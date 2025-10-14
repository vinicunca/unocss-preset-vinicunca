import type { Preflight, Preset } from '@unocss/core';
import type { VinicuncaAkarOptions } from '../../types';
import { getAkarPreflight } from './akar.brand-css-variables';
import { drawerPreflight } from './akar.drawer-preflights';
import { resolveAkarTheme } from './akar.theme';

export function presetAkar(options: VinicuncaAkarOptions): Preset {
  const preflights: Array<Preflight> = [
    getAkarPreflight(options),
  ];

  if (options.enableDrawer) {
    preflights.push(drawerPreflight);
  }

  const colorThemes = resolveAkarTheme(options);

  return {
    name: 'unocss-preset-akar',

    preflights,

    theme: {
      colors: colorThemes,
    },
  };
}
