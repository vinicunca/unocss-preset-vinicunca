import type { Theme } from 'unocss/preset-wind4';
import type { PresetVinicuncaOptions } from '../../types';
import { isObjectType, isString, mergeDeep } from '@vinicunca/perkakas';
import { theme } from 'unocss/preset-wind4';
import { DEFAULT_AKAR_OPTIONS } from '../../constants';

function isHexColor(value: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^#([A-F0-9]{6}|[A-F0-9]{3})$/i.test(value);
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
export function getAkarBrandColors(options: Required<PresetVinicuncaOptions>) {
  let akarBrands = DEFAULT_AKAR_OPTIONS.brands ?? {};

  if (isObjectType(options.akar)) {
    akarBrands = mergeDeep(
      akarBrands,
      options.akar.brands ?? {},
    );
  }

  const brandTheme = Object.entries(akarBrands)
    .reduce(
      (acc, [brandKey, brandValue]) => {
        if (isString(brandValue) && isHexColor(brandValue)) {
          acc[brandKey] = {
            DEFAULT: brandValue,
          };
        } else {
          acc[brandKey] = theme.colors[brandValue as keyof typeof theme.colors];
        }
        return acc;
      },
      {} as NonNullable<Theme['colors']>,
    );

  return brandTheme;
}
