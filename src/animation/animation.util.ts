import { h } from '@unocss/preset-mini/utils';

import { DEFAULT_SLIDE_TRANSLATE } from './animation.rule';

export function handleSlide(
  val: string | undefined,
  dir: string | undefined,
): [value?: string | undefined, direction?: string | undefined] {
  let value = h.cssvar.fraction.rem(val || DEFAULT_SLIDE_TRANSLATE);

  if (!value) {
    return [];
  }

  if (!value.startsWith('var(--') && ['left', 'top'].includes(dir ?? '')) {
    if (value.startsWith('-')) {
      value = value.slice(1);
    } else if (value !== '0') {
      value = `-${value}`;
    }
  }

  return [value, dir];
}
