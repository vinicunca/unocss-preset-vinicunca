import type { PresetVinicuncaOptions, VinicuncaTheme } from '../src/types';
import { createGenerator } from '@unocss/core';

import { presetVinicunca } from '../src';

export async function generateUno(
  options: PresetVinicuncaOptions = {},
  theme: VinicuncaTheme = {},
) {
  return createGenerator({
    presets: [
      presetVinicunca(options),
    ],

    theme,
  });
}

export async function getCssFromUno(
  { options = {}, code, theme = {} }:
  {
    options?: PresetVinicuncaOptions;
    code: string | Array<string>;
    theme?: VinicuncaTheme;
  },
) {
  const uno = await generateUno(options, theme);

  return uno.generate(code);
}

export async function getCssFromUnoWithoutPreflights(
  { options = {}, code }:
  { options?: PresetVinicuncaOptions; code: string | Array<string> },
) {
  return getCssFromUno({
    options: {
      ...options,
      preflights: false,
      wind4: {
        preflight: false,
      },
    },
    code,
  });
}
