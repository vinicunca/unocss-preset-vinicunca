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
        '--pohon-text-muted: var(--akar-neutral-500);',
        '--pohon-text-toned: var(--akar-neutral-600);',
        '--pohon-text: var(--akar-neutral-700);',
        '--pohon-text-highlighted: var(--akar-neutral-900);',
        '--pohon-text-inverted: var(--colors-white);',
        '--pohon-bg: var(--colors-white);',
        '--pohon-bg-muted: var(--akar-neutral-50);',
        '--pohon-bg-elevated: var(--akar-neutral-100);',
        '--pohon-bg-accented: var(--akar-neutral-200);',
        '--pohon-bg-inverted: var(--akar-neutral-900);',
        '--pohon-border: var(--akar-neutral-200);',
        '--pohon-border-muted: var(--akar-neutral-200);',
        '--pohon-border-accented: var(--akar-neutral-300);',
        '--pohon-border-inverted: var(--akar-neutral-900);',
      ];

      const darkVars = [
        '--pohon-text-dimmed: var(--akar-neutral-500);',
        '--pohon-text-muted: var(--akar-neutral-400);',
        '--pohon-text-toned: var(--akar-neutral-300);',
        '--pohon-text: var(--akar-neutral-200);',
        '--pohon-text-highlighted: var(--colors-white);',
        '--pohon-text-inverted: var(--akar-neutral-900);',
        '--pohon-bg: var(--akar-neutral-900);',
        '--pohon-bg-muted: var(--akar-neutral-800);',
        '--pohon-bg-elevated: var(--akar-neutral-800);',
        '--pohon-bg-accented: var(--akar-neutral-700);',
        '--pohon-bg-inverted: var(--colors-white);',
        '--pohon-border: var(--akar-neutral-800);',
        '--pohon-border-muted: var(--akar-neutral-700);',
        '--pohon-border-accented: var(--akar-neutral-700);',
        '--pohon-border-inverted: var(--colors-white);',
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
