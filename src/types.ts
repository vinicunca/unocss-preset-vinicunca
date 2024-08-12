import type { IconsOptions } from '@unocss/preset-icons';
import type { PresetUnoOptions } from '@unocss/preset-uno';
import type { Preset } from 'unocss';

// eslint-disable-next-line ts/consistent-type-definitions
export type PresetVinicuncaOptions = {
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
  icons: boolean | IconsOptions;

  /**
   * Enable the default preset
   * @default true
   */
  uno: boolean | PresetUnoOptions;

  animationOptions: AnimationOptions;

  fluidOptions: FluidOptions;
};

export interface AnimationOptions {
  /**
   * The unit of time options
   *
   * @default 'ms'
   */
  unit?: 'ms' | 's';

  /**
   * Default delay of animations
   */
  delay?: number;

  /**
   * Default direction of animations
   */
  direction?: 'alternate' | 'alternate-reverse' | 'normal' | 'reverse';

  /**
   * Default duration of animations
   */
  duration?: number;

  /**
   * Default fill mode of animations
   */
  fillMode?: 'backwards' | 'both' | 'forwards' | 'none';

  /**
   * Default iteration count of animations
   */
  iterationCount?: 'infinite' | number;

  /**
   * Default play state of animations
   */
  playState?: 'paused' | 'running';

  /**
   * Default timing function of animations
   */
  timingFunction?: 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'linear' | string;
}

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
  ranges: null | Ranges;

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
  presets: Array<Preset>;
} & PresetVinicuncaOptions;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
