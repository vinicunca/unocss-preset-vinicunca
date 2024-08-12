import type { UnoGenerator } from '@unocss/core';
import type { Theme } from '@unocss/preset-mini';

import { createGenerator } from '@unocss/core';
import { presetUno } from 'unocss';

import type { PresetVinicuncaOptions } from '../src/types';

import { presetVinicunca } from '../src';

export const getUno = generator();

interface GeneratorOptions {
  presetOptions?: Partial<PresetVinicuncaOptions>;
  theme?: Theme;
}

export function generator(options: GeneratorOptions = {}): UnoGenerator<Theme> {
  return createGenerator({
    presets: [
      presetUno({ preflight: false }),
      presetVinicunca({
        enableResetStyles: false,
        ...options.presetOptions,
      }),
    ],
    theme: options.theme,
  });
}
