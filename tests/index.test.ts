import { escapeSelector } from 'unocss';
import { describe, expect, it } from 'vitest';
import { vinicuncaTargets } from './fixtures/index.targets';
import { getCssFromUno } from './utils';

describe('presetVinicunca', async () => {
  it('targets', async () => {
    const code = vinicuncaTargets.join(' ');
    const { css } = await getCssFromUno({
      code,
      options: {
        theme: {
          containers: {
            padding: '16px',
            center: true,
          },
        },
      },
    });
    const { css: css2 } = await getCssFromUno({
      code,
      options: {
        theme: {
          containers: {
            padding: '16px',
            center: true,
          },
        },
      },
    });

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
