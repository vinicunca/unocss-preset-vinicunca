import type { Theme } from 'unocss/preset-wind4';
import type { VinicuncaAkarOptions } from '../../types';
import { isString } from '@vinicunca/perkakas';
import { theme } from 'unocss/preset-wind4';

function isHexColor(value: string) {
  // eslint-disable-next-line regexp/no-unused-capturing-group
  return /^#([A-F0-9]{6}|[A-F0-9]{3})$/i.test(value);
}

export function getAkarTheme(brands: VinicuncaAkarOptions['brands'] = {}) {
  const brandTheme = Object.entries(brands)
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
