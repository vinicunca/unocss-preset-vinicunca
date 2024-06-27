import type { CSSObject, Preset } from 'unocss';

import { toKebabCase } from '@vinicunca/perkakas';
import postcss from 'postcss';
import { objectify, parse } from 'postcss-js';

import { animateCss } from './animate-css';

type CSSObjectEntries = Array<[string, CSSObject]>;

function toCss(obj: any): string {
  return parse(obj).toString();
}

export function presetAnimation(): Preset {
  const root = postcss.parse(animateCss);
  const obj = objectify(root);

  const properties: CSSObjectEntries = [];

  const keyframes: Array<[string, string]> = [];

  for (const [name, body] of Object.entries(obj)) {
    if (name.startsWith('@keyframes')) {
      keyframes.push([
        name.replace('@keyframes', '').trim(),
        `{${toCss(body)}}`,
      ]);
    } else if (name.startsWith('.animate__')) {
      const attributes: Record<string, string> = {};

      Object.keys(body).forEach((key) => {
        if (key !== 'animationName') {
          attributes[toKebabCase(key)] = body[key];
        }
      });

      properties.push([
        name.replace('.animate__', ''),
        {
          ...attributes,
        },
      ]);
    }
  }

  return {
    name: 'vinicunca-preset-animation',

    layers: {
      animation: -10,
    },

    theme: {
      animation: {
        keyframes: {
          ...Object.fromEntries(keyframes),
        },
        properties: {
          ...Object.fromEntries(properties),
        },
      },
    },
  };
}
