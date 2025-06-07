import { createGenerator } from '@unocss/core';
import { describe, expect, it } from 'vitest';
import { presetVinicunca } from '../../packages/core/src';
import { generateUno } from './test.utils';

describe('preset-mini', async () => {
  async function getCss(inputs: Array<string>) {
    const uno = await createGenerator({
      presets: [
        presetVinicunca({
          preflights: {
            reset: false,
          },
          mini: false,
          wind4: {
            preflights: {
              reset: false,
            },
          },
        }),
      ],
      outputToCssLayers: true,
    });

    return generateUno(uno, inputs);
  }

  it('sr-only', async () => {
    expect(await getCss(['sr-only'])).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: default */
      @layer default {
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      }
      "
    `);
  });

  it('not-sr-only', async () => {
    expect(await getCss(['not-sr-only'])).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: default */
      @layer default {
        .not-sr-only {
          position: static;
          width: auto;
          height: auto;
          padding: 0;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      }
      "
    `);
  });

  it('pointer-events', async () => {
    expect(await getCss([
      'pointer-events-none',
      'pointer-events-auto',
    ])).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: default */
      @layer default {
        .pointer-events-auto {
          pointer-events: auto;
        }
        .pointer-events-none {
          pointer-events: none;
        }
      }
      "
    `);
  });

  it('visibility', async () => {
    expect(await getCss([
      'visible',
      'invisible',
      'collapse',
    ])).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: default */
      @layer default {
        .visible {
          visibility: visible;
        }
        .invisible {
          visibility: hidden;
        }
      }
      "
    `);
  });

  it('position', async () => {
    expect(await getCss([
      'static',
      'fixed',
      'absolute',
      'relative',
      'sticky',
    ])).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: default */
      @layer default {
        .absolute {
          position: absolute;
        }
        .fixed {
          position: fixed;
        }
        .relative {
          position: relative;
        }
        .sticky {
          position: sticky;
        }
        .static {
          position: static;
        }
      }
      "
    `);
  });

  it('inset', async () => {
    expect(await getCss(
      [
        'inset-auto',
        'inset-shadow-sm',
        'inset-shadowned',
        '-inset-full',
        'inset-full',
        'inset-3/4',
        'inset-4',
        '-inset-4',
        'inset-[4px]',
      ],
    )).toMatchInlineSnapshot(`
      "@layer properties, theme, default;
      /* layer: properties */
      @layer properties {
        @property --un-inset-ring-color {
          syntax: "*";
          inherits: false;
        }
        @property --un-inset-ring-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --un-inset-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --un-inset-shadow-color {
          syntax: "*";
          inherits: false;
        }
        @property --un-ring-color {
          syntax: "*";
          inherits: false;
        }
        @property --un-ring-inset {
          syntax: "*";
          inherits: false;
        }
        @property --un-ring-offset-color {
          syntax: "*";
          inherits: false;
        }
        @property --un-ring-offset-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --un-ring-offset-width {
          syntax: "<length>";
          inherits: false;
          initial-value: 0px;
        }
        @property --un-ring-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --un-shadow {
          syntax: "*";
          inherits: false;
          initial-value: 0 0 #0000;
        }
        @property --un-shadow-color {
          syntax: "*";
          inherits: false;
        }
      }
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .inset-shadow-sm {
          --un-shadow: inset 0 2px 4px var(--un-inset-shadow-color, rgb(0 0 0 / 0.05));
          box-shadow:
            var(--un-inset-shadow), var(--un-inset-ring-shadow),
            var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);
        }
        .-inset-4 {
          inset: calc(calc(var(--spacing) * 4) * -1);
        }
        .-inset-full {
          inset: -100%;
        }
        .inset-\\[4px\\] {
          inset: 4px;
        }
        .inset-3\\/4 {
          inset: 75%;
        }
        .inset-4 {
          inset: calc(var(--spacing) * 4);
        }
        .inset-auto {
          inset: auto;
        }
        .inset-full {
          inset: 100%;
        }
      }
      "
    `);
  });
});
