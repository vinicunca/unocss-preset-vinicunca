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

const defaultAkarAnimations = {
  keyframes: {
    'drawer-fade-in': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    'drawer-fade-out': {
      to: { opacity: 0 },
    },
    'drawer-slide-from-bottom': {
      from: { transform: 'translate3d(0, var(--akar-drawer-initial-transform, 100%), 0)' },
      to: { transform: 'translate3d(0, 0, 0)' },
    },
    'drawer-slide-to-bottom': {
      to: { transform: 'translate3d(0, var(--akar-drawer-initial-transform, 100%), 0)' },
    },
    'drawer-slide-from-top': {
      from: { transform: 'translate3d(0, calc(var(--akar-drawer-initial-transform, 100%) * -1), 0)' },
      to: { transform: 'translate3d(0, 0, 0)' },
    },
    'drawer-slide-to-top': {
      to: { transform: 'translate3d(0, calc(var(--akar-drawer-initial-transform, 100%) * -1), 0)' },
    },
    'drawer-slide-from-left': {
      from: { transform: 'translate3d(calc(var(--akar-drawer-initial-transform, 100%) * -1), 0, 0)' },
      to: { transform: 'translate3d(0, 0, 0)' },
    },
    'drawer-slide-to-left': {
      to: { transform: 'translate3d(calc(var(--akar-drawer-initial-transform, 100%) * -1), 0, 0)' },
    },
    'drawer-slide-from-right': {
      from: { transform: 'translate3d(var(--akar-drawer-initial-transform, 100%), 0, 0)' },
      to: { transform: 'translate3d(0, 0, 0)' },
    },
    'drawer-slide-to-right': {
      to: { transform: 'translate3d(var(--akar-drawer-initial-transform, 100%), 0, 0)' },
    },
    'accordion-down': {
      from: { height: 0 },
      to: { height: 'var(--akar-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--akar-accordion-content-height)' },
      to: { height: 0 },
    },
    'collapsible-down': {
      from: { height: 0 },
      to: { height: 'var(--akar-collapsible-content-height)' },
    },
    'collapsible-up': {
      from: { height: 'var(--akar-collapsible-content-height)' },
      to: { height: 0 },
    },
  },
  animation: {
    'collapsible-down': 'collapsible-down 0.2s ease-in-out',
    'collapsible-up': 'collapsible-up 0.2s ease-in-out',
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },
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
  const {
    theme: themeExtend,
    shortcuts,
    safelist,
  } = resolveExtend(optionsWithDefault);

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
      safelist,
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

export function resolveExtend(options: PresetVinicuncaOptions) {
  const shortcuts_: CustomStaticShortcuts = [];
  let {
    animation = {},
    keyframes = {},
  } = options.theme?.extend ?? {};
  const safelist: Array<string> = [];

  const enableAkar = Boolean(options.akar);

  /**
   * If akar is enabled we want to safelist all default animations
   */
  if (enableAkar) {
    animation = mergeDeep(
      animation,
      defaultAkarAnimations.animation,
    );

    keyframes = mergeDeep(
      keyframes,
      defaultAkarAnimations.keyframes,
    );

    const animationKeys = Object.keys(defaultAkarAnimations.animation ?? {});
    const keyframesKeys = Object.keys(defaultAkarAnimations.keyframes ?? {});

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
