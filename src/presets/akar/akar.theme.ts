import type { Theme } from 'unocss/preset-wind4';
import type { VinicuncaAkarOptions } from '../../types';
import { isObjectType, isString } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { theme } from 'unocss/preset-wind4';
import { DEFAULT_AKAR_OPTIONS } from '../../constants';

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export function resolveAkarThemeColors(options: VinicuncaAkarOptions) {
  const enableAkar = Boolean(options);
  let akarOptions = {} as VinicuncaAkarOptions;

  if (enableAkar) {
    akarOptions = defu(
      options,
      DEFAULT_AKAR_OPTIONS,
    );
  }

  const akarBrands = getAkarBrandColors(akarOptions);

  return akarBrands;
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

  const brandTheme = Object.entries(options.brands ?? {})
    .reduce(
      (acc, [brandKey, brandValue]) => {
        acc[brandKey] = resolveBrandColor({
          brandKey,
          brandValue,
          enableDynamic,
        });
        return acc;
      },
      {} as NonNullable<Theme['colors']>,
    );

  return brandTheme;
}

type AkarBrandValue = NonNullable<VinicuncaAkarOptions['brands']>[string];

function resolveBrandColor(
  {
    brandKey,
    brandValue,
    enableDynamic,
  }: {
    brandKey: string;
    brandValue: AkarBrandValue;
    enableDynamic: boolean;
  },
) {
  if (isString(brandValue) && isHexColor(brandValue)) {
    return {
      DEFAULT: brandValue,
    };
  }

  if (isObjectType(brandValue)) {
    return {
      ...brandValue,
      DEFAULT: brandValue['500'],
    };
  }

  if (enableDynamic) {
    return generateDynamicShades(brandKey);
  }

  return theme.colors[brandValue as keyof typeof theme.colors];
}

function generateDynamicShades(brandKey: string) {
  const shadeObject = SHADES.reduce(
    (shadeAcc, shade) => {
      shadeAcc[shade] = `var(--akar-${brandKey}-${shade})`;

      return shadeAcc;
    },
    {} as NonNullable<Theme['colors']>,
  );

  shadeObject.DEFAULT = `var(--akar-${brandKey})`;

  return shadeObject;
}

function isHexColor(value: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^#([A-F0-9]{6}|[A-F0-9]{3})$/i.test(value);
}
