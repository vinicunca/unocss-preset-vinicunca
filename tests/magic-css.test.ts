import { expect, it } from 'vitest';

import { getCssFromUnoWithoutPreflights } from './utils';

it('preset-animatecss', async () => {
  const { css } = await getCssFromUnoWithoutPreflights({
    options: {
      magicCss: true,
    },
    code: 'animate-magic',
  });

  expect(css).toMatchSnapshot();
});
