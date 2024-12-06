import prettier from 'prettier';
import { expect, it } from 'vitest';

import { getUnoWithoutPreflights } from './utils';

function prettyCss(css: string) {
  return prettier.format(css, { parser: 'css' });
}

it('preset-animatecss', async () => {
  const uno = await getUnoWithoutPreflights({
    fluid: {
      commentHelpers: true,
    },
  });

  const root = await uno.generate(
    'fluid-text-32-64 fluid-gap-32-64 fluid-m-20-40 fluid-ml-50--25 fluid-ml--50-25 fluid-p-32-64 fluid-w-100-200 fluid-h-100-200',
  );
  const css = await prettyCss(root.css);
  expect(css).toMatchSnapshot();
});
