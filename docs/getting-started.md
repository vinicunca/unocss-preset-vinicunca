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
import { presetVinicunca } from '@vinicunca/unocss-preset'; // [!code ++]
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca(), // [!code ++]
  ],
});
```

By default this preset already includes the following:

- [Tailwind reset style](https://unocss.dev/guide/style-reset#tailwind). Reset browser's styles
- [Icon preset](https://unocss.dev/presets/icons)

### Options

You can also pass options to the preset. The options accepts these properties:

```ts
interface VinicuncaOptions {
  /**
   * Enable reset styles
   * @default true
   */
  enableResetStyles: boolean;

  /**
   * Enable icons preset and the options of it
   * @default true
   */
  icons: boolean | IconsOptions;

  /**
   * Options for animations
   */
  animationOptions: AnimationOptions;

  /**
   * Options for fluid rules
   */
  fluidOptions: FluidOptions;
}
```

Please refer to these pages for more information regarding the options:

- [IconsOptions](https://unocss.dev/presets/icons#options)
- [FluidOptions](/fluid/usage)
- [AnimationOptions](/animations/usage)
