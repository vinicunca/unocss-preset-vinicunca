import type { IconsOptions } from '@unocss/preset-icons';
import type { ThemeAnimation } from '@unocss/preset-mini';
import type { PresetUnoOptions } from '@unocss/preset-uno';
import type { WebFontsOptions } from '@unocss/preset-web-fonts';
import type { Preset } from 'unocss';

// eslint-disable-next-line ts/consistent-type-definitions
export type VinicuncaOptions = {
  /**
   * Enable animations
   *
   * @default true
   */
  enableAnimations: boolean;

  /**
   * Enable reset styles
   *
   * @default true
   */
  enableResetStyles: boolean;

  /**
   * Enable icons preset and the options of it
   * @default true
   */
  icons: IconsOptions | boolean;

  /**
   * Enable the default preset
   * @default true
   */
  uno: PresetUnoOptions | boolean;

  /**
   * Enable webFonts preset and the options of it
   * @default false
   */
  webFonts: WebFontsOptions | boolean;

  fluidOptions: FluidOptions;
};

export interface FluidOptions {
  /**
   * Min width in pixels where the fluid layout starts.
   * @default 375
   */
  minWidth: number;
  /**
   * Min width in pixels where the fluid layout starts keeping the proportions of the minWidth.
   */
  extendMinWidth: null | number;
  /**
   * Max width in pixels where the fluid layout ends.
   * @default 1440
   */
  maxWidth: number;
  /**
   * Max width in pixels where the fluid layout ends keeping the proportions of the maxWidth.
   */
  extendMaxWidth: null | number;
  /**
   * Base font size in pixels.
   * @default 16
   */
  remBase: number;
  /**
   * Whether to use rem by default.
   * @default false
   */
  useRemByDefault: boolean;
  /**
   * A preset with predefined ranges of fluid spacing
   * @default undefined;
   */
  ranges: Ranges | null;

  /**
   * Whether to add comment helpers to the generated CSS.
   * @default false
   */
  commentHelpers: boolean;
}

interface Ranges {
  [key: string]: [number, number];
}

export type ResolvedOptions = {
  animationTheme: ThemeAnimation;
  presets: Array<Preset>;
} & VinicuncaOptions;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
