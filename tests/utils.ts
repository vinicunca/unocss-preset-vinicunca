import type { PresetVinicuncaOptions } from '../packages/core/src/types';
import { createGenerator } from '@unocss/core';

import { presetVinicunca } from '../packages/core/src';

export async function generateUno(options: PresetVinicuncaOptions = {}) {
  return createGenerator({
    presets: [
      presetVinicunca(options),
    ],
  });
}

export async function getUnoWithoutPreflights(options: PresetVinicuncaOptions = {}) {
  return generateUno({
    ...options,

    wind: {
      preflight: false,
    },

    preflights: false,
  });
}
