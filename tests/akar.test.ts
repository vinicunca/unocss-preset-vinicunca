import type { PresetVinicuncaOptions, VinicuncaAkarOptions } from '../src/types';
import { createGenerator } from 'unocss';
import { describe, expect, it } from 'vitest';
import { presetVinicunca } from '../src';

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
      },
    );

    const { css } = await uno.generate('color-primary');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-primary-DEFAULT: oklch(71.4% 0.203 305.504); }
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
        brands: {
          primary: {
            50: 'oklch(97.00% 0.030 245.30)',
            100: 'oklch(91.44% 0.059 245.30)',
            200: 'oklch(85.88% 0.087 245.30)',
            300: 'oklch(80.32% 0.116 245.30)',
            400: 'oklch(74.75% 0.145 245.30)',
            500: 'oklch(69.19% 0.173 245.30)',
            600: 'oklch(59.75% 0.155 245.30)',
            700: 'oklch(50.32% 0.136 245.30)',
            800: 'oklch(40.88% 0.117 245.30)',
            900: 'oklch(31.44% 0.099 245.30)',
            950: 'oklch(22.00% 0.080 245.30)',
          },
          secondary: 'blue',
        },
      },
    );

    const { css } = await uno.generate(
      `
      .anu {
        @apply color-primary;
      }
    `,
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: theme */
      :root, :host { --colors-primary-DEFAULT: oklch(69.19% 0.173 245.30); }
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

        enableDynamicBrands: true,
      },
    );

    const { css } = await uno.generate('color-primary color-primary-700');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: properties */
      @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
      @property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
      /* layer: default */
      .color-primary{color:color-mix(in srgb, var(--akar-primary) var(--un-text-opacity), transparent);}
      .color-primary-700{color:color-mix(in srgb, var(--akar-primary-700) var(--un-text-opacity), transparent);}"
    `);
  });

  it('default drawer preflight', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
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

  it('layer is present', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        // This is only to reduce the output size for snapshot testing
        enableDrawer: false,
      },
    );

    expect(uno.config.layers.akar).toBe(10);

    const { css } = await uno.generate('akar:p-4 uno-layer-akar:p-2');

    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root, :host { --spacing: 0.25rem; }
      /* layer: akar */
      .akar\\:p-4{padding:calc(var(--spacing) * 4);}
      .uno-layer-akar\\:p-2{padding:calc(var(--spacing) * 2);}"
    `);
  });

  it('overwrite animation theme', async () => {
    const uno = await getGenerator(
      {
        // This is only to reduce the output size for snapshot testing
        preflights: false,
      },
      {
        enableDynamicBrands: true,
      },
    );

    expect(uno.config.theme.animation).toMatchSnapshot();
  });
});
