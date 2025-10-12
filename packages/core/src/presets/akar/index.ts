import type { Preflight, Preset } from '@unocss/core';
import type { VinicuncaAkarOptions } from '../../types';
import { getBrandPreflight } from './akar.brand-css-variables';
import { drawerPreflight } from './akar.drawer-preflights';

export function presetAkar(options: VinicuncaAkarOptions): Preset {
  const preflights: Array<Preflight> = [
    getBrandPreflight(options),
  ];

  if (options.enableDrawer) {
    preflights.push(drawerPreflight);
  }
  return {
    name: 'unocss-preset-akar',

    preflights,
  };
}
