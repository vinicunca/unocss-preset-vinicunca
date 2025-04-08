import type { Preflight } from '@unocss/core';
import type { PresetWind4Options } from '..';
import type { Theme } from '../theme';
import { LAYER_PREFLIGHTS } from '@unocss/core';
import { themeTracking } from '../utils';

export function reset(options: PresetWind4Options): Preflight<Theme> | undefined {
  if (options.reset === false) {
    return undefined;
  }

  return {
    getCSS: () => {
      themeTracking('font', 'sans');
      themeTracking('font', 'mono');

      themeTracking('defaults', ['font', 'family']);
      themeTracking('defaults', ['font', 'featureSettings']);
      themeTracking('defaults', ['font', 'variationSettings']);

      themeTracking('defaults', ['monoFont', 'family']);
      themeTracking('defaults', ['monoFont', 'featureSettings']);
      themeTracking('defaults', ['monoFont', 'variationSettings']);

      return '';
    },
    layer: LAYER_PREFLIGHTS,
  };
}
