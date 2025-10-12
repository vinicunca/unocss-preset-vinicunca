import type { CSSObject, Preset, SourceCodeTransformer, StaticShortcut } from '@unocss/core';
import type { IconsOptions } from '@unocss/preset-icons';
import type { TypographyOptions } from '@unocss/preset-typography';
import type { WebFontsOptions } from '@unocss/preset-web-fonts';
import type { PresetWind3Options, Theme as ThemeWind3 } from '@unocss/preset-wind3';
import type { PresetWind4Options, Theme as ThemeWind4 } from '@unocss/preset-wind4';
import type { TransformerDirectivesOptions } from '@unocss/transformer-directives';
import type { TransformerVariantGroupOptions } from '@unocss/transformer-variant-group';
import type { UnoPresetScrollbarOption } from './presets/scrollbar';
import type { TransformerAliasOptions } from './transformer-alias';

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

type CustomStaticShortcut = [Array<string> | string, StaticShortcut[1], StaticShortcut[2]] | [Array<string> | string, StaticShortcut[1]];

export type CustomStaticShortcuts = Array<CustomStaticShortcut>;

type CssKeyframesRule = Record<string, CSSObject>;

export interface VinicuncaExtends extends Exclude<VinicuncaTheme, 'extend'> {
  keyframes?: Record<string, CssKeyframesRule>;

  /**
   * Different from the original, you can use the following formats:
   *
   * ```ts
   * { name : 'name duration timing-function iteration-count' }
   * ```
   */
  animation?: Record<string, string>;
}

export interface VinicuncaTheme extends Omit<ThemeWind3, 'container' | 'containers'>, ThemeWind4 {
  extend?: VinicuncaExtends;
}

export interface VinicuncaAkarOptions {
  keyframes?: VinicuncaExtends['keyframes'];
  animation?: VinicuncaExtends['animation'];
  brands?: ThemeWind4['colors'];
  enableDrawer?: boolean;
}

interface PreflightOptions {
  /**
   * Enable reset styles
   *
   * @default true
   */
  reset: boolean;
}

export interface PresetVinicuncaOptions {
  /**
   * Enable preflights
   *
   * @default {
   *  reset: true
   * }
   */
  preflights?: boolean | PreflightOptions;

  /**
   * Enable default shortcuts
   *
   * @default true
   */
  enableDefaultShortcuts?: boolean;

  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string;

  /**
   * Improve theme to be more useful, and align with Tailwind theme configuration
   *
   * - Add `animation` to theme, Expand theme animation name usage
   *
   * [ name, duration, timing-function, iteration-count ]
   *
   * @example
   *
   * ```ts
   * theme: {
   *   extend: {
   *     animation: {
   *      shape: 'shape 5s linear infinite'
   *     },
   *     // ...
   *   }
   * }
   * ```
   * You can choose to use special symbols as placeholders, to indicate whether to inject this property into the uno theme
   *
   * - `*` Abandon injection
   * - `+` Injection, but the value is empty
   *
   * @example
   *
   * ```ts
   * theme: {
   *   extend: {
   *     animation: {
   *      foo: 'foo 1s * 3',
   *      bar: 'bar 1s +',
   *     },
   *     // ...
   *   }
   * }
   * ```
   *
   */
  theme?: VinicuncaTheme;

  /**
   * Enable the default preset for preset-wind3
   * Only works when `presets` is not specified
   *
   * @about [@unocss/preset-wind3](https://unocss.dev/presets/wind3)
   * @default false
   */
  wind3?: boolean | PresetWind3Options;

  /**
   * Enable the wind4 preset
   * Only works when `presets` is not specified
   *
   * @default preflights: {
      reset: false,
    }
   */
  wind4?: boolean | PresetWind4Options;

  /**
   * Enable icons preset and the options of it
   * Only works when `presets` is not specified
   *
   * @about [@unocss/preset-icons](https://unocss.dev/presets/icons)
   * @default false
   */
  icons?: boolean | IconsOptions;

  /**
   * Enable webFonts preset and the options of it
   * Only works when `presets` is not specified
   *
   * **Note:** Default by [`fontsource`](https://fontsource.org/) provider
   *
   * @about [@unocss/preset-web-fonts](https://unocss.dev/presets/web-fonts)
   * @default false
   */
  webFonts?: boolean | WebFontsOptions;

  /**
   * Enable typography preset and the options of it
   * Only works when `presets` is not specified
   *
   * @about [@unocss/preset-typography](https://unocss.dev/presets/typography)
   * @default false
   */
  typography?: boolean | TypographyOptions;

  /**
   * Enable scrollbar preset and the options of it
   * Only works when `presets` is not specified
   *
   * @about [unocss-preset-scrollbar](https://github.com/action-hong/unocss-preset-scrollbar)
   * @default false
   */
  scrollbar?: boolean | UnoPresetScrollbarOption;

  /**
   * Enable magicss preset
   *
   * @about [Magic Animate](https://github.com/miniMAC/magic)
   * @default false
   */
  magicCss?: boolean;

  /**
   * Enable animation preset
   *
   * @about inspired by [tailwin-animate](https://github.com/jamiebuilds/tailwindcss-animate)
   * @default true
   */
  animation?: AnimationOptions | boolean;

  /**
   * Enable fluid preset
   *
   * @default true
   */
  fluid?: boolean | DeepPartial<FluidOptions>;

  /**
   * Enable directives transformer and the options of it
   *
   * @about [@unocss/transformer-directives](https://unocss.dev/transformers/directives)
   * @default true
   */
  directives?: boolean | TransformerDirectivesOptions;

  /**
   * Enables the variant group feature of Windi CSS for UnoCSS.
   *
   * @about [@unocss/transformer-variant-group](https://unocss.dev/transformers/variant-group)
   * @default true
   */
  variantGroup?: boolean | TransformerVariantGroupOptions;

  /**
   * Enable transform alias transformer and the options of it
   */
  alias?: boolean | TransformerAliasOptions;

  /**
   * Enable akar preset
   */
  akar?: boolean | VinicuncaAkarOptions;
}

export type ResolvedOptions = Required<PresetVinicuncaOptions> & {
  meta: {
    presets: Array<Preset>;
    shortcuts: CustomStaticShortcuts;
    transformers: Array<SourceCodeTransformer>;
    safelist: Array<string>;
  };
};

export interface FluidOptions {
  /**
   * Min width in pixels where the fluid layout starts.
   * @default 375
   */
  minWidth?: number;
  /**
   * Min width in pixels where the fluid layout starts keeping the proportions of the minWidth.
   */
  extendMinWidth?: null | number;
  /**
   * Max width in pixels where the fluid layout ends.
   * @default 1440
   */
  maxWidth?: number;
  /**
   * Max width in pixels where the fluid layout ends keeping the proportions of the maxWidth.
   */
  extendMaxWidth?: null | number;
  /**
   * Base font size in pixels.
   * @default 16
   */
  remBase?: number;
  /**
   * Whether to use rem by default.
   * @default false
   */
  useRemByDefault?: boolean;
  /**
   * A preset with predefined ranges of fluid spacing
   * @default undefined;
   */
  ranges?: null | {
    [key: string]: [number, number];
  };

  /**
   * Whether to add comment helpers to the generated CSS.
   * @default false
   */
  commentHelpers?: boolean;
}

export type RequiredFluidOptions = Required<FluidOptions>;

export type DeepPartial<T> = { [P in keyof T]: DeepPartial<T[P]> };
