import { defineConfig } from 'unocss';

import { presetVinicunca } from './packages/core/src';

export default defineConfig({
  presets: [
    presetVinicunca(),
  ],
});
