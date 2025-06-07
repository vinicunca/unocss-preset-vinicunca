/* eslint-disable no-await-in-loop */
import type { Theme } from '@unocss/preset-mini';
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
  mini: {
    preflight: false,
  },
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

  if (!isString(optionsWithDefault.unColor)) {
    optionsWithDefault.unColor = optionsWithDefault.unColor
      ? '--un-color'
      : false;
  }

  const presets = [];
  const transformers = [];

  const presetMap = {
    mini: import('@unocss/preset-mini').then((mod) => mod.presetMini),
    icons: import('@unocss/preset-icons').then((mod) => mod.presetIcons),
    webFonts: import('@unocss/preset-web-fonts').then((mod) => mod.presetWebFonts),
    typography: import('@unocss/preset-typography').then((mod) => mod.presetTypography),
    wind4: import('@unocss/preset-wind4').then((mod) => mod.presetWind4),
    scrollbar: import('./presets/scrollbar').then((mod) => mod.presetScrollbar),
    magicCss: import('./presets/magic-css').then((mod) => mod.presetMagicss),
    animation: import('./presets/animation').then((mod) => mod.presetAnimation),
    fluid: import('./presets/fluid').then((mod) => mod.presetFluid),
    akar: import('./presets/akar').then((mod) => mod.presetAkar),
  };

  const transformerMap = {
    directives: import('unocss').then((mod) => mod.transformerDirectives),
    variantGroup: import('unocss').then((mod) => mod.transformerVariantGroup),
    alias: import('./transformer-alias').then((mod) => mod.transformerAlias),
  };

  for (const [key, preset] of Object.entries(presetMap)) {
    const option = optionsWithDefault[key as keyof typeof presetMap];
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

  for (const [key, transformer] of Object.entries(transformerMap)) {
    const option = optionsWithDefault[key as keyof typeof transformerMap];

    if (option) {
      const trans = await transformer as any;
      transformers.push(
        trans(
          isBoolean(option) ? {} : option,
        ),
      );
    }
  }

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

export function resolveExtend(extend: VinicuncaTheme['extend']) {
  const shortcuts_: CustomStaticShortcuts = [];
  const { animation, keyframes } = extend!;

  // animation
  const { animation: resolvedAnimation, shortcuts } = resolveAnimation(animation ?? {});
  shortcuts_.push(...shortcuts);

  // keyframes
  resolvedAnimation.keyframes = {};
  // TODO: replace for in with for of to remove the no-restricted-syntax eslint rule
  // eslint-disable-next-line no-restricted-syntax
  for (const key in keyframes) {
    resolvedAnimation.keyframes[key] = `{${cssObj2StrSync(keyframes[key])}}`;
  }

  return {
    theme: { animation: resolvedAnimation } as Theme,
    shortcuts: shortcuts_,
  };
}
