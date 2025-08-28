/* eslint-disable no-await-in-loop */
import type {
  AnimationOptions,
  CustomStaticShortcuts,
  FluidOptions,
  PresetVinicuncaOptions,
  ResolvedOptions,
  VinicuncaTheme,
} from './types';
import { isBoolean, isPlainObject, isString, mergeDeep } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { cssObj2StrSync, resolveAnimation } from './utils';

export const defaultOptions: PresetVinicuncaOptions = {
  theme: {},

  enableDefaultShortcuts: true,

  preflights: true,

  // presets
  wind4: {
    preflights: {
      reset: false,
    },
  },
  wind3: false,
  icons: true,
  webFonts: false,
  typography: false,
  scrollbar: false,
  magicCss: false,
  animation: true,
  fluid: true,
  akar: false,

  // transformers
  directives: true,
  variantGroup: true,
};

export const defaultFluidOptions: Required<FluidOptions> = {
  maxWidth: 1440,
  minWidth: 375,
  remBase: 16,
  useRemByDefault: false,
  extendMaxWidth: null,
  extendMinWidth: null,
  ranges: null,
  commentHelpers: false,
};

const defaultPresetOptions: Record<string, any> = {
  fluid: defaultFluidOptions,

  animation: {
    unit: 'ms',
  } as AnimationOptions,
};

export async function resolveOptions(options: PresetVinicuncaOptions): Promise<ResolvedOptions> {
  const optionsWithDefault = defu(
    options,
    defaultOptions,
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

  const { theme: themeExtend, shortcuts } = resolveExtend(optionsWithDefault.theme.extend ?? {});
  const theme_ = mergeDeep(
    themeExtend,
    optionsWithDefault.theme,
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
    },
  };
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
      const presetOptions = defaultPresetOptions[key as keyof typeof defaultPresetOptions];
      if (isPlainObject(option)) {
        presets.push(p({ ...presetOptions, ...option }));
      } else {
        presets.push(p(presetOptions ?? {}));
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

export function resolveExtend(extend: VinicuncaTheme['extend']) {
  const shortcuts_: CustomStaticShortcuts = [];
  const { animation, keyframes = {} } = extend!;

  // animation
  const { animation: resolvedAnimation, shortcuts } = resolveAnimation(animation ?? {});
  shortcuts_.push(...shortcuts);

  // keyframes
  resolvedAnimation.keyframes = {};

  for (const key of Object.keys(keyframes)) {
    resolvedAnimation.keyframes[key] = `{${cssObj2StrSync(keyframes[key])}}`;
  }

  return {
    theme: { animation: resolvedAnimation } as VinicuncaTheme,
    shortcuts: shortcuts_,
  };
}
