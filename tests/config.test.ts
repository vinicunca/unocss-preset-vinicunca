import { describe } from 'node:test';
import { createGenerator } from '@unocss/core';
import { expect, it } from 'vitest';
import { presetVinicunca } from '../src';

describe('config test', () => {
  it('base config', async () => {
    const uno = await createGenerator({
      presets: [
        presetVinicunca(),
      ],
    });

    const presetNames = uno.config.presets.map((pre) => pre.name);

    expect(presetNames).toEqual([
      '@unocss/preset-icons',
      'unocss-preset-vinicunca',
      '@unocss/preset-wind4',
      'unocss-preset-fluid',
      'unocss-preset-animation',
    ]);

    const { css } = await uno.generate('p-2 h-screen grid place-items-center animate-in slide-in-top-full fade-in-0 animate-duration-1000 animate-delay-500 text-8xl');
    expect(css).toMatchSnapshot();
  });

  it('custom config', async () => {
    const uno = await createGenerator({
      presets: [
        presetVinicunca({
          webFonts: true,
          icons: false,
        }),
        { name: 'coba-nae' },
      ],
    });

    const presetNames = uno.config.presets.map((pre) => pre.name);

    expect(presetNames).toEqual(
      [
        'unocss-preset-vinicunca',
        '@unocss/preset-wind4',
        'unocss-preset-fluid',
        'unocss-preset-animation',
        '@unocss/preset-web-fonts',
        'coba-nae',
      ],
    );
  });

  it('using wind3', async () => {
    const uno = await createGenerator({
      presets: [
        presetVinicunca({
          wind3: true,
          wind4: false,
        }),
      ],
    });

    const presetNames = uno.config.presets.map((pre) => pre.name);

    expect(presetNames).toEqual(
      [
        '@unocss/preset-icons',
        'unocss-preset-vinicunca',
        '@unocss/preset-wind3',
        'unocss-preset-fluid',
        'unocss-preset-animation',
      ],
    );

    const { css } = await uno.generate('mt-3');
    expect(css).toMatchSnapshot();
  });
});
