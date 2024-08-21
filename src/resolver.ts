import type { Preset } from 'unocss';

import * as P from '@vinicunca/perkakas';
import { presetIcons } from 'unocss';

import type { DeepPartial, FluidOptions, PresetVinicuncaOptions, ResolvedOptions } from './types';

export const defaultFluidOptions: FluidOptions = {
  maxWidth: 1440,
  minWidth: 375,
  remBase: 16,
  useRemByDefault: false,
  extendMaxWidth: null,
  extendMinWidth: null,
  ranges: null,
  commentHelpers: false,
};

export const defaultOptions: PresetVinicuncaOptions = {
  icons: true,
  enableResetStyles: true,
  fluidOptions: defaultFluidOptions,
  animationOptions: {
    unit: 'ms',
  },
};

export function resolveOptions(options: DeepPartial<PresetVinicuncaOptions>): ResolvedOptions {
  const optionsWithDefault = P.mergeDeep(defaultOptions, options) as PresetVinicuncaOptions;

  const presets: Array<Preset> = [];
  const presetMap = {
    icons: presetIcons,
  };

  for (const [key, preset] of Object.entries(presetMap)) {
    const option = optionsWithDefault[key as keyof typeof presetMap];

    if (option) {
      const preset_: any = preset;

      presets.push(
        preset_(
          P.isBoolean(option)
            ? {}
            : option,
        ),
      );
    }
  }

  return {
    ...optionsWithDefault,
    presets,
  };
}
