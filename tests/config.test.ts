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
      '@unocss/preset-uno',
      'unocss-preset-animation',
    ]);
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
        '@unocss/preset-uno',
        '@unocss/preset-web-fonts',
        'unocss-preset-animation',
        'coba-nae',
      ],
    );
  });
});
