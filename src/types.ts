import type { IconsOptions } from '@unocss/preset-icons';
import type { ThemeAnimation } from '@unocss/preset-mini';
import type { TypographyOptions } from '@unocss/preset-typography';
import type { WebFontsOptions } from '@unocss/preset-web-fonts';
import type { PresetWind4Options, Theme as ThemeWind4 } from '@unocss/preset-wind4';
import type { TransformerDirectivesOptions } from '@unocss/transformer-directives';
import type { TransformerVariantGroupOptions } from '@unocss/transformer-variant-group';
import type { CSSObject, Preset, SourceCodeTransformer, StaticShortcut } from 'unocss';
import type { FluidOptions } from './presets/fluid/preset/types';
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

export type VinicuncaTheme = ThemeWind4;

export interface PresetVinicuncaOptions {
  /**
   * Enable preflights
   *
   * @default true
   */
  preflights?: boolean;

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
   * extendedTheme: {
   *   animation: {
   *    shape: 'shape 5s linear infinite'
   *   },
   *   // ...
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
   * extendedTheme: {
   *   animation: {
   *    foo: 'foo 1s * 3',
   *    bar: 'bar 1s +',
   *   },
   *   // ...
   * }
   * ```
   *
   */
  extendedTheme?: VinicuncaExtends;

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
  animation?: boolean | AnimationOptions;

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
}

export type ResolvedOptions = Required<PresetVinicuncaOptions> & {
  meta: {
    presets: Array<Preset>;
    shortcuts: CustomStaticShortcuts;
    transformers: Array<SourceCodeTransformer>;
    extendedTheme: {
      animation: ThemeAnimation;
    };
  };
};

export type DeepPartial<T> = { [P in keyof T]: DeepPartial<T[P]> };
