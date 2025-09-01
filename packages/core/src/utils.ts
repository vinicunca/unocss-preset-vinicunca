import type { CSSObject } from '@unocss/core';
import type { ThemeAnimation } from '@unocss/preset-mini';
import type { CustomStaticShortcuts } from './types';

// name duration timing-function iteration-count
export const RE_ANIMATION = /^([a-z-]+)\s+([0-9.]+m?s?|[*+])?\s?([a-z-]+(?:\([^)]+\))?|[*+])?\s*([a-z0-9-]+|[*+])?$/i;

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
 */
export function resolveAnimation(extendAnimation: Record<string, string>) {
  const animation: ThemeAnimation = {};
  const keys: Array<
    Exclude<keyof ThemeAnimation, 'properties'>
  > = ['durations', 'timingFns', 'counts'];
  const shortcuts: CustomStaticShortcuts = [];

  // TODO: replace for in with for of to remove the no-restricted-syntax eslint rule
  // eslint-disable-next-line no-restricted-syntax
  for (const key_ in extendAnimation) {
    const val = extendAnimation[key_];
    const match = val.match(RE_ANIMATION);

    if (match != null) {
      const [, name, duration, timing, count] = match;
      const values = [duration, timing, count];

      if (name !== key_) {
        shortcuts.push([`animate-${key_}`, `animate-${name}`]);
      }

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        if (value != null) {
          if (value === '*') {
            continue;
          }

          if (animation[key]) {
            animation[key]![name] = values[i] === '+' ? '' : values[i];
          } else {
            animation[key] = {
              [name]: values[i] === '+' ? '' : values[i],
            };
          }
        }
      }
    }
  }

  return {
    animation,
    shortcuts,
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

export function compressCSS(css: string) {
  return css.replace(/\s+/g, ' ').replace(/\/\*[\s\S]*?\*\//g, '');
}
