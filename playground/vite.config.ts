import Vue from '@vitejs/plugin-vue';
import uno from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    uno({
      configFile: '../uno.config.ts',
    }),
    Vue(),
  ],

  base: '/',
});
