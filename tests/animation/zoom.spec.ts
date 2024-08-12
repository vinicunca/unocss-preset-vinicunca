import { describe, it } from 'vitest';

import { CSS_VARIABLE_PREFIX } from '../../src/animation/animation.entity';
import { getUno } from '../utils';
import { CSS_VARIABLES, DECIMALS, FRACTIONS, INTEGERS } from './data';

describe.concurrent('zoom animation', () => {
  describe('zoom-in', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-enter-scale" css variable and default to "0"`, async ({ expect }) => {
      const { css } = await getUno.generate('zoom-in');

      expect(css).toContain(`.zoom-in{${CSS_VARIABLE_PREFIX}-enter-scale:0;}`);
    });

    describe('percentage', () => {
      it('should convert any percentages including negative', async ({ expect }) => {
        const classnames = INTEGERS.map((i) => `zoom-in-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--10{--vin-enter-scale:-0.1;}
          .zoom-in--100{--vin-enter-scale:-1;}
          .zoom-in--110{--vin-enter-scale:-1.1;}
          .zoom-in--120{--vin-enter-scale:-1.2;}
          .zoom-in--130{--vin-enter-scale:-1.3;}
          .zoom-in--140{--vin-enter-scale:-1.4;}
          .zoom-in--150{--vin-enter-scale:-1.5;}
          .zoom-in--160{--vin-enter-scale:-1.6;}
          .zoom-in--170{--vin-enter-scale:-1.7;}
          .zoom-in--180{--vin-enter-scale:-1.8;}
          .zoom-in--190{--vin-enter-scale:-1.9;}
          .zoom-in--20{--vin-enter-scale:-0.2;}
          .zoom-in--200{--vin-enter-scale:-2;}
          .zoom-in--30{--vin-enter-scale:-0.3;}
          .zoom-in--40{--vin-enter-scale:-0.4;}
          .zoom-in--50{--vin-enter-scale:-0.5;}
          .zoom-in--60{--vin-enter-scale:-0.6;}
          .zoom-in--70{--vin-enter-scale:-0.7;}
          .zoom-in--80{--vin-enter-scale:-0.8;}
          .zoom-in--90{--vin-enter-scale:-0.9;}
          .zoom-in-0{--vin-enter-scale:0;}
          .zoom-in-10{--vin-enter-scale:0.1;}
          .zoom-in-100{--vin-enter-scale:1;}
          .zoom-in-110{--vin-enter-scale:1.1;}
          .zoom-in-120{--vin-enter-scale:1.2;}
          .zoom-in-130{--vin-enter-scale:1.3;}
          .zoom-in-140{--vin-enter-scale:1.4;}
          .zoom-in-150{--vin-enter-scale:1.5;}
          .zoom-in-160{--vin-enter-scale:1.6;}
          .zoom-in-170{--vin-enter-scale:1.7;}
          .zoom-in-180{--vin-enter-scale:1.8;}
          .zoom-in-190{--vin-enter-scale:1.9;}
          .zoom-in-20{--vin-enter-scale:0.2;}
          .zoom-in-200{--vin-enter-scale:2;}
          .zoom-in-30{--vin-enter-scale:0.3;}
          .zoom-in-40{--vin-enter-scale:0.4;}
          .zoom-in-50{--vin-enter-scale:0.5;}
          .zoom-in-60{--vin-enter-scale:0.6;}
          .zoom-in-70{--vin-enter-scale:0.7;}
          .zoom-in-80{--vin-enter-scale:0.8;}
          .zoom-in-90{--vin-enter-scale:0.9;}"
        `);
      });

      it('should also convert decimals including negative', async ({ expect }) => {
        const classnames = DECIMALS.map((i) => `zoom-in-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--0\\.1{--vin-enter-scale:-0.001;}
          .zoom-in--10\\.1{--vin-enter-scale:-0.101;}
          .zoom-in--180\\.37{--vin-enter-scale:-1.8037;}
          .zoom-in--199\\.9{--vin-enter-scale:-1.999;}
          .zoom-in--52\\.1{--vin-enter-scale:-0.521;}
          .zoom-in--66\\.66{--vin-enter-scale:-0.6666;}
          .zoom-in-0\\.1{--vin-enter-scale:0.001;}
          .zoom-in-10\\.1{--vin-enter-scale:0.101;}
          .zoom-in-180\\.37{--vin-enter-scale:1.8037;}
          .zoom-in-199\\.9{--vin-enter-scale:1.999;}
          .zoom-in-52\\.1{--vin-enter-scale:0.521;}
          .zoom-in-66\\.66{--vin-enter-scale:0.6666;}
          .zoom-in-99\\.9{--vin-enter-scale:0.999;}"
        `);
      });

      it('should also convert both integers and decimals with "%" symbol', async ({ expect }) => {
        const classnames = [
          ...INTEGERS.map((i) => `zoom-in-${i}%`),
          ...DECIMALS.map((i) => `zoom-in-${i}%`),
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--0\\.1\\%{--vin-enter-scale:-0.001;}
          .zoom-in--10\\.1\\%{--vin-enter-scale:-0.101;}
          .zoom-in--10\\%{--vin-enter-scale:-0.1;}
          .zoom-in--100\\%{--vin-enter-scale:-1;}
          .zoom-in--110\\%{--vin-enter-scale:-1.1;}
          .zoom-in--120\\%{--vin-enter-scale:-1.2;}
          .zoom-in--130\\%{--vin-enter-scale:-1.3;}
          .zoom-in--140\\%{--vin-enter-scale:-1.4;}
          .zoom-in--150\\%{--vin-enter-scale:-1.5;}
          .zoom-in--160\\%{--vin-enter-scale:-1.6;}
          .zoom-in--170\\%{--vin-enter-scale:-1.7;}
          .zoom-in--180\\.37\\%{--vin-enter-scale:-1.8037;}
          .zoom-in--180\\%{--vin-enter-scale:-1.8;}
          .zoom-in--190\\%{--vin-enter-scale:-1.9;}
          .zoom-in--199\\.9\\%{--vin-enter-scale:-1.999;}
          .zoom-in--20\\%{--vin-enter-scale:-0.2;}
          .zoom-in--200\\%{--vin-enter-scale:-2;}
          .zoom-in--30\\%{--vin-enter-scale:-0.3;}
          .zoom-in--40\\%{--vin-enter-scale:-0.4;}
          .zoom-in--50\\%{--vin-enter-scale:-0.5;}
          .zoom-in--52\\.1\\%{--vin-enter-scale:-0.521;}
          .zoom-in--60\\%{--vin-enter-scale:-0.6;}
          .zoom-in--66\\.66\\%{--vin-enter-scale:-0.6666;}
          .zoom-in--70\\%{--vin-enter-scale:-0.7;}
          .zoom-in--80\\%{--vin-enter-scale:-0.8;}
          .zoom-in--90\\%{--vin-enter-scale:-0.9;}
          .zoom-in-0\\.1\\%{--vin-enter-scale:0.001;}
          .zoom-in-0\\%{--vin-enter-scale:0;}
          .zoom-in-10\\.1\\%{--vin-enter-scale:0.101;}
          .zoom-in-10\\%{--vin-enter-scale:0.1;}
          .zoom-in-100\\%{--vin-enter-scale:1;}
          .zoom-in-110\\%{--vin-enter-scale:1.1;}
          .zoom-in-120\\%{--vin-enter-scale:1.2;}
          .zoom-in-130\\%{--vin-enter-scale:1.3;}
          .zoom-in-140\\%{--vin-enter-scale:1.4;}
          .zoom-in-150\\%{--vin-enter-scale:1.5;}
          .zoom-in-160\\%{--vin-enter-scale:1.6;}
          .zoom-in-170\\%{--vin-enter-scale:1.7;}
          .zoom-in-180\\.37\\%{--vin-enter-scale:1.8037;}
          .zoom-in-180\\%{--vin-enter-scale:1.8;}
          .zoom-in-190\\%{--vin-enter-scale:1.9;}
          .zoom-in-199\\.9\\%{--vin-enter-scale:1.999;}
          .zoom-in-20\\%{--vin-enter-scale:0.2;}
          .zoom-in-200\\%{--vin-enter-scale:2;}
          .zoom-in-30\\%{--vin-enter-scale:0.3;}
          .zoom-in-40\\%{--vin-enter-scale:0.4;}
          .zoom-in-50\\%{--vin-enter-scale:0.5;}
          .zoom-in-52\\.1\\%{--vin-enter-scale:0.521;}
          .zoom-in-60\\%{--vin-enter-scale:0.6;}
          .zoom-in-66\\.66\\%{--vin-enter-scale:0.6666;}
          .zoom-in-70\\%{--vin-enter-scale:0.7;}
          .zoom-in-80\\%{--vin-enter-scale:0.8;}
          .zoom-in-90\\%{--vin-enter-scale:0.9;}
          .zoom-in-99\\.9\\%{--vin-enter-scale:0.999;}"
        `);
      });
    });

    describe('fraction', () => {
      it('should convert any fractions including negative', async ({ expect }) => {
        const classnames = FRACTIONS.map((i) => `zoom-in-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in--1\\/3{--vin-enter-scale:-33.3333333333%;}
          .zoom-in--1\\/4{--vin-enter-scale:-25%;}
          .zoom-in--1\\/6{--vin-enter-scale:-16.6666666667%;}
          .zoom-in--2\\/3{--vin-enter-scale:-66.6666666667%;}
          .zoom-in--3\\/4{--vin-enter-scale:-75%;}
          .zoom-in--5\\/6{--vin-enter-scale:-83.3333333333%;}
          .zoom-in-1\\/3{--vin-enter-scale:33.3333333333%;}
          .zoom-in-1\\/4{--vin-enter-scale:25%;}
          .zoom-in-1\\/6{--vin-enter-scale:16.6666666667%;}
          .zoom-in-2\\/3{--vin-enter-scale:66.6666666667%;}
          .zoom-in-3\\/4{--vin-enter-scale:75%;}
          .zoom-in-5\\/6{--vin-enter-scale:83.3333333333%;}"
        `);
      });

      it('should convert "full" to "100%', async ({ expect }) => {
        const { css } = await getUno.generate('zoom-in-full');

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in-full{--vin-enter-scale:100%;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `zoom-in-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-in-\\$foo{--vin-enter-scale:var(--foo);}
          .zoom-in-\\$foo-bar{--vin-enter-scale:var(--foo-bar);}
          .zoom-in-\\$fooBar{--vin-enter-scale:var(--fooBar);}"
        `);
      });
    });
  });

  describe('zoom-out', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-exit-scale" css variable and default to "0"`, async ({ expect }) => {
      const { css } = await getUno.generate('zoom-out');

      expect(css).toContain(`.zoom-out{${CSS_VARIABLE_PREFIX}-exit-scale:0;}`);
    });

    describe('percentage', () => {
      it('should convert any percentages including negative', async ({ expect }) => {
        const classnames = INTEGERS.map((i) => `zoom-out-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--10{--vin-exit-scale:-0.1;}
          .zoom-out--100{--vin-exit-scale:-1;}
          .zoom-out--110{--vin-exit-scale:-1.1;}
          .zoom-out--120{--vin-exit-scale:-1.2;}
          .zoom-out--130{--vin-exit-scale:-1.3;}
          .zoom-out--140{--vin-exit-scale:-1.4;}
          .zoom-out--150{--vin-exit-scale:-1.5;}
          .zoom-out--160{--vin-exit-scale:-1.6;}
          .zoom-out--170{--vin-exit-scale:-1.7;}
          .zoom-out--180{--vin-exit-scale:-1.8;}
          .zoom-out--190{--vin-exit-scale:-1.9;}
          .zoom-out--20{--vin-exit-scale:-0.2;}
          .zoom-out--200{--vin-exit-scale:-2;}
          .zoom-out--30{--vin-exit-scale:-0.3;}
          .zoom-out--40{--vin-exit-scale:-0.4;}
          .zoom-out--50{--vin-exit-scale:-0.5;}
          .zoom-out--60{--vin-exit-scale:-0.6;}
          .zoom-out--70{--vin-exit-scale:-0.7;}
          .zoom-out--80{--vin-exit-scale:-0.8;}
          .zoom-out--90{--vin-exit-scale:-0.9;}
          .zoom-out-0{--vin-exit-scale:0;}
          .zoom-out-10{--vin-exit-scale:0.1;}
          .zoom-out-100{--vin-exit-scale:1;}
          .zoom-out-110{--vin-exit-scale:1.1;}
          .zoom-out-120{--vin-exit-scale:1.2;}
          .zoom-out-130{--vin-exit-scale:1.3;}
          .zoom-out-140{--vin-exit-scale:1.4;}
          .zoom-out-150{--vin-exit-scale:1.5;}
          .zoom-out-160{--vin-exit-scale:1.6;}
          .zoom-out-170{--vin-exit-scale:1.7;}
          .zoom-out-180{--vin-exit-scale:1.8;}
          .zoom-out-190{--vin-exit-scale:1.9;}
          .zoom-out-20{--vin-exit-scale:0.2;}
          .zoom-out-200{--vin-exit-scale:2;}
          .zoom-out-30{--vin-exit-scale:0.3;}
          .zoom-out-40{--vin-exit-scale:0.4;}
          .zoom-out-50{--vin-exit-scale:0.5;}
          .zoom-out-60{--vin-exit-scale:0.6;}
          .zoom-out-70{--vin-exit-scale:0.7;}
          .zoom-out-80{--vin-exit-scale:0.8;}
          .zoom-out-90{--vin-exit-scale:0.9;}"
        `);
      });

      it('should also convert decimals including negative', async ({ expect }) => {
        const classnames = DECIMALS.map((i) => `zoom-out-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--0\\.1{--vin-exit-scale:-0.001;}
          .zoom-out--10\\.1{--vin-exit-scale:-0.101;}
          .zoom-out--180\\.37{--vin-exit-scale:-1.8037;}
          .zoom-out--199\\.9{--vin-exit-scale:-1.999;}
          .zoom-out--52\\.1{--vin-exit-scale:-0.521;}
          .zoom-out--66\\.66{--vin-exit-scale:-0.6666;}
          .zoom-out-0\\.1{--vin-exit-scale:0.001;}
          .zoom-out-10\\.1{--vin-exit-scale:0.101;}
          .zoom-out-180\\.37{--vin-exit-scale:1.8037;}
          .zoom-out-199\\.9{--vin-exit-scale:1.999;}
          .zoom-out-52\\.1{--vin-exit-scale:0.521;}
          .zoom-out-66\\.66{--vin-exit-scale:0.6666;}
          .zoom-out-99\\.9{--vin-exit-scale:0.999;}"
        `);
      });

      it('should also convert both integers and decimals with "%" symbol', async ({ expect }) => {
        const classnames = [
          ...INTEGERS.map((i) => `zoom-out-${i}%`),
          ...DECIMALS.map((i) => `zoom-out-${i}%`),
        ];

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--0\\.1\\%{--vin-exit-scale:-0.001;}
          .zoom-out--10\\.1\\%{--vin-exit-scale:-0.101;}
          .zoom-out--10\\%{--vin-exit-scale:-0.1;}
          .zoom-out--100\\%{--vin-exit-scale:-1;}
          .zoom-out--110\\%{--vin-exit-scale:-1.1;}
          .zoom-out--120\\%{--vin-exit-scale:-1.2;}
          .zoom-out--130\\%{--vin-exit-scale:-1.3;}
          .zoom-out--140\\%{--vin-exit-scale:-1.4;}
          .zoom-out--150\\%{--vin-exit-scale:-1.5;}
          .zoom-out--160\\%{--vin-exit-scale:-1.6;}
          .zoom-out--170\\%{--vin-exit-scale:-1.7;}
          .zoom-out--180\\.37\\%{--vin-exit-scale:-1.8037;}
          .zoom-out--180\\%{--vin-exit-scale:-1.8;}
          .zoom-out--190\\%{--vin-exit-scale:-1.9;}
          .zoom-out--199\\.9\\%{--vin-exit-scale:-1.999;}
          .zoom-out--20\\%{--vin-exit-scale:-0.2;}
          .zoom-out--200\\%{--vin-exit-scale:-2;}
          .zoom-out--30\\%{--vin-exit-scale:-0.3;}
          .zoom-out--40\\%{--vin-exit-scale:-0.4;}
          .zoom-out--50\\%{--vin-exit-scale:-0.5;}
          .zoom-out--52\\.1\\%{--vin-exit-scale:-0.521;}
          .zoom-out--60\\%{--vin-exit-scale:-0.6;}
          .zoom-out--66\\.66\\%{--vin-exit-scale:-0.6666;}
          .zoom-out--70\\%{--vin-exit-scale:-0.7;}
          .zoom-out--80\\%{--vin-exit-scale:-0.8;}
          .zoom-out--90\\%{--vin-exit-scale:-0.9;}
          .zoom-out-0\\.1\\%{--vin-exit-scale:0.001;}
          .zoom-out-0\\%{--vin-exit-scale:0;}
          .zoom-out-10\\.1\\%{--vin-exit-scale:0.101;}
          .zoom-out-10\\%{--vin-exit-scale:0.1;}
          .zoom-out-100\\%{--vin-exit-scale:1;}
          .zoom-out-110\\%{--vin-exit-scale:1.1;}
          .zoom-out-120\\%{--vin-exit-scale:1.2;}
          .zoom-out-130\\%{--vin-exit-scale:1.3;}
          .zoom-out-140\\%{--vin-exit-scale:1.4;}
          .zoom-out-150\\%{--vin-exit-scale:1.5;}
          .zoom-out-160\\%{--vin-exit-scale:1.6;}
          .zoom-out-170\\%{--vin-exit-scale:1.7;}
          .zoom-out-180\\.37\\%{--vin-exit-scale:1.8037;}
          .zoom-out-180\\%{--vin-exit-scale:1.8;}
          .zoom-out-190\\%{--vin-exit-scale:1.9;}
          .zoom-out-199\\.9\\%{--vin-exit-scale:1.999;}
          .zoom-out-20\\%{--vin-exit-scale:0.2;}
          .zoom-out-200\\%{--vin-exit-scale:2;}
          .zoom-out-30\\%{--vin-exit-scale:0.3;}
          .zoom-out-40\\%{--vin-exit-scale:0.4;}
          .zoom-out-50\\%{--vin-exit-scale:0.5;}
          .zoom-out-52\\.1\\%{--vin-exit-scale:0.521;}
          .zoom-out-60\\%{--vin-exit-scale:0.6;}
          .zoom-out-66\\.66\\%{--vin-exit-scale:0.6666;}
          .zoom-out-70\\%{--vin-exit-scale:0.7;}
          .zoom-out-80\\%{--vin-exit-scale:0.8;}
          .zoom-out-90\\%{--vin-exit-scale:0.9;}
          .zoom-out-99\\.9\\%{--vin-exit-scale:0.999;}"
        `);
      });
    });

    describe('fraction', () => {
      it('should convert any fractions including negative', async ({ expect }) => {
        const classnames = FRACTIONS.map((i) => `zoom-out-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out--1\\/3{--vin-exit-scale:-33.3333333333%;}
          .zoom-out--1\\/4{--vin-exit-scale:-25%;}
          .zoom-out--1\\/6{--vin-exit-scale:-16.6666666667%;}
          .zoom-out--2\\/3{--vin-exit-scale:-66.6666666667%;}
          .zoom-out--3\\/4{--vin-exit-scale:-75%;}
          .zoom-out--5\\/6{--vin-exit-scale:-83.3333333333%;}
          .zoom-out-1\\/3{--vin-exit-scale:33.3333333333%;}
          .zoom-out-1\\/4{--vin-exit-scale:25%;}
          .zoom-out-1\\/6{--vin-exit-scale:16.6666666667%;}
          .zoom-out-2\\/3{--vin-exit-scale:66.6666666667%;}
          .zoom-out-3\\/4{--vin-exit-scale:75%;}
          .zoom-out-5\\/6{--vin-exit-scale:83.3333333333%;}"
        `);
      });

      it('should convert "full" to "100%', async ({ expect }) => {
        const { css } = await getUno.generate('zoom-out-full');

        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out-full{--vin-exit-scale:100%;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `zoom-out-${i}`);

        const { matched, css } = await getUno.generate(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: default */
          .zoom-out-\\$foo{--vin-exit-scale:var(--foo);}
          .zoom-out-\\$foo-bar{--vin-exit-scale:var(--foo-bar);}
          .zoom-out-\\$fooBar{--vin-exit-scale:var(--fooBar);}"
        `);
      });
    });
  });
});
