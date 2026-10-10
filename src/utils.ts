import type { ThemeAnimation } from '@unocss/preset-mini';
import type { CSSObject } from 'unocss';

/** name duration timing-function iteration-count */
export const RE_ANIMATION = /^([a-z-]+)\s+([0-9.]+m?s?|var\([^)]+\)|[*+])?\s?([a-z-]+(?:\([^)]+\))?|[*+])?\s*([a-z0-9-]+|var\([^)]+\)|[*+])?$/i;

/**
 * Normalize custom animate usage to UnoCSS animations theme.
 *
 * ⚠️ We must strictly follow the following format. ⚠️
 *
 * [ name, duration, timing-function, iteration-count ]
 *
 * If you use * as placeholder, it will be ignored.
 *
 * [name, duration, *, iteration-count]
 *
 * If you use + as placeholder, it will be replaced with empty string.
 *
 * [name, duration, +, iteration-count]
 *
 * Values are stored under the map key. When the key differs from the keyframe name,
 * the key is returned as an alias so it can reuse the keyframes with its own timing.
 *
 * @example
 *
 * { animate: ['spin 1s linear infinite'] }
 *
 * Will be transformed:
 *
 * {
 *   animate: ['spin 1s linear infinite'],
 *   durations: {
 *     spin: '1s',
 *   },
 *   timingFns: {
 *     spin: 'linear',
 *   },
 *   counts: {
 *     spin: 'infinite',
 *   },
 * }
 *
 * { animate: { 'spin-slow': 'spin 3s linear infinite' } }
 *
 * Will store the values under `spin-slow` and return the alias `{ 'spin-slow': 'spin' }`.
 */
export function resolveAnimation(extendAnimation: Record<string, string>) {
  const animation: ThemeAnimation = {};
  const keys: Array<
    Exclude<keyof ThemeAnimation, 'properties'>
  > = ['durations', 'timingFns', 'counts'];
  const aliases: Record<string, string> = {};

  for (const [key_, val_] of Object.entries(extendAnimation)) {
    const match = val_.match(RE_ANIMATION);

    if (match != null) {
      const [, name, duration, timing, count] = match;
      const values = [duration, timing, count];

      if (name !== key_) {
        aliases[key_] = name;
      }

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        if (value != null) {
          if (value === '*') {
            continue;
          }

          if (animation[key]) {
            animation[key]![key_] = values[i] === '+' ? '' : values[i];
          } else {
            animation[key] = {
              [key_]: values[i] === '+' ? '' : values[i],
            };
          }
        }
      }
    }
  }

  return {
    animation,
    aliases,
  };
}

export function cssObj2StrSync(style: Record<string, CSSObject>): string {
  return Object.keys(style).reduce((str, key) => {
    return `${str}${key}${stringifyObj(style[key])}`;
  }, '').replace(/\n/g, '');
}

export function stringifyObj(obj: CSSObject) {
  return `{${Object.keys(obj).reduce((str, key) => {
    return `${str}${camelToHyphen(key)}:${obj[key]};`;
  }, '')}}`;
}

function camelToHyphen(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function compressCSS(css: string, isDev = false) {
  if (isDev) {
    return css.trim();
  }

  return css.trim().replace(/\s+/g, ' ').replace(/\/\*[\s\S]*?\*\//g, '');
}
