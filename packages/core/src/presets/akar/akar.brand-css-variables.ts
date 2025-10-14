import type { Preflight } from 'unocss';
import type { VinicuncaAkarOptions } from '../../types';
import { compressCSS } from '../../utils';

export function getAkarPreflight(options: VinicuncaAkarOptions): Preflight {
  return {
    layer: 'theme',
    getCSS: () => {
      const enablePohon = Boolean(options.pohonThemes);

      if (!enablePohon) {
        return '';
      }

      const lightVars = [
        '--pohon-text-muted: var(--pohon-color-neutral-500);',
        '--pohon-text-toned: var(--pohon-color-neutral-600);',
        '--pohon-text: var(--pohon-color-neutral-700);',
        '--pohon-text-highlighted: var(--pohon-color-neutral-900);',
        '--pohon-text-inverted: var(--pohon-color-neutral-100);',
        '--pohon-bg: var(--pohon-color-neutral-100);',
        '--pohon-bg-muted: var(--pohon-color-neutral-50);',
        '--pohon-bg-elevated: var(--pohon-color-neutral-100);',
        '--pohon-bg-accented: var(--pohon-color-neutral-200);',
        '--pohon-bg-inverted: var(--pohon-color-neutral-900);',
        '--pohon-border: var(--pohon-color-neutral-200);',
        '--pohon-border-muted: var(--pohon-color-neutral-200);',
        '--pohon-border-accented: var(--pohon-color-neutral-300);',
        '--pohon-border-inverted: var(--pohon-color-neutral-900);',
      ];

      const darkVars = [
        '--pohon-text-dimmed: var(--pohon-color-neutral-500);',
        '--pohon-text-muted: var(--pohon-color-neutral-400);',
        '--pohon-text-toned: var(--pohon-color-neutral-300);',
        '--pohon-text: var(--pohon-color-neutral-200);',
        '--pohon-text-highlighted: var(--pohon-color-neutral-100);',
        '--pohon-text-inverted: var(--pohon-color-neutral-900);',
        '--pohon-bg: var(--pohon-color-neutral-900);',
        '--pohon-bg-muted: var(--pohon-color-neutral-800);',
        '--pohon-bg-elevated: var(--pohon-color-neutral-800);',
        '--pohon-bg-accented: var(--pohon-color-neutral-700);',
        '--pohon-bg-inverted: var(--pohon-color-neutral-100);',
        '--pohon-border: var(--pohon-color-neutral-800);',
        '--pohon-border-muted: var(--pohon-color-neutral-700);',
        '--pohon-border-accented: var(--pohon-color-neutral-700);',
        '--pohon-border-inverted: var(--pohon-color-neutral-100);',
      ];

      const lightStr = lightVars.join('\n  ');
      const darkStr = darkVars.join('\n  ');

      return compressCSS(`
        :root {
          ${lightStr}
        }

        .dark {
          ${darkStr}
        }
      `);
    },
  };
}
