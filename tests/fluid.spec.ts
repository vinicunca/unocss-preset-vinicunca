import prettier from 'prettier';
import { createGenerator } from 'unocss';
import { expect, it } from 'vitest';

import { presetVinicunca } from '../packages/core/src';

function prettyCss(css: string) {
  return prettier.format(css, { parser: 'css' });
}

it('preset-animatecss', async () => {
  const uno = createGenerator({
    presets: [
      presetVinicunca({
        fluidOptions: {
          commentHelpers: true,
        },
      }),
    ],
  });

  const root = await uno.generate(
    'fluid-text-32-64 fluid-gap-32-64 fluid-m-20-40 fluid-ml-50--25 fluid-ml--50-25 fluid-p-32-64 fluid-w-100-200 fluid-h-100-200',
    { preflights: false },
  );
  const css = await prettyCss(root.css);
  expect(css).toMatchSnapshot();
});
