import type { Preset } from 'unocss';

import * as P from '@vinicunca/perkakas';
import { presetIcons } from 'unocss';

import type { DeepPartial, FluidOptions, ResolvedOptions, VinicuncaOptions } from './types';

import { getAnimationTheme } from './animation/animation.theme';

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

export const defaultOptions: VinicuncaOptions = {
  uno: true,
  icons: true,
  webFonts: false,
  enableAnimations: true,
  enableResetStyles: true,
  fluidOptions: defaultFluidOptions,
};

export function resolveOptions(options: DeepPartial<VinicuncaOptions>): ResolvedOptions {
  const optionsWithDefault = P.mergeDeep(defaultOptions, options) as VinicuncaOptions;

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

  const animationTheme = optionsWithDefault.enableAnimations
    ? getAnimationTheme()
    : {};

  return {
    ...optionsWithDefault,
    animationTheme,
    presets,
  };
}
