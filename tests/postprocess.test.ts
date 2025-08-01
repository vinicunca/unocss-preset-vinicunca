import { describe, expect, it } from 'vitest';
import { getCssFromUno } from './utils';

describe('postprocess with unColor', () => {
  const code = 'bg-red text-blue bg-red/50';

  it('base', async () => {
    const { css } = await getCssFromUno({
      options: {
        unColor: true,
        preflights: false,
      },
      code,
    });

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-bg-opacity:100%;--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      @property --un-bg-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-red-DEFAULT: oklch(70.4% 0.191 22.216); --colors-blue-DEFAULT: oklch(70.7% 0.165 254.624); }
      /* layer: default */
      .text-blue{color:color-mix(in srgb, var(--colors-blue-DEFAULT) var(--un-text-opacity), transparent);}
      .bg-red{background-color:color-mix(in srgb, var(--colors-red-DEFAULT) var(--un-bg-opacity), transparent);}
      .bg-red\\/50{background-color:color-mix(in srgb, var(--colors-red-DEFAULT) 50%, transparent);}
      @supports (color: color-mix(in lab, red, red)){
      .text-blue{color:color-mix(in oklab, var(--colors-blue-DEFAULT) var(--un-text-opacity), transparent);}
      .bg-red{background-color:color-mix(in oklab, var(--colors-red-DEFAULT) var(--un-bg-opacity), transparent);}
      .bg-red\\/50{background-color:color-mix(in oklab, var(--colors-red-DEFAULT) 50%, transparent);}
      }"
    `);
  });
});
