import type MagicString from 'magic-string';
import {
  expandVariantGroup,
  isStaticShortcut,
  type ShortcutValue,
  type SourceCodeTransformer,
  type UnoGenerator,
} from '@unocss/core';
import { isString } from '@vinicunca/perkakas';

export interface KeepOption {
  /**
   * keep prefix for your alias.
   *
   * @default '+'
   */
  prefix: string;
  /**
   * Decedide whether to put it in `blocklist`.
   *
   * @default true
   */
  block: boolean;
}

export interface TransformerAliasOptions {
  /**
   * Prefix for your alias.
   *
   * @default "*"
   */
  prefix?: string;
  /**
   * Prefix for your alias and keep the original class.
   *
   * @default '+'
   */
  keep?: string | KeepOption;
}

export function transformerAlias(options?: TransformerAliasOptions): SourceCodeTransformer {
  return {
    name: 'unocss-transformer-alias',
    enforce: 'pre',
    async transform(code, _, { uno }) {
      await transformAlias({ code, uno, options });
    },
  };
}

export async function transformAlias(
  {
    code,
    uno,
    options = {},
  }:
  {
    code: MagicString;
    uno: UnoGenerator;
    options?: TransformerAliasOptions;
  },
) {
  let {
    prefix = '*',
    keep = '+',
  } = options;

  if (isString(keep)) {
    keep = { prefix: keep, block: true };
  }

  const extraRE = new RegExp(`(${escapeRegExp(prefix)}|${escapeRegExp(keep.prefix)})([\\w-:]+)`, 'g');
  const map = new Map<string, ShortcutValue | false>();

  for (const item of Array.from(code.original.matchAll(extraRE))) {
    let result = map.get(item[0]);
    if (result === false) {
      continue;
    } else if (!result) {
      // eslint-disable-next-line no-await-in-loop
      const res = await expandShortcut({ input: item[2], uno });

      if (res) {
        result = res[0].join(' ');
        map.set(item[0], result);
      } else {
        map.set(item[0], false);
        continue;
      }
    }

    if (item[1] === keep.prefix) {
      result = `${item[2]} ${result}`;
      if (keep.block) {
        uno.config.blocklist = [...new Set([...uno.config.blocklist, item[2]])];
      }
    }

    code.overwrite(item.index!, item.index! + item[0].length, result as string);
  }
}

export async function expandShortcut(
  { input, uno, depth = 5 }:
  {
    input: string;
    uno: UnoGenerator;
    depth?: number;
  },
): Promise<[Array<ShortcutValue>] | undefined> {
  if (depth <= 0) {
    return;
  }

  let result: string | Array<ShortcutValue> | undefined;

  for (const shortcut of uno.config.shortcuts) {
    if (isStaticShortcut(shortcut)) {
      if (shortcut[0] === input) {
        result = shortcut[1];
      }
    } else {
      const match = input.match(shortcut[0]);

      if (match != null) {
        result = shortcut[1](match, {} as any);
      }
    }
  }

  if (isString(result)) {
    result = expandVariantGroup(result.trim()).split(/\s+/g);
  }

  if (!result) {
    return;
  }

  return [
    (await Promise.all(
      result
        .filter((s) => s !== input)
        .map(async (res) => (
          isString(res)
            ? (await expandShortcut({ input: res, uno, depth: depth - 1 }))?.[0]
            : undefined) || [res],
        ),
    )).flat(1).filter(Boolean),
  ];
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
