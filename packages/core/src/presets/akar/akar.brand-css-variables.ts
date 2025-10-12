import type { Preflight } from 'unocss';
import type { VinicuncaAkarOptions } from '../../types';
import { isString } from '@vinicunca/perkakas';
import { theme } from 'unocss/preset-wind4';
import { compressCSS } from '../../utils';

function isHexColor(value: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^#([A-F0-9]{6}|[A-F0-9]{3})$/i.test(value);
}

export function getAkarPreflight(options: VinicuncaAkarOptions): Preflight {
  return {
    layer: 'theme',
    getCSS: () => {
      const brands = options.brands ?? {};

      const lightVars: Array<string> = [];
      const darkVars: Array<string> = [];

      addBrandsVariables({ brands, lightVars, darkVars });
      const { lightVars: pohonLightVars, darkVars: pohonDarkVars } = addPohonNeutralVariables(options);

      lightVars.push(...(pohonLightVars));
      darkVars.push(...(pohonDarkVars));

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

function addBrandsVariables(
  { brands = {}, lightVars, darkVars }:
  {
    brands: VinicuncaAkarOptions['brands'];
    lightVars: Array<string>;
    darkVars: Array<string>;
  },
) {
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
}

function addPohonNeutralVariables(options: VinicuncaAkarOptions) {
  const enablePohon = Boolean(options.pohonThemes);

  if (!enablePohon) {
    return {
      lightVars: [],
      darkVars: [],
    };
  }

  const brandColor = options.brands?.neutral as keyof typeof theme.colors;
  const neutralColor = theme.colors[brandColor ?? 'slate'];

  const lightVars = [
    `--pohon-text-muted: ${neutralColor[500]}`,
    `--pohon-text-toned: ${neutralColor[600]}`,
    `--pohon-text: ${neutralColor[700]}`,
    `--pohon-text-highlighted: ${neutralColor[900]}`,
    `--pohon-text-inverted: ${neutralColor[100]}`,
    `--pohon-bg: ${neutralColor[100]}`,
    `--pohon-bg-muted: ${neutralColor[50]}`,
    `--pohon-bg-elevated: ${neutralColor[100]}`,
    `--pohon-bg-accented: ${neutralColor[200]}`,
    `--pohon-bg-inverted: ${neutralColor[900]}`,
    `--pohon-border: ${neutralColor[200]}`,
    `--pohon-border-muted: ${neutralColor[200]}`,
    `--pohon-border-accented: ${neutralColor[300]}`,
    `--pohon-border-inverted: ${neutralColor[900]}`,
  ];

  const darkVars = [
    `--pohon-text-dimmed: ${neutralColor[500]}`,
    `--pohon-text-muted: ${neutralColor[400]}`,
    `--pohon-text-toned: ${neutralColor[300]}`,
    `--pohon-text: ${neutralColor[200]}`,
    `--pohon-text-highlighted: ${neutralColor[100]}`,
    `--pohon-text-inverted: ${neutralColor[900]}`,
    `--pohon-bg: ${neutralColor[900]}`,
    `--pohon-bg-muted: ${neutralColor[800]}`,
    `--pohon-bg-elevated: ${neutralColor[800]}`,
    `--pohon-bg-accented: ${neutralColor[700]}`,
    `--pohon-bg-inverted: ${neutralColor[100]}`,
    `--pohon-border: ${neutralColor[800]}`,
    `--pohon-border-muted: ${neutralColor[700]}`,
    `--pohon-border-accented: ${neutralColor[700]}`,
    `--pohon-border-inverted: ${neutralColor[100]}`,
  ];

  return {
    lightVars,
    darkVars,
  };
}
