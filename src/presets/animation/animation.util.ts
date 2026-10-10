import { h } from '@unocss/preset-mini/utils';

import { DEFAULT_SLIDE_TRANSLATE } from './animation.rule';

const DIRECTION_MAP: Record<string, string> = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
};

export function handleSlide(
  val: string | undefined,
  dir: string | undefined,
): [value?: string | undefined, direction?: string | undefined] {
  let value = h.cssvar.fraction.rem(val || DEFAULT_SLIDE_TRANSLATE);

  if (!value) {
    return [];
  }

  const direction = DIRECTION_MAP[dir ?? ''] ?? dir;

  if (!value.startsWith('var(--') && ['left', 'top'].includes(direction ?? '')) {
    if (value.startsWith('-')) {
      value = value.slice(1);
    } else if (value !== '0') {
      value = `-${value}`;
    }
  }

  return [value, direction];
}
