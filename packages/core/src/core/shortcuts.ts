import type { StaticShortcut } from '@unocss/core';
import type { CustomStaticShortcuts } from '../types';

const customShortcuts: CustomStaticShortcuts = [
  ['flex-center', 'flex justify-center items-center'],
  ['flex-x-center', 'flex justify-center'],
  ['flex-y-center', 'flex items-center'],
  ['flex-vertical', 'flex flex-col'],
  ['flex-col-center', 'flex-center flex-col'],
];

export const defaultShortcuts = normalizeShortcut(customShortcuts);

function normalizeShortcut(shortcut: CustomStaticShortcuts): Array<StaticShortcut> {
  return shortcut.flatMap((short) => {
    if (Array.isArray(short[0])) {
      return short[0].map(
        (i) => [i, short[1], short[2]] as StaticShortcut,
      );
    }

    return [short] as Array<StaticShortcut>;
  });
}

/**
 * We need to add the layers into the shortcuts.
 * So we need to run this immediately.
 *
 * We want these shortcuts to have the same layer as uno's default shortcuts
 * so it doesn't clash with the cascade order with the default layer.
 */
for (const short of defaultShortcuts) {
  short[2] = Object.assign(
    short[2] || {},
    {
      layer: 'shortcuts',
    },
  );
}
