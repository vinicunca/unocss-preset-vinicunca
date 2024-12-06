import type { RuleMeta, StaticShortcut } from '@unocss/core';
import type { CustomStaticShortcuts } from '../types';
import { layerMeta } from '../meta';

const customShortcuts: CustomStaticShortcuts = [
  ['flex-center', 'flex justify-center items-center'],
  ['flex-x-center', 'flex justify-center'],
  ['flex-y-center', 'flex items-center'],
  ['flex-col', 'flex flex-col'],
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
 * We need to add the layers into the shortcuts
 */
normalizeShortcutMeta(layerMeta);

export function normalizeShortcutMeta(ruleMeta: RuleMeta) {
  for (const short of defaultShortcuts) {
    short[2] = Object.assign(
      short[2] || {},
      ruleMeta,
    );
  }
}
