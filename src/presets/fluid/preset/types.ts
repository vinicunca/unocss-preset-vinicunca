import type { FluidUnit } from './constant';

export interface FluidOptions {
  /**
   * Default minimum screen width
   *
   * @default 320
   */
  minContainerWidth?: number;

  /**
   * Default maximum screen width
   *
   * @default 1920
   */
  maxContainerWidth?: number;

  /**
   * Default base unit
   * @default px
   */
  defaultBaseUnit?: keyof typeof FluidUnit;

  /**
   * Prefix for custom properties and utilities
   * @default "fluid-"
   */
  prefix?: string;

  /**
   * Expand CSS variables
   * @default false
   */
  expandCSSVariables?: boolean;

  /**
   * Disables default theme
   * @default false
   */
  disableTheme?: boolean;

  /**
   * User's Utilities. In case of missing utilities you can add a list of your own.
   * @default []
   */
  utilities?: Array<[string, Array<string>]>;

  /**
   * Enable theme shortcuts generation
   * @default true
   */
  themeShortcuts?: boolean;

  /**
   * Enable attributify mode
   * @default false
   */
  attributify?: boolean;

  /**
   * Whether to add comment helpers to the generated CSS.
   * @default false
   */
  commentHelpers?: boolean;
}
