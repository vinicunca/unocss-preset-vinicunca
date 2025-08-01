it('divide-x', async () => {
  const css = await run(['divide-x', 'divide-x-4', 'divide-x-123', 'divide-x-[4px]']);

  expect(css).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-divide-x-reverse: 0;
          --tw-border-style: solid;
        }
      }
    }

    :where(.divide-x > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }

    :where(.divide-x-4 > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(4px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(4px * calc(1 - var(--tw-divide-x-reverse)));
    }

    :where(.divide-x-123 > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(123px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(123px * calc(1 - var(--tw-divide-x-reverse)));
    }

    :where(.divide-x-\\[4px\\] > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(4px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(4px * calc(1 - var(--tw-divide-x-reverse)));
    }

    @property --tw-divide-x-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-border-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
});

it('divide-x with custom default border width', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --default-border-width: 2px;
        }
        @tailwind utilities;
      `,
      ['divide-x'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-divide-x-reverse: 0;
          --tw-border-style: solid;
        }
      }
    }

    :where(.divide-x > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(2px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(2px * calc(1 - var(--tw-divide-x-reverse)));
    }

    @property --tw-divide-x-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-border-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
  expect(await run(['divide-x/foo'])).toEqual('');
});

it('divide-y', async () => {
  expect(
    await compileCss(
      css`
        @tailwind utilities;
      `,
      ['divide-y', 'divide-y-4', 'divide-y-123', 'divide-y-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-divide-y-reverse: 0;
          --tw-border-style: solid;
        }
      }
    }

    :where(.divide-y > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }

    :where(.divide-y-4 > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(4px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(4px * calc(1 - var(--tw-divide-y-reverse)));
    }

    :where(.divide-y-123 > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(123px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(123px * calc(1 - var(--tw-divide-y-reverse)));
    }

    :where(.divide-y-\\[4px\\] > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(4px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(4px * calc(1 - var(--tw-divide-y-reverse)));
    }

    @property --tw-divide-y-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-border-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
  expect(
    await run([
      '-divide-y',
      'divide-y--4',
      '-divide-y-4',
      '-divide-y-123',
      'divide-y-unknown',
      'divide-y/foo',
      'divide-y-4/foo',
      'divide-y-123/foo',
      'divide-y-[4px]/foo',
    ]),
  ).toEqual('');
});

it('divide-y with custom default border width', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --default-border-width: 2px;
        }
        @tailwind utilities;
      `,
      ['divide-y'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-divide-y-reverse: 0;
          --tw-border-style: solid;
        }
      }
    }

    :where(.divide-y > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(2px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));
    }

    @property --tw-divide-y-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-border-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
  expect(await run(['divide-y/foo'])).toEqual('');
});

it('divide-x-reverse', async () => {
  expect(await run(['divide-x-reverse'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-divide-x-reverse: 0;
        }
      }
    }

    :where(.divide-x-reverse > :not(:last-child)) {
      --tw-divide-x-reverse: 1;
    }

    @property --tw-divide-x-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }"
  `);
  expect(await run(['-divide-x-reverse', 'divide-x-reverse/foo'])).toEqual('');
});

it('divide-y-reverse', async () => {
  expect(await run(['divide-y-reverse'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-divide-y-reverse: 0;
        }
      }
    }

    :where(.divide-y-reverse > :not(:last-child)) {
      --tw-divide-y-reverse: 1;
    }

    @property --tw-divide-y-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }"
  `);
  expect(await run(['-divide-y-reverse', 'divide-y-reverse/foo'])).toEqual('');
});

