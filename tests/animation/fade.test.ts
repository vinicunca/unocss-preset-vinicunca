import { describe, it } from 'vitest';

import { CSS_VARIABLE_PREFIX } from '../../packages/core/src/presets/animation/animation.entity';
import { getCssFromUnoWithoutPreflights } from '../utils';
import { CSS_VARIABLES, DECIMALS_0_TO_100, INTEGERS_0_TO_100 } from './data';

describe.concurrent('fade animation', async () => {
  function getUno(code: string) {
    return getCssFromUnoWithoutPreflights({
      code,
    });
  }

  describe('fade-in', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-enter-opacity" css variable and default to "0"`, async ({ expect }) => {
      const { css } = await getUno('fade-in');

      expect(css).toContain(`.fade-in{${CSS_VARIABLE_PREFIX}-enter-opacity:0;}`);
    });

    describe('percentage', () => {
      it('should convert percentages from "0" to "100"', async ({ expect }) => {
        const classnames = INTEGERS_0_TO_100.map((i) => `fade-in-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-in-0{--vin-enter-opacity:0;}
          .fade-in-10{--vin-enter-opacity:0.1;}
          .fade-in-100{--vin-enter-opacity:1;}
          .fade-in-20{--vin-enter-opacity:0.2;}
          .fade-in-30{--vin-enter-opacity:0.3;}
          .fade-in-40{--vin-enter-opacity:0.4;}
          .fade-in-50{--vin-enter-opacity:0.5;}
          .fade-in-60{--vin-enter-opacity:0.6;}
          .fade-in-70{--vin-enter-opacity:0.7;}
          .fade-in-80{--vin-enter-opacity:0.8;}
          .fade-in-90{--vin-enter-opacity:0.9;}"
        `);
      });

      it('should also convert decimals', async ({ expect }) => {
        const classnames = DECIMALS_0_TO_100.map((i) => `fade-in-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-in-0\\.1{--vin-enter-opacity:0.001;}
          .fade-in-10\\.1{--vin-enter-opacity:0.101;}
          .fade-in-52\\.1{--vin-enter-opacity:0.521;}
          .fade-in-66\\.66{--vin-enter-opacity:0.6666;}
          .fade-in-99\\.9{--vin-enter-opacity:0.999;}"
        `);
      });

      it('should also convert both integers and decimals with "%" symbol', async ({ expect }) => {
        const classnames = [
          ...INTEGERS_0_TO_100.map((i) => `fade-in-${i}%`),
          ...DECIMALS_0_TO_100.map((i) => `fade-in-${i}%`),
        ];

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-in-0\\.1\\%{--vin-enter-opacity:0.001;}
          .fade-in-0\\%{--vin-enter-opacity:0;}
          .fade-in-10\\.1\\%{--vin-enter-opacity:0.101;}
          .fade-in-10\\%{--vin-enter-opacity:0.1;}
          .fade-in-100\\%{--vin-enter-opacity:1;}
          .fade-in-20\\%{--vin-enter-opacity:0.2;}
          .fade-in-30\\%{--vin-enter-opacity:0.3;}
          .fade-in-40\\%{--vin-enter-opacity:0.4;}
          .fade-in-50\\%{--vin-enter-opacity:0.5;}
          .fade-in-52\\.1\\%{--vin-enter-opacity:0.521;}
          .fade-in-60\\%{--vin-enter-opacity:0.6;}
          .fade-in-66\\.66\\%{--vin-enter-opacity:0.6666;}
          .fade-in-70\\%{--vin-enter-opacity:0.7;}
          .fade-in-80\\%{--vin-enter-opacity:0.8;}
          .fade-in-90\\%{--vin-enter-opacity:0.9;}
          .fade-in-99\\.9\\%{--vin-enter-opacity:0.999;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `fade-in-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-in-\\$foo{--vin-enter-opacity:var(--foo);}
          .fade-in-\\$foo-bar{--vin-enter-opacity:var(--foo-bar);}
          .fade-in-\\$fooBar{--vin-enter-opacity:var(--fooBar);}"
        `);
      });
    });
  });

  describe('fade-out', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-exit-opacity" css variable and default to "0"`, async ({ expect }) => {
      const { css } = await getUno('fade-out');

      expect(css).toContain(`.fade-out{${CSS_VARIABLE_PREFIX}-exit-opacity:0;}`);
    });

    describe('percentage', () => {
      it('should convert percentages from "0" to "100"', async ({ expect }) => {
        const classnames = INTEGERS_0_TO_100.map((i) => `fade-out-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-out-0{--vin-exit-opacity:0;}
          .fade-out-10{--vin-exit-opacity:0.1;}
          .fade-out-100{--vin-exit-opacity:1;}
          .fade-out-20{--vin-exit-opacity:0.2;}
          .fade-out-30{--vin-exit-opacity:0.3;}
          .fade-out-40{--vin-exit-opacity:0.4;}
          .fade-out-50{--vin-exit-opacity:0.5;}
          .fade-out-60{--vin-exit-opacity:0.6;}
          .fade-out-70{--vin-exit-opacity:0.7;}
          .fade-out-80{--vin-exit-opacity:0.8;}
          .fade-out-90{--vin-exit-opacity:0.9;}"
        `);
      });

      it('should also convert decimals', async ({ expect }) => {
        const classnames = DECIMALS_0_TO_100.map((i) => `fade-out-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-out-0\\.1{--vin-exit-opacity:0.001;}
          .fade-out-10\\.1{--vin-exit-opacity:0.101;}
          .fade-out-52\\.1{--vin-exit-opacity:0.521;}
          .fade-out-66\\.66{--vin-exit-opacity:0.6666;}
          .fade-out-99\\.9{--vin-exit-opacity:0.999;}"
        `);
      });

      it('should also convert both integers and decimals with "%" symbol', async ({ expect }) => {
        const classnames = [
          ...INTEGERS_0_TO_100.map((i) => `fade-out-${i}%`),
          ...DECIMALS_0_TO_100.map((i) => `fade-out-${i}%`),
        ];

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-out-0\\.1\\%{--vin-exit-opacity:0.001;}
          .fade-out-0\\%{--vin-exit-opacity:0;}
          .fade-out-10\\.1\\%{--vin-exit-opacity:0.101;}
          .fade-out-10\\%{--vin-exit-opacity:0.1;}
          .fade-out-100\\%{--vin-exit-opacity:1;}
          .fade-out-20\\%{--vin-exit-opacity:0.2;}
          .fade-out-30\\%{--vin-exit-opacity:0.3;}
          .fade-out-40\\%{--vin-exit-opacity:0.4;}
          .fade-out-50\\%{--vin-exit-opacity:0.5;}
          .fade-out-52\\.1\\%{--vin-exit-opacity:0.521;}
          .fade-out-60\\%{--vin-exit-opacity:0.6;}
          .fade-out-66\\.66\\%{--vin-exit-opacity:0.6666;}
          .fade-out-70\\%{--vin-exit-opacity:0.7;}
          .fade-out-80\\%{--vin-exit-opacity:0.8;}
          .fade-out-90\\%{--vin-exit-opacity:0.9;}
          .fade-out-99\\.9\\%{--vin-exit-opacity:0.999;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `fade-out-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: vinicunca */
          .fade-out-\\$foo{--vin-exit-opacity:var(--foo);}
          .fade-out-\\$foo-bar{--vin-exit-opacity:var(--foo-bar);}
          .fade-out-\\$fooBar{--vin-exit-opacity:var(--fooBar);}"
        `);
      });
    });
  });
});
