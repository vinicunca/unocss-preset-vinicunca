import type { Preset } from '@unocss/core';
import type { VinicuncaAkarOptions } from '../../types';
import { getBrandPreflight } from './akar.brand-preflights';
import { drawerPreflight } from './akar.drawer-preflights';

export function presetAkar(options: VinicuncaAkarOptions): Preset {
  return {
    name: 'unocss-preset-akar',

    preflights: [
      drawerPreflight,
      getBrandPreflight(options),
    ],
  };
}
