import { describe, expect, it } from 'vitest';

import { resetPreflight } from '../packages/core/src/core/preflights/reset';
import { generateUno } from './utils';

describe('presetVinicunca preflights', () => {
  it('base', async () => {
    const uno = await generateUno();
    const preflights = uno.config.preflights;

    /**
     * There will be 2 preflights, one is for reset and the other is on demand from uno.
     */
    expect(preflights.length).toBe(2);
  });

  it('output reset css', async () => {
    const css = resetPreflight.getCSS({} as any) as string;
    await expect(css).toMatchFileSnapshot('./fixtures/reset.css');
  });
});
