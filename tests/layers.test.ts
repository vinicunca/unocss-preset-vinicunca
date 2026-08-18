import { describe, expect, it } from 'vitest';

import { generateUno } from './utils';

function layersFromCss(css: string) {
  return [...css.matchAll(/\/\* layer: (\S+) \*\//g)].map((match) => match[1]);
}

function sortedConfigLayers(layers: Record<string, number>) {
  return Object.entries(layers)
    .sort(([nameA, orderA], [nameB, orderB]) => orderA - orderB || nameA.localeCompare(nameB))
    .map(([name, order]) => `${name}:${order}`);
}

const DEFAULT_CONFIG_LAYERS = [
  'imports:-200',
  'properties:-200',
  'theme:-150',
  'base:-100',
  'preflights:-100',
  'icons:-30',
  'shortcuts:-10',
  'default:0',
];

const EXTENDED_THEME = {
  animation: {
    'wiggle-slow': 'wiggle 1s ease-in-out infinite',
  },
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
    },
  },
};

const LAYER_CLASSES = [
  'p-4',
  'color-red',
  'animate-in',
  'animate-wiggle-slow',
  'fade-in',
  'spin-in',
  'slide-in-top-full',
  'zoom-in',
].join(' ');

describe('css layers', () => {
  describe('config', () => {
    it('registers the inherited layer stack and no custom layers by default', async () => {
      const uno = await generateUno();

      expect(sortedConfigLayers(uno.config.layers)).toEqual(DEFAULT_CONFIG_LAYERS);
      expect(uno.config.layers).not.toHaveProperty('vinicunca');
      expect(uno.config.layers).not.toHaveProperty('animation');
    });
  });

  describe('generated css', () => {
    it('emits only the preflights layer when no utilities are used', async () => {
      const uno = await generateUno();
      const { css } = await uno.generate('');

      expect(layersFromCss(css)).toEqual(['preflights']);
    });

    it('emits every default layer in cascade order', async () => {
      const uno = await generateUno({
        extendedTheme: EXTENDED_THEME,
      });
      const { css } = await uno.generate(LAYER_CLASSES);

      expect(layersFromCss(css)).toEqual([
        'properties',
        'theme',
        'preflights',
        'shortcuts',
        'default',
      ]);
    });

    it('does not emit unused or overwritten layers', async () => {
      const uno = await generateUno({
        typography: true,
        extendedTheme: EXTENDED_THEME,
      });
      const { css } = await uno.generate(`${LAYER_CLASSES} prose`);

      expect(layersFromCss(css)).not.toContain('base');
      expect(layersFromCss(css)).not.toContain('icons');
      expect(layersFromCss(css)).not.toContain('imports');
    });
  });
});