it('divide-style', async () => {
  expect(
    await run(['divide-solid', 'divide-dashed', 'divide-dotted', 'divide-double', 'divide-none']),
  ).toMatchInlineSnapshot(`
      ":where(.divide-dashed > :not(:last-child)) {
        --tw-border-style: dashed;
        border-style: dashed;
      }

      :where(.divide-dotted > :not(:last-child)) {
        --tw-border-style: dotted;
        border-style: dotted;
      }

      :where(.divide-double > :not(:last-child)) {
        --tw-border-style: double;
        border-style: double;
      }

      :where(.divide-none > :not(:last-child)) {
        --tw-border-style: none;
        border-style: none;
      }

      :where(.divide-solid > :not(:last-child)) {
        --tw-border-style: solid;
        border-style: solid;
      }"
    `);
  expect(
    await run([
      'divide',
      '-divide-solid',
      '-divide-dashed',
      '-divide-dotted',
      '-divide-double',
      '-divide-none',
      'divide-solid/foo',
      'divide-dashed/foo',
      'divide-dotted/foo',
      'divide-double/foo',
      'divide-none/foo',
    ]),
  ).toEqual('');
});

it('divide-color', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        'divide-red-500',
        'divide-red-500/50',
        'divide-red-500/2.25',
        'divide-red-500/2.5',
        'divide-red-500/2.75',
        'divide-red-500/[0.5]',
        'divide-red-500/[50%]',
        'divide-current',
        'divide-current/50',
        'divide-current/[0.5]',
        'divide-current/[50%]',
        'divide-inherit',
        'divide-transparent',
        'divide-[#0088cc]',
        'divide-[#0088cc]/50',
        'divide-[#0088cc]/[0.5]',
        'divide-[#0088cc]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    :where(.divide-\\[\\#0088cc\\] > :not(:last-child)) {
      border-color: #08c;
    }

    :where(.divide-\\[\\#0088cc\\]\\/50 > :not(:last-child)), :where(.divide-\\[\\#0088cc\\]\\/\\[0\\.5\\] > :not(:last-child)), :where(.divide-\\[\\#0088cc\\]\\/\\[50\\%\\] > :not(:last-child)) {
      border-color: oklab(59.9824% -.067 -.124 / .5);
    }

    :where(.divide-current > :not(:last-child)), :where(.divide-current\\/50 > :not(:last-child)) {
      border-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-current\\/50 > :not(:last-child)) {
        border-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    :where(.divide-current\\/\\[0\\.5\\] > :not(:last-child)) {
      border-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-current\\/\\[0\\.5\\] > :not(:last-child)) {
        border-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    :where(.divide-current\\/\\[50\\%\\] > :not(:last-child)) {
      border-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-current\\/\\[50\\%\\] > :not(:last-child)) {
        border-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    :where(.divide-inherit > :not(:last-child)) {
      border-color: inherit;
    }

    :where(.divide-red-500 > :not(:last-child)) {
      border-color: var(--color-red-500);
    }

    :where(.divide-red-500\\/2\\.5 > :not(:last-child)) {
      border-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-red-500\\/2\\.5 > :not(:last-child)) {
        border-color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    :where(.divide-red-500\\/2\\.25 > :not(:last-child)) {
      border-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-red-500\\/2\\.25 > :not(:last-child)) {
        border-color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    :where(.divide-red-500\\/2\\.75 > :not(:last-child)) {
      border-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-red-500\\/2\\.75 > :not(:last-child)) {
        border-color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    :where(.divide-red-500\\/50 > :not(:last-child)) {
      border-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-red-500\\/50 > :not(:last-child)) {
        border-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    :where(.divide-red-500\\/\\[0\\.5\\] > :not(:last-child)) {
      border-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-red-500\\/\\[0\\.5\\] > :not(:last-child)) {
        border-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    :where(.divide-red-500\\/\\[50\\%\\] > :not(:last-child)) {
      border-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      :where(.divide-red-500\\/\\[50\\%\\] > :not(:last-child)) {
        border-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    :where(.divide-transparent > :not(:last-child)) {
      border-color: #0000;
    }"
  `);
  expect(
    await run([
      'divide',
      '-divide-red-500',
      '-divide-red-500/50',
      '-divide-red-500/[0.5]',
      '-divide-red-500/[50%]',
      '-divide-current',
      '-divide-current/50',
      '-divide-current/[0.5]',
      '-divide-current/[50%]',
      '-divide-inherit',
      '-divide-transparent',
      '-divide-[#0088cc]',
      '-divide-[#0088cc]/50',
      '-divide-[#0088cc]/[0.5]',
      '-divide-[#0088cc]/[50%]',
      'divide-red-500/foo',
      'divide-red-500/50/foo',
      'divide-red-500/[0.5]/foo',
      'divide-red-500/[50%]/foo',
      'divide-current/foo',
      'divide-current/50/foo',
      'divide-current/[0.5]/foo',
      'divide-current/[50%]/foo',
      'divide-inherit/foo',
      'divide-transparent/foo',
      'divide-[#0088cc]/foo',
      'divide-[#0088cc]/50/foo',
      'divide-[#0088cc]/[0.5]/foo',
      'divide-[#0088cc]/[50%]/foo',
    ]),
  ).toEqual('');
});

it('rounded', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded', 'rounded-full', 'rounded-none', 'rounded-sm', 'rounded-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded {
      border-radius: var(--radius);
    }

    .rounded-\\[4px\\] {
      border-radius: 4px;
    }

    .rounded-full {
      border-radius: 3.40282e38px;
    }

    .rounded-none {
      border-radius: 0;
    }

    .rounded-sm {
      border-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded',
      '-rounded-full',
      '-rounded-none',
      '-rounded-sm',
      '-rounded-[4px]',
      'rounded/foo',
      'rounded-full/foo',
      'rounded-none/foo',
      'rounded-sm/foo',
      'rounded-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-s', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-s', 'rounded-s-full', 'rounded-s-none', 'rounded-s-sm', 'rounded-s-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-s {
      border-start-start-radius: var(--radius);
      border-end-start-radius: var(--radius);
    }

    .rounded-s-\\[4px\\] {
      border-start-start-radius: 4px;
      border-end-start-radius: 4px;
    }

    .rounded-s-full {
      border-start-start-radius: var(--radius-full);
      border-end-start-radius: var(--radius-full);
    }

    .rounded-s-none {
      border-start-start-radius: var(--radius-none);
      border-end-start-radius: var(--radius-none);
    }

    .rounded-s-sm {
      border-start-start-radius: var(--radius-sm);
      border-end-start-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-s',
      '-rounded-s-full',
      '-rounded-s-none',
      '-rounded-s-sm',
      '-rounded-s-[4px]',
      'rounded-s/foo',
      'rounded-s-full/foo',
      'rounded-s-none/foo',
      'rounded-s-sm/foo',
      'rounded-s-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-e', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-e', 'rounded-e-full', 'rounded-e-none', 'rounded-e-sm', 'rounded-e-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-e {
      border-start-end-radius: var(--radius);
      border-end-end-radius: var(--radius);
    }

    .rounded-e-\\[4px\\] {
      border-start-end-radius: 4px;
      border-end-end-radius: 4px;
    }

    .rounded-e-full {
      border-start-end-radius: var(--radius-full);
      border-end-end-radius: var(--radius-full);
    }

    .rounded-e-none {
      border-start-end-radius: var(--radius-none);
      border-end-end-radius: var(--radius-none);
    }

    .rounded-e-sm {
      border-start-end-radius: var(--radius-sm);
      border-end-end-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-e',
      '-rounded-e-full',
      '-rounded-e-none',
      '-rounded-e-sm',
      '-rounded-e-[4px]',
      'rounded-e/foo',
      'rounded-e-full/foo',
      'rounded-e-none/foo',
      'rounded-e-sm/foo',
      'rounded-e-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-t', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-t', 'rounded-t-full', 'rounded-t-none', 'rounded-t-sm', 'rounded-t-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-t {
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
    }

    .rounded-t-\\[4px\\] {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .rounded-t-full {
      border-top-left-radius: 3.40282e38px;
      border-top-right-radius: 3.40282e38px;
      border-top-left-radius: var(--radius-full);
      border-top-right-radius: var(--radius-full);
    }

    .rounded-t-none {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top-left-radius: var(--radius-none);
      border-top-right-radius: var(--radius-none);
    }

    .rounded-t-sm {
      border-top-left-radius: var(--radius-sm);
      border-top-right-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-t',
      '-rounded-t-full',
      '-rounded-t-none',
      '-rounded-t-sm',
      '-rounded-t-[4px]',
      'rounded-t/foo',
      'rounded-t-full/foo',
      'rounded-t-none/foo',
      'rounded-t-sm/foo',
      'rounded-t-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-r', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-r', 'rounded-r-full', 'rounded-r-none', 'rounded-r-sm', 'rounded-r-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-r {
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
    }

    .rounded-r-\\[4px\\] {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    .rounded-r-full {
      border-top-right-radius: 3.40282e38px;
      border-bottom-right-radius: 3.40282e38px;
      border-top-right-radius: var(--radius-full);
      border-bottom-right-radius: var(--radius-full);
    }

    .rounded-r-none {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-right-radius: var(--radius-none);
      border-bottom-right-radius: var(--radius-none);
    }

    .rounded-r-sm {
      border-top-right-radius: var(--radius-sm);
      border-bottom-right-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-r',
      '-rounded-r-full',
      '-rounded-r-none',
      '-rounded-r-sm',
      '-rounded-r-[4px]',
      'rounded-r/foo',
      'rounded-r-full/foo',
      'rounded-r-none/foo',
      'rounded-r-sm/foo',
      'rounded-r-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-b', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-b', 'rounded-b-full', 'rounded-b-none', 'rounded-b-sm', 'rounded-b-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-b {
      border-bottom-right-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }

    .rounded-b-\\[4px\\] {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    .rounded-b-full {
      border-bottom-right-radius: 3.40282e38px;
      border-bottom-left-radius: 3.40282e38px;
      border-bottom-right-radius: var(--radius-full);
      border-bottom-left-radius: var(--radius-full);
    }

    .rounded-b-none {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: var(--radius-none);
      border-bottom-left-radius: var(--radius-none);
    }

    .rounded-b-sm {
      border-bottom-right-radius: var(--radius-sm);
      border-bottom-left-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-b',
      '-rounded-b-full',
      '-rounded-b-none',
      '-rounded-b-sm',
      '-rounded-b-[4px]',
      'rounded-b/foo',
      'rounded-b-full/foo',
      'rounded-b-none/foo',
      'rounded-b-sm/foo',
      'rounded-b-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-l', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-l', 'rounded-l-full', 'rounded-l-none', 'rounded-l-sm', 'rounded-l-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-l {
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }

    .rounded-l-\\[4px\\] {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    .rounded-l-full {
      border-top-left-radius: 3.40282e38px;
      border-bottom-left-radius: 3.40282e38px;
      border-top-left-radius: var(--radius-full);
      border-bottom-left-radius: var(--radius-full);
    }

    .rounded-l-none {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: var(--radius-none);
      border-bottom-left-radius: var(--radius-none);
    }

    .rounded-l-sm {
      border-top-left-radius: var(--radius-sm);
      border-bottom-left-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-l',
      '-rounded-l-full',
      '-rounded-l-none',
      '-rounded-l-sm',
      '-rounded-l-[4px]',
      'rounded-l/foo',
      'rounded-l-full/foo',
      'rounded-l-none/foo',
      'rounded-l-sm/foo',
      'rounded-l-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-ss', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-ss', 'rounded-ss-full', 'rounded-ss-none', 'rounded-ss-sm', 'rounded-ss-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-ss {
      border-start-start-radius: var(--radius);
    }

    .rounded-ss-\\[4px\\] {
      border-start-start-radius: 4px;
    }

    .rounded-ss-full {
      border-start-start-radius: var(--radius-full);
    }

    .rounded-ss-none {
      border-start-start-radius: var(--radius-none);
    }

    .rounded-ss-sm {
      border-start-start-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-ss',
      '-rounded-ss-full',
      '-rounded-ss-none',
      '-rounded-ss-sm',
      '-rounded-ss-[4px]',
      'rounded-ss/foo',
      'rounded-ss-full/foo',
      'rounded-ss-none/foo',
      'rounded-ss-sm/foo',
      'rounded-ss-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-se', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-se', 'rounded-se-full', 'rounded-se-none', 'rounded-se-sm', 'rounded-se-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-se {
      border-start-end-radius: var(--radius);
    }

    .rounded-se-\\[4px\\] {
      border-start-end-radius: 4px;
    }

    .rounded-se-full {
      border-start-end-radius: var(--radius-full);
    }

    .rounded-se-none {
      border-start-end-radius: var(--radius-none);
    }

    .rounded-se-sm {
      border-start-end-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-se',
      '-rounded-se-full',
      '-rounded-se-none',
      '-rounded-se-sm',
      '-rounded-se-[4px]',
      'rounded-se/foo',
      'rounded-se-full/foo',
      'rounded-se-none/foo',
      'rounded-se-sm/foo',
      'rounded-se-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-ee', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-ee', 'rounded-ee-full', 'rounded-ee-none', 'rounded-ee-sm', 'rounded-ee-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-ee {
      border-end-end-radius: var(--radius);
    }

    .rounded-ee-\\[4px\\] {
      border-end-end-radius: 4px;
    }

    .rounded-ee-full {
      border-end-end-radius: var(--radius-full);
    }

    .rounded-ee-none {
      border-end-end-radius: var(--radius-none);
    }

    .rounded-ee-sm {
      border-end-end-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-ee',
      '-rounded-ee-full',
      '-rounded-ee-none',
      '-rounded-ee-sm',
      '-rounded-ee-[4px]',
      'rounded-ee/foo',
      'rounded-ee-full/foo',
      'rounded-ee-none/foo',
      'rounded-ee-sm/foo',
      'rounded-ee-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-es', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-es', 'rounded-es-full', 'rounded-es-none', 'rounded-es-sm', 'rounded-es-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-es {
      border-end-start-radius: var(--radius);
    }

    .rounded-es-\\[4px\\] {
      border-end-start-radius: 4px;
    }

    .rounded-es-full {
      border-end-start-radius: var(--radius-full);
    }

    .rounded-es-none {
      border-end-start-radius: var(--radius-none);
    }

    .rounded-es-sm {
      border-end-start-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-es',
      '-rounded-es-full',
      '-rounded-es-none',
      '-rounded-es-sm',
      '-rounded-es-[4px]',
      'rounded-es/foo',
      'rounded-es-full/foo',
      'rounded-es-none/foo',
      'rounded-es-sm/foo',
      'rounded-es-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-tl', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-tl', 'rounded-tl-full', 'rounded-tl-none', 'rounded-tl-sm', 'rounded-tl-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-tl {
      border-top-left-radius: var(--radius);
    }

    .rounded-tl-\\[4px\\] {
      border-top-left-radius: 4px;
    }

    .rounded-tl-full {
      border-top-left-radius: 3.40282e38px;
      border-top-left-radius: var(--radius-full);
    }

    .rounded-tl-none {
      border-top-left-radius: 0;
      border-top-left-radius: var(--radius-none);
    }

    .rounded-tl-sm {
      border-top-left-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-tl',
      '-rounded-tl-full',
      '-rounded-tl-none',
      '-rounded-tl-sm',
      '-rounded-tl-[4px]',
      'rounded-tl/foo',
      'rounded-tl-full/foo',
      'rounded-tl-none/foo',
      'rounded-tl-sm/foo',
      'rounded-tl-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-tr', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-tr', 'rounded-tr-full', 'rounded-tr-none', 'rounded-tr-sm', 'rounded-tr-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-tr {
      border-top-right-radius: var(--radius);
    }

    .rounded-tr-\\[4px\\] {
      border-top-right-radius: 4px;
    }

    .rounded-tr-full {
      border-top-right-radius: 3.40282e38px;
      border-top-right-radius: var(--radius-full);
    }

    .rounded-tr-none {
      border-top-right-radius: 0;
      border-top-right-radius: var(--radius-none);
    }

    .rounded-tr-sm {
      border-top-right-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-tr',
      '-rounded-tr-full',
      '-rounded-tr-none',
      '-rounded-tr-sm',
      '-rounded-tr-[4px]',
      'rounded-tr/foo',
      'rounded-tr-full/foo',
      'rounded-tr-none/foo',
      'rounded-tr-sm/foo',
      'rounded-tr-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-br', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-br', 'rounded-br-full', 'rounded-br-none', 'rounded-br-sm', 'rounded-br-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-br {
      border-bottom-right-radius: var(--radius);
    }

    .rounded-br-\\[4px\\] {
      border-bottom-right-radius: 4px;
    }

    .rounded-br-full {
      border-bottom-right-radius: 3.40282e38px;
      border-bottom-right-radius: var(--radius-full);
    }

    .rounded-br-none {
      border-bottom-right-radius: 0;
      border-bottom-right-radius: var(--radius-none);
    }

    .rounded-br-sm {
      border-bottom-right-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-br',
      '-rounded-br-full',
      '-rounded-br-none',
      '-rounded-br-sm',
      '-rounded-br-[4px]',
      'rounded-br/foo',
      'rounded-br-full/foo',
      'rounded-br-none/foo',
      'rounded-br-sm/foo',
      'rounded-br-[4px]/foo',
    ]),
  ).toEqual('');
});

it('rounded-bl', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --radius-none: 0px;
          --radius-full: 9999px;
          --radius-sm: 0.125rem;
          --radius: 0.25rem;
        }
        @tailwind utilities;
      `,
      ['rounded-bl', 'rounded-bl-full', 'rounded-bl-none', 'rounded-bl-sm', 'rounded-bl-[4px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --radius-none: 0px;
      --radius-full: 9999px;
      --radius-sm: .125rem;
      --radius: .25rem;
    }

    .rounded-bl {
      border-bottom-left-radius: var(--radius);
    }

    .rounded-bl-\\[4px\\] {
      border-bottom-left-radius: 4px;
    }

    .rounded-bl-full {
      border-bottom-left-radius: 3.40282e38px;
      border-bottom-left-radius: var(--radius-full);
    }

    .rounded-bl-none {
      border-bottom-left-radius: 0;
      border-bottom-left-radius: var(--radius-none);
    }

    .rounded-bl-sm {
      border-bottom-left-radius: var(--radius-sm);
    }"
  `);
  expect(
    await run([
      '-rounded-bl',
      '-rounded-bl-full',
      '-rounded-bl-none',
      '-rounded-bl-sm',
      '-rounded-bl-[4px]',
      'rounded-bl/foo',
      'rounded-bl-full/foo',
      'rounded-bl-none/foo',
      'rounded-bl-sm/foo',
      'rounded-bl-[4px]/foo',
    ]),
  ).toEqual('');
});

it('border-style', async () => {
  expect(
    await run([
      'border-solid',
      'border-dashed',
      'border-dotted',
      'border-double',
      'border-hidden',
      'border-none',
    ]),
  ).toMatchInlineSnapshot(`
    ".border-dashed {
      --tw-border-style: dashed;
      border-style: dashed;
    }

    .border-dotted {
      --tw-border-style: dotted;
      border-style: dotted;
    }

    .border-double {
      --tw-border-style: double;
      border-style: double;
    }

    .border-hidden {
      --tw-border-style: hidden;
      border-style: hidden;
    }

    .border-none {
      --tw-border-style: none;
      border-style: none;
    }

    .border-solid {
      --tw-border-style: solid;
      border-style: solid;
    }"
  `);
  expect(
    await run([
      '-border-solid',
      '-border-dashed',
      '-border-dotted',
      '-border-double',
      '-border-hidden',
      '-border-none',
      'border-solid/foo',
      'border-dashed/foo',
      'border-dotted/foo',
      'border-double/foo',
      'border-hidden/foo',
      'border-none/foo',
    ]),
  ).toEqual('');
});

// All border utilities are generated in the same way
// so we can test them all at once with a loop
const prefixes = [
  'border',
  'border-x',
  'border-y',
  'border-s',
  'border-e',
  'border-t',
  'border-r',
  'border-b',
  'border-l',
];

for (const prefix of prefixes) {
  it(`${prefix}-*`, async () => {
    const classes = [];

    // Width
    classes.push(prefix);
    classes.push(`${prefix}-0`);
    classes.push(`${prefix}-2`);
    classes.push(`${prefix}-4`);
    classes.push(`${prefix}-123`);

    // Inference: Width
    classes.push(`${prefix}-[thin]`);
    classes.push(`${prefix}-[medium]`);
    classes.push(`${prefix}-[thick]`);
    classes.push(`${prefix}-[12px]`);
    classes.push(`${prefix}-[12px_8px]`);
    classes.push(`${prefix}-[0_2px_0_2px]`);
    classes.push(`${prefix}-[0_1]`);
    classes.push(`${prefix}-[thin_2px]`);
    classes.push(`${prefix}-[length:var(--my-width)]`);
    classes.push(`${prefix}-[line-width:var(--my-width)]`);

    // Color
    classes.push(`${prefix}-red-500`);
    classes.push(`${prefix}-red-500/50`);
    classes.push(`${prefix}-red-500/2.25`);
    classes.push(`${prefix}-red-500/2.5`);
    classes.push(`${prefix}-red-500/2.75`);
    classes.push(`${prefix}-[#0088cc]`);
    classes.push(`${prefix}-[#0088cc]/50`);
    classes.push(`${prefix}-current`);
    classes.push(`${prefix}-current/50`);
    classes.push(`${prefix}-inherit`);
    classes.push(`${prefix}-transparent`);

    // Inference: Color
    classes.push(`${prefix}-[var(--my-color)]`);
    classes.push(`${prefix}-[var(--my-color)]/50`);
    classes.push(`${prefix}-[color:var(--my-color)]`);
    classes.push(`${prefix}-[color:var(--my-color)]/50`);

    expect(
      await compileCss(
        css`
          @theme {
            --radius-none: 0px;
            --radius-full: 9999px;
            --radius-sm: 0.125rem;
            --color-red-500: #ef4444;
          }
          @tailwind utilities;
        `,
        classes,
      ),
    ).toMatchSnapshot();

    // No border utilities can ever be negative
    expect(await run(classes.map((cls) => `-${cls}`))).toEqual('');
    expect(
      await run([
        `${prefix}/foo`,
        `${prefix}-0/foo`,
        `${prefix}-2/foo`,
        `${prefix}-4/foo`,
        `${prefix}-123/foo`,
        `${prefix}-[thin]/foo`,
        `${prefix}-[medium]/foo`,
        `${prefix}-[thick]/foo`,
        `${prefix}-[12px]/foo`,
        `${prefix}-[length:var(--my-width)]/foo`,
        `${prefix}-[line-width:var(--my-width)]/foo`,
      ]),
    ).toEqual('');
  });
}

it('border with custom default border width', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --default-border-width: 2px;
        }
        @tailwind utilities;
      `,
      ['border'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-border-style: solid;
        }
      }
    }

    .border {
      border-style: var(--tw-border-style);
      border-width: 2px;
    }

    @property --tw-border-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
  expect(await run(['-border', 'border/foo'])).toEqual('');
});
