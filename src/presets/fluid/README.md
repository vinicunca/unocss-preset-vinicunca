UnoCSS preset for fluid sizing with UnoCSS philosophy in mind. A modern approach to `@media` queries.

`f-pt-min-32 f-pt-max-64` will be `32px` in mobiles and `64px` in desktops with a smooth transition for screens with width between 320px and 1920px.

```html
<!-- Using default theme that comes with the preset -->
<div class="f-p-2xs f-text-xl" />

<!-- Using utilities -->
<div class="f-p f-p-min-32 f-p-max-48" />
<div class="f-text f-p-text-8 f-p-text-12" />
```

### Utilities

This preset provides a set of utilities for all CSS properties that accept a spacing value like `padding`, `margin`, `gap`, `width` and `font-size`. You need to attach the prefix `f-` to the utility name in order to use it.

#### `f-${utility}-${minValue}/${maxValue}`

Sets the minimum and maximum value for the utility:

- `f-pt-32/64` will set the `padding-top` to `32px` when the screen width is smaller than `64px`.

##### `f-${utility}`, `f-${utility}-min-${minValue}` and `f-${utility}-max-${maxValue}`

Same as above but more explicit.

```html
<div class="f-pt f-pt-min-32 f-pt-max-64"></div>
```

- `f-pt-min-32` will set the `padding-top` to `32px`.
- `f-pt-max-64` will set the `padding-top` to `64px`.

> If using `Attributify preset` remember to add the self referencing char(`~`) to the utility attribute like `f-pt="~ min-32 max-64"`. Same as `flex` or `grid` attributes.

#### `f-${utility}-min-container`

Sets the minimum screen width for the utility. By default it is `320px`. You can change it with the option `minContainerWidth` in the preset.

#### `f-${utility}-max-container`

Sets the maximum screen width for the utility. By default it is `1920px`. You can change it with the option `maxContainerWidth` in the preset.

#### `f-${utility}-container`

Instead of using `100vw` to compute the value, it uses `100cqw` which is the width of the closest container.

#### `f-base-${baseValue}`

Sets the base unit for the utility which by default is `1px`. You can also change the default base unit by passing the option `defaultBaseUnit` to the preset. See [CSS Units](./src/index.ts) for more information.

#### CSS Variables

You can use `$` to store fluid size calculations in CSS variables. When the variable name matches an existing utility (like `$px`, `$mt`, `$text`), it automatically applies to the corresponding properties.

```html
<!-- Automatically applies to padding-left and padding-right -->
<div f="$px-24/32"></div>

<!-- Automatically applies to margin-top -->
<div class="f-$mt-16/24"></div>

<!-- Custom variable (no auto-apply) -->
<div f="$myvar-8/12"></div>
```

Use custom variables in your own CSS: `--other-value: calc(var(--f-myvar) * 1.5);`

> [!WARNING]
> Variable names can only contain letters (no numbers or dashes).
> ✅ `f-$myvar` is correct.
> ❌ `f-$my-var` is not.

### Theme

By default the preset includes a theme with predefined values for spacing and font sizes that I have been using in my projects and in general is what you will need. This will save you time as you can do `f-p-2xs` instead of `f-p f-p-min-8 f-p-max-12` or `f-mt-lg` instead of `f-mt-min-48 f-mt-max-72`.

You can check the theme in [theme.ts](./src/theme.ts).

You can disable the theme by passing the option `disableTheme` to the preset and adding your own shortcuts.

### Options

Check the interface [`FluidSizingOptions`](./src/index.ts) for the full list of options.

## Aknowledgements

- [UnoCSS Fluid Preset](https://renatomoor.github.io/unocss-preset-fluid/). Uses JS to compute the value like `f-pt-32-64` which results in a limited API.
- [UnoCSS preset quickstart template.](https://github.com/unocss-community/unocss-preset-starter)
