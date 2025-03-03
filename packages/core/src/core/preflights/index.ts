import type { Preflight } from 'unocss';
import type { ResolvedOptions } from '../../types';

import { theme as miniTheme } from '@unocss/preset-mini';

import { isBoolean } from '@vinicunca/perkakas';
import { entriesToCss } from 'unocss';
import { resetPreflight } from './reset';
import { compressCSS } from './utils';

export function getPreflights(options: ResolvedOptions): Array<Preflight> {
  const miniPreflights = getMiniPreflights();

  if (isBoolean(options.preflights)) {
    return options.preflights
      ? [
          resetPreflight,
          miniPreflights,
        ]
      : [];
  }

  return [
    options.preflights.reset ? resetPreflight : undefined,
    options.preflights.mini ? miniPreflights : undefined,
  ].filter(Boolean) as Array<Preflight>;
}

/**
 * Currently the preset wind4 doesn't include the mini's preflight.
 * This is different with the wind3 preset.
 * Since we still rely on the beta version of the latest unocss,
 * we need to include these preflights so it has all the transition and shadow css variables utilities.
 */
function getMiniPreflights(): Preflight {
  const entries = Object.entries(miniTheme.preflightBase);
  const css = entriesToCss(entries);

  const roots = ['*,::before,::after', '::backdrop'];

  const cssContent = roots.map((root) => `${root}{${css}}`).join('');

  return {
    layer: 'preflights',
    getCSS: () => compressCSS(cssContent),
  };
}
