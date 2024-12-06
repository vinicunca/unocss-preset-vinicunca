import { describe, expect, it } from 'vitest';
import { generateUno } from './utils';

describe('postprocess with unColor', () => {
  const code = 'bg-red text-blue';

  it('base', async () => {
    const uno = await generateUno({
      unColor: true,
      preflights: false,
    });

    const { css } = await uno.generate(code);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-red{--un-color:248 113 113;--un-bg-opacity:1;background-color:rgb(var(--un-color) / var(--un-bg-opacity));}
      .text-blue{--un-color:96 165 250;--un-text-opacity:1;color:rgb(var(--un-color) / var(--un-text-opacity));}"
    `);
  });
});
