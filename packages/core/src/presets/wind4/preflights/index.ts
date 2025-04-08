import type { Preflight } from '@unocss/core';
import type { PresetWind4Options } from '..';
import type { Theme } from '../theme/types';
import { reset } from './reset';
import { theme } from './theme';

export const preflights: (options: PresetWind4Options) => Array<Preflight<Theme>> = (options) => {
  return [
    reset(options),
    theme(options),
  ].filter(Boolean) as Array<Preflight<Theme>>;
};
