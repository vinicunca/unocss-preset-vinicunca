import type { Rule } from '@unocss/core';
import type { Theme } from '@unocss/preset-mini';

import { h } from '@unocss/preset-mini/utils';

import { CSS_VARIABLE_PREFIX } from './animation.entity';
import { handleSlide } from './animation.util';

const DEFAULT_FADE_OPACITY = '0';
const DEFAULT_ZOOM_SCALE = '0';
const DEFAULT_SPIN_DEGREE = '30deg';
export const DEFAULT_SLIDE_TRANSLATE = '100%';

const DIRECTIONS_AUTOCOMPLETE = '(t|b|l|r|top|bottom|left|right)';

const fadeRules: Array<Rule<Theme>> = [
  [
    /^fade-in(?:-(.+))?$/,
    ([, op]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-opacity`]: h.cssvar.percent(op || DEFAULT_FADE_OPACITY),
    }),
    { autocomplete: 'fade-(in|out)-<percent>', layer: 'animation' },
  ],
  [
    /^fade-out(?:-(.+))?$/,
    ([, op]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-opacity`]: h.cssvar.percent(op || DEFAULT_FADE_OPACITY),
    }),
    { layer: 'animation' },
  ],
];

const zoomRules: Array<Rule<Theme>> = [
  [
    /^zoom-in(?:-(.+))?$/,
    ([, scale]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-scale`]: h.cssvar.fraction.percent(scale || DEFAULT_ZOOM_SCALE),
    }),
    { autocomplete: 'zoom-(in|out)-<percent>', layer: 'animation' },
  ],
  [
    /^zoom-out(?:-(.+))?$/,
    ([, scale]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-scale`]: h.cssvar.fraction.percent(scale || DEFAULT_ZOOM_SCALE),
    }),
    { layer: 'animation' },
  ],
];

const spinRules: Array<Rule<Theme>> = [
  [
    /^spin-in(?:-(.+))?$/,
    ([, deg]) => ({
      [`${CSS_VARIABLE_PREFIX}-enter-rotate`]: h.cssvar.degree(deg || DEFAULT_SPIN_DEGREE),
    }),
    { autocomplete: 'spin-(in|out)-<percent>', layer: 'animation' },
  ],
  [
    /^spin-out(?:-(.+))?$/,
    ([, deg]) => ({
      [`${CSS_VARIABLE_PREFIX}-exit-rotate`]: h.cssvar.degree(deg || DEFAULT_SPIN_DEGREE),
    }),
    { layer: 'animation' },
  ],
];

const slideRules: Array<Rule<Theme>> = [
  [
    /^slide-in(?:-from)?-([tblr]|top|bottom|left|right)(?:-(.+))?$/,
    ([, dir, val]) => {
      const [value, direction] = handleSlide(val, dir);

      if (!value) {
        return;
      }

      switch (direction) {
        case 'top':
        case 'bottom': {
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: value };
        }
        case 'left':
        case 'right': {
          return { [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: value };
        }
      }
    },
    {
      autocomplete: [
        `slide-(in|out)-${DIRECTIONS_AUTOCOMPLETE}-<percent>`,
        `slide-(in|out)-${DIRECTIONS_AUTOCOMPLETE}-full`,
        `slide-in-from-${DIRECTIONS_AUTOCOMPLETE}-<percent>`,
        `slide-in-from-${DIRECTIONS_AUTOCOMPLETE}-full`,
      ],
      layer: 'animation',
    },
  ],

  [
    /^slide-out(?:-to)?-([tblr]|top|bottom|left|right)(?:-(.+))?$/,
    ([, dir, val]) => {
      const [value, direction] = handleSlide(val, dir);

      if (!value) {
        return;
      }

      switch (direction) {
        case 'top':
        case 'bottom': {
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: value };
        }
        case 'left':
        case 'right': {
          return { [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: value };
        }
      }
    },
    {
      autocomplete: [
        `slide-out-to-${DIRECTIONS_AUTOCOMPLETE}-<percent>`,
        `slide-out-to-${DIRECTIONS_AUTOCOMPLETE}-full`,
      ],
      layer: 'animation',
    },
  ],
];

export const animationRules: Array<Rule<Theme>> = [
  ...fadeRules,
  ...zoomRules,
  ...spinRules,
  ...slideRules,
];
