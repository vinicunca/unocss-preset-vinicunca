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

export async function getCssFromUno(
  { options = {}, code }:
  { options?: PresetVinicuncaOptions; code: string | Array<string> },
) {
  const uno = await generateUno(options);

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
    },
    code,
  });
}
