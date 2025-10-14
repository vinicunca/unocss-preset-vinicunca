import type {
  AnimationOptions,
  PresetVinicuncaOptions,
  RequiredFluidOptions,
  VinicuncaAkarOptions,
} from './types';

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

    'toast-collapsed-closed': {
      from: { transform: 'var(--transform)' },
      to: { transform: 'translateY(calc((var(--before) - var(--height)) * var(--gap))) scale(var(--scale))' },
    },
    'toast-closed': {
      from: { transform: 'var(--transform)' },
      to: { transform: 'translateY(calc((var(--offset) - var(--height)) * var(--translate-factor)))' },
    },

    'carousel': {
      '0%, 100%': { width: '50%' },
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(200%)' },
    },

    'carousel-rtl': {
      '0%, 100%': { width: '50%' },
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(-200%)' },
    },

    'carousel-vertical': {
      '0%, 100%': { height: '50%' },
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(200%)' },
    },

    'carousel-inverse': {
      '0%, 100%': { width: '50%' },
      '0%': { transform: 'translateX(200%)' },
      '100%': { transform: 'translateX(-100%)' },
    },

    'carousel-inverse-rtl': {
      '0%, 100%': { width: '50%' },
      '0%': { transform: 'translateX(-200%)' },
      '100%': { transform: 'translateX(100%)' },
    },

    'carousel-inverse-vertical': {
      '0%, 100%': { height: '50%' },
      '0%': { transform: 'translateY(200%)' },
      '100%': { transform: 'translateY(-100%)' },
    },

    'swing': {
      '0%, 100%': {
        width: '50%',
        transform: 'translateX(-25%)',
      },
      '50%': { transform: 'translateX(125%)' },
    },

    'swing-vertical': {
      '0%, 100%': {
        height: '50%',
        transform: 'translateY(-25%)',
      },
      '50%': { transform: 'translateY(125%)' },
    },

    'elastic': {
      /* Firefox doesn't do "margin: 0 auto", we have to play with margin-left */
      '0%, 100%': {
        'width': '50%',
        'margin-left': '25%',
      },

      '50%': {
        'width': '90%',
        'margin-left': '5%',
      },
    },

    'elastic-vertical': {
      '0%, 100%': {
        'height': '50%',
        'margin-top': '25%',
      },

      '50%': {
        'height': '90%',
        'margin-top': '5%',
      },
    },
  },

  animation: {
    'collapsible-down': 'collapsible-down 0.2s ease-in-out',
    'collapsible-up': 'collapsible-up 0.2s ease-in-out',
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',

    'toast-collapsed-closed': 'toast-collapsed-closed 200ms ease-in-out',
    'toast-closed': 'toast-closed 200ms ease-in-out',

    'carousel': 'carousel 2s ease-in-out infinite',
    'carousel-rtl': 'carousel-rtl 2s ease-in-out infinite',
    'carousel-vertical': 'carousel-vertical 2s ease-in-out infinite',
    'carousel-inverse': 'carousel-inverse 2s ease-in-out infinite',
    'carousel-inverse-rtl': 'carousel-inverse-rtl 2s ease-in-out infinite',
    'carousel-inverse-vertical': 'carousel-inverse-vertical 2s ease-in-out infinite',
    'swing': 'swing 2s ease-in-out infinite',
    'swing-vertical': 'swing-vertical 2s ease-in-out infinite',
    'elastic': 'elastic 2s ease-in-out infinite',
    'elastic-vertical': 'elastic-vertical 2s ease-in-out infinite',
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

  pohonThemes: true,

  enableDrawer: true,

  enableDynamicBrands: false,
};

export const DEFAULT_FLUID_OPTIONS: RequiredFluidOptions = {
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
