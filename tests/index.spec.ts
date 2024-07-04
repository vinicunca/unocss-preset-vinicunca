import prettier from 'prettier';
import { createGenerator } from 'unocss';
import { expect, it } from 'vitest';

import { presetVinicunca } from '../src';

function prettyCss(css: string) {
  return prettier.format(css, { parser: 'css' });
}

it('preset-animatecss', async () => {
  const uno = createGenerator({
    presets: [
      presetVinicunca(),
    ],
  });

  const root = await uno.generate(
    'animate__heartBeat animate__bounce',
    { preflights: false },
  );
  const css = await prettyCss(root.css);
  expect(css).toMatchSnapshot();
});
