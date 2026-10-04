---
title: Usage
description: Customize and style scrollbars with ease.
package: unocss-preset
---

## Setup

```ts [unocss.config.ts]
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig } from 'unocss';

export default defineConfig({
  presets: [
    presetVinicunca({
      magicCss: true,
    }),
  ],
});
```

Then you can use the animation classes in your HTML:

```html
<div class="animate-magic">Magic Animation</div>
<div class="animate-puff-in">Puff In</div>
<div class="animate-vanish-out">Vanish Out</div>
```

## Available Animations

- `puff-in` / `puff-out`
- `vanish-in` / `vanish-out`
- `boing-in-up` / `boing-out-down`
- `bomb-left-out` / `bomb-right-out`
- `magic`
- `swap`
- `twister-in-down` / `twister-in-up`
- `foolish-in` / `foolish-out`
- `hole-out`
- `swash-in` / `swash-out`
- `space-in-down` / `space-in-left` / `space-in-right` / `space-in-up`
- `space-out-down` / `space-out-left` / `space-out-right` / `space-out-up`
- `perspective-down` / `perspective-down-return`
- `perspective-left` / `perspective-left-return`
- `perspective-right` / `perspective-right-return`
- `perspective-up` / `perspective-up-return`
- `rotate-down` / `rotate-left` / `rotate-right` / `rotate-up`
- `slide-down` / `slide-down-return` / `slide-left` / `slide-left-return` / `slide-right` / `slide-right-return` / `slide-up` / `slide-up-return`
- `tin-down-in` / `tin-down-out` / `tin-left-in` / `tin-left-out` / `tin-right-in` / `tin-right-out` / `tin-up-in` / `tin-up-out`
- `open-down-left` / `open-down-left-out` / `open-down-left-return`
- `open-down-right` / `open-down-right-out` / `open-down-right-return`
- `open-up-left` / `open-up-left-out` / `open-up-left-return`
- `open-up-right` / `open-up-right-out` / `open-up-right-return`

## Example

Work in progress...
