import type { UnoGenerator } from 'unocss';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGenerator, presetAttributify } from 'unocss';
import { beforeEach, describe, expect, it } from 'vitest';
import { presetVinicunca } from '../../src';

const __dirname = dirname(fileURLToPath(import.meta.url));

let uno: UnoGenerator;

beforeEach(async () => {
  uno = await createGenerator({
    presets: [
      presetVinicunca({
        fluid: {
          attributify: true,
        },
      }),
      presetAttributify(),
    ],
  });
});

describe('presetFluid', async () => {
  it('should generate fluid text css', async () => {
    const { css } = await uno.generate(
      'fluid-text fluid-text-min-12 fluid-text-max-16',
      { preflights: false },
    );
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .fluid-text-min-12{--fluid-text-min:12;}
      .fluid-text-max-16{--fluid-text-max:16;}
      .fluid-text{font-size:clamp(calc(var(--fluid-text-unit, 1px) * var(--fluid-text-min, 16)), calc(var(--fluid-text-unit, 1px) * var(--fluid-text-min, 16) + (var(--fluid-text-max, 16) - var(--fluid-text-min, 16)) * (var(--fluid-text-container, 100vw) - (var(--fluid-text-unit, 1px) * var(--fluid-text-min-container, 320))) / (var(--fluid-text-max-container, 1920) - var(--fluid-text-min-container, 320))), calc(var(--fluid-text-unit, 1px) * var(--fluid-text-max, 16)));}"
    `);
  });

  it('attributify mode', async () => {
    const { css } = await uno.generate('flex-fluid-gap-12', { preflights: false });
    expect(css).toMatchInlineSnapshot('""');
  });

  it('css var with matching utility name should apply to properties', async () => {
    const { css } = await uno.generate('<div class="fluid-$px-24/32"></div>', { preflights: false });
    expect(css).toContain('--fluid-px-min:24');
    expect(css).toContain('--fluid-px-max:32');
    expect(css).toContain('--fluid-px:clamp');
    expect(css).toContain('padding-left:var(--fluid-px)');
    expect(css).toContain('padding-right:var(--fluid-px)');
  });

  it('css var with non-matching utility name should only create variable', async () => {
    const { css } = await uno.generate('<div class="fluid-$customvar-10/20"></div>', { preflights: false });
    expect(css).toContain('--fluid-customvar-min:10');
    expect(css).toContain('--fluid-customvar-max:20');
    expect(css).toContain('--fluid-customvar:clamp');
    expect(css).not.toContain('padding');
    expect(css).not.toContain('margin');
  });

  it('should generate fluid text with slash syntax in attributify mode', async () => {
    const { css } = await uno.generate('<div class="fluid-text-20/24"></div>', { preflights: false });
    expect(css).toContain('--fluid-text-min:20');
    expect(css).toContain('--fluid-text-max:24');
    expect(css).toContain('font-size:clamp');
  });
});

describe('cases', () => {
  it('case 1 - default classes', async () => {
    const input = readFileSync(resolve(__dirname, './cases/case-1/input.html'), 'utf-8');
    const { css, matched } = await uno.generate(input, { preflights: false });
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/case-1/matched.txt'));
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/case-1/output.css'));
  });

  it('case 2 - attributify mode', async () => {
    const input = readFileSync(resolve(__dirname, './cases/case-2/input.html'), 'utf-8');
    const { css, matched } = await uno.generate(input, { preflights: false });
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/case-2/matched.txt'));
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/case-2/output.css'));
  });

  it('case 3 - comprehensive test', async () => {
    const input = readFileSync(resolve(__dirname, './cases/case-3/input.html'), 'utf-8');
    const { css, matched } = await uno.generate(input, { preflights: false });
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/case-3/matched.txt'));
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/case-3/output.css'));
  });

  it('case 4 - CSS variables', async () => {
    const input = readFileSync(resolve(__dirname, './cases/case-4/input.html'), 'utf-8');
    const { css, matched } = await uno.generate(input, { preflights: false });
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/case-4/matched.txt'));
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/case-4/output.css'));
  });

  it('case 5 - new utilities (scroll, border, outline, inset, space, filter, layout, columns)', async () => {
    const input = readFileSync(resolve(__dirname, './cases/case-5/input.html'), 'utf-8');
    const { css, matched } = await uno.generate(input, { preflights: false });
    await expect([...matched].join('\n')).toMatchFileSnapshot(resolve(__dirname, './cases/case-5/matched.txt'));
    await expect(css).toMatchFileSnapshot(resolve(__dirname, './cases/case-5/output.css'));
  });
});
