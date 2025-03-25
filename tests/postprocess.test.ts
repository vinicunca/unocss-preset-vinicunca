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
      "/* layer: theme */
      :root, :host { --colors-red: oklch(0.704 0.191 22.216); --colors-blue: oklch(0.707 0.165 254.624); }
      /* layer: default */
      @property --un-text-opacity {syntax: "<percentage>";inherits: false;initial-value: 100%;}
      .text-blue{color:color-mix(in oklch, var(--colors-blue) var(--un-text-opacity), transparent);}
      @property --un-bg-opacity {syntax: "<percentage>";inherits: false;initial-value: 100%;}
      .bg-red{background-color:color-mix(in oklch, var(--colors-red) var(--un-bg-opacity), transparent);}"
    `);
  });
});
