import type { PresetVinicuncaOptions, VinicuncaAkarOptions } from '../packages/core/src/types';
import { describe } from 'node:test';
import { pick } from '@vinicunca/perkakas';
import { createGenerator } from 'unocss';
import { expect, it } from 'vitest';
import { presetVinicunca } from '../packages/core/src';

async function getGenerator(
  options: PresetVinicuncaOptions,
  akarOptions: VinicuncaAkarOptions,
) {
  return createGenerator({
    presets: [
      presetVinicunca({
        ...options,
        akar: akarOptions,
      }),
    ],
  });
}

describe('akar preset', () => {
  it('use primary color', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        // This is only to reduce the output size for snapshot testing
        enableDrawer: false,
        pohonThemes: false,
      },
    );

    const { css } = await uno.generate('color-primary');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-primary-DEFAULT: oklch(70.2% 0.183 293.541); }
      /* layer: default */
      .color-primary{color:color-mix(in srgb, var(--colors-primary-DEFAULT) var(--un-text-opacity), transparent);}
      @supports (color: color-mix(in lab, red, red)){
      .color-primary{color:color-mix(in oklab, var(--colors-primary-DEFAULT) var(--un-text-opacity), transparent);}
      }"
    `);
  });

  it('use custom brand colors', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        // This is only to reduce the output size for snapshot testing
        enableDrawer: false,
        pohonThemes: false,
        brands: {
          primary: '#ff0000',
          secondary: 'blue',
        },
      },
    );

    const { css } = await uno.generate(
      `
      :root {
        @apply color-primary;
      }
    `,
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-primary-DEFAULT: #ff0000; }
      /* layer: default */
      .color-primary{color:color-mix(in srgb, var(--colors-primary-DEFAULT) var(--un-text-opacity), transparent);}
      @supports (color: color-mix(in lab, red, red)){
      .color-primary{color:color-mix(in oklab, var(--colors-primary-DEFAULT) var(--un-text-opacity), transparent);}
      }"
    `);
  });

  it('use enable dynamic', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        // This is only to reduce the output size for snapshot testing
        enableDrawer: false,
        pohonThemes: false,

        enableDynamicBrands: true,
      },
    );

    const { css } = await uno.generate('color-primary color-primary-700');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-primary-DEFAULT: var(--akar-primary); --colors-primary-700: var(--akar-primary-700); }
      /* layer: default */
      .color-primary{color:color-mix(in srgb, var(--colors-primary-DEFAULT) var(--un-text-opacity), transparent);}
      .color-primary-700{color:color-mix(in srgb, var(--colors-primary-700) var(--un-text-opacity), transparent);}
      @supports (color: color-mix(in lab, red, red)){
      .color-primary{color:color-mix(in oklab, var(--colors-primary-DEFAULT) var(--un-text-opacity), transparent);}
      .color-primary-700{color:color-mix(in oklab, var(--colors-primary-700) var(--un-text-opacity), transparent);}
      }"
    `);
  });

  it('default drawer preflight', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        pohonThemes: false,
      },
    );

    const { css } = await uno.generate('');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
       [data-akar-drawer] { touch-action: none; will-change: transform; transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1); animation-duration: 0.5s; animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1); } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='bottom'][data-state='open'] { animation-name: drawer-slide-from-bottom; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='bottom'][data-state='closed'] { animation-name: drawer-slide-to-bottom; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='top'][data-state='open'] { animation-name: drawer-slide-from-top; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='top'][data-state='closed'] { animation-name: drawer-slide-to-top; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='left'][data-state='open'] { animation-name: drawer-slide-from-left; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='left'][data-state='closed'] { animation-name: drawer-slide-to-left; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='right'][data-state='open'] { animation-name: drawer-slide-from-right; } [data-akar-drawer][data-akar-snap-points='false'][data-akar-drawer-direction='right'][data-state='closed'] { animation-name: drawer-slide-to-right; } [data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='bottom'] { transform: translate3d(0, var(--akar-drawer-initial-transform, 100%), 0); } [data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='top'] { transform: translate3d(0, calc(var(--akar-drawer-initial-transform, 100%) * -1), 0); } [data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='left'] { transform: translate3d(calc(var(--akar-drawer-initial-transform, 100%) * -1), 0, 0); } [data-akar-drawer][data-akar-snap-points='true'][data-akar-drawer-direction='right'] { transform: translate3d(var(--akar-drawer-initial-transform, 100%), 0, 0); } [data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='top'] { transform: translate3d(0, var(--akar-snap-point-height, 0), 0); } [data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='bottom'] { transform: translate3d(0, var(--akar-snap-point-height, 0), 0); } [data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='left'] { transform: translate3d(var(--akar-snap-point-height, 0), 0, 0); } [data-akar-drawer][data-akar-delayed-snap-points='true'][data-akar-drawer-direction='right'] { transform: translate3d(var(--akar-snap-point-height, 0), 0, 0); } [data-akar-overlay][data-akar-snap-points='false'] { animation-duration: 0.5s; animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1); } [data-akar-overlay][data-akar-snap-points='false'][data-state='open'] { animation-name: drawer-fade-in; } [data-akar-overlay][data-state='closed'] { animation-name: drawer-fade-out; } [data-akar-animate='false'] { animation: none !important; } [data-akar-overlay][data-akar-snap-points='true'] { opacity: 0; transition: opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1); } [data-akar-overlay][data-akar-snap-points='true'] { opacity: 1; } [data-akar-drawer]:not([data-akar-custom-container='true'])::after { content: ''; position: absolute; background: inherit; background-color: inherit; } [data-akar-drawer][data-akar-drawer-direction='top']::after { top: initial; bottom: 100%; left: 0; right: 0; height: 200%; } [data-akar-drawer][data-akar-drawer-direction='bottom']::after { top: 100%; bottom: initial; left: 0; right: 0; height: 200%; } [data-akar-drawer][data-akar-drawer-direction='left']::after { left: initial; right: 100%; top: 0; bottom: 0; width: 200%; } [data-akar-drawer][data-akar-drawer-direction='right']::after { left: 100%; right: initial; top: 0; bottom: 0; width: 200%; } [data-akar-overlay][data-akar-snap-points='true']:not( [data-akar-snap-points-overlay='true'] ):not([data-state='closed']) { opacity: 0; } [data-akar-overlay][data-akar-snap-points-overlay='true'] { opacity: 1; } [data-akar-handle] { display: block; position: relative; opacity: 0.7; background: #e2e2e4; margin-left: auto; margin-right: auto; height: 5px; width: 32px; border-radius: 1rem; touch-action: pan-y; } [data-akar-handle]:hover, [data-akar-handle]:active { opacity: 1; } [data-akar-handle-hitarea] { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: max(100%, 2.75rem);  height: max(100%, 2.75rem);  touch-action: inherit; } @media (hover: hover) and (pointer: fine) { [data-akar-drawer] { user-select: none; } } @media (pointer: fine) { [data-akar-handle-hitarea] { width: 100%; height: 100%; } }
      /* layer: default */
      @keyframes drawer-fade-in{from{opacity:0;}to{opacity:1;}}
      @keyframes drawer-fade-out{to{opacity:0;}}
      @keyframes drawer-slide-from-bottom{from{transform:translate3d(0, var(--akar-drawer-initial-transform, 100%), 0);}to{transform:translate3d(0, 0, 0);}}
      @keyframes drawer-slide-from-left{from{transform:translate3d(calc(var(--akar-drawer-initial-transform, 100%) * -1), 0, 0);}to{transform:translate3d(0, 0, 0);}}
      @keyframes drawer-slide-from-right{from{transform:translate3d(var(--akar-drawer-initial-transform, 100%), 0, 0);}to{transform:translate3d(0, 0, 0);}}
      @keyframes drawer-slide-from-top{from{transform:translate3d(0, calc(var(--akar-drawer-initial-transform, 100%) * -1), 0);}to{transform:translate3d(0, 0, 0);}}
      @keyframes drawer-slide-to-bottom{to{transform:translate3d(0, var(--akar-drawer-initial-transform, 100%), 0);}}
      @keyframes drawer-slide-to-left{to{transform:translate3d(calc(var(--akar-drawer-initial-transform, 100%) * -1), 0, 0);}}
      @keyframes drawer-slide-to-right{to{transform:translate3d(var(--akar-drawer-initial-transform, 100%), 0, 0);}}
      @keyframes drawer-slide-to-top{to{transform:translate3d(0, calc(var(--akar-drawer-initial-transform, 100%) * -1), 0);}}
      .animate-drawer-fade-in{animation:drawer-fade-in 1s linear 1;}
      .animate-drawer-fade-out{animation:drawer-fade-out 1s linear 1;}
      .animate-drawer-slide-from-bottom{animation:drawer-slide-from-bottom 1s linear 1;}
      .animate-drawer-slide-from-left{animation:drawer-slide-from-left 1s linear 1;}
      .animate-drawer-slide-from-right{animation:drawer-slide-from-right 1s linear 1;}
      .animate-drawer-slide-from-top{animation:drawer-slide-from-top 1s linear 1;}
      .animate-drawer-slide-to-bottom{animation:drawer-slide-to-bottom 1s linear 1;}
      .animate-drawer-slide-to-left{animation:drawer-slide-to-left 1s linear 1;}
      .animate-drawer-slide-to-right{animation:drawer-slide-to-right 1s linear 1;}
      .animate-drawer-slide-to-top{animation:drawer-slide-to-top 1s linear 1;}"
    `);
  });

  it('default pohon themes', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        enableDrawer: false,
      },
    );

    const themeColors = uno.config.theme.colors ?? {};
    const pohonColorKeys = pick(
      themeColors,
      ['text', 'background', 'border', 'ring', 'divide', 'outline', 'stroke', 'fill'],
    );

    expect(pohonColorKeys).toMatchInlineSnapshot(`
      {
        "background": {
          "DEFAULT": "var(--pohon-bg)",
          "accented": "var(--pohon-bg-accented)",
          "border": "var(--pohon-border)",
          "elevated": "var(--pohon-bg-elevated)",
          "inverted": "var(--pohon-bg-inverted)",
          "muted": "var(--pohon-bg-muted)",
        },
        "border": {
          "DEFAULT": "var(--pohon-border)",
          "accented": "var(--pohon-border-accented)",
          "bg": "var(--pohon-bg)",
          "inverted": "var(--pohon-border-inverted)",
          "muted": "var(--pohon-border-muted)",
        },
        "divide": {
          "DEFAULT": "var(--pohon-border)",
          "accented": "var(--pohon-border-accented)",
          "inverted": "var(--pohon-border-inverted)",
          "muted": "var(--pohon-border-muted)",
        },
        "fill": {
          "DEFAULT": "var(--pohon-border)",
          "inverted": "var(--pohon-border-inverted)",
        },
        "outline": {
          "DEFAULT": "var(--pohon-border)",
          "inverted": "var(--pohon-border-inverted)",
        },
        "ring": {
          "DEFAULT": "var(--pohon-border)",
          "accented": "var(--pohon-border-accented)",
          "bg": "var(--pohon-bg)",
          "inverted": "var(--pohon-border-inverted)",
          "muted": "var(--pohon-border-muted)",
          "offset": {
            "DEFAULT": "var(--pohon-border)",
            "accented": "var(--pohon-border-accented)",
            "bg": "var(--pohon-bg)",
            "inverted": "var(--pohon-border-inverted)",
            "muted": "var(--pohon-border-muted)",
          },
        },
        "stroke": {
          "DEFAULT": "var(--pohon-border)",
          "inverted": "var(--pohon-border-inverted)",
        },
        "text": {
          "DEFAULT": "var(--pohon-text)",
          "dimmed": "var(--pohon-text-dimmed)",
          "highlighted": "var(--pohon-text-highlighted)",
          "inverted": "var(--pohon-text-inverted)",
          "muted": "var(--pohon-text-muted)",
          "toned": "var(--pohon-text-toned)",
        },
      }
    `);

    const { css } = await uno.generate('color-text');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-text-DEFAULT: var(--pohon-text); }
       :root { --pohon-text-muted: var(--akar-neutral-500); --pohon-text-toned: var(--akar-neutral-600); --pohon-text: var(--akar-neutral-700); --pohon-text-highlighted: var(--akar-neutral-900); --pohon-text-inverted: var(--colors-white); --pohon-bg: var(--colors-white); --pohon-bg-muted: var(--akar-neutral-50); --pohon-bg-elevated: var(--akar-neutral-100); --pohon-bg-accented: var(--akar-neutral-200); --pohon-bg-inverted: var(--akar-neutral-900); --pohon-border: var(--akar-neutral-200); --pohon-border-muted: var(--akar-neutral-200); --pohon-border-accented: var(--akar-neutral-300); --pohon-border-inverted: var(--akar-neutral-900); } .dark { --pohon-text-dimmed: var(--akar-neutral-500); --pohon-text-muted: var(--akar-neutral-400); --pohon-text-toned: var(--akar-neutral-300); --pohon-text: var(--akar-neutral-200); --pohon-text-highlighted: var(--colors-white); --pohon-text-inverted: var(--akar-neutral-900); --pohon-bg: var(--akar-neutral-900); --pohon-bg-muted: var(--akar-neutral-800); --pohon-bg-elevated: var(--akar-neutral-800); --pohon-bg-accented: var(--akar-neutral-700); --pohon-bg-inverted: var(--colors-white); --pohon-border: var(--akar-neutral-800); --pohon-border-muted: var(--akar-neutral-700); --pohon-border-accented: var(--akar-neutral-700); --pohon-border-inverted: var(--colors-white); } 
      /* layer: default */
      .color-text{color:color-mix(in srgb, var(--colors-text-DEFAULT) var(--un-text-opacity), transparent);}
      @supports (color: color-mix(in lab, red, red)){
      .color-text{color:color-mix(in oklab, var(--colors-text-DEFAULT) var(--un-text-opacity), transparent);}
      }"
    `);
  });
});
