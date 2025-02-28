import { describe, expect, it } from 'vitest';
import { getCssFromUno } from './utils';

describe('postprocess with unColor', () => {
  const code = 'bg-red text-blue';

  it('base', async () => {
    const { css } = await getCssFromUno({
      options: {
        unColor: true,
        preflights: false,
      },
      code,
    });

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .text-blue{--un-text-opacity:100%;color:color-mix(in oklch, var(--colors-blue-400) var(--un-text-opacity), transparent);}
      .bg-red{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--colors-red-400) var(--un-bg-opacity), transparent);}"
    `);
  });
});
