import type { Theme } from '@unocss/preset-mini';
import type { CSSObject, DynamicShortcut } from 'unocss';

import type { AnimationOptions } from '../types';

import { CSS_VARIABLE_PREFIX, ENTER_ANIMATION_NAME, EXIT_ANIMATION_NAME } from './animation.entity';

export function animationShortcuts(options: AnimationOptions): Array<DynamicShortcut<Theme>> {
  function getSharedAnimationProperties(theme: Theme): CSSObject {
    return {
      'animation-duration': options.duration ? `${options.duration}${options.unit}` : theme.duration?.DEFAULT,
      ...options.delay && { 'animation-delay': `${options.delay}${options.unit}` },
      ...options.direction && { 'animation-direction': options.direction },
      ...options.fillMode && { 'animation-fill-mode': options.fillMode },
      ...options.iterationCount && { 'animation-iteration-count': options.iterationCount },
      ...options.playState && { 'animation-play-state': options.playState },
      ...options.timingFunction && { 'animation-timing-function': options.timingFunction },
    };
  }

  return [
    [
      /^animate-in$/,
      (_, { theme }) => [
        `keyframes-${ENTER_ANIMATION_NAME}`,
        {
          'animation-name': ENTER_ANIMATION_NAME,
          ...getSharedAnimationProperties(theme),
          [`${CSS_VARIABLE_PREFIX}-enter-opacity`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-scale`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-rotate`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-translate-x`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-enter-translate-y`]: 'initial',
        },
      ],
      { autocomplete: 'animate-in' },
    ],
    [
      /^animate-out$/,
      (_, { theme }) => [
        `keyframes-${EXIT_ANIMATION_NAME}`,
        {
          'animation-name': EXIT_ANIMATION_NAME,
          ...getSharedAnimationProperties(theme),
          [`${CSS_VARIABLE_PREFIX}-exit-opacity`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-scale`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-rotate`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-translate-x`]: 'initial',
          [`${CSS_VARIABLE_PREFIX}-exit-translate-y`]: 'initial',
        },
      ],
      { autocomplete: 'animate-out' },
    ],
  ];
}
