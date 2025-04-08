import type { UnoGenerator } from '@unocss/core';
import parserCSS from 'prettier/parser-postcss';
import prettier from 'prettier/standalone';

export async function generateUno(uno: UnoGenerator, inputs: Array<string>) {
  const { css } = await uno.generate(inputs.join(' '));

  return prettier.format(css, {
    parser: 'css',
    plugins: [parserCSS],
  });
}
