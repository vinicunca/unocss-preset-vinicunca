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
    expect(
      await getCss(['sr-only']),
    ).toMatchInlineSnapshot(`
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
    expect(
      await getCss(['not-sr-only']),
    ).toMatchInlineSnapshot(`
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
    expect(
      await getCss([
        'pointer-events-none',
        'pointer-events-auto',
      ]),
    ).toMatchInlineSnapshot(`
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
    expect(
      await getCss([
        'visible',
        'invisible',
        'collapse',
      ]),
    ).toMatchInlineSnapshot(`
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
    expect(
      await getCss([
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
      ]),
    ).toMatchInlineSnapshot(`
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
    expect(
      await getCss([
        'inset-auto',
        'inset-shadow-sm',
        'inset-shadowned',
        '-inset-full',
        'inset-full',
        'inset-3/4',
        'inset-4',
        '-inset-4',
        'inset-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
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

  it('inset-x', async () => {
    expect(
      await getCss([
        'inset-x-auto',
        'inset-x-full',
        '-inset-x-full',
        'inset-x-3/4',
        'inset-x-4',
        '-inset-x-4',
        'inset-x-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-inset-x-4 {
          inset-inline: calc(calc(var(--spacing) * 4) * -1);
        }
        .-inset-x-full {
          inset-inline: -100%;
        }
        .inset-x-\\[4px\\] {
          inset-inline: 4px;
        }
        .inset-x-3\\/4 {
          inset-inline: 75%;
        }
        .inset-x-4 {
          inset-inline: calc(var(--spacing) * 4);
        }
        .inset-x-auto {
          inset-inline: auto;
        }
        .inset-x-full {
          inset-inline: 100%;
        }
      }
      "
    `);
  });

  it('inset-y', async () => {
    expect(
      await getCss([
        'inset-y-auto',
        'inset-y-full',
        '-inset-y-full',
        'inset-y-3/4',
        'inset-y-4',
        '-inset-y-4',
        'inset-y-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-inset-y-4 {
          inset-block: calc(calc(var(--spacing) * 4) * -1);
        }
        .-inset-y-full {
          inset-block: -100%;
        }
        .inset-y-\\[4px\\] {
          inset-block: 4px;
        }
        .inset-y-3\\/4 {
          inset-block: 75%;
        }
        .inset-y-4 {
          inset-block: calc(var(--spacing) * 4);
        }
        .inset-y-auto {
          inset-block: auto;
        }
        .inset-y-full {
          inset-block: 100%;
        }
      }
      "
    `);
  });

  it('start', async () => {
    expect(
      await getCss([
        'start-auto',
        '-start-full',
        'start-full',
        'start-3/4',
        'start-4',
        '-start-4',
        'start-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-start-4 {
          inset-inline-start: calc(calc(var(--spacing) * 4) * -1);
        }
        .-start-full {
          inset-inline-start: -100%;
        }
        .start-\\[4px\\] {
          inset-inline-start: 4px;
        }
        .start-3\\/4 {
          inset-inline-start: 75%;
        }
        .start-4 {
          inset-inline-start: calc(var(--spacing) * 4);
        }
        .start-auto {
          inset-inline-start: auto;
        }
        .start-full {
          inset-inline-start: 100%;
        }
      }
      "
    `);
  });

  it('end', async () => {
    expect(
      await getCss([
        'end-auto',
        '-end-full',
        'end-full',
        'end-3/4',
        'end-4',
        '-end-4',
        'end-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-end-4 {
          inset-inline-end: calc(calc(var(--spacing) * 4) * -1);
        }
        .-end-full {
          inset-inline-end: -100%;
        }
        .end-\\[4px\\] {
          inset-inline-end: 4px;
        }
        .end-3\\/4 {
          inset-inline-end: 75%;
        }
        .end-4 {
          inset-inline-end: calc(var(--spacing) * 4);
        }
        .end-auto {
          inset-inline-end: auto;
        }
        .end-full {
          inset-inline-end: 100%;
        }
      }
      "
    `);
  });

  it('top', async () => {
    expect(
      await getCss([
        'top-auto',
        '-top-full',
        'top-full',
        'top-3/4',
        'top-4',
        '-top-4',
        'top-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-top-4 {
          top: calc(calc(var(--spacing) * 4) * -1);
        }
        .-top-full {
          top: -100%;
        }
        .top-\\[4px\\] {
          top: 4px;
        }
        .top-3\\/4 {
          top: 75%;
        }
        .top-4 {
          top: calc(var(--spacing) * 4);
        }
        .top-auto {
          top: auto;
        }
        .top-full {
          top: 100%;
        }
      }
      "
    `);
  });

  it('right', async () => {
    expect(
      await getCss([
        'right-auto',
        '-right-full',
        'right-full',
        'right-3/4',
        'right-4',
        '-right-4',
        'right-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-right-4 {
          right: calc(calc(var(--spacing) * 4) * -1);
        }
        .-right-full {
          right: -100%;
        }
        .right-\\[4px\\] {
          right: 4px;
        }
        .right-3\\/4 {
          right: 75%;
        }
        .right-4 {
          right: calc(var(--spacing) * 4);
        }
        .right-auto {
          right: auto;
        }
        .right-full {
          right: 100%;
        }
      }
      "
    `);
  });

  it('bottom', async () => {
    expect(
      await getCss([
        'bottom-shadowned',
        'bottom-auto',
        '-bottom-full',
        'bottom-full',
        'bottom-3/4',
        'bottom-4',
        '-bottom-4',
        'bottom-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-bottom-4 {
          bottom: calc(calc(var(--spacing) * 4) * -1);
        }
        .-bottom-full {
          bottom: -100%;
        }
        .bottom-\\[4px\\] {
          bottom: 4px;
        }
        .bottom-3\\/4 {
          bottom: 75%;
        }
        .bottom-4 {
          bottom: calc(var(--spacing) * 4);
        }
        .bottom-auto {
          bottom: auto;
        }
        .bottom-full {
          bottom: 100%;
        }
      }
      "
    `);
  });

  it('left', async () => {
    expect(
      await getCss([
        'left-auto',
        '-left-full',
        'left-full',
        'left-3/4',
        'left-4',
        '-left-4',
        'left-[4px]',
      ]),
    ).toMatchInlineSnapshot(`
      "@layer theme, default;
      /* layer: theme */
      @layer theme {
        :root,
        :host {
          --spacing: 0.25rem;
        }
      }
      /* layer: default */
      @layer default {
        .-left-4 {
          left: calc(calc(var(--spacing) * 4) * -1);
        }
        .-left-full {
          left: -100%;
        }
        .left-\\[4px\\] {
          left: 4px;
        }
        .left-3\\/4 {
          left: 75%;
        }
        .left-4 {
          left: calc(var(--spacing) * 4);
        }
        .left-auto {
          left: auto;
        }
        .left-full {
          left: 100%;
        }
      }
      "
    `);
  });
});
