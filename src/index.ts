import type { CSSObject, Preset, Rule } from 'unocss';

import { toKebabCase } from '@vinicunca/perkakas';
import postcss from 'postcss';
import { objectify, parse } from 'postcss-js';

import { animateCss } from './animate-css';

type CSSObjectEntries = Array<[string, CSSObject]>;

function toCss(obj: any): string {
  return parse(obj).toString();
}

const normalizeClassName = (name: string) => {
  const parts = name.split('.');
  return parts[parts.length - 1];
};

export function presetAnimation(): Preset {
  const root = postcss.parse(animateCss);
  const obj = objectify(root);

  const staticRules: CSSObjectEntries = [];
  const keyframes: CSSObjectEntries = [];

  for (const [name, body] of Object.entries(obj)) {
    if (name.startsWith('.animate__')) {
      staticRules.push([name, body]);
    } else if (name.startsWith('@keyframes')) {
      keyframes.push([name.replace('@keyframes', '').trim(), body]);
    }
  }

  const rules: Array<Rule> = [];

  staticRules.forEach(([name, body]) => {
    const className = normalizeClassName(name);
    // eslint-disable-next-line dot-notation
    const animateName = body['animationName'];

    if (animateName) {
      const keyframe = keyframes.find(([k]) => k === animateName);

      if (keyframe) {
        const keyframeCSS = `@keyframes ${animateName} {\n${toCss(keyframe[1])}}`;

        const transformedBody: CSSObject = {
          'animation-duration': '1s',
          'animation-fill-mode': 'both',
        };

        Object.keys(body).forEach((key) => {
          if (!key.includes('Webkit')) {
            let val = body[key];

            if (Array.isArray(body[key])) {
              val = body[key][0];
            }

            transformedBody[toKebabCase(key)] = val;
          }
        });

        rules.push(
          [
            new RegExp(`^${className}`),
            () => {
              return [
                transformedBody,
                keyframeCSS,
              ];
            },
            { layer: 'animation' },
          ],
        );
      }
    }
  });

  return {
    name: 'vinicunca-preset-animation',

    layers: {
      animation: -10,
      default: 0,
    },

    rules,
  };
}
