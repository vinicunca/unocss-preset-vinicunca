/* eslint-disable no-await-in-loop */
import type {
  CustomStaticShortcuts,
  PresetVinicuncaOptions,
  ResolvedOptions,
  VinicuncaTheme,
} from './types';
import {
  isBoolean,
  isObjectType,
  isPlainObject,
  isString,
  mergeDeep,
} from '@vinicunca/perkakas';
import { defu } from 'defu';
import {
  DEFAULT_AKAR_OPTIONS,
  DEFAULT_OPTIONS,
  DEFAULT_PRESET_OPTIONS,
} from './constants';
import { getAkarTheme } from './presets/akar/akar.theme';
import { cssObj2StrSync, resolveAnimation } from './utils';

export async function resolveOptions(options: PresetVinicuncaOptions): Promise<ResolvedOptions> {
  const optionsWithDefault = defu(
    options,
    DEFAULT_OPTIONS,
  ) as Required<PresetVinicuncaOptions>;

  if (optionsWithDefault.wind4 && optionsWithDefault.wind3) {
    console.warn('wind3 and wind4 are mutually exclusive, only one can be enabled');
    optionsWithDefault.wind3 = false;
  }

  if (!isString(optionsWithDefault.unColor)) {
    optionsWithDefault.unColor = optionsWithDefault.unColor
      ? '--un-color'
      : false;
  }

  const presets = await resolvePresets(optionsWithDefault);
  const transformers = await resolveTransformers(optionsWithDefault);
  const {
    theme: themeExtend,
    shortcuts,
    safelist,
  } = resolveExtend(optionsWithDefault);
  const resolvedTheme = resolveTheme(optionsWithDefault);

  const theme_ = mergeDeep(
    themeExtend,
    resolvedTheme,
  );

  return {
    ...optionsWithDefault,

    theme: {
      ...theme_,
    },

    meta: {
      presets,
      shortcuts,
      transformers,
      safelist,
    },
  };
}

function resolveTheme(options: Required<PresetVinicuncaOptions>) {
  const enableAkar = Boolean(options.akar);

  let baseTheme = options.theme;

  if (!enableAkar) {
    return baseTheme;
  }

  let akarBrands = DEFAULT_AKAR_OPTIONS.brands ?? {};

  if (isObjectType(options.akar)) {
    akarBrands = mergeDeep(
      akarBrands,
      options.akar.brands ?? {},
    );
  }

  const akarTheme = getAkarTheme(akarBrands);

  baseTheme = mergeDeep(
    baseTheme,
    {
      colors: akarTheme,
    },
  );

  return baseTheme;
}

async function resolvePresets(options: Required<PresetVinicuncaOptions>) {
  const presets = [];

  const presetMap = {
    icons: import('@unocss/preset-icons').then((mod) => mod.presetIcons),
    webFonts: import('@unocss/preset-web-fonts').then((mod) => mod.presetWebFonts),
    typography: import('@unocss/preset-typography').then((mod) => mod.presetTypography),
    wind3: import('unocss').then((m) => m.presetWind3),
    wind4: import('unocss').then((m) => m.presetWind4),
    scrollbar: import('./presets/scrollbar').then((mod) => mod.presetScrollbar),
    magicCss: import('./presets/magic-css').then((mod) => mod.presetMagicss),
    animation: import('./presets/animation').then((mod) => mod.presetAnimation),
    fluid: import('./presets/fluid').then((mod) => mod.presetFluid),
    akar: import('./presets/akar').then((mod) => mod.presetAkar),
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
  let {
    animation = {},
    keyframes = {},
  } = options.theme.extend ?? {};
  const safelist: Array<string> = [];

  const enableAkar = Boolean(options.akar);

  /**
   * If akar is enabled we want to safelist all default animations
   */
  if (enableAkar) {
    animation = mergeDeep(
      animation,
      DEFAULT_AKAR_OPTIONS.animation ?? {},
    );

    keyframes = mergeDeep(
      keyframes,
      DEFAULT_AKAR_OPTIONS.keyframes ?? {},
    );

    let akarAnimation = DEFAULT_AKAR_OPTIONS.animation ?? {};
    let akarKeyframes = DEFAULT_AKAR_OPTIONS.keyframes ?? {};

    if (isObjectType(options.akar)) {
      akarAnimation = mergeDeep(
        akarAnimation,
        options.akar.animation ?? {},
      );

      akarKeyframes = mergeDeep(
        akarKeyframes,
        options.akar.keyframes ?? {},
      );
    }

    const animationKeys = Object.keys(akarAnimation);
    const keyframesKeys = Object.keys(akarKeyframes);

    keyframesKeys.forEach((frameKey) => {
      if (!animationKeys.includes(frameKey)) {
        safelist.push(`animate-${frameKey}`);
      }
    });
  }

  // animation
  const { animation: resolvedAnimation, shortcuts } = resolveAnimation(animation);
  shortcuts_.push(...shortcuts);

  // keyframes
  resolvedAnimation.keyframes = {};

  for (const key of Object.keys(keyframes)) {
    resolvedAnimation.keyframes[key] = `{${cssObj2StrSync(keyframes[key])}}`;
  }

  return {
    theme: { animation: resolvedAnimation } as VinicuncaTheme,
    shortcuts: shortcuts_,
    safelist,
  };
}
