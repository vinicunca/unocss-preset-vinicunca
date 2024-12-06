# Fluid Usage

## Uno config

By defining the preset in your `uno.config.ts` file, you can use the fluid classes in your project. In this example we will display the default options where you don't need to implicitly define them.

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca({
      fluidOptions: {
        maxWidth: 1440,
        minWidth: 375,
        extendMaxWidth: null,
        extendMinWidth: null,
        remBase: 16,
        useRemByDefault: false,
        ranges: null,
        commentHelpers: false,
      }
    }),
  ],
});
```

### Options

- `maxWidth`: The maximum width in pixels where the fluid scaling stops growing.
- `minWidth`: The minimum width in pixels where the fluid scaling stops shrinking.
- `extendMaxWidth`: Allows fluid scaling beyond MaxWidth while maintaining the proportion set by MaxWidth and MinWidth.
- `extendMinWidth`: Allows fluid scaling below MinWidth while maintaining the proportion set by MaxWidth and MinWidth.
- `remBase`: The base value for REM unit calculations.
- `useRemByDefault`: When set to true, enables REM units as the default unit of measurement.
- `ranges`: Define named ranges for recurring spacings, creating handy aliases.
- `commentHelpers`: Enable to add helpful comments in the generated CSS, visible in the browser's inspector tool.

#### `useRemByDefault`

By default the fluid classes use `px` as the unit of measurement. If you want to use `rem` as the default unit of measurement, you can set `useRemByDefault` to `true`.

```html
<div class="fluid-w-16-32">...</div>
<!-- Default from 16px to 32px -->
<div class="fluid-w-1-2">...</div>
<!-- remByDefault from 1rem to 2rem -->
```

#### `ranges`

This option allows you to define recurring spacings using predefined names.
For example:

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca({
      fluidOptions: {
        ranges: {
          xs: [5, 15],
          sm: [10, 30],
          md: [15, 40],
          lg: [20, 50],
          xl: [25, 60],
        },
      }
    }),
  ],
});
```

You will be able to use it as aliases or shortcuts. Therefore, `fluid-w-sm` will become `fluid-w-10-30`.

#### `commentHelpers`

This option allows you to add comments to the generated css.
After setting this to true, you will be able to see the generated css in the browser inspector.

```css
.fluid-p-lg {
  padding: clamp(1.25rem, 0.5898rem + 2.8169vw, 3.125rem); /* 20px -> 50px */
}

.fluid-p-32-64 {
  padding: clamp(2rem, 1.2958rem + 3.0047vw, 4rem); /* 32px -> 64px */
}
```
