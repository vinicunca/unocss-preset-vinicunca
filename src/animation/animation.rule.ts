import type { Rule } from '@unocss/core';
import type { Theme } from '@unocss/preset-mini';

export const animationRules: Array<Rule<Theme>> = [
  [
    /^animate-(.+)$/,
    ([, name], { theme }) => {
      const kf = theme.animation?.keyframes?.[name];

      if (kf) {
        const duration = theme.animation?.durations?.[name] ?? '1s';
        const timing = theme.animation?.timingFns?.[name];
        const props = theme.animation?.properties?.[name];

        return [
          `@keyframes ${name}${kf}`,
          {
            'animation-name': name,
            'animation-fill-mode': 'both',
            'animation-duration': duration,
            'animation-timing-function': timing,
            ...props,
          },
        ];
      }
    },
    { autocomplete: 'animate-$animation.keyframes' },
  ],
];
