import type { UnoGenerator } from '@unocss/core';
import { createGenerator } from '@unocss/core';
import MagicString from 'magic-string';
import { describe, expect, it } from 'vitest';
import { expandShortcut, type KeepOption, transformAlias } from '../packages/core/src/transformer-alias';

describe('transformer alias', async () => {
  const uno = await createGenerator({
    shortcuts: [
      ['btn', 'text-(white xl) font-bold py-2 px-4 rounded cursor-pointer'],
      [/^btn-(.+)$/, ([,d]) => `bg-${d}-500 hover:bg-${d}-700 btn`],
      [/^tapped:(.*)$/, ([, c]) => `hover:${c} active:${c}`],
    ],
  });

  function createTransformer(prefix = '*', keep: string | KeepOption = '+') {
    return async (code: string, _uno: UnoGenerator = uno) => {
      const stringCode = new MagicString(code);
      await transformAlias({
        code: stringCode,
        uno: _uno,
        options: {
          prefix,
          keep,
        },
      });

      return stringCode.toString();
    };
  }

  it('basic', async () => {
    const transform = createTransformer();

    const code = `
<template>
  <div *btn>
    <div text-xl class="*btn-red" />
    <div *btn-teal />
    <div text-red *tapped:text-blue />
  </div>
</template>
    `.trim();

    expect(await transform(code)).toMatchInlineSnapshot(`
      "<template>
        <div text-white text-xl font-bold py-2 px-4 rounded cursor-pointer>
          <div text-xl class="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded cursor-pointer" />
          <div bg-teal-500 hover:bg-teal-700 text-white text-xl font-bold py-2 px-4 rounded cursor-pointer />
          <div text-red hover:text-blue active:text-blue />
        </div>
      </template>"
    `);
  });

  it('prefix', async () => {
    const transform = createTransformer('&');

    const code = `
<template>
  <div &test-none>
    <div text-xl class="&btn-red" />
    <div *btn-red />
    <div *tapped:text-blue />
    <div &tapped:text-blue />
  </div>
</template>
    `.trim();

    expect(await transform(code)).toMatchInlineSnapshot(`
      "<template>
        <div &test-none>
          <div text-xl class="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded cursor-pointer" />
          <div *btn-red />
          <div *tapped:text-blue />
          <div hover:text-blue active:text-blue />
        </div>
      </template>"
    `);
  });

  it('expand shortcut', async () => {
    const code = `
    <template>
        <div class="*btn-red" />
        <div *btn-red />
        <div class="*tapped:text-blue" />
        <div *tapped:text-blue />
    </template>
        `.trim();
    const transform = createTransformer();

    expect(await transform(code)).toMatchInlineSnapshot(`
      "<template>
              <div class="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded cursor-pointer" />
              <div bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded cursor-pointer />
              <div class="hover:text-blue active:text-blue" />
              <div hover:text-blue active:text-blue />
          </template>"
    `);

    expect(await expandShortcut({ input: 'btn-red', uno }))
      .toMatchInlineSnapshot(`
        [
          [
            "bg-red-500",
            "hover:bg-red-700",
            "text-white",
            "text-xl",
            "font-bold",
            "py-2",
            "px-4",
            "rounded",
            "cursor-pointer",
          ],
        ]
      `);
  });

  it('keep shortcut with prefix', async () => {
    const code = '<div class="+btn" />';
    const transform = createTransformer('*', '+');
    const result = await transform(code);

    expect(result).toMatchInlineSnapshot('"<div class="btn text-white text-xl font-bold py-2 px-4 rounded cursor-pointer" />"');
    expect(uno.config.blocklist).toContain('btn');
  });

  it('keep shortcut with block false', async () => {
    const _uno = await createGenerator({
      shortcuts: [
        ['btn', 'text-(white xl) font-bold py-2 px-4 rounded cursor-pointer'],
      ],
    });
    const code = '<div class="+btn" />';
    const transform = createTransformer('*', { prefix: '+', block: false });
    const result = await transform(code);

    expect(result).toMatchInlineSnapshot('"<div class="btn text-white text-xl font-bold py-2 px-4 rounded cursor-pointer" />"');
    expect(_uno.config.blocklist).toEqual([]);
  });
});
