# UnoCSS Preset

Opinionated UnoCSS preset that adds animation classes and fluid utilities.

## Installation

::: code-group

```sh [npm]
$ npm add -D @vinicunca/unocss-preset
```

```sh [pnpm]
$ pnpm add -D @vinicunca/unocss-preset
```

```sh [bun]
$ bun add -D @vinicunca/unocss-preset
```

:::

## Usage

In your UnoCSS config, add this preset to the `presets` option:

```ts
import { defineVinicuncaConfig } from '@vinicunca/unocss-preset';

export default defineVinicuncaConfig();
```

By default this preset already includes the following:

- [Tailwind reset style](https://unocss.dev/guide/style-reset#tailwind). Reset browser's styles
- [Icon preset](https://unocss.dev/presets/icons)

### Options

The `defineVinicuncaConfig` function accepts two arguments. The first argument is the options of the preset and the second is the options of the UnoCSS config.

You can also pass options to the preset. The options accepts these properties:

````ts
interface PresetVinicuncaOptions {
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
   * Enable the default preset
   * Only works when `presets` is not specified
   *
   * @about [@unocss/preset-wind3](https://unocss.dev/presets/wind)
   * @default true
   */
  wind?: boolean | PresetWind3Options;

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
}
````

Please refer to these pages for more information regarding the options:

- [IconsOptions](https://unocss.dev/presets/icons#options)
- [FluidOptions](/fluid/usage)
- [AnimationOptions](/animations/usage)
