import type { UnoGenerator } from '@unocss/core';
import parserCSS from 'prettier/parser-postcss';
import prettier from 'prettier/standalone';

export async function generateUno(uno: UnoGenerator, inputs: Array<string>) {
  const { css, matched } = await uno.generate(inputs.join(' '));

  return {
    css: await prettier.format(css, {
      parser: 'css',
      plugins: [parserCSS],
    }),
    matched,
  };
}
