import { defineConfig, presetUno } from 'unocss';

import { presetVinicunca } from './packages/core/src';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca(),
  ],
});
