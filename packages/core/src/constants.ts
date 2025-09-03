import type { AnimationOptions, FluidOptions, PresetVinicuncaOptions, VinicuncaAkarOptions } from './types';

export const DEFAULT_OPTIONS: PresetVinicuncaOptions = {
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

export const DEFAULT_AKAR_OPTIONS: VinicuncaAkarOptions = {
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
  brands: {
    primary: 'violet',
    secondary: 'blue',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    neutral: 'slate',
  },
};

export const DEFAULT_FLUID_OPTIONS: Required<FluidOptions> = {
  maxWidth: 1440,
  minWidth: 375,
  remBase: 16,
  useRemByDefault: false,
  extendMaxWidth: null,
  extendMinWidth: null,
  ranges: null,
  commentHelpers: false,
};

export const DEFAULT_PRESET_OPTIONS: Record<string, any> = {
  fluid: DEFAULT_FLUID_OPTIONS,

  animation: {
    unit: 'ms',
  } as AnimationOptions,

  akar: DEFAULT_AKAR_OPTIONS as VinicuncaAkarOptions,
};
