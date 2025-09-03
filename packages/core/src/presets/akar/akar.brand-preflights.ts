import type { Preflight } from 'unocss';
import type { VinicuncaAkarOptions } from '../../types';
import { theme } from 'unocss/preset-wind4';
import { compressCSS } from '../../utils';

export function getBrandPreflight(options: VinicuncaAkarOptions): Preflight {
  return {
    layer: 'theme',
    getCSS: () => {
      const brands = options.brands ?? {};

      const lightVars: Array<string> = [];
      const darkVars: Array<string> = [];

      Object.entries(brands).forEach(
        ([brandName, value]) => {
          const colorValue = theme.colors[value as keyof typeof theme.colors];
          lightVars.push(
            `--akar-brand-${brandName}: ${colorValue[500]};`,
          );
          darkVars.push(
            `--akar-brand-${brandName}: ${colorValue[400]};`,
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
