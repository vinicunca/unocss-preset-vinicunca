import type { ThemeAnimation } from '@unocss/preset-mini';
import type { CSSObject } from 'unocss';

import { isEmpty, toKebabCase } from '@vinicunca/perkakas';
import postcss from 'postcss';
import { objectify } from 'postcss-js';

import animateData from '../data/animate.data';

export function getAnimationTheme(): ThemeAnimation {
  const theme: ThemeAnimation = {};

  const root = postcss.parse(animateData);
  const obj = objectify(root);

  Object.keys(obj).forEach((key) => {
    if (
      key.startsWith('@-webkit-keyframes')
      || key.startsWith('@media')
      || key.startsWith('.magictime')
    ) {
      return;
    }

    if (key.startsWith('@keyframes')) {
      const name = key.replace('@keyframes ', '');
      theme.keyframes = {
        ...theme.keyframes || {},
        [name]: cssObjectToString(obj[key]),
      };
    } else {
      const {
        animationName,
        animationTimingFunction,
        animationDuration,
        ...properties
      } = obj[key];

      const name = key.replace('.', '');

      if (animationTimingFunction) {
        theme.timingFns = {
          ...theme.timingFns || {},
          [name]: animationTimingFunction,
        };
      }

      if (animationDuration) {
        const duration = animationDuration.replace(/calc\(var\(--animate-duration\)\*([\d.]+)\)/, '$1');

        theme.durations = {
          ...theme.durations || {},
          [name]: `${duration}s`,
        };
      }

      if (isEmpty(properties)) {
        return;
      }

      const transformProperties = Object.keys(properties)
        .reduce((theme, key) => {
          if (key.startsWith('Webkit')) {
            return theme;
          }

          theme[toKebabCase(key)] = properties[key];

          return theme;
        }, {} as any);

      if (isEmpty(transformProperties)) {
        return;
      }

      theme.properties = {
        ...theme.properties || {},
        [name]: transformProperties,
      };
    }
  });

  return theme;
}

function cssObjectToString(style: Record<string, CSSObject>): string {
  return Object.keys(style).reduce(
    (str, key) => {
      return `${str}${key}${stringifyObj(style[key]!)}`;
    },
    '',
  ).replace(/\n/g, '');
}

function stringifyObj(obj: CSSObject) {
  return `{${Object.keys(obj)
    .reduce(
      (str, key) => {
        if (key.startsWith('Webkit')) {
          return '';
        }

        return `${str}${toKebabCase(key)}:${obj[key]};`;
      },
      '',
    )}}`;
}
