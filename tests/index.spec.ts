import prettier from 'prettier';
import { createGenerator, presetUno } from 'unocss';
import { expect, it } from 'vitest';

// import dedent from 'dedent'
import { presetAnimation } from '../src';

// const prettyCSS = (css: string) => prettier.format(dedent(css), { parser: 'css' })

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

  const root = await uno.generate('animate-bounce');
  const css = await prettyCss(root.css);
  expect(css).toMatchSnapshot();
});
