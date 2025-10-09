import type { Preflight } from 'unocss';
import type { VinicuncaAkarOptions } from '../../types';
import { isString } from '@vinicunca/perkakas';
import { theme } from 'unocss/preset-wind4';
import { compressCSS } from '../../utils';

function isHexColor(value: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^#([A-F0-9]{6}|[A-F0-9]{3})$/i.test(value);
}

export function getBrandPreflight(options: VinicuncaAkarOptions): Preflight {
  return {
    layer: 'theme',
    getCSS: () => {
      const brands = options.brands ?? {};

      const lightVars: Array<string> = [];
      const darkVars: Array<string> = [];

      Object.entries(brands).forEach(
        ([brandName, value]) => {
          let lightBrand, darkBrand;

          /**
           * If the value is a hex color, use it directly.
           */
          if (isString(value) && isHexColor(value)) {
            lightBrand = value;
            darkBrand = value;
          } else {
            const colorValue = theme.colors[value as keyof typeof theme.colors];
            lightBrand = colorValue?.[500];
            darkBrand = colorValue?.[400];
          }

          lightVars.push(
            `--akar-brand-${brandName}: ${lightBrand};`,
          );
          darkVars.push(
            `--akar-brand-${brandName}: ${darkBrand};`,
          );
        },
      );
      const lightStr = lightVars.join('\n  ');
      const darkStr = darkVars.join('\n  ');

      return compressCSS(`
        :root {
          ${lightStr}
        }

        .dark {
          ${darkStr}
        }
      `);
    },
  };
}
