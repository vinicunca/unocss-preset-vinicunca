import type { StaticShortcut } from '@unocss/core';
import type { CustomStaticShortcuts } from '../types';

const customShortcuts: CustomStaticShortcuts = [
  ['flex-center', 'flex justify-center items-center'],
  ['flex-x-center', 'flex justify-center'],
  ['flex-y-center', 'flex items-center'],
  ['flex-vertical', 'flex flex-col'],
  ['flex-col-center', 'flex-center flex-col'],
];

export const defaultShortcuts = normalizeShortcuts(customShortcuts);

function normalizeShortcuts(shortcut: CustomStaticShortcuts): Array<StaticShortcut> {
  return shortcut.flatMap((short) => {
    if (Array.isArray(short[0])) {
      return short[0].map(
        (i) => [i, short[1], short[2]] as StaticShortcut,
      );
    }

    return [short] as Array<StaticShortcut>;
  });
}
