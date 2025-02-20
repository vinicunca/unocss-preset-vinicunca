import { describe } from 'node:test';
import { createGenerator } from '@unocss/core';
import { expect, it } from 'vitest';
import { defineVinicuncaConfig } from '../packages/core/src';

describe('config test', () => {
  it('base config', async () => {
    const uno = await createGenerator(defineVinicuncaConfig());

    const presetNames = uno.config.presets.map((pre) => pre.name);

    expect(presetNames).toEqual([
      '@unocss/preset-icons',
      'unocss-preset-vinicunca',
      '@unocss/preset-wind3',
      'unocss-preset-animation',
      'unocss-preset-fluid',
    ]);

    const { css } = await uno.generate('h-screen grid place-items-center animate-in slide-in-top-full fade-in-0 animate-duration-1000 animate-delay-500 text-8xl');
    expect(css).toMatchSnapshot();
  });

  it('custom config', async () => {
    const uno = await createGenerator(
      defineVinicuncaConfig(
        {
          webFonts: true,
          icons: false,
        },
        {
          presets: [{ name: 'coba-nae' }],
        },
      ),
    );

    const presetNames = uno.config.presets.map((pre) => pre.name);

    expect(presetNames).toEqual(
      [
        'unocss-preset-vinicunca',
        '@unocss/preset-wind3',
        '@unocss/preset-web-fonts',
        'unocss-preset-animation',
        'unocss-preset-fluid',
        'coba-nae',
      ],
    );
  });
});
