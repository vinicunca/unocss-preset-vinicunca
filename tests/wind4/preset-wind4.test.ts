import type { VinicuncaTheme } from '../../packages/core/src/types';
import { createGenerator } from '@unocss/core';
import { describe, expect, it } from 'vitest';
import { presetVinicunca } from '../../packages/core/src';
import { generateUno } from './test.utils';

function getPresetVinicunca(theme: VinicuncaTheme) {
  return presetVinicunca({
    preflights: {
      reset: false,
    },
    mini: false,
    wind4: {
      preflights: {
        reset: false,
      },
    },

    theme,
  });
}

describe('preset-wind4', async () => {
  const uno = await createGenerator({
    presets: [
      getPresetVinicunca({
        spacing: {
          big: '100rem',
        },
      }),
    ],
  });

  async function run(inputs: Array<string>) {
    const { css, matched } = await generateUno(uno, inputs);

    expect(matched).eql(new Set(inputs));

    return css;
  }

  it('sr-only', async () => {
    const css = await run(['sr-only']);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
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
      "
    `);
  });

  it('not-sr-only', async () => {
    const css = await run(['not-sr-only']);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
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
      "
    `);
  });

  it('pointer-events', async () => {
    const css = await run(['pointer-events-none', 'pointer-events-auto']);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .pointer-events-auto {
        pointer-events: auto;
      }
      .pointer-events-none {
        pointer-events: none;
      }
      "
    `);
  });

  it.todo('visibility', async () => {
    const css = await run(['collapse', 'visible', 'invisible']);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .visible {
        visibility: visible;
      }
      .invisible {
        visibility: hidden;
      }
      "
    `);
  });

  it('isolation', async () => {
    const css = await run(['isolate', 'isolation-auto']);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .isolate {
        isolation: isolate;
      }
      .isolation-auto {
        isolation: auto;
      }
      "
    `);
  });

  it('z-index', async () => {
    const css = await run([
      'z-auto',
      'z-10',
      '-z-10',
      'z-[123]',
      '-z-$value',
    ]);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .-z-\\$value {
        z-index: calc(var(--value) * -1);
      }
      .-z-10 {
        z-index: -10;
      }
      .z-\\[123\\] {
        z-index: 123;
      }
      .z-10 {
        z-index: 10;
      }
      .z-auto {
        z-index: auto;
      }
      "
    `);
  });

  it('order', async () => {
    const css = await run([
      'order-4',
      '-order-4',
      'order-[123]',
      '-order-$value',
      'order-first',
      'order-last',
      'order-none',
    ]);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .-order-\\$value {
        order: calc(var(--value) * -1);
      }
      .-order-4 {
        order: -4;
      }
      .order-\\[123\\] {
        order: 123;
      }
      .order-4 {
        order: 4;
      }
      .order-first {
        order: calc(-infinity);
      }
      .order-last {
        order: calc(infinity);
      }
      .order-none {
        order: 0;
      }
      "
    `);
  });

  describe('positions', () => {
    it('position', async () => {
      const css = await run([
        'static',
        'fixed',
        'absolute',
        'relative',
        'sticky',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
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
      "
    `);
    });

    it('inset', async () => {
      const css = await run([
        'inset-auto',
        'inset-shadow-sm',
        '-inset-full',
        'inset-full',
        'inset-3/4',
        'inset-4',
        '-inset-4',
        'inset-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
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
      /* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('inset-x', async () => {
      const css = await run([
        'inset-x-auto',
        'inset-x-full',
        '-inset-x-full',
        'inset-x-3/4',
        'inset-x-4',
        '-inset-x-4',
        'inset-x-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('inset-y', async () => {
      const css = await run([
        'inset-y-auto',
        'inset-y-full',
        '-inset-y-full',
        'inset-y-3/4',
        'inset-y-4',
        '-inset-y-4',
        'inset-y-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('start', async () => {
      const css = await run([
        'start-auto',
        '-start-full',
        'start-full',
        'start-3/4',
        'start-4',
        '-start-4',
        'start-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('end', async () => {
      const css = await run([
        'end-auto',
        '-end-full',
        'end-full',
        'end-3/4',
        'end-4',
        '-end-4',
        'end-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('top', async () => {
      const css = await run([
        'top-auto',
        '-top-full',
        'top-full',
        'top-3/4',
        'top-4',
        '-top-4',
        'top-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('right', async () => {
      const css = await run([
        'right-auto',
        '-right-full',
        'right-full',
        'right-3/4',
        'right-4',
        '-right-4',
        'right-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('bottom', async () => {
      const css = await run([
        'bottom-auto',
        '-bottom-full',
        'bottom-full',
        'bottom-3/4',
        'bottom-4',
        '-bottom-4',
        'bottom-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });

    it('left', async () => {
      const css = await run([
        'left-auto',
        '-left-full',
        'left-full',
        'left-3/4',
        'left-4',
        '-left-4',
        'left-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
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
      "
    `);
    });
  });

  describe('grid', () => {
    it.todo('col', async () => {
      const css = await run([
        'col-11',
        '-col-12',
        'col-auto',
        'col-span-4',
        'col-span-17',
        'col-span-full',
        'col-[span_123/span_123]',
        'col-span-$my-variable',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      } 
      /* layer: default */
      .col-\\[span_123\\/span_123\\] {
        grid-column: span 123 / span 123;
      }
      .col-auto {
        grid-column: auto;
      }
      .col-span-17 {
        grid-column: span 17 / span 17;
      }
      .col-span-4 {
        grid-column: span 4 / span 4;
      }
      .col-span-full {
        grid-column: 1/-1;
      }
      "
    `);
    });

    it('col-start', async () => {
      const css = await run([
        'col-start-auto',
        'col-start-4',
        'col-start-99',
        'col-start-[123]',
        '-col-start-4',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .-col-start-4 {
        grid-column-start: -4;
      }
      .col-start-\\[123\\] {
        grid-column-start: 123;
      }
      .col-start-4 {
        grid-column-start: 4;
      }
      .col-start-99 {
        grid-column-start: 99;
      }
      .col-start-auto {
        grid-column-start: auto;
      }
      "
    `);
    });

    it('col-end', async () => {
      const css = await run([
        'col-end-auto',
        'col-end-4',
        'col-end-99',
        'col-end-[123]',
        '-col-end-4',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .-col-end-4 {
        grid-column-end: -4;
      }
      .col-end-\\[123\\] {
        grid-column-end: 123;
      }
      .col-end-4 {
        grid-column-end: 4;
      }
      .col-end-99 {
        grid-column-end: 99;
      }
      .col-end-auto {
        grid-column-end: auto;
      }
      "
    `);
    });

    it.todo('row', async () => {
      const css = await run([
        'row-11',
        '-row-12',
        'row-auto',
        'row-span-4',
        'row-span-17',
        'row-span-full',
        'row-[span_123/span_123]',
        'row-span-$my-variable',
      ]);

      expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .row-\\[span_123\\/span_123\\] {
        grid-row: span 123 / span 123;
      }
      .row-auto {
        grid-row: auto;
      }
      .row-span-17 {
        grid-row: span 17 / span 17;
      }
      .row-span-4 {
        grid-row: span 4 / span 4;
      }
      .row-span-full {
        grid-row: 1/-1;
      }
      "
    `);
    });

    it('row-start', async () => {
      const css = await run([
        'row-start-auto',
        'row-start-4',
        'row-start-99',
        'row-start-[123]',
        '-row-start-4',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-row-start-4 {
          grid-row-start: -4;
        }
        .row-start-\\[123\\] {
          grid-row-start: 123;
        }
        .row-start-4 {
          grid-row-start: 4;
        }
        .row-start-99 {
          grid-row-start: 99;
        }
        .row-start-auto {
          grid-row-start: auto;
        }
        "
      `);
    });

    it('row-end', async () => {
      const css = await run([
        'row-end-auto',
        'row-end-4',
        'row-end-99',
        'row-end-[123]',
        '-row-end-4',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-row-end-4 {
          grid-row-end: -4;
        }
        .row-end-\\[123\\] {
          grid-row-end: 123;
        }
        .row-end-4 {
          grid-row-end: 4;
        }
        .row-end-99 {
          grid-row-end: 99;
        }
        .row-end-auto {
          grid-row-end: auto;
        }
        "
      `);
    });

    it('auto-cols', async () => {
      const css = await run([
        'auto-cols-auto',
        'auto-cols-min',
        'auto-cols-max',
        'auto-cols-fr',
        'auto-cols-[2fr]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .auto-cols-\\[2fr\\] {
          grid-auto-columns: 2fr;
        }
        .auto-cols-auto {
          grid-auto-columns: auto;
        }
        .auto-cols-fr {
          grid-auto-columns: minmax(0, 1fr);
        }
        .auto-cols-max {
          grid-auto-columns: max-content;
        }
        .auto-cols-min {
          grid-auto-columns: min-content;
        }
        "
      `);
    });

    it('grid-flow', async () => {
      const css = await run([
        'grid-flow-row',
        'grid-flow-col',
        'grid-flow-dense',
        'grid-flow-row-dense',
        'grid-flow-col-dense',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .grid-flow-col {
          grid-auto-flow: column;
        }
        .grid-flow-col-dense {
          grid-auto-flow: column dense;
        }
        .grid-flow-dense {
          grid-auto-flow: dense;
        }
        .grid-flow-row {
          grid-auto-flow: row;
        }
        .grid-flow-row-dense {
          grid-auto-flow: row dense;
        }
        "
      `);
    });

    it('auto-rows', async () => {
      const css = await run([
        'auto-rows-auto',
        'auto-rows-min',
        'auto-rows-max',
        'auto-rows-fr',
        'auto-rows-[2fr]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .auto-rows-\\[2fr\\] {
          grid-auto-rows: 2fr;
        }
        .auto-rows-auto {
          grid-auto-rows: auto;
        }
        .auto-rows-fr {
          grid-auto-rows: minmax(0, 1fr);
        }
        .auto-rows-max {
          grid-auto-rows: max-content;
        }
        .auto-rows-min {
          grid-auto-rows: min-content;
        }
        "
      `);
    });

    it('grid-cols', async () => {
      const css = await run([
        'grid-cols-none',
        'grid-cols-subgrid',
        'grid-cols-12',
        'grid-cols-99',
        'grid-cols-[123]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .grid-cols-\\[123\\] {
          grid-template-columns: 123;
        }
        .grid-cols-12 {
          grid-template-columns: repeat(12, minmax(0, 1fr));
        }
        .grid-cols-99 {
          grid-template-columns: repeat(99, minmax(0, 1fr));
        }
        .grid-cols-none {
          grid-template-columns: none;
        }
        .grid-cols-subgrid {
          grid-template-columns: subgrid;
        }
        "
      `);
    });

    it('grid-rows', async () => {
      const css = await run([
        'grid-rows-none',
        'grid-rows-subgrid',
        'grid-rows-12',
        'grid-rows-99',
        'grid-rows-[123]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .grid-rows-\\[123\\] {
          grid-template-rows: 123;
        }
        .grid-rows-12 {
          grid-template-rows: repeat(12, minmax(0, 1fr));
        }
        .grid-rows-99 {
          grid-template-rows: repeat(99, minmax(0, 1fr));
        }
        .grid-rows-none {
          grid-template-rows: none;
        }
        .grid-rows-subgrid {
          grid-template-rows: subgrid;
        }
        "
      `);
    });
  });

  it('float', async () => {
    const css = await run([
      'float-start',
      'float-end',
      'float-right',
      'float-left',
      'float-none',
    ]);

    expect(css)
      .toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .float-left {
          float: left;
        }
        .float-right {
          float: right;
        }
        .float-start {
          float: inline-start;
        }
        .float-end {
          float: inline-end;
        }
        .float-none {
          float: none;
        }
        "
      `);
  });

  it('clear', async () => {
    const css = await run([
      'clear-start',
      'clear-end',
      'clear-right',
      'clear-left',
      'clear-both',
      'clear-none',
    ]);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .clear-left {
        clear: left;
      }
      .clear-right {
        clear: right;
      }
      .clear-both {
        clear: both;
      }
      .clear-start {
        clear: inline-start;
      }
      .clear-end {
        clear: inline-end;
      }
      .clear-none {
        clear: none;
      }
      "
    `);
  });

  describe('margin', async () => {
    it('margin', async () => {
      const css = await run([
        'm-auto',
        'm-4',
        'm-[4px]',
        '-m-4',
        '-m-$value',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-m-\\$value {
          margin: calc(var(--value) * -1);
        }
        .-m-4 {
          margin: calc(calc(var(--spacing) * 4) * -1);
        }
        .m-\\[4px\\] {
          margin: 4px;
        }
        .m-4 {
          margin: calc(var(--spacing) * 4);
        }
        .m-auto {
          margin: auto;
        }
        "
      `);
    });

    it('mx', async () => {
      const css = await run([
        'mx-auto',
        'mx-1',
        'mx-4',
        'mx-99',
        'mx-big',
        'mx-[4px]',
        '-mx-4',
        '-mx-big',
        '-mx-[4px]',
        'mx-$my-var',
        '-mx-$my-var',
      ]);
      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-mx-\\[4px\\] {
          margin-inline: -4px;
        }
        .-mx-\\$my-var {
          margin-inline: calc(var(--my-var) * -1);
        }
        .-mx-4 {
          margin-inline: calc(calc(var(--spacing) * 4) * -1);
        }
        .-mx-big {
          margin-inline: calc(calc(var(--spacing) * 400) * -1);
        }
        .mx-\\[4px\\] {
          margin-inline: 4px;
        }
        .mx-\\$my-var {
          margin-inline: var(--my-var);
        }
        .mx-1 {
          margin-inline: calc(var(--spacing) * 1);
        }
        .mx-4 {
          margin-inline: calc(var(--spacing) * 4);
        }
        .mx-99 {
          margin-inline: calc(var(--spacing) * 99);
        }
        .mx-auto {
          margin-inline: auto;
        }
        .mx-big {
          margin-inline: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('my', async () => {
      const css = await run([
        'my-1',
        'my-99',
        'my-2.5',
        'my-big',
        'my-[4px]',
        '-my-4',
        '-my-2.5',
        '-my-big',
        '-my-[4px]',
        'my-$my-var',
        '-my-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-my-\\[4px\\] {
          margin-block: -4px;
        }
        .-my-\\$my-var {
          margin-block: calc(var(--my-var) * -1);
        }
        .-my-2\\.5 {
          margin-block: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-my-4 {
          margin-block: calc(calc(var(--spacing) * 4) * -1);
        }
        .-my-big {
          margin-block: calc(calc(var(--spacing) * 400) * -1);
        }
        .my-\\[4px\\] {
          margin-block: 4px;
        }
        .my-\\$my-var {
          margin-block: var(--my-var);
        }
        .my-1 {
          margin-block: calc(var(--spacing) * 1);
        }
        .my-2\\.5 {
          margin-block: calc(var(--spacing) * 2.5);
        }
        .my-99 {
          margin-block: calc(var(--spacing) * 99);
        }
        .my-big {
          margin-block: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('mt', async () => {
      const css = await run([
        'mt-1',
        'mt-99',
        'mt-2.5',
        'mt-big',
        'mt-[4px]',
        '-mt-4',
        '-mt-2.5',
        '-mt-big',
        '-mt-[4px]',
        'mt-$my-var',
        '-mt-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-mt-\\[4px\\] {
          margin-top: -4px;
        }
        .-mt-\\$my-var {
          margin-top: calc(var(--my-var) * -1);
        }
        .-mt-2\\.5 {
          margin-top: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-mt-4 {
          margin-top: calc(calc(var(--spacing) * 4) * -1);
        }
        .-mt-big {
          margin-top: calc(calc(var(--spacing) * 400) * -1);
        }
        .mt-\\[4px\\] {
          margin-top: 4px;
        }
        .mt-\\$my-var {
          margin-top: var(--my-var);
        }
        .mt-1 {
          margin-top: calc(var(--spacing) * 1);
        }
        .mt-2\\.5 {
          margin-top: calc(var(--spacing) * 2.5);
        }
        .mt-99 {
          margin-top: calc(var(--spacing) * 99);
        }
        .mt-big {
          margin-top: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('ms', async () => {
      const css = await run([
        'ms-1',
        'ms-99',
        'ms-2.5',
        'ms-big',
        'ms-[4px]',
        '-ms-4',
        '-ms-2.5',
        '-ms-big',
        '-ms-[4px]',
        'ms-$my-var',
        '-ms-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-ms-\\[4px\\] {
          margin-inline-start: -4px;
        }
        .-ms-\\$my-var {
          margin-inline-start: calc(var(--my-var) * -1);
        }
        .-ms-2\\.5 {
          margin-inline-start: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-ms-4 {
          margin-inline-start: calc(calc(var(--spacing) * 4) * -1);
        }
        .-ms-big {
          margin-inline-start: calc(calc(var(--spacing) * 400) * -1);
        }
        .ms-\\[4px\\] {
          margin-inline-start: 4px;
        }
        .ms-\\$my-var {
          margin-inline-start: var(--my-var);
        }
        .ms-1 {
          margin-inline-start: calc(var(--spacing) * 1);
        }
        .ms-2\\.5 {
          margin-inline-start: calc(var(--spacing) * 2.5);
        }
        .ms-99 {
          margin-inline-start: calc(var(--spacing) * 99);
        }
        .ms-big {
          margin-inline-start: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('me', async () => {
      const css = await run([
        'me-1',
        'me-99',
        'me-2.5',
        'me-big',
        'me-[4px]',
        '-me-4',
        '-me-2.5',
        '-me-big',
        '-me-[4px]',
        'me-$my-var',
        '-me-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-me-\\[4px\\] {
          margin-inline-end: -4px;
        }
        .-me-\\$my-var {
          margin-inline-end: calc(var(--my-var) * -1);
        }
        .-me-2\\.5 {
          margin-inline-end: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-me-4 {
          margin-inline-end: calc(calc(var(--spacing) * 4) * -1);
        }
        .-me-big {
          margin-inline-end: calc(calc(var(--spacing) * 400) * -1);
        }
        .me-\\[4px\\] {
          margin-inline-end: 4px;
        }
        .me-\\$my-var {
          margin-inline-end: var(--my-var);
        }
        .me-1 {
          margin-inline-end: calc(var(--spacing) * 1);
        }
        .me-2\\.5 {
          margin-inline-end: calc(var(--spacing) * 2.5);
        }
        .me-99 {
          margin-inline-end: calc(var(--spacing) * 99);
        }
        .me-big {
          margin-inline-end: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('mr', async () => {
      const css = await run([
        'mr-1',
        'mr-99',
        'mr-2.5',
        'mr-big',
        'mr-[4px]',
        '-mr-4',
        '-mr-2.5',
        '-mr-big',
        '-mr-[4px]',
        'mr-$my-var',
        '-mr-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-mr-\\[4px\\] {
          margin-right: -4px;
        }
        .-mr-\\$my-var {
          margin-right: calc(var(--my-var) * -1);
        }
        .-mr-2\\.5 {
          margin-right: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-mr-4 {
          margin-right: calc(calc(var(--spacing) * 4) * -1);
        }
        .-mr-big {
          margin-right: calc(calc(var(--spacing) * 400) * -1);
        }
        .mr-\\[4px\\] {
          margin-right: 4px;
        }
        .mr-\\$my-var {
          margin-right: var(--my-var);
        }
        .mr-1 {
          margin-right: calc(var(--spacing) * 1);
        }
        .mr-2\\.5 {
          margin-right: calc(var(--spacing) * 2.5);
        }
        .mr-99 {
          margin-right: calc(var(--spacing) * 99);
        }
        .mr-big {
          margin-right: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('mb', async () => {
      const css = await run([
        'mb-1',
        'mb-99',
        'mb-2.5',
        'mb-big',
        'mb-[4px]',
        '-mb-4',
        '-mb-2.5',
        '-mb-big',
        '-mb-[4px]',
        'mb-$my-var',
        '-mb-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-mb-\\[4px\\] {
          margin-bottom: -4px;
        }
        .-mb-\\$my-var {
          margin-bottom: calc(var(--my-var) * -1);
        }
        .-mb-2\\.5 {
          margin-bottom: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-mb-4 {
          margin-bottom: calc(calc(var(--spacing) * 4) * -1);
        }
        .-mb-big {
          margin-bottom: calc(calc(var(--spacing) * 400) * -1);
        }
        .mb-\\[4px\\] {
          margin-bottom: 4px;
        }
        .mb-\\$my-var {
          margin-bottom: var(--my-var);
        }
        .mb-1 {
          margin-bottom: calc(var(--spacing) * 1);
        }
        .mb-2\\.5 {
          margin-bottom: calc(var(--spacing) * 2.5);
        }
        .mb-99 {
          margin-bottom: calc(var(--spacing) * 99);
        }
        .mb-big {
          margin-bottom: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('ml', async () => {
      const css = await run([
        'ml-1',
        'ml-99',
        'ml-2.5',
        'ml-big',
        'ml-[4px]',
        '-ml-4',
        '-ml-2.5',
        '-ml-big',
        '-ml-[4px]',
        'ml-$my-var',
        '-ml-$my-var',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .-ml-\\[4px\\] {
          margin-left: -4px;
        }
        .-ml-\\$my-var {
          margin-left: calc(var(--my-var) * -1);
        }
        .-ml-2\\.5 {
          margin-left: calc(calc(var(--spacing) * 2.5) * -1);
        }
        .-ml-4 {
          margin-left: calc(calc(var(--spacing) * 4) * -1);
        }
        .-ml-big {
          margin-left: calc(calc(var(--spacing) * 400) * -1);
        }
        .ml-\\[4px\\] {
          margin-left: 4px;
        }
        .ml-\\$my-var {
          margin-left: var(--my-var);
        }
        .ml-1 {
          margin-left: calc(var(--spacing) * 1);
        }
        .ml-2\\.5 {
          margin-left: calc(var(--spacing) * 2.5);
        }
        .ml-99 {
          margin-left: calc(var(--spacing) * 99);
        }
        .ml-big {
          margin-left: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('margin sort order', async () => {
      const css = await run([
        'm-4',
        'mb-4',
        'me-4',
        'mx-4',
        'ml-4',
        'ms-4',
        'mr-4',
        'mt-4',
        'my-4',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .m-4 {
          margin: calc(var(--spacing) * 4);
        }
        .mx-4 {
          margin-inline: calc(var(--spacing) * 4);
        }
        .my-4 {
          margin-block: calc(var(--spacing) * 4);
        }
        .mb-4 {
          margin-bottom: calc(var(--spacing) * 4);
        }
        .me-4 {
          margin-inline-end: calc(var(--spacing) * 4);
        }
        .ml-4 {
          margin-left: calc(var(--spacing) * 4);
        }
        .mr-4 {
          margin-right: calc(var(--spacing) * 4);
        }
        .ms-4 {
          margin-inline-start: calc(var(--spacing) * 4);
        }
        .mt-4 {
          margin-top: calc(var(--spacing) * 4);
        }
        "
      `);
    });
  });

  describe('padding', () => {
    it('p', async () => {
      const css = await run(['p-1', 'p-4', 'p-99', 'p-big', 'p-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .p-\\[4px\\] {
          padding: 4px;
        }
        .p-1 {
          padding: calc(var(--spacing) * 1);
        }
        .p-4 {
          padding: calc(var(--spacing) * 4);
        }
        .p-99 {
          padding: calc(var(--spacing) * 99);
        }
        .p-big {
          padding: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('px', async () => {
      const css = await run(['px-1', 'px-2.5', 'px-99', 'px-big', 'px-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .px-\\[4px\\] {
          padding-inline: 4px;
        }
        .px-1 {
          padding-inline: calc(var(--spacing) * 1);
        }
        .px-2\\.5 {
          padding-inline: calc(var(--spacing) * 2.5);
        }
        .px-99 {
          padding-inline: calc(var(--spacing) * 99);
        }
        .px-big {
          padding-inline: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('py', async () => {
      const css = await run(['py-1', 'py-4', 'py-99', 'py-big', 'py-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .py-\\[4px\\] {
          padding-block: 4px;
        }
        .py-1 {
          padding-block: calc(var(--spacing) * 1);
        }
        .py-4 {
          padding-block: calc(var(--spacing) * 4);
        }
        .py-99 {
          padding-block: calc(var(--spacing) * 99);
        }
        .py-big {
          padding-block: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('pt', async () => {
      const css = await run(['pt-1', 'pt-4', 'pt-99', 'pt-big', 'pt-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .pt-\\[4px\\] {
          padding-top: 4px;
        }
        .pt-1 {
          padding-top: calc(var(--spacing) * 1);
        }
        .pt-4 {
          padding-top: calc(var(--spacing) * 4);
        }
        .pt-99 {
          padding-top: calc(var(--spacing) * 99);
        }
        .pt-big {
          padding-top: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('ps', async () => {
      const css = await run(['ps-1', 'ps-4', 'ps-99', 'ps-big', 'ps-[4px]']);
      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .ps-\\[4px\\] {
          padding-inline-start: 4px;
        }
        .ps-1 {
          padding-inline-start: calc(var(--spacing) * 1);
        }
        .ps-4 {
          padding-inline-start: calc(var(--spacing) * 4);
        }
        .ps-99 {
          padding-inline-start: calc(var(--spacing) * 99);
        }
        .ps-big {
          padding-inline-start: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('pe', async () => {
      const css = await run(['pe-1', 'pe-4', 'pe-99', 'pe-big', 'pe-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .pe-\\[4px\\] {
          padding-inline-end: 4px;
        }
        .pe-1 {
          padding-inline-end: calc(var(--spacing) * 1);
        }
        .pe-4 {
          padding-inline-end: calc(var(--spacing) * 4);
        }
        .pe-99 {
          padding-inline-end: calc(var(--spacing) * 99);
        }
        .pe-big {
          padding-inline-end: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('pr', async () => {
      const css = await run(['pr-1', 'pr-4', 'pr-99', 'pr-big', 'pr-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .pr-\\[4px\\] {
          padding-right: 4px;
        }
        .pr-1 {
          padding-right: calc(var(--spacing) * 1);
        }
        .pr-4 {
          padding-right: calc(var(--spacing) * 4);
        }
        .pr-99 {
          padding-right: calc(var(--spacing) * 99);
        }
        .pr-big {
          padding-right: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('pb', async () => {
      const css = await run(['pb-1', 'pb-4', 'pb-99', 'pb-big', 'pb-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .pb-\\[4px\\] {
          padding-bottom: 4px;
        }
        .pb-1 {
          padding-bottom: calc(var(--spacing) * 1);
        }
        .pb-4 {
          padding-bottom: calc(var(--spacing) * 4);
        }
        .pb-99 {
          padding-bottom: calc(var(--spacing) * 99);
        }
        .pb-big {
          padding-bottom: calc(var(--spacing) * 400);
        }
        "
      `);
    });

    it('pl', async () => {
      const css = await run(['pl-1', 'pl-4', 'pl-99', 'pl-big', 'pl-[4px]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .pl-\\[4px\\] {
          padding-left: 4px;
        }
        .pl-1 {
          padding-left: calc(var(--spacing) * 1);
        }
        .pl-4 {
          padding-left: calc(var(--spacing) * 4);
        }
        .pl-99 {
          padding-left: calc(var(--spacing) * 99);
        }
        .pl-big {
          padding-left: calc(var(--spacing) * 400);
        }
        "
      `);
    });
  });

  it('box-sizing', async () => {
    const css = await run(['box-border', 'box-content']);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .box-border {
        box-sizing: border-box;
      }
      .box-content {
        box-sizing: content-box;
      }
      "
    `);
  });

  it('line-clamp', async () => {
    const css = await run(['line-clamp-4', 'line-clamp-99', 'line-clamp-none']);
    expect(css)
      .toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .line-clamp-4 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
        .line-clamp-99 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 99;
        }
        .line-clamp-none {
          overflow: visible;
          display: block;
          -webkit-box-orient: horizontal;
          -webkit-line-clamp: unset;
        }
        "
      `);
  });

  it('display', async () => {
    const css = await run([
      'block',
      'inline-block',
      'inline',
      'flex',
      'inline-flex',
      'table',
      'inline-table',
      'table-caption',
      'table-cell',
      'table-column',
      'table-column-group',
      'table-footer-group',
      'table-header-group',
      'table-row-group',
      'table-row',
      'flow-root',
      'grid',
      'inline-grid',
      'contents',
      'list-item',
      'hidden',
    ]);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .flex {
        display: flex;
      }
      .inline-flex {
        display: inline-flex;
      }
      .grid {
        display: grid;
      }
      .inline-grid {
        display: inline-grid;
      }
      .inline {
        display: inline;
      }
      .block {
        display: block;
      }
      .inline-block {
        display: inline-block;
      }
      .contents {
        display: contents;
      }
      .flow-root {
        display: flow-root;
      }
      .list-item {
        display: list-item;
      }
      .hidden {
        display: none;
      }
      .inline-table {
        display: inline-table;
      }
      .table {
        display: table;
      }
      .table-caption {
        display: table-caption;
      }
      .table-cell {
        display: table-cell;
      }
      .table-column {
        display: table-column;
      }
      .table-column-group {
        display: table-column-group;
      }
      .table-footer-group {
        display: table-footer-group;
      }
      .table-header-group {
        display: table-header-group;
      }
      .table-row {
        display: table-row;
      }
      .table-row-group {
        display: table-row-group;
      }
      "
    `);
  });

  it('field-sizing', async () => {
    const css = await run([
      'field-sizing-content',
      'field-sizing-fixed',
    ]);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .field-sizing-fixed {
        field-sizing: fixed;
      }
      .field-sizing-content {
        field-sizing: content;
      }
      "
    `);
  });

  it('aspect-ratio', async () => {
    const css = await run([
      'aspect-video',
      'aspect-[10/9]',
      'aspect-4/3',
    ]);

    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root,
      :host {
        --spacing: 0.25rem;
      }
      /* layer: default */
      .aspect-\\[10\\/9\\] {
        aspect-ratio: 10/9;
      }
      .aspect-4\\/3 {
        aspect-ratio: 4/3;
      }
      .aspect-video {
        aspect-ratio: 16/9;
      }
      "
    `);
  });

  describe('sizes', () => {
    it('size', async () => {
      const css = await run([
        'size-auto',
        'size-full',
        'size-min',
        'size-max',
        'size-fit',
        'size-4',
        'size-1/2',
        'size-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
        }
        /* layer: default */
        .size-\\[4px\\] {
          width: 4px;
          height: 4px;
        }
        .size-1\\/2 {
          width: 50%;
          height: 50%;
        }
        .size-4 {
          width: calc(var(--spacing) * 4);
          height: calc(var(--spacing) * 4);
        }
        .size-auto {
          width: auto;
          height: auto;
        }
        .size-fit {
          width: fit-content;
          height: fit-content;
        }
        .size-full {
          width: 100%;
          height: 100%;
        }
        .size-max {
          width: max-content;
          height: max-content;
        }
        .size-min {
          width: min-content;
          height: min-content;
        }
        "
      `);
    });

    it('width', async () => {
      const css = await run([
        'w-full',
        'w-auto',
        'w-screen',
        'w-svw',
        'w-lvw',
        'w-dvw',
        'w-min',
        'w-max',
        'w-fit',
        'w-4',
        'w-xl',
        'w-1/2',
        'w-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .w-\\[4px\\] {
          width: 4px;
        }
        .w-1\\/2 {
          width: 50%;
        }
        .w-4 {
          width: calc(var(--spacing) * 4);
        }
        .w-auto {
          width: auto;
        }
        .w-dvw {
          width: 100dvw;
        }
        .w-fit {
          width: fit-content;
        }
        .w-full {
          width: 100%;
        }
        .w-lvw {
          width: 100lvw;
        }
        .w-max {
          width: max-content;
        }
        .w-min {
          width: min-content;
        }
        .w-screen {
          width: 100vw;
        }
        .w-svw {
          width: 100svw;
        }
        .w-xl {
          width: var(--container-xl);
        }
        "
      `);
    });

    it('min-width', async () => {
      const css = await run([
        'min-w-full',
        'min-w-auto',
        'min-w-min',
        'min-w-max',
        'min-w-fit',
        'min-w-4',
        'min-w-xl',
        'min-w-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .min-w-\\[4px\\] {
          min-width: 4px;
        }
        .min-w-4 {
          min-width: calc(var(--spacing) * 4);
        }
        .min-w-auto {
          min-width: auto;
        }
        .min-w-fit {
          min-width: fit-content;
        }
        .min-w-full {
          min-width: 100%;
        }
        .min-w-max {
          min-width: max-content;
        }
        .min-w-min {
          min-width: min-content;
        }
        .min-w-xl {
          min-width: var(--container-xl);
        }
        "
      `);
    });

    it('max-width', async () => {
      const css = await run([
        'max-w-none',
        'max-w-full',
        'max-w-max',
        'max-w-fit',
        'max-w-4',
        'max-w-xl',
        'max-w-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .max-w-\\[4px\\] {
          max-width: 4px;
        }
        .max-w-4 {
          max-width: calc(var(--spacing) * 4);
        }
        .max-w-fit {
          max-width: fit-content;
        }
        .max-w-full {
          max-width: 100%;
        }
        .max-w-max {
          max-width: max-content;
        }
        .max-w-none {
          max-width: none;
        }
        .max-w-xl {
          max-width: var(--container-xl);
        }
        "
      `);
    });

    it('height', async () => {
      const css = await run([
        'h-full',
        'h-auto',
        'h-screen',
        'h-svh',
        'h-lvh',
        'h-dvh',
        'h-min',
        'h-max',
        'h-fit',
        'h-4',
        'h-1/2',
        'h-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .h-\\[4px\\] {
          height: 4px;
        }
        .h-1\\/2 {
          height: 50%;
        }
        .h-4 {
          height: calc(var(--spacing) * 4);
        }
        .h-auto {
          height: auto;
        }
        .h-fit {
          height: fit-content;
        }
        .h-full {
          height: 100%;
        }
        .h-max {
          height: max-content;
        }
        .h-min {
          height: min-content;
        }
        .h-screen {
          height: 100vh;
        }
        .h-dvh {
          height: 100dvh;
        }
        .h-svh {
          height: 100svh;
        }
        .h-lvh {
          height: 100lvh;
        }
        "
      `);
    });

    it('min-height', async () => {
      const css = await run([
        'min-h-full',
        'min-h-auto',
        'min-h-screen',
        'min-h-svh',
        'min-h-lvh',
        'min-h-dvh',
        'min-h-min',
        'min-h-max',
        'min-h-fit',
        'min-h-4',
        'min-h-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .min-h-\\[4px\\] {
          min-height: 4px;
        }
        .min-h-4 {
          min-height: calc(var(--spacing) * 4);
        }
        .min-h-auto {
          min-height: auto;
        }
        .min-h-fit {
          min-height: fit-content;
        }
        .min-h-full {
          min-height: 100%;
        }
        .min-h-max {
          min-height: max-content;
        }
        .min-h-min {
          min-height: min-content;
        }
        .min-h-screen {
          min-height: 100vh;
        }
        .min-h-dvh {
          min-height: 100dvh;
        }
        .min-h-svh {
          min-height: 100svh;
        }
        .min-h-lvh {
          min-height: 100lvh;
        }
        "
      `);
    });

    it('max-height', async () => {
      const css = await run([
        'max-h-none',
        'max-h-full',
        'max-h-screen',
        'max-h-svh',
        'max-h-lvh',
        'max-h-dvh',
        'max-h-min',
        'max-h-max',
        'max-h-fit',
        'max-h-4',
        'max-h-[4px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .max-h-\\[4px\\] {
          max-height: 4px;
        }
        .max-h-4 {
          max-height: calc(var(--spacing) * 4);
        }
        .max-h-fit {
          max-height: fit-content;
        }
        .max-h-full {
          max-height: 100%;
        }
        .max-h-max {
          max-height: max-content;
        }
        .max-h-min {
          max-height: min-content;
        }
        .max-h-none {
          max-height: none;
        }
        .max-h-screen {
          max-height: 100vh;
        }
        .max-h-dvh {
          max-height: 100dvh;
        }
        .max-h-svh {
          max-height: 100svh;
        }
        .max-h-lvh {
          max-height: 100lvh;
        }
        "
      `);
    });
  });

  describe('container', () => {
    it('creates the right media queries and sorts it before width', async () => {
      const css = await run(['w-1/2', 'container', 'max-w-$breakpoint-sm']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: shortcuts */
        .container {
          width: 100%;
        }
        @media (min-width: 40rem) {
          .container {
            max-width: 40rem;
          }
        }
        @media (min-width: 48rem) {
          .container {
            max-width: 48rem;
          }
        }
        @media (min-width: 64rem) {
          .container {
            max-width: 64rem;
          }
        }
        @media (min-width: 80rem) {
          .container {
            max-width: 80rem;
          }
        }
        @media (min-width: 96rem) {
          .container {
            max-width: 96rem;
          }
        }
        /* layer: default */
        .max-w-\\$breakpoint-sm {
          max-width: var(--breakpoint-sm);
        }
        .w-1\\/2 {
          width: 50%;
        }
        "
      `);
    });

    it.todo('sorts breakpoints based on unit and then in ascending order', async () => {
      const uno = await createGenerator({
        presets: [],
      });
      const { css } = await generateUno(uno, ['container']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: shortcuts */
        .container {
          width: 100%;
        }
        @media (min-width: 48rem) {
          .container {
            max-width: 48em;
          }
        }
        "
      `);
    });
  });

  describe('flex', () => {
    it('flex', async () => {
      const css = await run([
        'flex-1',
        'flex-1/2',
        'flex-auto',
        'flex-initial',
        'flex-none',
        'flex-[123]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .flex-\\[123\\] {
          flex: 123;
        }
        .flex-1\\/2 {
          flex: 50%;
        }
        .flex-1 {
          flex: 1 1 0%;
        }
        .flex-auto {
          flex: 1 1 auto;
        }
        .flex-initial {
          flex: 0 1 auto;
        }
        .flex-none {
          flex: none;
        }
        "
      `);
    });

    it('flex-shrink', async () => {
      const css = await run(['shrink', 'shrink-0', 'shrink-[123]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .shrink {
          flex-shrink: 1;
        }
        .shrink-\\[123\\] {
          flex-shrink: 123;
        }
        .shrink-0 {
          flex-shrink: 0;
        }
        "
      `);
    });

    it('flex-grow', async () => {
      const css = await run(['grow', 'grow-0', 'grow-[123]']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .grow {
          flex-grow: 1;
        }
        .grow-\\[123\\] {
          flex-grow: 123;
        }
        .grow-0 {
          flex-grow: 0;
        }
        "
      `);
    });

    it('flex-basis', async () => {
      // TODO: Consider if we should support breakpoints such as `basis-xl`
      const css = await run([
        'basis-auto',
        'basis-full',
        'basis-11/12',
        'basis-[123px]',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .basis-\\[123px\\] {
          flex-basis: 123px;
        }
        .basis-11\\/12 {
          flex-basis: 91.6666666667%;
        }
        .basis-auto {
          flex-basis: auto;
        }
        .basis-full {
          flex-basis: 100%;
        }
        "
      `);
    });

    it('flex-direction', async () => {
      const css = await run(['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse']);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .flex-row {
          flex-direction: row;
        }
        .flex-row-reverse {
          flex-direction: row-reverse;
        }
        .flex-col {
          flex-direction: column;
        }
        .flex-col-reverse {
          flex-direction: column-reverse;
        }
        "
      `);
    });

    it('flex-wrap', async () => {
      const css = await run([
        'flex-wrap',
        'flex-wrap-reverse',
        'flex-nowrap',
      ]);

      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .flex-wrap {
          flex-wrap: wrap;
        }
        .flex-wrap-reverse {
          flex-wrap: wrap-reverse;
        }
        .flex-nowrap {
          flex-wrap: nowrap;
        }
        "
      `);
    });
  });

  describe('layout position', () => {
    it.todo('align-content', async () => {
      const css = await run([
        'content-around',
        'content-baseline',
        'content-between',
        'content-center',
        'content-normal',
        'content-center-safe',
        'content-end',
        'content-end-safe',
        'content-evenly',
        'content-start',
        'content-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".content-around {
      align-content: space-around;
    }

    .content-baseline {
      align-content: baseline;
    }

    .content-between {
      align-content: space-between;
    }

    .content-center {
      align-content: center;
    }

    .content-center-safe {
      align-content: safe center;
    }

    .content-end {
      align-content: flex-end;
    }

    .content-end-safe {
      align-content: safe flex-end;
    }

    .content-evenly {
      align-content: space-evenly;
    }

    .content-normal {
      align-content: normal;
    }

    .content-start {
      align-content: flex-start;
    }

    .content-stretch {
      align-content: stretch;
    }"
  `);
    });

    it.todo('items', async () => {
      const css = await run([
        'items-start',
        'items-end',
        'items-end-safe',
        'items-center',
        'items-center-safe',
        'items-baseline',
        'items-baseline-last',
        'items-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".items-baseline {
      align-items: baseline;
    }

    .items-baseline-last {
      align-items: last baseline;
    }

    .items-center {
      align-items: center;
    }

    .items-center-safe {
      align-items: safe center;
    }

    .items-end {
      align-items: flex-end;
    }

    .items-end-safe {
      align-items: safe flex-end;
    }

    .items-start {
      align-items: flex-start;
    }

    .items-stretch {
      align-items: stretch;
    }"
  `);
    });

    it.todo('justify', async () => {
      const css = await run([
        'justify-normal',
        'justify-start',
        'justify-end',
        'justify-end-safe',
        'justify-center',
        'justify-center-safe',
        'justify-between',
        'justify-around',
        'justify-evenly',
        'justify-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".justify-around {
      justify-content: space-around;
    }

    .justify-between {
      justify-content: space-between;
    }

    .justify-center {
      justify-content: center;
    }

    .justify-center-safe {
      justify-content: safe center;
    }

    .justify-end {
      justify-content: flex-end;
    }

    .justify-end-safe {
      justify-content: safe flex-end;
    }

    .justify-evenly {
      justify-content: space-evenly;
    }

    .justify-normal {
      justify-content: normal;
    }

    .justify-start {
      justify-content: flex-start;
    }

    .justify-stretch {
      justify-content: stretch;
    }"
  `);
    });

    it.todo('justify-items', async () => {
      const css = await run([
        'justify-items-start',
        'justify-items-end',
        'justify-items-end-safe',
        'justify-items-center',
        'justify-items-center-safe',
        'justify-items-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".justify-items-center {
      justify-items: center;
    }

    .justify-items-center-safe {
      justify-items: safe center;
    }

    .justify-items-end {
      justify-items: end;
    }

    .justify-items-end-safe {
      justify-items: safe end;
    }

    .justify-items-start {
      justify-items: start;
    }

    .justify-items-stretch {
      justify-items: stretch;
    }"
  `);
    });

    it.todo('self', async () => {
      const css = await run([
        'self-auto',
        'self-start',
        'self-end',
        'self-end-safe',
        'self-center',
        'self-center-safe',
        'self-stretch',
        'self-baseline',
        'self-baseline-last',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".self-auto {
      align-self: auto;
    }

    .self-baseline {
      align-self: baseline;
    }

    .self-baseline-last {
      align-self: last baseline;
    }

    .self-center {
      align-self: center;
    }

    .self-center-safe {
      align-self: safe center;
    }

    .self-end {
      align-self: flex-end;
    }

    .self-end-safe {
      align-self: safe flex-end;
    }

    .self-start {
      align-self: flex-start;
    }

    .self-stretch {
      align-self: stretch;
    }"
  `);
    });

    it.todo('justify-self', async () => {
      const css = await run([
        'justify-self-auto',
        'justify-self-start',
        'justify-self-end',
        'justify-self-end-safe',
        'justify-self-center',
        'justify-self-center-safe',
        'justify-self-stretch',
        'justify-self-baseline',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".justify-self-auto {
      justify-self: auto;
    }

    .justify-self-center {
      justify-self: center;
    }

    .justify-self-center-safe {
      justify-self: safe center;
    }

    .justify-self-end {
      justify-self: flex-end;
    }

    .justify-self-end-safe {
      justify-self: safe flex-end;
    }

    .justify-self-start {
      justify-self: flex-start;
    }

    .justify-self-stretch {
      justify-self: stretch;
    }"
  `);
    });

    it.todo('place-content', async () => {
      const css = await run([
        'place-content-center',
        'place-content-center-safe',
        'place-content-start',
        'place-content-end',
        'place-content-end-safe',
        'place-content-between',
        'place-content-around',
        'place-content-evenly',
        'place-content-baseline',
        'place-content-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".place-content-around {
      place-content: space-around;
    }

    .place-content-baseline {
      place-content: baseline start;
    }

    .place-content-between {
      place-content: space-between;
    }

    .place-content-center {
      place-content: center;
    }

    .place-content-center-safe {
      place-content: safe center;
    }

    .place-content-end {
      place-content: end;
    }

    .place-content-end-safe {
      place-content: safe end;
    }

    .place-content-evenly {
      place-content: space-evenly;
    }

    .place-content-start {
      place-content: start;
    }

    .place-content-stretch {
      place-content: stretch;
    }"
  `);
    });

    it.todo('place-items', async () => {
      const css = await run([
        'place-items-start',
        'place-items-end',
        'place-items-end-safe',
        'place-items-center',
        'place-items-center-safe',
        'place-items-baseline',
        'place-items-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".place-items-baseline {
      place-items: baseline;
    }

    .place-items-center {
      place-items: center;
    }

    .place-items-center-safe {
      place-items: safe center;
    }

    .place-items-end {
      place-items: end;
    }

    .place-items-end-safe {
      place-items: safe end;
    }

    .place-items-start {
      place-items: start;
    }

    .place-items-stretch {
      place-items: stretch stretch;
    }"
  `);
    });

    it('place-self', async () => {
      const css = await run([
        'place-self-auto',
        'place-self-start',
        'place-self-end',
        'place-self-end-safe',
        'place-self-center',
        'place-self-center-safe',
        'place-self-stretch',
      ]);

      expect(css).toMatchInlineSnapshot(`
    ".place-self-auto {
      place-self: auto;
    }

    .place-self-center {
      place-self: center;
    }

    .place-self-center-safe {
      place-self: safe center;
    }

    .place-self-end {
      place-self: end;
    }

    .place-self-end-safe {
      place-self: safe end;
    }

    .place-self-start {
      place-self: start;
    }

    .place-self-stretch {
      place-self: stretch stretch;
    }"
  `);
    });

    it('gap', async () => {
      const css = await run([
        'gap-4',
        'gap-[4px]',
      ]);
      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .gap-\\[4px\\] {
          gap: 4px;
        }
        .gap-4 {
          gap: calc(var(--spacing) * 4);
        }
        "
      `);
    });

    it('gap-x', async () => {
      const css = await run([
        'gap-x-4',
        'gap-x-[4px]',
      ]);
      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .gap-x-\\[4px\\] {
          column-gap: 4px;
        }
        .gap-x-4 {
          column-gap: calc(var(--spacing) * 4);
        }
        "
      `);
    });

    it('gap-y', async () => {
      const css = await run([
        'gap-y-4',
        'gap-y-[4px]',
      ]);
      expect(css).toMatchInlineSnapshot(`
        "/* layer: theme */
        :root,
        :host {
          --spacing: 0.25rem;
          --container-xl: 36rem;
        }
        /* layer: default */
        .gap-y-\\[4px\\] {
          row-gap: 4px;
        }
        .gap-y-4 {
          row-gap: calc(var(--spacing) * 4);
        }
        "
      `);
    });
  });
});
