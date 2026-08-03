import type { FluidOptions } from './types';

// The value of the `unit` CSS variable is a string. e.g. f-mt-rem
export const FluidUnit = {
  px: 'px',
  rem: 'rem',
  em: 'em',
  vw: 'vw',
  vh: 'vh',
  vmin: 'vmin',
  vmax: 'vmax',
  fr: 'fr',
  percent: '%',
} as const;

export const DEFAULT_FLUID_OPTIONS: Required<FluidOptions> = {
  minContainerWidth: 320,
  maxContainerWidth: 1920,
  defaultBaseUnit: FluidUnit.px,
  prefix: 'fluid-',
  expandCSSVariables: false,
  disableTheme: false,
  utilities: [],
  attributify: false,
  themeShortcuts: true,
  commentHelpers: false,
};

// Default value for CSS vars
export const DEFAULT_CSS_VAR_VALUE = 16 as const;
