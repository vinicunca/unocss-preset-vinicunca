import { describe, it } from 'vitest';

import { CSS_VARIABLE_PREFIX } from '../../packages/core/src/presets/animation/animation.entity';
import { getCssFromUnoWithoutPreflights } from '../utils';
import { CSS_VARIABLES, DECIMALS, INTEGERS } from './data';

describe.concurrent('spin animation', async () => {
  function getUno(code: string | Array<string>) {
    return getCssFromUnoWithoutPreflights({
      code,
    });
  }

  describe('spin-in', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-enter-rotate" css variable and default to "30deg"`, async ({ expect }) => {
      const { css } = await getUno('spin-in');

      expect(css).toContain(`.spin-in{${CSS_VARIABLE_PREFIX}-enter-rotate:30deg;}`);
    });

    describe('angle', () => {
      it('should handle any numbers including negative and unit default to "deg"', async ({ expect }) => {
        const classnames = INTEGERS.map((i) => `spin-in-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-in--10{--vin-enter-rotate:-10deg;}
          .spin-in--100{--vin-enter-rotate:-100deg;}
          .spin-in--110{--vin-enter-rotate:-110deg;}
          .spin-in--120{--vin-enter-rotate:-120deg;}
          .spin-in--130{--vin-enter-rotate:-130deg;}
          .spin-in--140{--vin-enter-rotate:-140deg;}
          .spin-in--150{--vin-enter-rotate:-150deg;}
          .spin-in--160{--vin-enter-rotate:-160deg;}
          .spin-in--170{--vin-enter-rotate:-170deg;}
          .spin-in--180{--vin-enter-rotate:-180deg;}
          .spin-in--190{--vin-enter-rotate:-190deg;}
          .spin-in--20{--vin-enter-rotate:-20deg;}
          .spin-in--200{--vin-enter-rotate:-200deg;}
          .spin-in--30{--vin-enter-rotate:-30deg;}
          .spin-in--40{--vin-enter-rotate:-40deg;}
          .spin-in--50{--vin-enter-rotate:-50deg;}
          .spin-in--60{--vin-enter-rotate:-60deg;}
          .spin-in--70{--vin-enter-rotate:-70deg;}
          .spin-in--80{--vin-enter-rotate:-80deg;}
          .spin-in--90{--vin-enter-rotate:-90deg;}
          .spin-in-0{--vin-enter-rotate:0;}
          .spin-in-10{--vin-enter-rotate:10deg;}
          .spin-in-100{--vin-enter-rotate:100deg;}
          .spin-in-110{--vin-enter-rotate:110deg;}
          .spin-in-120{--vin-enter-rotate:120deg;}
          .spin-in-130{--vin-enter-rotate:130deg;}
          .spin-in-140{--vin-enter-rotate:140deg;}
          .spin-in-150{--vin-enter-rotate:150deg;}
          .spin-in-160{--vin-enter-rotate:160deg;}
          .spin-in-170{--vin-enter-rotate:170deg;}
          .spin-in-180{--vin-enter-rotate:180deg;}
          .spin-in-190{--vin-enter-rotate:190deg;}
          .spin-in-20{--vin-enter-rotate:20deg;}
          .spin-in-200{--vin-enter-rotate:200deg;}
          .spin-in-30{--vin-enter-rotate:30deg;}
          .spin-in-40{--vin-enter-rotate:40deg;}
          .spin-in-50{--vin-enter-rotate:50deg;}
          .spin-in-60{--vin-enter-rotate:60deg;}
          .spin-in-70{--vin-enter-rotate:70deg;}
          .spin-in-80{--vin-enter-rotate:80deg;}
          .spin-in-90{--vin-enter-rotate:90deg;}"
        `);
      });

      it('should also handle decimals including negative', async ({ expect }) => {
        const classnames = DECIMALS.map((i) => `spin-in-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-in--0\\.1{--vin-enter-rotate:-0.1deg;}
          .spin-in--10\\.1{--vin-enter-rotate:-10.1deg;}
          .spin-in--180\\.37{--vin-enter-rotate:-180.37deg;}
          .spin-in--199\\.9{--vin-enter-rotate:-199.9deg;}
          .spin-in--52\\.1{--vin-enter-rotate:-52.1deg;}
          .spin-in--66\\.66{--vin-enter-rotate:-66.66deg;}
          .spin-in-0\\.1{--vin-enter-rotate:0.1deg;}
          .spin-in-10\\.1{--vin-enter-rotate:10.1deg;}
          .spin-in-180\\.37{--vin-enter-rotate:180.37deg;}
          .spin-in-199\\.9{--vin-enter-rotate:199.9deg;}
          .spin-in-52\\.1{--vin-enter-rotate:52.1deg;}
          .spin-in-66\\.66{--vin-enter-rotate:66.66deg;}
          .spin-in-99\\.9{--vin-enter-rotate:99.9deg;}"
        `);
      });

      it('should use units ("deg", "rad", "grad", "turn") as is', async ({ expect }) => {
        const DATASET = INTEGERS.filter(Boolean);

        const classnames = [
          ...DATASET.map((i) => `spin-in-${i}deg`),
          ...DATASET.map((i) => `spin-in-${i}rad`),
          ...DATASET.map((i) => `spin-in-${i}grad`),
          ...DATASET.map((i) => `spin-in-${i}turn`),
        ];

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-in--100deg{--vin-enter-rotate:-100deg;}
          .spin-in--100grad{--vin-enter-rotate:-100grad;}
          .spin-in--100rad{--vin-enter-rotate:-100rad;}
          .spin-in--100turn{--vin-enter-rotate:-100turn;}
          .spin-in--10deg{--vin-enter-rotate:-10deg;}
          .spin-in--10grad{--vin-enter-rotate:-10grad;}
          .spin-in--10rad{--vin-enter-rotate:-10rad;}
          .spin-in--10turn{--vin-enter-rotate:-10turn;}
          .spin-in--110deg{--vin-enter-rotate:-110deg;}
          .spin-in--110grad{--vin-enter-rotate:-110grad;}
          .spin-in--110rad{--vin-enter-rotate:-110rad;}
          .spin-in--110turn{--vin-enter-rotate:-110turn;}
          .spin-in--120deg{--vin-enter-rotate:-120deg;}
          .spin-in--120grad{--vin-enter-rotate:-120grad;}
          .spin-in--120rad{--vin-enter-rotate:-120rad;}
          .spin-in--120turn{--vin-enter-rotate:-120turn;}
          .spin-in--130deg{--vin-enter-rotate:-130deg;}
          .spin-in--130grad{--vin-enter-rotate:-130grad;}
          .spin-in--130rad{--vin-enter-rotate:-130rad;}
          .spin-in--130turn{--vin-enter-rotate:-130turn;}
          .spin-in--140deg{--vin-enter-rotate:-140deg;}
          .spin-in--140grad{--vin-enter-rotate:-140grad;}
          .spin-in--140rad{--vin-enter-rotate:-140rad;}
          .spin-in--140turn{--vin-enter-rotate:-140turn;}
          .spin-in--150deg{--vin-enter-rotate:-150deg;}
          .spin-in--150grad{--vin-enter-rotate:-150grad;}
          .spin-in--150rad{--vin-enter-rotate:-150rad;}
          .spin-in--150turn{--vin-enter-rotate:-150turn;}
          .spin-in--160deg{--vin-enter-rotate:-160deg;}
          .spin-in--160grad{--vin-enter-rotate:-160grad;}
          .spin-in--160rad{--vin-enter-rotate:-160rad;}
          .spin-in--160turn{--vin-enter-rotate:-160turn;}
          .spin-in--170deg{--vin-enter-rotate:-170deg;}
          .spin-in--170grad{--vin-enter-rotate:-170grad;}
          .spin-in--170rad{--vin-enter-rotate:-170rad;}
          .spin-in--170turn{--vin-enter-rotate:-170turn;}
          .spin-in--180deg{--vin-enter-rotate:-180deg;}
          .spin-in--180grad{--vin-enter-rotate:-180grad;}
          .spin-in--180rad{--vin-enter-rotate:-180rad;}
          .spin-in--180turn{--vin-enter-rotate:-180turn;}
          .spin-in--190deg{--vin-enter-rotate:-190deg;}
          .spin-in--190grad{--vin-enter-rotate:-190grad;}
          .spin-in--190rad{--vin-enter-rotate:-190rad;}
          .spin-in--190turn{--vin-enter-rotate:-190turn;}
          .spin-in--200deg{--vin-enter-rotate:-200deg;}
          .spin-in--200grad{--vin-enter-rotate:-200grad;}
          .spin-in--200rad{--vin-enter-rotate:-200rad;}
          .spin-in--200turn{--vin-enter-rotate:-200turn;}
          .spin-in--20deg{--vin-enter-rotate:-20deg;}
          .spin-in--20grad{--vin-enter-rotate:-20grad;}
          .spin-in--20rad{--vin-enter-rotate:-20rad;}
          .spin-in--20turn{--vin-enter-rotate:-20turn;}
          .spin-in--30deg{--vin-enter-rotate:-30deg;}
          .spin-in--30grad{--vin-enter-rotate:-30grad;}
          .spin-in--30rad{--vin-enter-rotate:-30rad;}
          .spin-in--30turn{--vin-enter-rotate:-30turn;}
          .spin-in--40deg{--vin-enter-rotate:-40deg;}
          .spin-in--40grad{--vin-enter-rotate:-40grad;}
          .spin-in--40rad{--vin-enter-rotate:-40rad;}
          .spin-in--40turn{--vin-enter-rotate:-40turn;}
          .spin-in--50deg{--vin-enter-rotate:-50deg;}
          .spin-in--50grad{--vin-enter-rotate:-50grad;}
          .spin-in--50rad{--vin-enter-rotate:-50rad;}
          .spin-in--50turn{--vin-enter-rotate:-50turn;}
          .spin-in--60deg{--vin-enter-rotate:-60deg;}
          .spin-in--60grad{--vin-enter-rotate:-60grad;}
          .spin-in--60rad{--vin-enter-rotate:-60rad;}
          .spin-in--60turn{--vin-enter-rotate:-60turn;}
          .spin-in--70deg{--vin-enter-rotate:-70deg;}
          .spin-in--70grad{--vin-enter-rotate:-70grad;}
          .spin-in--70rad{--vin-enter-rotate:-70rad;}
          .spin-in--70turn{--vin-enter-rotate:-70turn;}
          .spin-in--80deg{--vin-enter-rotate:-80deg;}
          .spin-in--80grad{--vin-enter-rotate:-80grad;}
          .spin-in--80rad{--vin-enter-rotate:-80rad;}
          .spin-in--80turn{--vin-enter-rotate:-80turn;}
          .spin-in--90deg{--vin-enter-rotate:-90deg;}
          .spin-in--90grad{--vin-enter-rotate:-90grad;}
          .spin-in--90rad{--vin-enter-rotate:-90rad;}
          .spin-in--90turn{--vin-enter-rotate:-90turn;}
          .spin-in-100deg{--vin-enter-rotate:100deg;}
          .spin-in-100grad{--vin-enter-rotate:100grad;}
          .spin-in-100rad{--vin-enter-rotate:100rad;}
          .spin-in-100turn{--vin-enter-rotate:100turn;}
          .spin-in-10deg{--vin-enter-rotate:10deg;}
          .spin-in-10grad{--vin-enter-rotate:10grad;}
          .spin-in-10rad{--vin-enter-rotate:10rad;}
          .spin-in-10turn{--vin-enter-rotate:10turn;}
          .spin-in-110deg{--vin-enter-rotate:110deg;}
          .spin-in-110grad{--vin-enter-rotate:110grad;}
          .spin-in-110rad{--vin-enter-rotate:110rad;}
          .spin-in-110turn{--vin-enter-rotate:110turn;}
          .spin-in-120deg{--vin-enter-rotate:120deg;}
          .spin-in-120grad{--vin-enter-rotate:120grad;}
          .spin-in-120rad{--vin-enter-rotate:120rad;}
          .spin-in-120turn{--vin-enter-rotate:120turn;}
          .spin-in-130deg{--vin-enter-rotate:130deg;}
          .spin-in-130grad{--vin-enter-rotate:130grad;}
          .spin-in-130rad{--vin-enter-rotate:130rad;}
          .spin-in-130turn{--vin-enter-rotate:130turn;}
          .spin-in-140deg{--vin-enter-rotate:140deg;}
          .spin-in-140grad{--vin-enter-rotate:140grad;}
          .spin-in-140rad{--vin-enter-rotate:140rad;}
          .spin-in-140turn{--vin-enter-rotate:140turn;}
          .spin-in-150deg{--vin-enter-rotate:150deg;}
          .spin-in-150grad{--vin-enter-rotate:150grad;}
          .spin-in-150rad{--vin-enter-rotate:150rad;}
          .spin-in-150turn{--vin-enter-rotate:150turn;}
          .spin-in-160deg{--vin-enter-rotate:160deg;}
          .spin-in-160grad{--vin-enter-rotate:160grad;}
          .spin-in-160rad{--vin-enter-rotate:160rad;}
          .spin-in-160turn{--vin-enter-rotate:160turn;}
          .spin-in-170deg{--vin-enter-rotate:170deg;}
          .spin-in-170grad{--vin-enter-rotate:170grad;}
          .spin-in-170rad{--vin-enter-rotate:170rad;}
          .spin-in-170turn{--vin-enter-rotate:170turn;}
          .spin-in-180deg{--vin-enter-rotate:180deg;}
          .spin-in-180grad{--vin-enter-rotate:180grad;}
          .spin-in-180rad{--vin-enter-rotate:180rad;}
          .spin-in-180turn{--vin-enter-rotate:180turn;}
          .spin-in-190deg{--vin-enter-rotate:190deg;}
          .spin-in-190grad{--vin-enter-rotate:190grad;}
          .spin-in-190rad{--vin-enter-rotate:190rad;}
          .spin-in-190turn{--vin-enter-rotate:190turn;}
          .spin-in-200deg{--vin-enter-rotate:200deg;}
          .spin-in-200grad{--vin-enter-rotate:200grad;}
          .spin-in-200rad{--vin-enter-rotate:200rad;}
          .spin-in-200turn{--vin-enter-rotate:200turn;}
          .spin-in-20deg{--vin-enter-rotate:20deg;}
          .spin-in-20grad{--vin-enter-rotate:20grad;}
          .spin-in-20rad{--vin-enter-rotate:20rad;}
          .spin-in-20turn{--vin-enter-rotate:20turn;}
          .spin-in-30deg{--vin-enter-rotate:30deg;}
          .spin-in-30grad{--vin-enter-rotate:30grad;}
          .spin-in-30rad{--vin-enter-rotate:30rad;}
          .spin-in-30turn{--vin-enter-rotate:30turn;}
          .spin-in-40deg{--vin-enter-rotate:40deg;}
          .spin-in-40grad{--vin-enter-rotate:40grad;}
          .spin-in-40rad{--vin-enter-rotate:40rad;}
          .spin-in-40turn{--vin-enter-rotate:40turn;}
          .spin-in-50deg{--vin-enter-rotate:50deg;}
          .spin-in-50grad{--vin-enter-rotate:50grad;}
          .spin-in-50rad{--vin-enter-rotate:50rad;}
          .spin-in-50turn{--vin-enter-rotate:50turn;}
          .spin-in-60deg{--vin-enter-rotate:60deg;}
          .spin-in-60grad{--vin-enter-rotate:60grad;}
          .spin-in-60rad{--vin-enter-rotate:60rad;}
          .spin-in-60turn{--vin-enter-rotate:60turn;}
          .spin-in-70deg{--vin-enter-rotate:70deg;}
          .spin-in-70grad{--vin-enter-rotate:70grad;}
          .spin-in-70rad{--vin-enter-rotate:70rad;}
          .spin-in-70turn{--vin-enter-rotate:70turn;}
          .spin-in-80deg{--vin-enter-rotate:80deg;}
          .spin-in-80grad{--vin-enter-rotate:80grad;}
          .spin-in-80rad{--vin-enter-rotate:80rad;}
          .spin-in-80turn{--vin-enter-rotate:80turn;}
          .spin-in-90deg{--vin-enter-rotate:90deg;}
          .spin-in-90grad{--vin-enter-rotate:90grad;}
          .spin-in-90rad{--vin-enter-rotate:90rad;}
          .spin-in-90turn{--vin-enter-rotate:90turn;}"
        `);
      });

      it('should not use any unit for "0"', async ({ expect }) => {
        const classnames = [
          'spin-in-0',
          'spin-in-0deg',
          'spin-in-0rad',
          'spin-in-0grad',
          'spin-in-0turn',
        ];

        const { matched, css } = await getUno(classnames);

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-in-0,
          .spin-in-0deg,
          .spin-in-0grad,
          .spin-in-0rad,
          .spin-in-0turn{--vin-enter-rotate:0;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `spin-in-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-in-\\$foo{--vin-enter-rotate:var(--foo);}
          .spin-in-\\$foo-bar{--vin-enter-rotate:var(--foo-bar);}
          .spin-in-\\$fooBar{--vin-enter-rotate:var(--fooBar);}"
        `);
      });
    });
  });

  describe('spin-out', () => {
    it(`should generate "${CSS_VARIABLE_PREFIX}-exit-rotate" css variable and default to "30deg"`, async ({ expect }) => {
      const { css } = await getUno('spin-out');

      expect(css).toContain(`.spin-out{${CSS_VARIABLE_PREFIX}-exit-rotate:30deg;}`);
    });

    describe('angle', () => {
      it('should handle any numbers including negative and unit default to "deg"', async ({ expect }) => {
        const classnames = INTEGERS.map((i) => `spin-out-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-out--10{--vin-exit-rotate:-10deg;}
          .spin-out--100{--vin-exit-rotate:-100deg;}
          .spin-out--110{--vin-exit-rotate:-110deg;}
          .spin-out--120{--vin-exit-rotate:-120deg;}
          .spin-out--130{--vin-exit-rotate:-130deg;}
          .spin-out--140{--vin-exit-rotate:-140deg;}
          .spin-out--150{--vin-exit-rotate:-150deg;}
          .spin-out--160{--vin-exit-rotate:-160deg;}
          .spin-out--170{--vin-exit-rotate:-170deg;}
          .spin-out--180{--vin-exit-rotate:-180deg;}
          .spin-out--190{--vin-exit-rotate:-190deg;}
          .spin-out--20{--vin-exit-rotate:-20deg;}
          .spin-out--200{--vin-exit-rotate:-200deg;}
          .spin-out--30{--vin-exit-rotate:-30deg;}
          .spin-out--40{--vin-exit-rotate:-40deg;}
          .spin-out--50{--vin-exit-rotate:-50deg;}
          .spin-out--60{--vin-exit-rotate:-60deg;}
          .spin-out--70{--vin-exit-rotate:-70deg;}
          .spin-out--80{--vin-exit-rotate:-80deg;}
          .spin-out--90{--vin-exit-rotate:-90deg;}
          .spin-out-0{--vin-exit-rotate:0;}
          .spin-out-10{--vin-exit-rotate:10deg;}
          .spin-out-100{--vin-exit-rotate:100deg;}
          .spin-out-110{--vin-exit-rotate:110deg;}
          .spin-out-120{--vin-exit-rotate:120deg;}
          .spin-out-130{--vin-exit-rotate:130deg;}
          .spin-out-140{--vin-exit-rotate:140deg;}
          .spin-out-150{--vin-exit-rotate:150deg;}
          .spin-out-160{--vin-exit-rotate:160deg;}
          .spin-out-170{--vin-exit-rotate:170deg;}
          .spin-out-180{--vin-exit-rotate:180deg;}
          .spin-out-190{--vin-exit-rotate:190deg;}
          .spin-out-20{--vin-exit-rotate:20deg;}
          .spin-out-200{--vin-exit-rotate:200deg;}
          .spin-out-30{--vin-exit-rotate:30deg;}
          .spin-out-40{--vin-exit-rotate:40deg;}
          .spin-out-50{--vin-exit-rotate:50deg;}
          .spin-out-60{--vin-exit-rotate:60deg;}
          .spin-out-70{--vin-exit-rotate:70deg;}
          .spin-out-80{--vin-exit-rotate:80deg;}
          .spin-out-90{--vin-exit-rotate:90deg;}"
        `);
      });

      it('should also handle decimals including negative', async ({ expect }) => {
        const classnames = DECIMALS.map((i) => `spin-out-${i}`);

        const { css } = await getUno(classnames.join(' '));

        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-out--0\\.1{--vin-exit-rotate:-0.1deg;}
          .spin-out--10\\.1{--vin-exit-rotate:-10.1deg;}
          .spin-out--180\\.37{--vin-exit-rotate:-180.37deg;}
          .spin-out--199\\.9{--vin-exit-rotate:-199.9deg;}
          .spin-out--52\\.1{--vin-exit-rotate:-52.1deg;}
          .spin-out--66\\.66{--vin-exit-rotate:-66.66deg;}
          .spin-out-0\\.1{--vin-exit-rotate:0.1deg;}
          .spin-out-10\\.1{--vin-exit-rotate:10.1deg;}
          .spin-out-180\\.37{--vin-exit-rotate:180.37deg;}
          .spin-out-199\\.9{--vin-exit-rotate:199.9deg;}
          .spin-out-52\\.1{--vin-exit-rotate:52.1deg;}
          .spin-out-66\\.66{--vin-exit-rotate:66.66deg;}
          .spin-out-99\\.9{--vin-exit-rotate:99.9deg;}"
        `);
      });

      it('should use units ("deg", "rad", "grad", "turn") as is', async ({ expect }) => {
        const DATASET = INTEGERS.filter(Boolean);

        const classnames = [
          ...DATASET.map((i) => `spin-out-${i}deg`),
          ...DATASET.map((i) => `spin-out-${i}rad`),
          ...DATASET.map((i) => `spin-out-${i}grad`),
          ...DATASET.map((i) => `spin-out-${i}turn`),
        ];

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-out--100deg{--vin-exit-rotate:-100deg;}
          .spin-out--100grad{--vin-exit-rotate:-100grad;}
          .spin-out--100rad{--vin-exit-rotate:-100rad;}
          .spin-out--100turn{--vin-exit-rotate:-100turn;}
          .spin-out--10deg{--vin-exit-rotate:-10deg;}
          .spin-out--10grad{--vin-exit-rotate:-10grad;}
          .spin-out--10rad{--vin-exit-rotate:-10rad;}
          .spin-out--10turn{--vin-exit-rotate:-10turn;}
          .spin-out--110deg{--vin-exit-rotate:-110deg;}
          .spin-out--110grad{--vin-exit-rotate:-110grad;}
          .spin-out--110rad{--vin-exit-rotate:-110rad;}
          .spin-out--110turn{--vin-exit-rotate:-110turn;}
          .spin-out--120deg{--vin-exit-rotate:-120deg;}
          .spin-out--120grad{--vin-exit-rotate:-120grad;}
          .spin-out--120rad{--vin-exit-rotate:-120rad;}
          .spin-out--120turn{--vin-exit-rotate:-120turn;}
          .spin-out--130deg{--vin-exit-rotate:-130deg;}
          .spin-out--130grad{--vin-exit-rotate:-130grad;}
          .spin-out--130rad{--vin-exit-rotate:-130rad;}
          .spin-out--130turn{--vin-exit-rotate:-130turn;}
          .spin-out--140deg{--vin-exit-rotate:-140deg;}
          .spin-out--140grad{--vin-exit-rotate:-140grad;}
          .spin-out--140rad{--vin-exit-rotate:-140rad;}
          .spin-out--140turn{--vin-exit-rotate:-140turn;}
          .spin-out--150deg{--vin-exit-rotate:-150deg;}
          .spin-out--150grad{--vin-exit-rotate:-150grad;}
          .spin-out--150rad{--vin-exit-rotate:-150rad;}
          .spin-out--150turn{--vin-exit-rotate:-150turn;}
          .spin-out--160deg{--vin-exit-rotate:-160deg;}
          .spin-out--160grad{--vin-exit-rotate:-160grad;}
          .spin-out--160rad{--vin-exit-rotate:-160rad;}
          .spin-out--160turn{--vin-exit-rotate:-160turn;}
          .spin-out--170deg{--vin-exit-rotate:-170deg;}
          .spin-out--170grad{--vin-exit-rotate:-170grad;}
          .spin-out--170rad{--vin-exit-rotate:-170rad;}
          .spin-out--170turn{--vin-exit-rotate:-170turn;}
          .spin-out--180deg{--vin-exit-rotate:-180deg;}
          .spin-out--180grad{--vin-exit-rotate:-180grad;}
          .spin-out--180rad{--vin-exit-rotate:-180rad;}
          .spin-out--180turn{--vin-exit-rotate:-180turn;}
          .spin-out--190deg{--vin-exit-rotate:-190deg;}
          .spin-out--190grad{--vin-exit-rotate:-190grad;}
          .spin-out--190rad{--vin-exit-rotate:-190rad;}
          .spin-out--190turn{--vin-exit-rotate:-190turn;}
          .spin-out--200deg{--vin-exit-rotate:-200deg;}
          .spin-out--200grad{--vin-exit-rotate:-200grad;}
          .spin-out--200rad{--vin-exit-rotate:-200rad;}
          .spin-out--200turn{--vin-exit-rotate:-200turn;}
          .spin-out--20deg{--vin-exit-rotate:-20deg;}
          .spin-out--20grad{--vin-exit-rotate:-20grad;}
          .spin-out--20rad{--vin-exit-rotate:-20rad;}
          .spin-out--20turn{--vin-exit-rotate:-20turn;}
          .spin-out--30deg{--vin-exit-rotate:-30deg;}
          .spin-out--30grad{--vin-exit-rotate:-30grad;}
          .spin-out--30rad{--vin-exit-rotate:-30rad;}
          .spin-out--30turn{--vin-exit-rotate:-30turn;}
          .spin-out--40deg{--vin-exit-rotate:-40deg;}
          .spin-out--40grad{--vin-exit-rotate:-40grad;}
          .spin-out--40rad{--vin-exit-rotate:-40rad;}
          .spin-out--40turn{--vin-exit-rotate:-40turn;}
          .spin-out--50deg{--vin-exit-rotate:-50deg;}
          .spin-out--50grad{--vin-exit-rotate:-50grad;}
          .spin-out--50rad{--vin-exit-rotate:-50rad;}
          .spin-out--50turn{--vin-exit-rotate:-50turn;}
          .spin-out--60deg{--vin-exit-rotate:-60deg;}
          .spin-out--60grad{--vin-exit-rotate:-60grad;}
          .spin-out--60rad{--vin-exit-rotate:-60rad;}
          .spin-out--60turn{--vin-exit-rotate:-60turn;}
          .spin-out--70deg{--vin-exit-rotate:-70deg;}
          .spin-out--70grad{--vin-exit-rotate:-70grad;}
          .spin-out--70rad{--vin-exit-rotate:-70rad;}
          .spin-out--70turn{--vin-exit-rotate:-70turn;}
          .spin-out--80deg{--vin-exit-rotate:-80deg;}
          .spin-out--80grad{--vin-exit-rotate:-80grad;}
          .spin-out--80rad{--vin-exit-rotate:-80rad;}
          .spin-out--80turn{--vin-exit-rotate:-80turn;}
          .spin-out--90deg{--vin-exit-rotate:-90deg;}
          .spin-out--90grad{--vin-exit-rotate:-90grad;}
          .spin-out--90rad{--vin-exit-rotate:-90rad;}
          .spin-out--90turn{--vin-exit-rotate:-90turn;}
          .spin-out-100deg{--vin-exit-rotate:100deg;}
          .spin-out-100grad{--vin-exit-rotate:100grad;}
          .spin-out-100rad{--vin-exit-rotate:100rad;}
          .spin-out-100turn{--vin-exit-rotate:100turn;}
          .spin-out-10deg{--vin-exit-rotate:10deg;}
          .spin-out-10grad{--vin-exit-rotate:10grad;}
          .spin-out-10rad{--vin-exit-rotate:10rad;}
          .spin-out-10turn{--vin-exit-rotate:10turn;}
          .spin-out-110deg{--vin-exit-rotate:110deg;}
          .spin-out-110grad{--vin-exit-rotate:110grad;}
          .spin-out-110rad{--vin-exit-rotate:110rad;}
          .spin-out-110turn{--vin-exit-rotate:110turn;}
          .spin-out-120deg{--vin-exit-rotate:120deg;}
          .spin-out-120grad{--vin-exit-rotate:120grad;}
          .spin-out-120rad{--vin-exit-rotate:120rad;}
          .spin-out-120turn{--vin-exit-rotate:120turn;}
          .spin-out-130deg{--vin-exit-rotate:130deg;}
          .spin-out-130grad{--vin-exit-rotate:130grad;}
          .spin-out-130rad{--vin-exit-rotate:130rad;}
          .spin-out-130turn{--vin-exit-rotate:130turn;}
          .spin-out-140deg{--vin-exit-rotate:140deg;}
          .spin-out-140grad{--vin-exit-rotate:140grad;}
          .spin-out-140rad{--vin-exit-rotate:140rad;}
          .spin-out-140turn{--vin-exit-rotate:140turn;}
          .spin-out-150deg{--vin-exit-rotate:150deg;}
          .spin-out-150grad{--vin-exit-rotate:150grad;}
          .spin-out-150rad{--vin-exit-rotate:150rad;}
          .spin-out-150turn{--vin-exit-rotate:150turn;}
          .spin-out-160deg{--vin-exit-rotate:160deg;}
          .spin-out-160grad{--vin-exit-rotate:160grad;}
          .spin-out-160rad{--vin-exit-rotate:160rad;}
          .spin-out-160turn{--vin-exit-rotate:160turn;}
          .spin-out-170deg{--vin-exit-rotate:170deg;}
          .spin-out-170grad{--vin-exit-rotate:170grad;}
          .spin-out-170rad{--vin-exit-rotate:170rad;}
          .spin-out-170turn{--vin-exit-rotate:170turn;}
          .spin-out-180deg{--vin-exit-rotate:180deg;}
          .spin-out-180grad{--vin-exit-rotate:180grad;}
          .spin-out-180rad{--vin-exit-rotate:180rad;}
          .spin-out-180turn{--vin-exit-rotate:180turn;}
          .spin-out-190deg{--vin-exit-rotate:190deg;}
          .spin-out-190grad{--vin-exit-rotate:190grad;}
          .spin-out-190rad{--vin-exit-rotate:190rad;}
          .spin-out-190turn{--vin-exit-rotate:190turn;}
          .spin-out-200deg{--vin-exit-rotate:200deg;}
          .spin-out-200grad{--vin-exit-rotate:200grad;}
          .spin-out-200rad{--vin-exit-rotate:200rad;}
          .spin-out-200turn{--vin-exit-rotate:200turn;}
          .spin-out-20deg{--vin-exit-rotate:20deg;}
          .spin-out-20grad{--vin-exit-rotate:20grad;}
          .spin-out-20rad{--vin-exit-rotate:20rad;}
          .spin-out-20turn{--vin-exit-rotate:20turn;}
          .spin-out-30deg{--vin-exit-rotate:30deg;}
          .spin-out-30grad{--vin-exit-rotate:30grad;}
          .spin-out-30rad{--vin-exit-rotate:30rad;}
          .spin-out-30turn{--vin-exit-rotate:30turn;}
          .spin-out-40deg{--vin-exit-rotate:40deg;}
          .spin-out-40grad{--vin-exit-rotate:40grad;}
          .spin-out-40rad{--vin-exit-rotate:40rad;}
          .spin-out-40turn{--vin-exit-rotate:40turn;}
          .spin-out-50deg{--vin-exit-rotate:50deg;}
          .spin-out-50grad{--vin-exit-rotate:50grad;}
          .spin-out-50rad{--vin-exit-rotate:50rad;}
          .spin-out-50turn{--vin-exit-rotate:50turn;}
          .spin-out-60deg{--vin-exit-rotate:60deg;}
          .spin-out-60grad{--vin-exit-rotate:60grad;}
          .spin-out-60rad{--vin-exit-rotate:60rad;}
          .spin-out-60turn{--vin-exit-rotate:60turn;}
          .spin-out-70deg{--vin-exit-rotate:70deg;}
          .spin-out-70grad{--vin-exit-rotate:70grad;}
          .spin-out-70rad{--vin-exit-rotate:70rad;}
          .spin-out-70turn{--vin-exit-rotate:70turn;}
          .spin-out-80deg{--vin-exit-rotate:80deg;}
          .spin-out-80grad{--vin-exit-rotate:80grad;}
          .spin-out-80rad{--vin-exit-rotate:80rad;}
          .spin-out-80turn{--vin-exit-rotate:80turn;}
          .spin-out-90deg{--vin-exit-rotate:90deg;}
          .spin-out-90grad{--vin-exit-rotate:90grad;}
          .spin-out-90rad{--vin-exit-rotate:90rad;}
          .spin-out-90turn{--vin-exit-rotate:90turn;}"
        `);
      });

      it('should not use any unit for "0"', async ({ expect }) => {
        const classnames = [
          'spin-out-0',
          'spin-out-0deg',
          'spin-out-0rad',
          'spin-out-0grad',
          'spin-out-0turn',
        ];

        const { matched, css } = await getUno(classnames);

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-out-0,
          .spin-out-0deg,
          .spin-out-0grad,
          .spin-out-0rad,
          .spin-out-0turn{--vin-exit-rotate:0;}"
        `);
      });
    });

    describe('css variable', () => {
      it('should handle css variables', async ({ expect }) => {
        const classnames = CSS_VARIABLES.map((i) => `spin-out-${i}`);

        const { matched, css } = await getUno(classnames.join(' '));

        expect(matched).toStrictEqual(new Set(classnames));
        expect(css).toMatchInlineSnapshot(`
          "/* layer: preflights */
          *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
          /* layer: vinicunca */
          .spin-out-\\$foo{--vin-exit-rotate:var(--foo);}
          .spin-out-\\$foo-bar{--vin-exit-rotate:var(--foo-bar);}
          .spin-out-\\$fooBar{--vin-exit-rotate:var(--fooBar);}"
        `);
      });
    });
  });
});
