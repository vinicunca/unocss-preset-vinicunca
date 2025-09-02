import { describe } from 'node:test';
import { createGenerator } from 'unocss';
import { expect, it } from 'vitest';
import { presetVinicunca } from '../packages/core/src';

describe('akar preset', () => {
  it.skip('merge theme extend', async () => {
    const uno = await createGenerator({
      presets: [
        presetVinicunca({
          akar: true,
          preflights: false,
          theme: {
            extend: {
              animation: {
                'wiggle-slow': 'wiggle 1s ease-in-out infinite',
              },
              keyframes: {
                wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' },
                  '50%': { transform: 'rotate(3deg)' },
                  '20%, 30%': { transform: 'rotate(-3deg)' },
                  '80%': { transform: 'rotate(3deg)' },
                },
              },
            },
          },
        }),
      ],
    });

    const { css } = await uno.generate(`
      :root {
        @apply color-primary;
      }

      div {
        @apply animate-wiggle-slow;
      }
    `, {
      preflights: false,
    });

    expect(css).toMatchInlineSnapshot(`
      "/* layer: shortcuts */
      .animate-wiggle-slow{animation:wiggle 1s ease-in-out infinite;}
      /* layer: default */
      @keyframes drawer-slide-to{to{transform:translate3d(var(--akar-drawer-initial-transform, 100%), 0, 0);}}
      .animate-drawer-slide-to{animation:drawer-slide-to 1s linear 1;}
      @keyframes wiggle{0%, 100%{transform:rotate(-3deg);}50%{transform:rotate(3deg);}20%, 30%{transform:rotate(-3deg);}80%{transform:rotate(3deg);}}"
    `);
  });

  it('outputs drawer animation', async () => {
    const uno = await createGenerator({
      presets: [
        presetVinicunca({
          akar: true,
        }),
      ],
    });

    const { css } = await uno.generate(
      `
      :root {
        @apply color-primary;
      }
    `,
      {
        preflights: false,
      },
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
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
});
