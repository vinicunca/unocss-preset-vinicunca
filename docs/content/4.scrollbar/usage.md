---
title: Usage
description: Customize and style scrollbars with ease.
package: unocss-preset
---

## Usage

```ts [unocss.config.ts]
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetVinicunca({
      scrollbar: true,
    }),
  ],
});
```

```html
<div
  class="scrollbar scrollbar-rounded scrollbar-w-4px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4"
/>
```

it will generate below css：

```css
/* layer: shortcuts */
.scrollbar::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-height);
}
.scrollbar {
  overflow: auto;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  --scrollbar-track: #f5f5f5;
  --scrollbar-thumb: #ddd;
  --scrollbar-width: 8px;
  --scrollbar-height: 8px;
  --scrollbar-track-radius: 4px;
  --scrollbar-thumb-radius: 4px;
}
.scrollbar-rounded::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-thumb-radius);
}
.scrollbar-rounded::-webkit-scrollbar-track {
  border-radius: var(--scrollbar-track-radius);
}
.scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
}
.scrollbar::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track);
}
/* layer: default */
.scrollbar-radius-2 {
  --scrollbar-track-radius: 0.5rem;
  --scrollbar-thumb-radius: 0.5rem;
}
.scrollbar-thumb-radius-4 {
  --scrollbar-thumb-radius: 1rem;
}
.scrollbar-track-radius-4 {
  --scrollbar-track-radius: 1rem;
}
.scrollbar-w-4px {
  --scrollbar-width: 4px;
}
```

## Configurations

|Field|Default|Description|
|--|--|--|
|`scrollbarWidth`|`8px`|default scrollbar width|
|`scrollbarHeight`|`8px`|default scrollbar height|
|`scrollbarTrackRadius`|`4px`|default scrollbar track radius|
|`scrollbarThumbRadius`|`4px`|default scrollbar thumb radius|
|`scrollbarTrackColor`|`#f5f5f5`|default scrollbar track background color|
|`scrollbarThumbColor`|`#ddd`|default scrollbar thumb background color|
|`numberToUnit`|``value => `${value / 4}rem` ``| number to unit
|`varPrefix`|`''`|the css variable prefix of this preset|
|`prefix`|`''`|Apply prefix to all utilities and shortcuts|
|`noCompatible`|`'true'`|if `false`, it use `scrollbar-width` and `scrollbar-color`，work in Firefox, but `scrollbar-h`, `scrollbar-w` and `scrollbar-radius` will not work |

This snippet:

```html
<div class="scrollbar scrollbar-w-4">
```

will use the default options: `scrollbar-w-4` that will generate `--scrollbar-width: 1rem`.

Then iff we set custom `numberToUnit` it will generate `--scrollbar-width: 4px`:

```ts [unocss.config.ts]
export default defineConfig({
  presets: [
    presetVinicunca({
      scrollbar: {
        numberToUnit: (value) => `${value}px`,
      }
    }),
  ],
});
```

## Utilities

### scrollbar

`scrollbar-thin`

```css
.scrollbar-thin {
  scrollbar-width: thin; // if noCompatible is true, remove this line
  --un-scrollbar-width: 8px;
  --un-scrollbar-height: 8px;
}
```

`scrollbar-none`

```css
.scrollbar-none {
  scrollbar-width: none;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}
```

### rounded

`scrollbar-rounded`

Make thumb and track have rounded corners

### color

`scrollbar-(track|thumb)-color-<color>`

set track or thumb background color

### size

`scrollbar-(radius|w|h|track-radius|thumb-radius)-(\d+?)([a-zA-Z]*?)`

|type|description|
|--|--|
|radius|set thumb radius and track radius|
|w|[set scrollbar width](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)|
|h|[set scrollbar height](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)|
|track-radius|set track radius|
|thumb-radius|set thumb radius|

::note
If it ends with number, the preset will use `numberToUnit` to generate length with number as params，Otherwise it will use the captured length information directly
::

for example:
- `scrollbar-w-4` will be `--scrollbar-width: 1rem`
- `scrollbar-w-4px` will be `--scrollbar-width: 4px`
- `scrollbar-w-4rem` will be `--scrollbar-width: 4rem`

::warning
if set `noCompatible` value `false`, it not work
::
