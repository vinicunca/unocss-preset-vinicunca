import type { Theme } from 'unocss/preset-wind4';
import type { VinicuncaAkarOptions } from '../../types';
import { isString } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { theme } from 'unocss/preset-wind4';
import { DEFAULT_AKAR_OPTIONS } from '../../constants';

export function resolveAkarTheme(options: VinicuncaAkarOptions) {
  const enableAkar = Boolean(options);
  let akarOptions = {} as VinicuncaAkarOptions;

  if (enableAkar) {
    akarOptions = defu(
      options,
      DEFAULT_AKAR_OPTIONS,
    );
  }

  const akarBrands = getAkarBrandColors(akarOptions);
  const pohonThemes = resolvePohonTheme(akarOptions.pohonThemes);

  return {
    ...akarBrands,
    ...pohonThemes,
  };
}

/**
 * We want to generate the brand colors and inject them in to the theme.
 * Please refer to the `DEFAULT_AKAR_OPTIONS.brands` for the default brand colors.
 *
 * So when there's an option like this: `primary: 'violet'`,
 * we want to resolve it to the actual color value from the `unocss/preset-wind4` theme
 * including all the shades, like `primary-100`, `primary-200`, etc.
 *
 * If the brand value is a hex color, we will use it directly as `DEFAULT` shade.
 * e.g. `primary: '#7C3AED'` will be resolved to `{ primary: { DEFAULT: '#7C3AED' } }`
 *
 * TODO: It would be nice to also auto generate all the shades from the hex color,
 * or the user can define the nested object themselves.
 *
 * This function will return an object that can be directly used in the UnoCSS theme colors.
 */
function getAkarBrandColors(options: VinicuncaAkarOptions) {
  const enableDynamic = Boolean(options.enableDynamicBrands);

  // We just need the keys of one of the color to get the shades
  const shades = Object.keys(theme.colors.amber);

  const brandTheme = Object.entries(options.brands ?? {})
    .reduce(
      (acc, [brandKey, brandValue]) => {
        if (isString(brandValue) && isHexColor(brandValue)) {
          acc[brandKey] = {
            DEFAULT: brandValue,
          };
        } else if (enableDynamic) {
          acc[brandKey] = shades.reduce(
            (shadeAcc, shade) => {
              if (shade === 'DEFAULT') {
                shadeAcc[shade] = `var(--akar-${brandKey})`;
              } else {
                shadeAcc[shade] = `var(--akar-${brandKey}-${shade})`;
              }
              return shadeAcc;
            },
            {} as NonNullable<Theme['colors']>,
          );
        } else {
          acc[brandKey] = theme.colors[brandValue as keyof typeof theme.colors];
        }
        return acc;
      },
      {} as NonNullable<Theme['colors']>,
    );

  return brandTheme;
}

function isHexColor(value: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^#([A-F0-9]{6}|[A-F0-9]{3})$/i.test(value);
}

/**
 * Currently we use the default settings:
 * TODO: Allow custom themes and custom css variables.
 */
function resolvePohonTheme(pohon: VinicuncaAkarOptions['pohonThemes']) {
  const enablePohon = Boolean(pohon);

  if (!enablePohon) {
    return {};
  }

  return {
    text: {
      dimmed: 'var(--pohon-text-dimmed)',
      muted: 'var(--pohon-text-muted)',
      toned: 'var(--pohon-text-toned)',
      DEFAULT: 'var(--pohon-text)',
      highlighted: 'var(--pohon-text-highlighted)',
      inverted: 'var(--pohon-text-inverted)',
    },
    background: {
      DEFAULT: 'var(--pohon-bg)',
      muted: 'var(--pohon-bg-muted)',
      elevated: 'var(--pohon-bg-elevated)',
      accented: 'var(--pohon-bg-accented)',
      inverted: 'var(--pohon-bg-inverted)',
      border: 'var(--pohon-border)',
    },
    border: {
      DEFAULT: 'var(--pohon-border)',
      muted: 'var(--pohon-border-muted)',
      accented: 'var(--pohon-border-accented)',
      inverted: 'var(--pohon-border-inverted)',
      bg: 'var(--pohon-bg)',
    },
    ring: {
      DEFAULT: 'var(--pohon-border)',
      muted: 'var(--pohon-border-muted)',
      accented: 'var(--pohon-border-accented)',
      inverted: 'var(--pohon-border-inverted)',
      bg: 'var(--pohon-bg)',
      offset: {
        DEFAULT: 'var(--pohon-border)',
        muted: 'var(--pohon-border-muted)',
        accented: 'var(--pohon-border-accented)',
        inverted: 'var(--pohon-border-inverted)',
        bg: 'var(--pohon-bg)',
      },
    },
    divide: {
      DEFAULT: 'var(--pohon-border)',
      muted: 'var(--pohon-border-muted)',
      accented: 'var(--pohon-border-accented)',
      inverted: 'var(--pohon-border-inverted)',
    },
    outline: {
      DEFAULT: 'var(--pohon-border)',
      inverted: 'var(--pohon-border-inverted)',
    },
    stroke: {
      DEFAULT: 'var(--pohon-border)',
      inverted: 'var(--pohon-border-inverted)',
    },
    fill: {
      DEFAULT: 'var(--pohon-border)',
      inverted: 'var(--pohon-border-inverted)',
    },
  };
}
