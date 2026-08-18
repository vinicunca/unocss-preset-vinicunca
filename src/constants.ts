import type { AnimationOptions, PresetVinicuncaOptions } from './types';
import { DEFAULT_FLUID_OPTIONS } from './presets/fluid/preset/constant';

export const DEFAULT_OPTIONS: PresetVinicuncaOptions = {
  extendedTheme: {},

  preflights: true,

  // presets
  wind4: {
    preflights: {
      reset: false,
    },
  },
  icons: true,
  webFonts: false,
  typography: false,
  scrollbar: false,
  magicCss: false,
  animation: true,
  fluid: true,

  // transformers
  directives: true,
  variantGroup: true,
};

export const DEFAULT_PRESET_OPTIONS: Record<string, any> = {
  fluid: DEFAULT_FLUID_OPTIONS,

  animation: {
    unit: 'ms',
  } as AnimationOptions,
};
