import prettier from 'prettier';
import { expect, it } from 'vitest';

import { getUnoWithoutPreflights } from './utils';

function prettyCss(css: string) {
  return prettier.format(css, { parser: 'css' });
}

it('preset-animatecss', async () => {
  const uno = await getUnoWithoutPreflights({
    magicCss: true,
  });

  const root = await uno.generate(
    'animate-magic',
  );
  const css = await prettyCss(root.css);
  expect(css).toMatchSnapshot();
});
