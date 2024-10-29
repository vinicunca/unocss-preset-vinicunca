# Interactive Documentation

UnoCSS comes up with a Playground and an Interactive Documentation.

This tutorial will guide you how to set it up and take advantage of them.

## Playground

There is a playground that has already been set up for you to play with.

You can access it [here](https://unocss.dev/play/?version=0.62.1&html=DwEwlgbgBAxgNgQwM5ILwCIAWBaJMBOApoQHZQDm%2BYIUADojIdmAC6EC2S2jJb%2B6APgBQUKKEixEKDAhJh2CNszJI41JmBLYWAe1rYAZgFc4cKAYQgNWgAxRZ8xUxBH8isDq0BGG7-tyFJStEAE9sAFY-NgAPFmwADmi4QRFRKABlNXAScnN8HXYoFkxCIr1U4AB6cAhhKprhIA&config=JYWwDg9gTgLgBAbzmKBTAzqmA1YA7YAYwFc9CBDOAXzgDMoIQ4ByAAQDd8jSKB6UiIXToAtCgxYRnAiTLlmAbgBQoSLERwAJqlr5UAYQh5dAcwA0yNJhgBVPBGp0GTZgKHpFSpagAea%2BNq05MQANgE6eobGwCYAFAhKcJYSMOgAXHAA2olJydZ2ELEAlGY5SeLWuDI85PFlubohIQCyENoZzABGEDAAFswWvLxw0HAA7r3kMKjsqFAjYDDARuhwAJ4QxOPkeDD1VCU5ALqlBwpAA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4IgLgTghgdgzgMwPYQLYAkyoDYgFwJTZwCmAvkA).

## Setup

To set up the interactive documentation, follow these steps:

- Copy the below code

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset-vinicunca';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca({
      fillMode: 'both', // or whatever options you want
    }),
  ],
});
```

- Head to the official [Interactive Documentation](https://unocss.dev/interactive/)
- Click the <span class="inline-block align-top i-carbon-settings" /> icon in the top-right corner
- Paste the above code into the editor and click `OK`
