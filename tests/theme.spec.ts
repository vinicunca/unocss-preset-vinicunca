import type { Theme } from '@unocss/preset-mini';

import { createGenerator } from 'unocss';
import { describe, expect, it } from 'vitest';

import { presetVinicunca } from '../src';

describe('presetUseful theme', () => {
  it('theme extend configuration', async () => {
    const _uno = createGenerator<Theme>({
      presets: [
        presetVinicunca({
        }),
      ],
    });
    const { css } = await _uno.generate('', { preflights: false });

    expect(_uno.config.theme.animation).toMatchSnapshot();
    expect(css).toMatchInlineSnapshot('""');
  });
});
