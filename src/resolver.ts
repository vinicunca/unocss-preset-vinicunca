/* eslint-disable no-await-in-loop */
import type {
  CustomStaticShortcuts,
  PresetVinicuncaOptions,
  ResolvedOptions,
} from './types';
import {
  isBoolean,
  isPlainObject,
  isString,
  mergeDeep,
} from '@vinicunca/perkakas';
import { defu } from 'defu';
import {
  DEFAULT_OPTIONS,
  DEFAULT_PRESET_OPTIONS,
} from './constants';
import { cssObj2StrSync, resolveAnimation } from './utils';

export async function resolveOptions(options: PresetVinicuncaOptions): Promise<ResolvedOptions> {
  const optionsWithDefault = defu(
    options,
    DEFAULT_OPTIONS,
  ) as Required<PresetVinicuncaOptions>;

  if (!isString(optionsWithDefault.unColor)) {
    optionsWithDefault.unColor = optionsWithDefault.unColor
      ? '--un-color'
      : false;
  }

  const presets = await resolvePresets(optionsWithDefault);
  const transformers = await resolveTransformers(optionsWithDefault);
  const {
    extendedTheme,
    shortcuts,
  } = resolveExtend(optionsWithDefault);

  return {
    ...optionsWithDefault,

    meta: {
      extendedTheme,
      presets,
      shortcuts,
      transformers,
    },
  };
}

async function resolvePresets(options: Required<PresetVinicuncaOptions>) {
  const presets = [];

  const presetMap = {
    icons: import('@unocss/preset-icons').then((mod) => mod.presetIcons),
    wind4: import('unocss').then((m) => m.presetWind4),
    fluid: import('./presets/fluid').then((mod) => mod.presetFluid),
    animation: import('./presets/animation').then((mod) => mod.presetAnimation),
    webFonts: import('@unocss/preset-web-fonts').then((mod) => mod.presetWebFonts),
    typography: import('@unocss/preset-typography').then((mod) => mod.presetTypography),
    scrollbar: import('./presets/scrollbar').then((mod) => mod.presetScrollbar),
    magicCss: import('./presets/magic-css').then((mod) => mod.presetMagicss),
  };

  for (const [key, preset] of Object.entries(presetMap)) {
    const option = options[key as keyof typeof presetMap];
    if (option) {
      const p = await preset as any;
      const defaultOptions = DEFAULT_PRESET_OPTIONS[key as keyof typeof DEFAULT_PRESET_OPTIONS] ?? {};
      if (isPlainObject(option)) {
        presets.push(p(
          mergeDeep(
            defaultOptions,
            option,
          ),
        ));
      } else {
        presets.push(p(defaultOptions ?? {}));
      }
    }
  }

  return presets;
}

async function resolveTransformers(options: Required<PresetVinicuncaOptions>) {
  const transformers = [];
  const transformerMap = {
    directives: import('unocss').then((m) => m.transformerDirectives),
    variantGroup: import('unocss').then((m) => m.transformerVariantGroup),
    alias: import('./transformer-alias').then((mod) => mod.transformerAlias),
  };

  for (const [key, transformer] of Object.entries(transformerMap)) {
    const option = options[key as keyof typeof transformerMap];
    if (option) {
      const trans = await transformer as any;
      transformers.push(
        trans(
          isBoolean(option) ? {} : option,
        ),
      );
    }
  }

  return transformers;
}

export function resolveExtend(options: Required<PresetVinicuncaOptions>) {
  const shortcuts_: CustomStaticShortcuts = [];
  const {
    animation = {},
    keyframes = {},
  } = options.extendedTheme ?? {};

  const { animation: resolvedAnimation, shortcuts } = resolveAnimation(animation);
  shortcuts_.push(...shortcuts);

  resolvedAnimation.keyframes = {};

  for (const key of Object.keys(keyframes)) {
    resolvedAnimation.keyframes[key] = `{${cssObj2StrSync(keyframes[key])}}`;
  }

  return {
    extendedTheme: { animation: resolvedAnimation },
    shortcuts: shortcuts_,
  };
}
