import { describe, expect, it } from 'vitest';

import { resetPreflight } from '../packages/core/src/core/preflights/reset';
import { generateUno } from './utils';

describe('presetVinicunca preflights', () => {
  it('base', async () => {
    const uno = await generateUno();
    const preflights = uno.config.preflights;

    /**
     * There will be 2 preflights:
     * - reset browser default styles
     * - on demand theme from wind4 preset
     */
    expect(preflights.length).toBe(2);

    const { css } = await uno.generate('');

    await expect(css).toMatchFileSnapshot('./fixtures/preflights.css');
  });

  it('output reset css', async () => {
    const css = resetPreflight.getCSS({} as any) as string;
    await expect(css).toMatchFileSnapshot('./fixtures/reset.css');
  });

  it('include akar preset', async () => {
    const uno = await generateUno({
      akar: true,
    });

    const preflights = uno.config.preflights;

    expect(preflights.length).toBe(3);

    const { css } = await uno.generate('');

    await expect(css).toMatchFileSnapshot('./fixtures/preflights-akar.css');
  });
});
