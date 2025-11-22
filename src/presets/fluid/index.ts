import type { Preset } from '@unocss/core';

import type { FluidOptions } from '../../types';

import { buildFluidRules } from './utils/rule.util';

export function presetFluid(options: Required<FluidOptions>): Preset {
  return {
    name: 'unocss-preset-fluid',

    rules: [
      ...buildFluidRules(options) as any,
    ],
  };
}
