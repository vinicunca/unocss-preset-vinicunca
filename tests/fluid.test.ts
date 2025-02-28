import { expect, it } from 'vitest';

import { getCssFromUnoWithoutPreflights } from './utils';

it('preset-animatecss', async () => {
  const { css } = await getCssFromUnoWithoutPreflights({
    options: {
      fluid: {
        commentHelpers: true,
      },
    },
    code: 'fluid-text-32-64 fluid-gap-32-64 fluid-m-20-40 fluid-ml-50--25 fluid-ml--50-25 fluid-p-32-64 fluid-w-100-200 fluid-h-100-200',
  });

  expect(css).toMatchSnapshot();
});
