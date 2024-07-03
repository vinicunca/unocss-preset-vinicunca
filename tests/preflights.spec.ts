import { describe, expect, it } from 'vitest';

import { resetPreflight } from '../src/core/preflights/reset';

describe('presetVinicunca preflights', () => {
  it('output reset css', async () => {
    const css = resetPreflight.getCSS({} as any) as string;
    expect(css).toMatchFileSnapshot('./fixtures/reset.css');
  });
});
