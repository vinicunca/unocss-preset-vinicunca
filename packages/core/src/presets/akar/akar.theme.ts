import type { Theme } from 'unocss/preset-wind4';
import type { VinicuncaAkarOptions } from '../../types';
import { isObjectType } from '@vinicunca/perkakas';
import { theme } from 'unocss/preset-wind4';

export function getAkarTheme(brands: VinicuncaAkarOptions['brands'] = {}) {
  const brandTheme = Object.entries(brands)
    .reduce(
      (acc, [brandKey, brandValue]) => {
        acc[brandKey] = theme.colors[brandValue as keyof typeof theme.colors];

        if (isObjectType(acc[brandKey])) {
          acc[brandKey].DEFAULT = `var(--akar-brand-${brandKey})`;
        }

        return acc;
      },
      {} as NonNullable<Theme['colors']>,
    );

  return brandTheme;
}
