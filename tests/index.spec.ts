import prettier from 'prettier';
import { createGenerator, presetUno } from 'unocss';
import { expect, it } from 'vitest';

import { presetAnimation } from '../src';

function prettyCss(css: string) {
  return prettier.format(css, { parser: 'css' });
}

it('preset-animatecss', async () => {
  const uno = createGenerator({
    presets: [
      presetUno({
        preflight: false,
      }),
      presetAnimation(),
    ],
  });

  const root = await uno.generate('animate__heartBeat animate__bounce');
  const css = await prettyCss(root.css);
  expect(css).toMatchSnapshot();
});
