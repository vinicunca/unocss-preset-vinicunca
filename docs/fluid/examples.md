# Examples

You can try to resize the windows and see the values change.

## Gap

Fluid gap between grid items:

```html
<div class="grid grid-cols-3 fluid-gap-32-64">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Example

<FluidGap />

## Margin

Fluid margins:

```html
<div class="fluid-m-20-40">Margin example from 20px to 40px.</div>
```

### Example

<FluidMargin />

## Negative Positive Values

In order to use negative values you need to use a double dash `--` to separate the values.

To add a positive value to a negative value, use the following syntax:

- Both negative: `fluid-ml--<px>--<px>`
- First positive, second negative: `fluid-ml-<px>--<px>`
- First negative, second positive: `fluid-ml--<px>-<px>`
- Both positive: `fluid-ml-<px>-<px>`

### Example with margin left:

```html
<div class="h-30 w-30 fluid-ml-50--25" />
<div class="h-30 w-30 fluid-ml--50-25" />
```

<FluidNegativePositive />

## Padding

Fluid paddings:

```html
<div class="fluid-p-32-64">Padding example from 32px to 64px.</div>
```

### Example

<FluidPadding />

## Ranges

Using predefined fluid ranges for padding:

```html
<!-- Fluid padding range from 20px to 50px -->
<div class="fluid-p-lg">Padding example with a small range.</div>
```

### Example

<FluidRanges />

## Typography

Fluid font-size:

```html
<p class="fluid-text-32-64">
  This is an example of a text with a font size scaling from 32px to 64px.
</p>
```

### Example

<FluidTypography />

## Width & Height

Fluid width & height:

```html
<div class="fluid-w-100-200 fluid-h-100-200">100px to 200px.</div>
```

### Example

<FluidWidthHeight />
