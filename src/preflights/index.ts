import type { Preflight } from 'unocss';

import type { ResolvedOptions } from '../types';

import { resetPreflight } from './reset';

export function getPreflights(options: ResolvedOptions): Array<Preflight> {
  if (!options.enableResetStyles) {
    return [];
  }

  return [
    resetPreflight,
  ];
}
