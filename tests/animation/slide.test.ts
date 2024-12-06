import { describe, it } from 'vitest';

import { CSS_VARIABLE_PREFIX } from '../../packages/core/src/presets/animation/animation.entity';
import { getUnoWithoutPreflights } from '../utils';
import { CSS_VARIABLES, DECIMALS, FRACTIONS, INTEGERS } from './data';

describe.concurrent('slide animation', async () => {
  const getUno = await getUnoWithoutPreflights();

  describe('slide-in', () => {
    describe('misc', () => {
      it(`"should generate "${CSS_VARIABLE_PREFIX}-enter-translate-x" and "-y" css variable and default to "100%"`, async ({ expect }) => {
        const classnames = [
          'slide-in-top',
          'slide-in-bottom',
          'slide-in-left',
          'slide-in-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-bottom{--vin-enter-translate-y:100%;}
          .slide-in-left{--vin-enter-translate-x:-100%;}
          .slide-in-right{--vin-enter-translate-x:100%;}
          .slide-in-top{--vin-enter-translate-y:-100%;}"
        `);
      });

      it('should handle both with or without "-from"', async ({ expect }) => {
        const classnames = [
          'slide-in-top',
          'slide-in-bottom',
          'slide-in-left',
          'slide-in-right',
          'slide-in-from-top',
          'slide-in-from-bottom',
          'slide-in-from-left',
          'slide-in-from-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-bottom,
          .slide-in-from-bottom{--vin-enter-translate-y:100%;}
          .slide-in-from-left,
          .slide-in-left{--vin-enter-translate-x:-100%;}
          .slide-in-from-right,
          .slide-in-right{--vin-enter-translate-x:100%;}
          .slide-in-from-top,
          .slide-in-top{--vin-enter-translate-y:-100%;}"
        `);
      });

      it('should alias "t|b|l|r" to "top|bottom|left|right"', async ({ expect }) => {
        const classnames = [
          'slide-in-top',
          'slide-in-bottom',
          'slide-in-left',
          'slide-in-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-bottom{--vin-enter-translate-y:100%;}
          .slide-in-left{--vin-enter-translate-x:-100%;}
          .slide-in-right{--vin-enter-translate-x:100%;}
          .slide-in-top{--vin-enter-translate-y:-100%;}"
        `);
      });
    });

    describe('direction', () => {
      it('should generate "top|bottom" as "translate-y"', async ({ expect }) => {
        const classnames = [
          'slide-in-top',
          'slide-in-bottom',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-bottom{--vin-enter-translate-y:100%;}
          .slide-in-top{--vin-enter-translate-y:-100%;}"
        `);
      });

      it('should generate "left|right" as "translate-x"', async ({ expect }) => {
        const classnames = [
          'slide-in-left',
          'slide-in-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-left{--vin-enter-translate-x:-100%;}
          .slide-in-right{--vin-enter-translate-x:100%;}"
        `);
      });
    });

    describe('positivity and negativity', () => {
      it('should generate negative value for "top|left"', async ({ expect }) => {
        const classnames = [
          'slide-in-top',
          'slide-in-left',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-left{--vin-enter-translate-x:-100%;}
          .slide-in-top{--vin-enter-translate-y:-100%;}"
        `);
      });

      it('should generate positive value for "bottom|right"', async ({ expect }) => {
        const classnames = [
          'slide-in-bottom',
          'slide-in-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-bottom{--vin-enter-translate-y:100%;}
          .slide-in-right{--vin-enter-translate-x:100%;}"
        `);
      });

      it('should convert negative value to positive for "top|left"', async ({ expect }) => {
        const classnames = [
          'slide-in-top--10',
          'slide-in-left--10',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-left--10{--vin-enter-translate-x:2.5rem;}
          .slide-in-top--10{--vin-enter-translate-y:2.5rem;}"
        `);
      });
    });

    describe('rem', () => {
      it('should convert any numbers to "rem" (x / 4rem) including negative', async ({ expect }) => {
        const classnames = INTEGERS.map((i) => `slide-in-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-top--10{--vin-enter-translate-y:2.5rem;}
          .slide-in-top--100{--vin-enter-translate-y:25rem;}
          .slide-in-top--110{--vin-enter-translate-y:27.5rem;}
          .slide-in-top--120{--vin-enter-translate-y:30rem;}
          .slide-in-top--130{--vin-enter-translate-y:32.5rem;}
          .slide-in-top--140{--vin-enter-translate-y:35rem;}
          .slide-in-top--150{--vin-enter-translate-y:37.5rem;}
          .slide-in-top--160{--vin-enter-translate-y:40rem;}
          .slide-in-top--170{--vin-enter-translate-y:42.5rem;}
          .slide-in-top--180{--vin-enter-translate-y:45rem;}
          .slide-in-top--190{--vin-enter-translate-y:47.5rem;}
          .slide-in-top--20{--vin-enter-translate-y:5rem;}
          .slide-in-top--200{--vin-enter-translate-y:50rem;}
          .slide-in-top--30{--vin-enter-translate-y:7.5rem;}
          .slide-in-top--40{--vin-enter-translate-y:10rem;}
          .slide-in-top--50{--vin-enter-translate-y:12.5rem;}
          .slide-in-top--60{--vin-enter-translate-y:15rem;}
          .slide-in-top--70{--vin-enter-translate-y:17.5rem;}
          .slide-in-top--80{--vin-enter-translate-y:20rem;}
          .slide-in-top--90{--vin-enter-translate-y:22.5rem;}
          .slide-in-top-0{--vin-enter-translate-y:0;}
          .slide-in-top-10{--vin-enter-translate-y:-2.5rem;}
          .slide-in-top-100{--vin-enter-translate-y:-25rem;}
          .slide-in-top-110{--vin-enter-translate-y:-27.5rem;}
          .slide-in-top-120{--vin-enter-translate-y:-30rem;}
          .slide-in-top-130{--vin-enter-translate-y:-32.5rem;}
          .slide-in-top-140{--vin-enter-translate-y:-35rem;}
          .slide-in-top-150{--vin-enter-translate-y:-37.5rem;}
          .slide-in-top-160{--vin-enter-translate-y:-40rem;}
          .slide-in-top-170{--vin-enter-translate-y:-42.5rem;}
          .slide-in-top-180{--vin-enter-translate-y:-45rem;}
          .slide-in-top-190{--vin-enter-translate-y:-47.5rem;}
          .slide-in-top-20{--vin-enter-translate-y:-5rem;}
          .slide-in-top-200{--vin-enter-translate-y:-50rem;}
          .slide-in-top-30{--vin-enter-translate-y:-7.5rem;}
          .slide-in-top-40{--vin-enter-translate-y:-10rem;}
          .slide-in-top-50{--vin-enter-translate-y:-12.5rem;}
          .slide-in-top-60{--vin-enter-translate-y:-15rem;}
          .slide-in-top-70{--vin-enter-translate-y:-17.5rem;}
          .slide-in-top-80{--vin-enter-translate-y:-20rem;}
          .slide-in-top-90{--vin-enter-translate-y:-22.5rem;}"
        `);
      });

      it('should also convert decimals including negative', async ({ expect }) => {
        const classnames = DECIMALS.map((i) => `slide-in-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-top--0\\.1{--vin-enter-translate-y:0.025rem;}
          .slide-in-top--10\\.1{--vin-enter-translate-y:2.525rem;}
          .slide-in-top--180\\.37{--vin-enter-translate-y:45.0925rem;}
          .slide-in-top--199\\.9{--vin-enter-translate-y:49.975rem;}
          .slide-in-top--52\\.1{--vin-enter-translate-y:13.025rem;}
          .slide-in-top--66\\.66{--vin-enter-translate-y:16.665rem;}
          .slide-in-top-0\\.1{--vin-enter-translate-y:-0.025rem;}
          .slide-in-top-10\\.1{--vin-enter-translate-y:-2.525rem;}
          .slide-in-top-180\\.37{--vin-enter-translate-y:-45.0925rem;}
          .slide-in-top-199\\.9{--vin-enter-translate-y:-49.975rem;}
          .slide-in-top-52\\.1{--vin-enter-translate-y:-13.025rem;}
          .slide-in-top-66\\.66{--vin-enter-translate-y:-16.665rem;}
          .slide-in-top-99\\.9{--vin-enter-translate-y:-24.975rem;}"
        `);
      });
    });

    describe('percentage', () => {
      it('should leave any percentage with "%" symbol as is', async ({ expect }) => {
        const classnames = [
          ...INTEGERS.map((i) => `slide-in-top-${i}%`),
          ...DECIMALS.map((i) => `slide-in-top-${i}%`),
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-top--0\\.1\\%{--vin-enter-translate-y:0.1%;}
          .slide-in-top--10\\.1\\%{--vin-enter-translate-y:10.1%;}
          .slide-in-top--10\\%{--vin-enter-translate-y:10%;}
          .slide-in-top--100\\%{--vin-enter-translate-y:100%;}
          .slide-in-top--110\\%{--vin-enter-translate-y:110%;}
          .slide-in-top--120\\%{--vin-enter-translate-y:120%;}
          .slide-in-top--130\\%{--vin-enter-translate-y:130%;}
          .slide-in-top--140\\%{--vin-enter-translate-y:140%;}
          .slide-in-top--150\\%{--vin-enter-translate-y:150%;}
          .slide-in-top--160\\%{--vin-enter-translate-y:160%;}
          .slide-in-top--170\\%{--vin-enter-translate-y:170%;}
          .slide-in-top--180\\.37\\%{--vin-enter-translate-y:180.37%;}
          .slide-in-top--180\\%{--vin-enter-translate-y:180%;}
          .slide-in-top--190\\%{--vin-enter-translate-y:190%;}
          .slide-in-top--199\\.9\\%{--vin-enter-translate-y:199.9%;}
          .slide-in-top--20\\%{--vin-enter-translate-y:20%;}
          .slide-in-top--200\\%{--vin-enter-translate-y:200%;}
          .slide-in-top--30\\%{--vin-enter-translate-y:30%;}
          .slide-in-top--40\\%{--vin-enter-translate-y:40%;}
          .slide-in-top--50\\%{--vin-enter-translate-y:50%;}
          .slide-in-top--52\\.1\\%{--vin-enter-translate-y:52.1%;}
          .slide-in-top--60\\%{--vin-enter-translate-y:60%;}
          .slide-in-top--66\\.66\\%{--vin-enter-translate-y:66.66%;}
          .slide-in-top--70\\%{--vin-enter-translate-y:70%;}
          .slide-in-top--80\\%{--vin-enter-translate-y:80%;}
          .slide-in-top--90\\%{--vin-enter-translate-y:90%;}
          .slide-in-top-0\\.1\\%{--vin-enter-translate-y:-0.1%;}
          .slide-in-top-0\\%{--vin-enter-translate-y:0;}
          .slide-in-top-10\\.1\\%{--vin-enter-translate-y:-10.1%;}
          .slide-in-top-10\\%{--vin-enter-translate-y:-10%;}
          .slide-in-top-100\\%{--vin-enter-translate-y:-100%;}
          .slide-in-top-110\\%{--vin-enter-translate-y:-110%;}
          .slide-in-top-120\\%{--vin-enter-translate-y:-120%;}
          .slide-in-top-130\\%{--vin-enter-translate-y:-130%;}
          .slide-in-top-140\\%{--vin-enter-translate-y:-140%;}
          .slide-in-top-150\\%{--vin-enter-translate-y:-150%;}
          .slide-in-top-160\\%{--vin-enter-translate-y:-160%;}
          .slide-in-top-170\\%{--vin-enter-translate-y:-170%;}
          .slide-in-top-180\\.37\\%{--vin-enter-translate-y:-180.37%;}
          .slide-in-top-180\\%{--vin-enter-translate-y:-180%;}
          .slide-in-top-190\\%{--vin-enter-translate-y:-190%;}
          .slide-in-top-199\\.9\\%{--vin-enter-translate-y:-199.9%;}
          .slide-in-top-20\\%{--vin-enter-translate-y:-20%;}
          .slide-in-top-200\\%{--vin-enter-translate-y:-200%;}
          .slide-in-top-30\\%{--vin-enter-translate-y:-30%;}
          .slide-in-top-40\\%{--vin-enter-translate-y:-40%;}
          .slide-in-top-50\\%{--vin-enter-translate-y:-50%;}
          .slide-in-top-52\\.1\\%{--vin-enter-translate-y:-52.1%;}
          .slide-in-top-60\\%{--vin-enter-translate-y:-60%;}
          .slide-in-top-66\\.66\\%{--vin-enter-translate-y:-66.66%;}
          .slide-in-top-70\\%{--vin-enter-translate-y:-70%;}
          .slide-in-top-80\\%{--vin-enter-translate-y:-80%;}
          .slide-in-top-90\\%{--vin-enter-translate-y:-90%;}
          .slide-in-top-99\\.9\\%{--vin-enter-translate-y:-99.9%;}"
        `);
      });
    });

    describe('fraction', () => {
      it('should convert any fractions including negative', async ({ expect }) => {
        const classnames = FRACTIONS.map((i) => `slide-in-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-top--1\\/3{--vin-enter-translate-y:33.3333333333%;}
          .slide-in-top--1\\/4{--vin-enter-translate-y:25%;}
          .slide-in-top--1\\/6{--vin-enter-translate-y:16.6666666667%;}
          .slide-in-top--2\\/3{--vin-enter-translate-y:66.6666666667%;}
          .slide-in-top--3\\/4{--vin-enter-translate-y:75%;}
          .slide-in-top--5\\/6{--vin-enter-translate-y:83.3333333333%;}
          .slide-in-top-1\\/3{--vin-enter-translate-y:-33.3333333333%;}
          .slide-in-top-1\\/4{--vin-enter-translate-y:-25%;}
          .slide-in-top-1\\/6{--vin-enter-translate-y:-16.6666666667%;}
          .slide-in-top-2\\/3{--vin-enter-translate-y:-66.6666666667%;}
          .slide-in-top-3\\/4{--vin-enter-translate-y:-75%;}
          .slide-in-top-5\\/6{--vin-enter-translate-y:-83.3333333333%;}"
        `);
      });

      it('should convert "full" to "100%', async ({ expect }) => {
        const { css } = await getUno.generate('slide-in-top-full');

        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-top-full{--vin-enter-translate-y:-100%;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `slide-in-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-in-top-\\$foo{--vin-enter-translate-y:var(--foo);}
          .slide-in-top-\\$foo-bar{--vin-enter-translate-y:var(--foo-bar);}
          .slide-in-top-\\$fooBar{--vin-enter-translate-y:var(--fooBar);}"
        `);
      });
    });
  });

  describe('slide-out', () => {
    describe('misc', () => {
      it(`"should generate "${CSS_VARIABLE_PREFIX}-exit-translate-x" and "-y" css variable and default to "100%"`, async ({ expect }) => {
        const classnames = [
          'slide-out-top',
          'slide-out-bottom',
          'slide-out-left',
          'slide-out-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-bottom{--vin-exit-translate-y:100%;}
          .slide-out-left{--vin-exit-translate-x:-100%;}
          .slide-out-right{--vin-exit-translate-x:100%;}
          .slide-out-top{--vin-exit-translate-y:-100%;}"
        `);
      });

      it('should handle both with or without "-to"', async ({ expect }) => {
        const classnames = [
          'slide-out-top',
          'slide-out-bottom',
          'slide-out-left',
          'slide-out-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-bottom{--vin-exit-translate-y:100%;}
          .slide-out-left{--vin-exit-translate-x:-100%;}
          .slide-out-right{--vin-exit-translate-x:100%;}
          .slide-out-top{--vin-exit-translate-y:-100%;}"
        `);
      });

      it('should alias "t|b|l|r" to "top|bottom|left|right"', async ({ expect }) => {
        const classnames = [
          'slide-out-top',
          'slide-out-bottom',
          'slide-out-left',
          'slide-out-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-bottom{--vin-exit-translate-y:100%;}
          .slide-out-left{--vin-exit-translate-x:-100%;}
          .slide-out-right{--vin-exit-translate-x:100%;}
          .slide-out-top{--vin-exit-translate-y:-100%;}"
        `);
      });
    });

    describe('direction', () => {
      it('should generate "top|bottom" as "translate-y"', async ({ expect }) => {
        const classnames = [
          'slide-out-top',
          'slide-out-bottom',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-bottom{--vin-exit-translate-y:100%;}
          .slide-out-top{--vin-exit-translate-y:-100%;}"
        `);
      });

      it('should generate "left|right" as "translate-x"', async ({ expect }) => {
        const classnames = [
          'slide-out-left',
          'slide-out-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-left{--vin-exit-translate-x:-100%;}
          .slide-out-right{--vin-exit-translate-x:100%;}"
        `);
      });
    });

    describe('positivity and negativity', () => {
      it('should generate negative value for "top|left"', async ({ expect }) => {
        const classnames = [
          'slide-out-top',
          'slide-out-left',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-left{--vin-exit-translate-x:-100%;}
          .slide-out-top{--vin-exit-translate-y:-100%;}"
        `);
      });

      it('should generate positive value for "bottom|right"', async ({ expect }) => {
        const classnames = [
          'slide-out-bottom',
          'slide-out-right',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-bottom{--vin-exit-translate-y:100%;}
          .slide-out-right{--vin-exit-translate-x:100%;}"
        `);
      });

      it('should convert negative value to positive for "top|left"', async ({ expect }) => {
        const classnames = [
          'slide-out-top--10',
          'slide-out-left--10',
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-left--10{--vin-exit-translate-x:2.5rem;}
          .slide-out-top--10{--vin-exit-translate-y:2.5rem;}"
        `);
      });
    });

    describe('rem', () => {
      it('should convert any numbers to "rem" (x / 4rem) including negative', async ({ expect }) => {
        const classnames = INTEGERS.map((i) => `slide-out-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-top--10{--vin-exit-translate-y:2.5rem;}
          .slide-out-top--100{--vin-exit-translate-y:25rem;}
          .slide-out-top--110{--vin-exit-translate-y:27.5rem;}
          .slide-out-top--120{--vin-exit-translate-y:30rem;}
          .slide-out-top--130{--vin-exit-translate-y:32.5rem;}
          .slide-out-top--140{--vin-exit-translate-y:35rem;}
          .slide-out-top--150{--vin-exit-translate-y:37.5rem;}
          .slide-out-top--160{--vin-exit-translate-y:40rem;}
          .slide-out-top--170{--vin-exit-translate-y:42.5rem;}
          .slide-out-top--180{--vin-exit-translate-y:45rem;}
          .slide-out-top--190{--vin-exit-translate-y:47.5rem;}
          .slide-out-top--20{--vin-exit-translate-y:5rem;}
          .slide-out-top--200{--vin-exit-translate-y:50rem;}
          .slide-out-top--30{--vin-exit-translate-y:7.5rem;}
          .slide-out-top--40{--vin-exit-translate-y:10rem;}
          .slide-out-top--50{--vin-exit-translate-y:12.5rem;}
          .slide-out-top--60{--vin-exit-translate-y:15rem;}
          .slide-out-top--70{--vin-exit-translate-y:17.5rem;}
          .slide-out-top--80{--vin-exit-translate-y:20rem;}
          .slide-out-top--90{--vin-exit-translate-y:22.5rem;}
          .slide-out-top-0{--vin-exit-translate-y:0;}
          .slide-out-top-10{--vin-exit-translate-y:-2.5rem;}
          .slide-out-top-100{--vin-exit-translate-y:-25rem;}
          .slide-out-top-110{--vin-exit-translate-y:-27.5rem;}
          .slide-out-top-120{--vin-exit-translate-y:-30rem;}
          .slide-out-top-130{--vin-exit-translate-y:-32.5rem;}
          .slide-out-top-140{--vin-exit-translate-y:-35rem;}
          .slide-out-top-150{--vin-exit-translate-y:-37.5rem;}
          .slide-out-top-160{--vin-exit-translate-y:-40rem;}
          .slide-out-top-170{--vin-exit-translate-y:-42.5rem;}
          .slide-out-top-180{--vin-exit-translate-y:-45rem;}
          .slide-out-top-190{--vin-exit-translate-y:-47.5rem;}
          .slide-out-top-20{--vin-exit-translate-y:-5rem;}
          .slide-out-top-200{--vin-exit-translate-y:-50rem;}
          .slide-out-top-30{--vin-exit-translate-y:-7.5rem;}
          .slide-out-top-40{--vin-exit-translate-y:-10rem;}
          .slide-out-top-50{--vin-exit-translate-y:-12.5rem;}
          .slide-out-top-60{--vin-exit-translate-y:-15rem;}
          .slide-out-top-70{--vin-exit-translate-y:-17.5rem;}
          .slide-out-top-80{--vin-exit-translate-y:-20rem;}
          .slide-out-top-90{--vin-exit-translate-y:-22.5rem;}"
        `);
      });

      it('should also convert decimals including negative', async ({ expect }) => {
        const classnames = DECIMALS.map((i) => `slide-out-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-top--0\\.1{--vin-exit-translate-y:0.025rem;}
          .slide-out-top--10\\.1{--vin-exit-translate-y:2.525rem;}
          .slide-out-top--180\\.37{--vin-exit-translate-y:45.0925rem;}
          .slide-out-top--199\\.9{--vin-exit-translate-y:49.975rem;}
          .slide-out-top--52\\.1{--vin-exit-translate-y:13.025rem;}
          .slide-out-top--66\\.66{--vin-exit-translate-y:16.665rem;}
          .slide-out-top-0\\.1{--vin-exit-translate-y:-0.025rem;}
          .slide-out-top-10\\.1{--vin-exit-translate-y:-2.525rem;}
          .slide-out-top-180\\.37{--vin-exit-translate-y:-45.0925rem;}
          .slide-out-top-199\\.9{--vin-exit-translate-y:-49.975rem;}
          .slide-out-top-52\\.1{--vin-exit-translate-y:-13.025rem;}
          .slide-out-top-66\\.66{--vin-exit-translate-y:-16.665rem;}
          .slide-out-top-99\\.9{--vin-exit-translate-y:-24.975rem;}"
        `);
      });
    });

    describe('percentage', () => {
      it('should leave any percentage with "%" symbol as is', async ({ expect }) => {
        const classnames = [
          ...INTEGERS.map((i) => `slide-out-top-${i}%`),
          ...DECIMALS.map((i) => `slide-out-top-${i}%`),
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-top--0\\.1\\%{--vin-exit-translate-y:0.1%;}
          .slide-out-top--10\\.1\\%{--vin-exit-translate-y:10.1%;}
          .slide-out-top--10\\%{--vin-exit-translate-y:10%;}
          .slide-out-top--100\\%{--vin-exit-translate-y:100%;}
          .slide-out-top--110\\%{--vin-exit-translate-y:110%;}
          .slide-out-top--120\\%{--vin-exit-translate-y:120%;}
          .slide-out-top--130\\%{--vin-exit-translate-y:130%;}
          .slide-out-top--140\\%{--vin-exit-translate-y:140%;}
          .slide-out-top--150\\%{--vin-exit-translate-y:150%;}
          .slide-out-top--160\\%{--vin-exit-translate-y:160%;}
          .slide-out-top--170\\%{--vin-exit-translate-y:170%;}
          .slide-out-top--180\\.37\\%{--vin-exit-translate-y:180.37%;}
          .slide-out-top--180\\%{--vin-exit-translate-y:180%;}
          .slide-out-top--190\\%{--vin-exit-translate-y:190%;}
          .slide-out-top--199\\.9\\%{--vin-exit-translate-y:199.9%;}
          .slide-out-top--20\\%{--vin-exit-translate-y:20%;}
          .slide-out-top--200\\%{--vin-exit-translate-y:200%;}
          .slide-out-top--30\\%{--vin-exit-translate-y:30%;}
          .slide-out-top--40\\%{--vin-exit-translate-y:40%;}
          .slide-out-top--50\\%{--vin-exit-translate-y:50%;}
          .slide-out-top--52\\.1\\%{--vin-exit-translate-y:52.1%;}
          .slide-out-top--60\\%{--vin-exit-translate-y:60%;}
          .slide-out-top--66\\.66\\%{--vin-exit-translate-y:66.66%;}
          .slide-out-top--70\\%{--vin-exit-translate-y:70%;}
          .slide-out-top--80\\%{--vin-exit-translate-y:80%;}
          .slide-out-top--90\\%{--vin-exit-translate-y:90%;}
          .slide-out-top-0\\.1\\%{--vin-exit-translate-y:-0.1%;}
          .slide-out-top-0\\%{--vin-exit-translate-y:0;}
          .slide-out-top-10\\.1\\%{--vin-exit-translate-y:-10.1%;}
          .slide-out-top-10\\%{--vin-exit-translate-y:-10%;}
          .slide-out-top-100\\%{--vin-exit-translate-y:-100%;}
          .slide-out-top-110\\%{--vin-exit-translate-y:-110%;}
          .slide-out-top-120\\%{--vin-exit-translate-y:-120%;}
          .slide-out-top-130\\%{--vin-exit-translate-y:-130%;}
          .slide-out-top-140\\%{--vin-exit-translate-y:-140%;}
          .slide-out-top-150\\%{--vin-exit-translate-y:-150%;}
          .slide-out-top-160\\%{--vin-exit-translate-y:-160%;}
          .slide-out-top-170\\%{--vin-exit-translate-y:-170%;}
          .slide-out-top-180\\.37\\%{--vin-exit-translate-y:-180.37%;}
          .slide-out-top-180\\%{--vin-exit-translate-y:-180%;}
          .slide-out-top-190\\%{--vin-exit-translate-y:-190%;}
          .slide-out-top-199\\.9\\%{--vin-exit-translate-y:-199.9%;}
          .slide-out-top-20\\%{--vin-exit-translate-y:-20%;}
          .slide-out-top-200\\%{--vin-exit-translate-y:-200%;}
          .slide-out-top-30\\%{--vin-exit-translate-y:-30%;}
          .slide-out-top-40\\%{--vin-exit-translate-y:-40%;}
          .slide-out-top-50\\%{--vin-exit-translate-y:-50%;}
          .slide-out-top-52\\.1\\%{--vin-exit-translate-y:-52.1%;}
          .slide-out-top-60\\%{--vin-exit-translate-y:-60%;}
          .slide-out-top-66\\.66\\%{--vin-exit-translate-y:-66.66%;}
          .slide-out-top-70\\%{--vin-exit-translate-y:-70%;}
          .slide-out-top-80\\%{--vin-exit-translate-y:-80%;}
          .slide-out-top-90\\%{--vin-exit-translate-y:-90%;}
          .slide-out-top-99\\.9\\%{--vin-exit-translate-y:-99.9%;}"
        `);
      });
    });

    describe('fraction', () => {
      it('should convert any fractions including negative', async ({ expect }) => {
        const classnames = FRACTIONS.map((i) => `slide-out-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-top--1\\/3{--vin-exit-translate-y:33.3333333333%;}
          .slide-out-top--1\\/4{--vin-exit-translate-y:25%;}
          .slide-out-top--1\\/6{--vin-exit-translate-y:16.6666666667%;}
          .slide-out-top--2\\/3{--vin-exit-translate-y:66.6666666667%;}
          .slide-out-top--3\\/4{--vin-exit-translate-y:75%;}
          .slide-out-top--5\\/6{--vin-exit-translate-y:83.3333333333%;}
          .slide-out-top-1\\/3{--vin-exit-translate-y:-33.3333333333%;}
          .slide-out-top-1\\/4{--vin-exit-translate-y:-25%;}
          .slide-out-top-1\\/6{--vin-exit-translate-y:-16.6666666667%;}
          .slide-out-top-2\\/3{--vin-exit-translate-y:-66.6666666667%;}
          .slide-out-top-3\\/4{--vin-exit-translate-y:-75%;}
          .slide-out-top-5\\/6{--vin-exit-translate-y:-83.3333333333%;}"
        `);
      });

      it('should convert "full" to "100%', async ({ expect }) => {
        const { css } = await getUno.generate('slide-out-top-full');

        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-top-full{--vin-exit-translate-y:-100%;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `slide-out-top-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .slide-out-top-\\$foo{--vin-exit-translate-y:var(--foo);}
          .slide-out-top-\\$foo-bar{--vin-exit-translate-y:var(--foo-bar);}
          .slide-out-top-\\$fooBar{--vin-exit-translate-y:var(--fooBar);}"
        `);
      });
    });
  });
});
