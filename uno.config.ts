import { defineConfig, presetUno } from 'unocss';

import { presetVinicunca } from './src';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca(),
  ],
});
