import { presetVinicunca } from '@vinicunca/unocss-preset-vinicunca';
import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetVinicunca({
      icons: {
        scale: 1.5,
        warn: true,
      },

      fluidOptions: {
        ranges: {
          'xs': [5, 15],
          'sm': [10, 30],
          'md': [15, 40],
          'lg': [20, 50],
          'xl': [25, 60],
          '2xl': [30, 70],
          '3xl': [35, 80],
          '4xl': [40, 90],
        },
      },
    }),
  ],

  blocklist: [
    'fluid-text',
    'fluid-m',
    'fluid-mt',
    'fluid-mr',
    'fluid-mb',
    'fluid-ml',
    'fluid-mx',
    'fluid-my',
    'fluid-p',
    'fluid-pt',
    'fluid-pr',
    'fluid-pb',
    'fluid-pl',
    'fluid-px',
    'fluid-py',
    'fluid-w',
    'fluid-min-w',
    'fluid-max-w',
    'fluid-h',
    'fluid-min-h',
    'fluid-max-h',
    'fluid-gap',
    'fluid-gap-x',
    'fluid-gap-y',
    'fluid-intent',
    'fluid-leading',
    'fluid-scroll-m',
    'fluid-scroll-mt',
    'fluid-scroll-mr',
    'fluid-scroll-mb',
    'fluid-scroll-ml',
    'fluid-scroll-mx',
    'fluid-scroll-my',
    'fluid-scroll-p',
    'fluid-scroll-pt',
    'fluid-scroll-pr',
    'fluid-scroll-pb',
    'fluid-scroll-pl',
    'fluid-scroll-px',
    'fluid-scroll-py',
    'fluid-top',
    'fluid-right',
    'fluid-bottom',
    'fluid-left',
    'fluid-inset',
    'fluid-inset-x',
    'fluid-inset-y',
  ],

  shortcuts: {
    'border-base': 'border-$vp-c-divider',
  },

  theme: {
    fontFamily: {
      mono: 'var(--vp-font-family-mono)',
    },
  },

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});