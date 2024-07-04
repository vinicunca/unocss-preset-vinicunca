import type { Preset } from 'unocss';

import * as P from '@vinicunca/perkakas';
import { presetIcons, presetUno, presetWebFonts } from 'unocss';

import type { ResolvedOptions, VinicuncaOptions } from './types';

import { getAnimationTheme } from './core/animation.theme';

const defaultOptions: VinicuncaOptions = {
  uno: true,
  icons: true,
  webFonts: false,
  enableDefaultShortcuts: true,
  enableAnimations: true,
  enableResetStyles: true,
};

export function resolveOptions(options: VinicuncaOptions): ResolvedOptions {
  const optionsWithDefault = Object.assign(
    {},
    defaultOptions,
    options,
  ) as Required<VinicuncaOptions>;

  const presets: Array<Preset> = [];
  const presetMap = {
    uno: presetUno,
    icons: presetIcons,
    webFonts: presetWebFonts,
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
