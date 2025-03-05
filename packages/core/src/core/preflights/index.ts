import type { Preflight } from 'unocss';
import type { ResolvedOptions } from '../../types';

import { isBoolean } from '@vinicunca/perkakas';
import { resetPreflight } from './reset';

export function getPreflights(options: ResolvedOptions): Array<Preflight> {
  if (isBoolean(options.preflights)) {
    return options.preflights
      ? [
          resetPreflight,
        ]
      : [];
  }

  return [
    options.preflights.reset ? resetPreflight : undefined,
  ].filter(Boolean) as Array<Preflight>;
}
