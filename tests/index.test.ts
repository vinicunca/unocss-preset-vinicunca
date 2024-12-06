import { escapeSelector } from 'unocss';
import { describe, expect, it } from 'vitest';
import { vinicuncaTargets } from './fixtures/index.targets';
import { generateUno } from './utils';

describe('presetVinicunca', async () => {
  const uno = await generateUno();

  it('targets', async () => {
    const code = vinicuncaTargets.join(' ');
    const { css } = await uno.generate(code);
    const { css: css2 } = await uno.generate(code);

    const unmatched: Array<string> = [];
    for (const i of vinicuncaTargets) {
      if (!css.includes(escapeSelector(i))) {
        unmatched.push(i);
      }
    }

    expect(unmatched).toEqual([]);
    expect(css).toMatchSnapshot();
    expect(css).toEqual(css2);
  });
});
