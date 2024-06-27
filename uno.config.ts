import { defineConfig, presetUno } from 'unocss';

import { presetAnimation } from './src';

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimation(),
  ],
});
