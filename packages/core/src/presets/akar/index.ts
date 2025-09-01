import type { Preset } from '@unocss/core';
import { drawerPreflight } from './akar.preflights';

export function presetAkar(): Preset {
  return {
    name: 'unocss-preset-akar',

    preflights: [
      drawerPreflight,
    ],
  };
}
