import type { Preset } from '@unocss/core';
import type { AnimationOptions } from '../../types';
import { animationRules } from './animation.rule';
import { animationShortcuts } from './animation.shortcut';
import { animationTheme } from './animation.theme';

export function presetAnimation(options: AnimationOptions): Preset {
  return {
    name: 'unocss-preset-animation',

    theme: {
      animation: animationTheme,
    },

    shortcuts: [
      ...animationShortcuts(options),
    ],

    rules: [
      ...animationRules,
    ],
  };
}
