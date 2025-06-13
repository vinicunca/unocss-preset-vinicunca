it('list-style-position', async () => {
  expect(await run(['list-inside', 'list-outside'])).toMatchInlineSnapshot(`
    ".list-inside {
      list-style-position: inside;
    }

    .list-outside {
      list-style-position: outside;
    }"
  `);
  expect(
    await run(['-list-inside', '-list-outside', 'list-inside/foo', 'list-outside/foo']),
  ).toEqual('');
});

it('list', async () => {
  expect(await run(['list-none', 'list-disc', 'list-decimal', 'list-[var(--value)]']))
    .toMatchInlineSnapshot(`
      ".list-\\[var\\(--value\\)\\] {
        list-style-type: var(--value);
      }

      .list-decimal {
        list-style-type: decimal;
      }

      .list-disc {
        list-style-type: disc;
      }

      .list-none {
        list-style-type: none;
      }"
    `);
  expect(
    await run([
      '-list-none',
      '-list-disc',
      '-list-decimal',
      '-list-[var(--value)]',
      'list-none/foo',
      'list-disc/foo',
      'list-decimal/foo',
      'list-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('list-image', async () => {
  expect(await run(['list-image-none', 'list-image-[var(--value)]'])).toMatchInlineSnapshot(`
    ".list-image-\\[var\\(--value\\)\\] {
      list-style-image: var(--value);
    }

    .list-image-none {
      list-style-image: none;
    }"
  `);
  expect(
    await run([
      'list-image',
      '-list-image-none',
      '-list-image-[var(--value)]',
      'list-image-none/foo',
      'list-image-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('appearance', async () => {
  expect(await run(['appearance-none', 'appearance-auto'])).toMatchInlineSnapshot(`
    ".appearance-auto {
      appearance: auto;
    }

    .appearance-none {
      appearance: none;
    }"
  `);
  expect(
    await run([
      'appearance',
      '-appearance-none',
      '-appearance-auto',
      'appearance-none/foo',
      'appearance-auto/foo',
    ]),
  ).toEqual('');
});

it('color-scheme', async () => {
  expect(
    await run([
      'scheme-normal',
      'scheme-dark',
      'scheme-light',
      'scheme-light-dark',
      'scheme-only-dark',
      'scheme-only-light',
    ]),
  ).toMatchInlineSnapshot(`
    ".scheme-dark {
      color-scheme: dark;
    }

    .scheme-light {
      color-scheme: light;
    }

    .scheme-light-dark {
      color-scheme: light dark;
    }

    .scheme-normal {
      color-scheme: normal;
    }

    .scheme-only-dark {
      color-scheme: dark only;
    }

    .scheme-only-light {
      color-scheme: light only;
    }"
  `);
  expect(
    await run([
      'scheme',
      '-scheme-dark',
      '-scheme-light',
      '-scheme-light-dark',
      '-scheme-dark-only',
      '-scheme-light-only',
    ]),
  ).toEqual('');
});

it('columns', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --container-3xs: 16rem;
          --container-7xl: 80rem;
        }
        @tailwind utilities;
      `,
      [
        'columns-auto',
        'columns-3xs',
        'columns-7xl',
        'columns-4',
        'columns-99',
        'columns-[123]',
        'columns-[var(--value)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --container-3xs: 16rem;
      --container-7xl: 80rem;
    }

    .columns-3xs {
      columns: var(--container-3xs);
    }

    .columns-4 {
      columns: 4;
    }

    .columns-7xl {
      columns: var(--container-7xl);
    }

    .columns-99 {
      columns: 99;
    }

    .columns-\\[123\\] {
      columns: 123;
    }

    .columns-\\[var\\(--value\\)\\] {
      columns: var(--value);
    }

    .columns-auto {
      columns: auto;
    }"
  `);
  expect(
    await run([
      'columns',
      'columns--4',
      '-columns-4',
      '-columns-[123]',
      '-columns-[var(--value)]',
      'columns-unknown',
      'columns-auto/foo',
      'columns-3xs/foo',
      'columns-7xl/foo',
      'columns-4/foo',
      'columns-99/foo',
      'columns-[123]/foo',
      'columns-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('break-before', async () => {
  expect(
    await run([
      'break-before-auto',
      'break-before-avoid',
      'break-before-all',
      'break-before-avoid-page',
      'break-before-page',
      'break-before-left',
      'break-before-right',
      'break-before-column',
    ]),
  ).toMatchInlineSnapshot(`
    ".break-before-all {
      break-before: all;
    }

    .break-before-auto {
      break-before: auto;
    }

    .break-before-avoid {
      break-before: avoid;
    }

    .break-before-avoid-page {
      break-before: avoid-page;
    }

    .break-before-column {
      break-before: column;
    }

    .break-before-left {
      break-before: left;
    }

    .break-before-page {
      break-before: page;
    }

    .break-before-right {
      break-before: right;
    }"
  `);
  expect(
    await run([
      'break-before',
      '-break-before-auto',
      '-break-before-avoid',
      '-break-before-all',
      '-break-before-avoid-page',
      '-break-before-page',
      '-break-before-left',
      '-break-before-right',
      '-break-before-column',
      'break-before-auto/foo',
      'break-before-avoid/foo',
      'break-before-all/foo',
      'break-before-avoid-page/foo',
      'break-before-page/foo',
      'break-before-left/foo',
      'break-before-right/foo',
      'break-before-column/foo',
    ]),
  ).toEqual('');
});

it('break-inside', async () => {
  expect(
    await run([
      'break-inside-auto',
      'break-inside-avoid',
      'break-inside-avoid-page',
      'break-inside-avoid-column',
    ]),
  ).toMatchInlineSnapshot(`
    ".break-inside-auto {
      break-inside: auto;
    }

    .break-inside-avoid {
      break-inside: avoid;
    }

    .break-inside-avoid-column {
      break-inside: avoid-column;
    }

    .break-inside-avoid-page {
      break-inside: avoid-page;
    }"
  `);
  expect(
    await run([
      'break-inside',
      '-break-inside-auto',
      '-break-inside-avoid',
      '-break-inside-avoid-page',
      '-break-inside-avoid-column',
      'break-inside-auto/foo',
      'break-inside-avoid/foo',
      'break-inside-avoid-page/foo',
      'break-inside-avoid-column/foo',
    ]),
  ).toEqual('');
});

it('break-after', async () => {
  expect(
    await run([
      'break-after-auto',
      'break-after-avoid',
      'break-after-all',
      'break-after-avoid-page',
      'break-after-page',
      'break-after-left',
      'break-after-right',
      'break-after-column',
    ]),
  ).toMatchInlineSnapshot(`
    ".break-after-all {
      break-after: all;
    }

    .break-after-auto {
      break-after: auto;
    }

    .break-after-avoid {
      break-after: avoid;
    }

    .break-after-avoid-page {
      break-after: avoid-page;
    }

    .break-after-column {
      break-after: column;
    }

    .break-after-left {
      break-after: left;
    }

    .break-after-page {
      break-after: page;
    }

    .break-after-right {
      break-after: right;
    }"
  `);
  expect(
    await run([
      'break-after',
      '-break-after-auto',
      '-break-after-avoid',
      '-break-after-all',
      '-break-after-avoid-page',
      '-break-after-page',
      '-break-after-left',
      '-break-after-right',
      '-break-after-column',
      'break-after-auto/foo',
      'break-after-avoid/foo',
      'break-after-all/foo',
      'break-after-avoid-page/foo',
      'break-after-page/foo',
      'break-after-left/foo',
      'break-after-right/foo',
      'break-after-column/foo',
    ]),
  ).toEqual('');
});

it('space-x', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing-4: 1rem;
        }
        @tailwind utilities;
      `,
      ['space-x-4', 'space-x-[4px]', '-space-x-4'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-space-x-reverse: 0;
        }
      }
    }

    :root, :host {
      --spacing-4: 1rem;
    }

    :where(.-space-x-4 > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing-4) * -1) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing-4) * -1) * calc(1 - var(--tw-space-x-reverse)));
    }

    :where(.space-x-4 > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(var(--spacing-4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(var(--spacing-4) * calc(1 - var(--tw-space-x-reverse)));
    }

    :where(.space-x-\\[4px\\] > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(4px * var(--tw-space-x-reverse));
      margin-inline-end: calc(4px * calc(1 - var(--tw-space-x-reverse)));
    }

    @property --tw-space-x-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }"
  `);
  expect(await run(['space-x', 'space-x-4/foo', 'space-x-[4px]/foo', '-space-x-4/foo'])).toEqual('');
});

it('space-y', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing-4: 1rem;
        }
        @tailwind utilities;
      `,
      ['space-y-4', 'space-y-[4px]', '-space-y-4'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-space-y-reverse: 0;
        }
      }
    }

    :root, :host {
      --spacing-4: 1rem;
    }

    :where(.-space-y-4 > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing-4) * -1) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing-4) * -1) * calc(1 - var(--tw-space-y-reverse)));
    }

    :where(.space-y-4 > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--spacing-4) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--spacing-4) * calc(1 - var(--tw-space-y-reverse)));
    }

    :where(.space-y-\\[4px\\] > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(4px * var(--tw-space-y-reverse));
      margin-block-end: calc(4px * calc(1 - var(--tw-space-y-reverse)));
    }

    @property --tw-space-y-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }"
  `);
  expect(await run(['space-y', 'space-y-4/foo', 'space-y-[4px]/foo', '-space-y-4/foo'])).toEqual('');
});

it('space-x-reverse', async () => {
  expect(await run(['space-x-reverse'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-space-x-reverse: 0;
        }
      }
    }

    :where(.space-x-reverse > :not(:last-child)) {
      --tw-space-x-reverse: 1;
    }

    @property --tw-space-x-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }"
  `);
  expect(await run(['-space-x-reverse', 'space-x-reverse/foo'])).toEqual('');
});

it('space-y-reverse', async () => {
  expect(await run(['space-y-reverse'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-space-y-reverse: 0;
        }
      }
    }

    :where(.space-y-reverse > :not(:last-child)) {
      --tw-space-y-reverse: 1;
    }

    @property --tw-space-y-reverse {
      syntax: "*";
      inherits: false;
      initial-value: 0;
    }"
  `);
  expect(await run(['-space-y-reverse', 'space-y-reverse/foo'])).toEqual('');
});

it('accent', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        'accent-red-500',
        'accent-red-500/50',
        'accent-red-500/2.25',
        'accent-red-500/2.5',
        'accent-red-500/2.75',
        'accent-red-500/[0.5]',
        'accent-red-500/[50%]',
        'accent-current',
        'accent-current/50',
        'accent-current/[0.5]',
        'accent-current/[50%]',
        'accent-inherit',
        'accent-transparent',
        'accent-[#0088cc]',
        'accent-[#0088cc]/50',
        'accent-[#0088cc]/[0.5]',
        'accent-[#0088cc]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .accent-\\[\\#0088cc\\] {
      accent-color: #08c;
    }

    .accent-\\[\\#0088cc\\]\\/50, .accent-\\[\\#0088cc\\]\\/\\[0\\.5\\], .accent-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      accent-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .accent-current, .accent-current\\/50 {
      accent-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-current\\/50 {
        accent-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .accent-current\\/\\[0\\.5\\] {
      accent-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-current\\/\\[0\\.5\\] {
        accent-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .accent-current\\/\\[50\\%\\] {
      accent-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-current\\/\\[50\\%\\] {
        accent-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .accent-inherit {
      accent-color: inherit;
    }

    .accent-red-500 {
      accent-color: var(--color-red-500);
    }

    .accent-red-500\\/2\\.5 {
      accent-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-red-500\\/2\\.5 {
        accent-color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .accent-red-500\\/2\\.25 {
      accent-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-red-500\\/2\\.25 {
        accent-color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .accent-red-500\\/2\\.75 {
      accent-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-red-500\\/2\\.75 {
        accent-color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .accent-red-500\\/50 {
      accent-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-red-500\\/50 {
        accent-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .accent-red-500\\/\\[0\\.5\\] {
      accent-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-red-500\\/\\[0\\.5\\] {
        accent-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .accent-red-500\\/\\[50\\%\\] {
      accent-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .accent-red-500\\/\\[50\\%\\] {
        accent-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .accent-transparent {
      accent-color: #0000;
    }"
  `);
  expect(
    await run([
      'accent',
      '-accent-red-500',
      'accent-red-500/-50',
      '-accent-red-500/50',
      '-accent-red-500/[0.5]',
      '-accent-red-500/[50%]',
      '-accent-current',
      '-accent-current/50',
      '-accent-current/[0.5]',
      '-accent-current/[50%]',
      '-accent-inherit',
      '-accent-transparent',
      'accent-[#0088cc]/-50',
      '-accent-[#0088cc]',
      '-accent-[#0088cc]/50',
      '-accent-[#0088cc]/[0.5]',
      '-accent-[#0088cc]/[50%]',
      'accent-red-500/foo',
      'accent-red-500/50/foo',
      'accent-red-500/[0.5]/foo',
      'accent-red-500/[50%]/foo',
      'accent-current/foo',
      'accent-current/50/foo',
      'accent-current/[0.5]/foo',
      'accent-current/[50%]/foo',
      'accent-inherit/foo',
      'accent-transparent/foo',
      'accent-[#0088cc]/foo',
      'accent-[#0088cc]/50/foo',
      'accent-[#0088cc]/[0.5]/foo',
      'accent-[#0088cc]/[50%]/foo',
    ]),
  ).toEqual('');
});

it('caret', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        'caret-red-500',
        'caret-red-500/50',
        'caret-red-500/2.25',
        'caret-red-500/2.5',
        'caret-red-500/2.75',
        'caret-red-500/[0.5]',
        'caret-red-500/[50%]',
        'caret-current',
        'caret-current/50',
        'caret-current/[0.5]',
        'caret-current/[50%]',
        'caret-inherit',
        'caret-transparent',
        'caret-[#0088cc]',
        'caret-[#0088cc]/50',
        'caret-[#0088cc]/[0.5]',
        'caret-[#0088cc]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .caret-\\[\\#0088cc\\] {
      caret-color: #08c;
    }

    .caret-\\[\\#0088cc\\]\\/50, .caret-\\[\\#0088cc\\]\\/\\[0\\.5\\], .caret-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      caret-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .caret-current, .caret-current\\/50 {
      caret-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-current\\/50 {
        caret-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .caret-current\\/\\[0\\.5\\] {
      caret-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-current\\/\\[0\\.5\\] {
        caret-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .caret-current\\/\\[50\\%\\] {
      caret-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-current\\/\\[50\\%\\] {
        caret-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .caret-inherit {
      caret-color: inherit;
    }

    .caret-red-500 {
      caret-color: var(--color-red-500);
    }

    .caret-red-500\\/2\\.5 {
      caret-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-red-500\\/2\\.5 {
        caret-color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .caret-red-500\\/2\\.25 {
      caret-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-red-500\\/2\\.25 {
        caret-color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .caret-red-500\\/2\\.75 {
      caret-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-red-500\\/2\\.75 {
        caret-color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .caret-red-500\\/50 {
      caret-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-red-500\\/50 {
        caret-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .caret-red-500\\/\\[0\\.5\\] {
      caret-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-red-500\\/\\[0\\.5\\] {
        caret-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .caret-red-500\\/\\[50\\%\\] {
      caret-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .caret-red-500\\/\\[50\\%\\] {
        caret-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .caret-transparent {
      caret-color: #0000;
    }"
  `);
  expect(
    await run([
      'caret',
      '-caret-red-500',
      '-caret-red-500/50',
      '-caret-red-500/[0.5]',
      '-caret-red-500/[50%]',
      '-caret-current',
      '-caret-current/50',
      '-caret-current/[0.5]',
      '-caret-current/[50%]',
      '-caret-inherit',
      '-caret-transparent',
      '-caret-[#0088cc]',
      '-caret-[#0088cc]/50',
      '-caret-[#0088cc]/[0.5]',
      '-caret-[#0088cc]/[50%]',
      'caret-red-500/foo',
      'caret-red-500/50/foo',
      'caret-red-500/[0.5]/foo',
      'caret-red-500/[50%]/foo',
      'caret-current/foo',
      'caret-current/50/foo',
      'caret-current/[0.5]/foo',
      'caret-current/[50%]/foo',
      'caret-inherit/foo',
      'caret-transparent/foo',
      'caret-[#0088cc]/foo',
      'caret-[#0088cc]/50/foo',
      'caret-[#0088cc]/[0.5]/foo',
      'caret-[#0088cc]/[50%]/foo',
    ]),
  ).toEqual('');
});

it('overflow', async () => {
  expect(
    await run([
      'overflow-auto',
      'overflow-hidden',
      'overflow-clip',
      'overflow-visible',
      'overflow-scroll',
    ]),
  ).toMatchInlineSnapshot(`
    ".overflow-auto {
      overflow: auto;
    }

    .overflow-clip {
      overflow: clip;
    }

    .overflow-hidden {
      overflow: hidden;
    }

    .overflow-scroll {
      overflow: scroll;
    }

    .overflow-visible {
      overflow: visible;
    }"
  `);
  expect(
    await run([
      'overflow',
      '-overflow-auto',
      '-overflow-hidden',
      '-overflow-clip',
      '-overflow-visible',
      '-overflow-scroll',
      'overflow-auto/foo',
      'overflow-hidden/foo',
      'overflow-clip/foo',
      'overflow-visible/foo',
      'overflow-scroll/foo',
    ]),
  ).toEqual('');
});

it('overflow-x', async () => {
  expect(
    await run([
      'overflow-x-auto',
      'overflow-x-hidden',
      'overflow-x-clip',
      'overflow-x-visible',
      'overflow-x-scroll',
    ]),
  ).toMatchInlineSnapshot(`
    ".overflow-x-auto {
      overflow-x: auto;
    }

    .overflow-x-clip {
      overflow-x: clip;
    }

    .overflow-x-hidden {
      overflow-x: hidden;
    }

    .overflow-x-scroll {
      overflow-x: scroll;
    }

    .overflow-x-visible {
      overflow-x: visible;
    }"
  `);
  expect(
    await run([
      'overflow-x',
      '-overflow-x-auto',
      '-overflow-x-hidden',
      '-overflow-x-clip',
      '-overflow-x-visible',
      '-overflow-x-scroll',
      'overflow-x-auto/foo',
      'overflow-x-hidden/foo',
      'overflow-x-clip/foo',
      'overflow-x-visible/foo',
      'overflow-x-scroll/foo',
    ]),
  ).toEqual('');
});

it('overflow-y', async () => {
  expect(
    await run([
      'overflow-y-auto',
      'overflow-y-hidden',
      'overflow-y-clip',
      'overflow-y-visible',
      'overflow-y-scroll',
    ]),
  ).toMatchInlineSnapshot(`
    ".overflow-y-auto {
      overflow-y: auto;
    }

    .overflow-y-clip {
      overflow-y: clip;
    }

    .overflow-y-hidden {
      overflow-y: hidden;
    }

    .overflow-y-scroll {
      overflow-y: scroll;
    }

    .overflow-y-visible {
      overflow-y: visible;
    }"
  `);
  expect(
    await run([
      'overflow-y',
      '-overflow-y-auto',
      '-overflow-y-hidden',
      '-overflow-y-clip',
      '-overflow-y-visible',
      '-overflow-y-scroll',
      'overflow-y-auto/foo',
      'overflow-y-hidden/foo',
      'overflow-y-clip/foo',
      'overflow-y-visible/foo',
      'overflow-y-scroll/foo',
    ]),
  ).toEqual('');
});

it('overscroll', async () => {
  expect(await run(['overscroll-auto', 'overscroll-contain', 'overscroll-none']))
    .toMatchInlineSnapshot(`
    ".overscroll-auto {
      overscroll-behavior: auto;
    }

    .overscroll-contain {
      overscroll-behavior: contain;
    }

    .overscroll-none {
      overscroll-behavior: none;
    }"
  `);
  expect(
    await run([
      'overscroll',
      '-overscroll-auto',
      '-overscroll-contain',
      '-overscroll-none',
      'overscroll-auto/foo',
      'overscroll-contain/foo',
      'overscroll-none/foo',
    ]),
  ).toEqual('');
});

it('overscroll-x', async () => {
  expect(await run(['overscroll-x-auto', 'overscroll-x-contain', 'overscroll-x-none']))
    .toMatchInlineSnapshot(`
    ".overscroll-x-auto {
      overscroll-behavior-x: auto;
    }

    .overscroll-x-contain {
      overscroll-behavior-x: contain;
    }

    .overscroll-x-none {
      overscroll-behavior-x: none;
    }"
  `);
  expect(
    await run([
      'overscroll-x',
      '-overscroll-x-auto',
      '-overscroll-x-contain',
      '-overscroll-x-none',
      'overscroll-x-auto/foo',
      'overscroll-x-contain/foo',
      'overscroll-x-none/foo',
    ]),
  ).toEqual('');
});

it('overscroll-y', async () => {
  expect(await run(['overscroll-y-auto', 'overscroll-y-contain', 'overscroll-y-none']))
    .toMatchInlineSnapshot(`
    ".overscroll-y-auto {
      overscroll-behavior-y: auto;
    }

    .overscroll-y-contain {
      overscroll-behavior-y: contain;
    }

    .overscroll-y-none {
      overscroll-behavior-y: none;
    }"
  `);
  expect(
    await run([
      'overscroll-y',
      '-overscroll-y-auto',
      '-overscroll-y-contain',
      '-overscroll-y-none',
      'overscroll-y-auto/foo',
      'overscroll-y-contain/foo',
      'overscroll-y-none/foo',
    ]),
  ).toEqual('');
});

it('scroll-behavior', async () => {
  expect(await run(['scroll-auto', 'scroll-smooth'])).toMatchInlineSnapshot(`
    ".scroll-auto {
      scroll-behavior: auto;
    }

    .scroll-smooth {
      scroll-behavior: smooth;
    }"
  `);
  expect(
    await run(['scroll', '-scroll-auto', '-scroll-smooth', 'scroll-auto/foo', 'scroll-smooth/foo']),
  ).toEqual('');
});

it('truncate', async () => {
  expect(await run(['truncate'])).toMatchInlineSnapshot(`
    ".truncate {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }"
  `);
  expect(await run(['-truncate', 'truncate/foo'])).toEqual('');
});

it('text-overflow', async () => {
  expect(await run(['text-ellipsis', 'text-clip'])).toMatchInlineSnapshot(`
    ".text-clip {
      text-overflow: clip;
    }

    .text-ellipsis {
      text-overflow: ellipsis;
    }"
  `);
  expect(await run(['-text-ellipsis', '-text-clip', 'text-ellipsis/foo', 'text-clip/foo'])).toEqual(
    '',
  );
});

it('hyphens', async () => {
  expect(await run(['hyphens-none', 'hyphens-manual', 'hyphens-auto'])).toMatchInlineSnapshot(`
    ".hyphens-auto {
      -webkit-hyphens: auto;
      hyphens: auto;
    }

    .hyphens-manual {
      -webkit-hyphens: manual;
      hyphens: manual;
    }

    .hyphens-none {
      -webkit-hyphens: none;
      hyphens: none;
    }"
  `);
  expect(
    await run([
      'hyphens',
      '-hyphens-none',
      '-hyphens-manual',
      '-hyphens-auto',
      'hyphens-none/foo',
      'hyphens-manual/foo',
      'hyphens-auto/foo',
    ]),
  ).toEqual('');
});

it('whitespace', async () => {
  expect(
    await run([
      'whitespace-normal',
      'whitespace-nowrap',
      'whitespace-pre',
      'whitespace-pre-line',
      'whitespace-pre-wrap',
      'whitespace-break-spaces',
    ]),
  ).toMatchInlineSnapshot(`
    ".whitespace-break-spaces {
      white-space: break-spaces;
    }

    .whitespace-normal {
      white-space: normal;
    }

    .whitespace-nowrap {
      white-space: nowrap;
    }

    .whitespace-pre {
      white-space: pre;
    }

    .whitespace-pre-line {
      white-space: pre-line;
    }

    .whitespace-pre-wrap {
      white-space: pre-wrap;
    }"
  `);
  expect(
    await run([
      'whitespace',
      '-whitespace-normal',
      '-whitespace-nowrap',
      '-whitespace-pre',
      '-whitespace-pre-line',
      '-whitespace-pre-wrap',
      '-whitespace-break-spaces',
      'whitespace-normal/foo',
      'whitespace-nowrap/foo',
      'whitespace-pre/foo',
      'whitespace-pre-line/foo',
      'whitespace-pre-wrap/foo',
      'whitespace-break-spaces/foo',
    ]),
  ).toEqual('');
});

it('text-wrap', async () => {
  expect(await run(['text-wrap', 'text-nowrap', 'text-balance', 'text-pretty']))
    .toMatchInlineSnapshot(`
    ".text-balance {
      text-wrap: balance;
    }

    .text-nowrap {
      text-wrap: nowrap;
    }

    .text-pretty {
      text-wrap: pretty;
    }

    .text-wrap {
      text-wrap: wrap;
    }"
  `);
  expect(
    await run([
      '-text-wrap',
      '-text-nowrap',
      '-text-balance',
      '-text-pretty',
      'text-wrap/foo',
      'text-nowrap/foo',
      'text-balance/foo',
      'text-pretty/foo',
    ]),
  ).toEqual('');
});

it('word-break', async () => {
  expect(await run(['break-normal', 'break-words', 'break-all', 'break-keep']))
    .toMatchInlineSnapshot(`
      ".break-normal {
        overflow-wrap: normal;
        word-break: normal;
      }

      .break-words {
        overflow-wrap: break-word;
      }

      .break-all {
        word-break: break-all;
      }

      .break-keep {
        word-break: keep-all;
      }"
    `);
  expect(
    await run([
      '-break-normal',
      '-break-words',
      '-break-all',
      '-break-keep',
      'break-normal/foo',
      'break-words/foo',
      'break-all/foo',
      'break-keep/foo',
    ]),
  ).toEqual('');
});

it('overflow-wrap', async () => {
  expect(await run(['wrap-anywhere', 'wrap-break-word', 'wrap-normal'])).toMatchInlineSnapshot(`
    ".wrap-anywhere {
      overflow-wrap: anywhere;
    }

    .wrap-break-word {
      overflow-wrap: break-word;
    }

    .wrap-normal {
      overflow-wrap: normal;
    }"
  `);
  expect(
    await run([
      '-wrap-anywhere',
      '-wrap-break-word',
      '-wrap-normal',
      'wrap-anywhere/foo',
      'wrap-break-word/foo',
      'wrap-normal/foo',
    ]),
  ).toEqual('');
});

it('bg', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // background-color
        'bg-red-500',
        'bg-red-500/50',
        'bg-red-500/2.25',
        'bg-red-500/2.5',
        'bg-red-500/2.75',
        'bg-red-500/[0.5]',
        'bg-red-500/[50%]',
        'bg-current',
        'bg-current/50',
        'bg-current/[0.5]',
        'bg-current/[50%]',
        'bg-current/[var(--bg-opacity)]',
        'bg-inherit',
        'bg-transparent',
        'bg-[#0088cc]',
        'bg-[#0088cc]/50',
        'bg-[#0088cc]/[0.5]',
        'bg-[#0088cc]/[50%]',
        'bg-[var(--some-var)]',
        'bg-[var(--some-var)]/50',
        'bg-[var(--some-var)]/[0.5]',
        'bg-[var(--some-var)]/[50%]',
        'bg-[color:var(--some-var)]',
        'bg-[color:var(--some-var)]/50',
        'bg-[color:var(--some-var)]/[0.5]',
        'bg-[color:var(--some-var)]/[50%]',

        // background-image
        'bg-none',

        // Modern linear-gradient API
        'bg-linear-to-t',
        'bg-linear-to-tr',
        'bg-linear-to-r',
        'bg-linear-to-br',
        'bg-linear-to-b',
        'bg-linear-to-bl',
        'bg-linear-to-l',
        'bg-linear-to-tl',
        'bg-linear-45',
        '-bg-linear-45',

        // With interpolation mode modifier
        'bg-linear-to-r/oklch',
        'bg-linear-to-r/oklab',
        'bg-linear-to-r/hsl',
        'bg-linear-to-r/srgb',
        'bg-linear-to-r/longer',
        'bg-linear-to-r/shorter',
        'bg-linear-to-r/increasing',
        'bg-linear-to-r/decreasing',
        'bg-linear-to-r/[in_hsl_longer_hue]',
        'bg-linear-45/oklab',
        '-bg-linear-45/oklab',
        'bg-linear-45/shorter',
        'bg-linear-45/[in_hsl_longer_hue]',
        'bg-conic/oklch',
        'bg-conic/oklab',
        'bg-conic/hsl',
        'bg-conic/srgb',
        'bg-conic/longer',
        'bg-conic/shorter',
        'bg-conic/increasing',
        'bg-conic/decreasing',
        'bg-conic/[in_hsl_longer_hue]',
        'bg-conic-45/oklab',
        '-bg-conic-45/oklab',
        'bg-conic-45/shorter',
        'bg-conic-45/[in_hsl_longer_hue]',
        'bg-radial/oklch',
        'bg-radial/oklab',
        'bg-radial/hsl',
        'bg-radial/srgb',
        'bg-radial/longer',
        'bg-radial/shorter',
        'bg-radial/increasing',
        'bg-radial/decreasing',
        'bg-radial/[in_hsl_longer_hue]',
        'bg-radial-[circle_at_center]',
        // Invalid but proves not converted to `in oklch longer hue` when used
        // as an arbitrary value
        'bg-linear-to-r/[longer]',

        'bg-[url(/image.png)]',
        'bg-[url:var(--my-url)]',
        'bg-[linear-gradient(to_bottom,red,blue)]',
        'bg-[image:var(--my-gradient)]',
        'bg-linear-[125deg]',
        'bg-linear-[1.3rad]',
        'bg-linear-[to_bottom]',
        '-bg-linear-[125deg]',
        '-bg-linear-[1.3rad]',

        // background-size
        'bg-auto',
        'bg-cover',
        'bg-contain',
        'bg-[cover]',
        'bg-[contain]',
        'bg-[size:120px_120px]',

        // background-attachment
        'bg-fixed',
        'bg-local',
        'bg-scroll',

        // background-position
        'bg-top',
        'bg-top-left',
        'bg-top-right',
        'bg-bottom',
        'bg-bottom-left',
        'bg-bottom-right',
        'bg-left',
        'bg-right',
        'bg-center',
        'bg-[50%]',
        'bg-[120px]',
        'bg-[120px_120px]',
        'bg-[length:120px_120px]',
        'bg-[position:120px_120px]',
        'bg-[size:120px_120px]',
        // Legacy versions in v4.0 and earlier
        'bg-right-top',
        'bg-right-bottom',
        'bg-left-bottom',
        'bg-left-top',

        // background-repeat
        'bg-repeat',
        'bg-no-repeat',
        'bg-repeat-x',
        'bg-repeat-y',
        'bg-repeat-round',
        'bg-repeat-space',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .bg-\\[\\#0088cc\\] {
      background-color: #08c;
    }

    .bg-\\[\\#0088cc\\]\\/50, .bg-\\[\\#0088cc\\]\\/\\[0\\.5\\], .bg-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      background-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .bg-\\[color\\:var\\(--some-var\\)\\], .bg-\\[color\\:var\\(--some-var\\)\\]\\/50 {
      background-color: var(--some-var);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-\\[color\\:var\\(--some-var\\)\\]\\/50 {
        background-color: color-mix(in oklab, var(--some-var) 50%, transparent);
      }
    }

    .bg-\\[color\\:var\\(--some-var\\)\\]\\/\\[0\\.5\\] {
      background-color: var(--some-var);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-\\[color\\:var\\(--some-var\\)\\]\\/\\[0\\.5\\] {
        background-color: color-mix(in oklab, var(--some-var) 50%, transparent);
      }
    }

    .bg-\\[color\\:var\\(--some-var\\)\\]\\/\\[50\\%\\] {
      background-color: var(--some-var);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-\\[color\\:var\\(--some-var\\)\\]\\/\\[50\\%\\] {
        background-color: color-mix(in oklab, var(--some-var) 50%, transparent);
      }
    }

    .bg-\\[var\\(--some-var\\)\\], .bg-\\[var\\(--some-var\\)\\]\\/50 {
      background-color: var(--some-var);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-\\[var\\(--some-var\\)\\]\\/50 {
        background-color: color-mix(in oklab, var(--some-var) 50%, transparent);
      }
    }

    .bg-\\[var\\(--some-var\\)\\]\\/\\[0\\.5\\] {
      background-color: var(--some-var);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-\\[var\\(--some-var\\)\\]\\/\\[0\\.5\\] {
        background-color: color-mix(in oklab, var(--some-var) 50%, transparent);
      }
    }

    .bg-\\[var\\(--some-var\\)\\]\\/\\[50\\%\\] {
      background-color: var(--some-var);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-\\[var\\(--some-var\\)\\]\\/\\[50\\%\\] {
        background-color: color-mix(in oklab, var(--some-var) 50%, transparent);
      }
    }

    .bg-current, .bg-current\\/50 {
      background-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-current\\/50 {
        background-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .bg-current\\/\\[0\\.5\\] {
      background-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-current\\/\\[0\\.5\\] {
        background-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .bg-current\\/\\[50\\%\\] {
      background-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-current\\/\\[50\\%\\] {
        background-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .bg-current\\/\\[var\\(--bg-opacity\\)\\] {
      background-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-current\\/\\[var\\(--bg-opacity\\)\\] {
        background-color: color-mix(in oklab, currentcolor var(--bg-opacity), transparent);
      }
    }

    .bg-inherit {
      background-color: inherit;
    }

    .bg-red-500 {
      background-color: var(--color-red-500);
    }

    .bg-red-500\\/2\\.5 {
      background-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-red-500\\/2\\.5 {
        background-color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .bg-red-500\\/2\\.25 {
      background-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-red-500\\/2\\.25 {
        background-color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .bg-red-500\\/2\\.75 {
      background-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-red-500\\/2\\.75 {
        background-color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .bg-red-500\\/50 {
      background-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-red-500\\/50 {
        background-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .bg-red-500\\/\\[0\\.5\\] {
      background-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-red-500\\/\\[0\\.5\\] {
        background-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .bg-red-500\\/\\[50\\%\\] {
      background-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-red-500\\/\\[50\\%\\] {
        background-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .bg-transparent {
      background-color: #0000;
    }

    .-bg-linear-45 {
      --tw-gradient-position: calc(45deg * -1);
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .-bg-linear-45 {
        --tw-gradient-position: calc(45deg * -1) in oklab;
      }
    }

    .-bg-linear-45\\/oklab {
      --tw-gradient-position: calc(45deg * -1);
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .-bg-linear-45\\/oklab {
        --tw-gradient-position: calc(45deg * -1) in oklab;
      }
    }

    .bg-linear-45 {
      --tw-gradient-position: 45deg;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-45 {
        --tw-gradient-position: 45deg in oklab;
      }
    }

    .bg-linear-45\\/\\[in_hsl_longer_hue\\] {
      --tw-gradient-position: 45deg;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-45\\/\\[in_hsl_longer_hue\\] {
        --tw-gradient-position: 45deg in hsl longer hue;
      }
    }

    .bg-linear-45\\/oklab {
      --tw-gradient-position: 45deg;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-45\\/oklab {
        --tw-gradient-position: 45deg in oklab;
      }
    }

    .bg-linear-45\\/shorter {
      --tw-gradient-position: 45deg;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-45\\/shorter {
        --tw-gradient-position: 45deg in oklch shorter hue;
      }
    }

    .bg-linear-to-b {
      --tw-gradient-position: to bottom;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-b {
        --tw-gradient-position: to bottom in oklab;
      }
    }

    .bg-linear-to-bl {
      --tw-gradient-position: to bottom left;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-bl {
        --tw-gradient-position: to bottom left in oklab;
      }
    }

    .bg-linear-to-br {
      --tw-gradient-position: to bottom right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-br {
        --tw-gradient-position: to bottom right in oklab;
      }
    }

    .bg-linear-to-l {
      --tw-gradient-position: to left;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-l {
        --tw-gradient-position: to left in oklab;
      }
    }

    .bg-linear-to-r {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r {
        --tw-gradient-position: to right in oklab;
      }
    }

    .bg-linear-to-r\\/\\[in_hsl_longer_hue\\] {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/\\[in_hsl_longer_hue\\] {
        --tw-gradient-position: to right in hsl longer hue;
      }
    }

    .bg-linear-to-r\\/\\[longer\\] {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/\\[longer\\] {
        --tw-gradient-position: to right longer;
      }
    }

    .bg-linear-to-r\\/decreasing {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/decreasing {
        --tw-gradient-position: to right in oklch decreasing hue;
      }
    }

    .bg-linear-to-r\\/hsl {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/hsl {
        --tw-gradient-position: to right in hsl;
      }
    }

    .bg-linear-to-r\\/increasing {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/increasing {
        --tw-gradient-position: to right in oklch increasing hue;
      }
    }

    .bg-linear-to-r\\/longer {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/longer {
        --tw-gradient-position: to right in oklch longer hue;
      }
    }

    .bg-linear-to-r\\/oklab {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/oklab {
        --tw-gradient-position: to right in oklab;
      }
    }

    .bg-linear-to-r\\/oklch {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/oklch {
        --tw-gradient-position: to right in oklch;
      }
    }

    .bg-linear-to-r\\/shorter {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/shorter {
        --tw-gradient-position: to right in oklch shorter hue;
      }
    }

    .bg-linear-to-r\\/srgb {
      --tw-gradient-position: to right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-r\\/srgb {
        --tw-gradient-position: to right in srgb;
      }
    }

    .bg-linear-to-t {
      --tw-gradient-position: to top;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-t {
        --tw-gradient-position: to top in oklab;
      }
    }

    .bg-linear-to-tl {
      --tw-gradient-position: to top left;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-tl {
        --tw-gradient-position: to top left in oklab;
      }
    }

    .bg-linear-to-tr {
      --tw-gradient-position: to top right;
      background-image: linear-gradient(var(--tw-gradient-stops));
    }

    @supports (background-image: linear-gradient(in lab, red, red)) {
      .bg-linear-to-tr {
        --tw-gradient-position: to top right in oklab;
      }
    }

    .-bg-conic-45\\/oklab {
      --tw-gradient-position: from calc(45deg * -1) in oklab;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .-bg-linear-\\[1\\.3rad\\] {
      --tw-gradient-position: calc(74.4845deg * -1);
      background-image: linear-gradient(var(--tw-gradient-stops, calc(74.4845deg * -1)));
    }

    .-bg-linear-\\[125deg\\] {
      --tw-gradient-position: calc(125deg * -1);
      background-image: linear-gradient(var(--tw-gradient-stops, calc(125deg * -1)));
    }

    .bg-conic-45\\/\\[in_hsl_longer_hue\\] {
      --tw-gradient-position: from 45deg in hsl longer hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic-45\\/oklab {
      --tw-gradient-position: from 45deg in oklab;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic-45\\/shorter {
      --tw-gradient-position: from 45deg in oklch shorter hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/\\[in_hsl_longer_hue\\] {
      --tw-gradient-position: in hsl longer hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/decreasing {
      --tw-gradient-position: in oklch decreasing hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/hsl {
      --tw-gradient-position: in hsl;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/increasing {
      --tw-gradient-position: in oklch increasing hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/longer {
      --tw-gradient-position: in oklch longer hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/oklab {
      --tw-gradient-position: in oklab;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/oklch {
      --tw-gradient-position: in oklch;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/shorter {
      --tw-gradient-position: in oklch shorter hue;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-conic\\/srgb {
      --tw-gradient-position: in srgb;
      background-image: conic-gradient(var(--tw-gradient-stops));
    }

    .bg-linear-\\[1\\.3rad\\] {
      --tw-gradient-position: 74.4845deg;
      background-image: linear-gradient(var(--tw-gradient-stops, 74.4845deg));
    }

    .bg-linear-\\[125deg\\] {
      --tw-gradient-position: 125deg;
      background-image: linear-gradient(var(--tw-gradient-stops, 125deg));
    }

    .bg-linear-\\[to_bottom\\] {
      --tw-gradient-position: to bottom;
      background-image: linear-gradient(var(--tw-gradient-stops, to bottom));
    }

    .bg-radial-\\[circle_at_center\\] {
      --tw-gradient-position: circle at center;
      background-image: radial-gradient(var(--tw-gradient-stops, circle at center));
    }

    .bg-radial\\/\\[in_hsl_longer_hue\\] {
      --tw-gradient-position: in hsl longer hue;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/decreasing {
      --tw-gradient-position: in oklch decreasing hue;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/hsl {
      --tw-gradient-position: in hsl;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/increasing {
      --tw-gradient-position: in oklch increasing hue;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/longer {
      --tw-gradient-position: in oklch longer hue;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/oklab {
      --tw-gradient-position: in oklab;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/oklch {
      --tw-gradient-position: in oklch;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/shorter {
      --tw-gradient-position: in oklch shorter hue;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-radial\\/srgb {
      --tw-gradient-position: in srgb;
      background-image: radial-gradient(var(--tw-gradient-stops));
    }

    .bg-\\[image\\:var\\(--my-gradient\\)\\] {
      background-image: var(--my-gradient);
    }

    .bg-\\[linear-gradient\\(to_bottom\\,red\\,blue\\)\\] {
      background-image: linear-gradient(red, #00f);
    }

    .bg-\\[url\\(\\/image\\.png\\)\\] {
      background-image: url("/image.png");
    }

    .bg-\\[url\\:var\\(--my-url\\)\\] {
      background-image: var(--my-url);
    }

    .bg-none {
      background-image: none;
    }

    .bg-\\[contain\\] {
      background-size: contain;
    }

    .bg-\\[cover\\] {
      background-size: cover;
    }

    .bg-\\[length\\:120px_120px\\], .bg-\\[size\\:120px_120px\\] {
      background-size: 120px 120px;
    }

    .bg-auto {
      background-size: auto;
    }

    .bg-contain {
      background-size: contain;
    }

    .bg-cover {
      background-size: cover;
    }

    .bg-fixed {
      background-attachment: fixed;
    }

    .bg-local {
      background-attachment: local;
    }

    .bg-scroll {
      background-attachment: scroll;
    }

    .bg-\\[50\\%\\] {
      background-position: 50%;
    }

    .bg-\\[120px\\] {
      background-position: 120px;
    }

    .bg-\\[120px_120px\\], .bg-\\[position\\:120px_120px\\] {
      background-position: 120px 120px;
    }

    .bg-bottom {
      background-position: bottom;
    }

    .bg-bottom-left {
      background-position: 0 100%;
    }

    .bg-bottom-right {
      background-position: 100% 100%;
    }

    .bg-center {
      background-position: center;
    }

    .bg-left {
      background-position: 0;
    }

    .bg-left-bottom {
      background-position: 0 100%;
    }

    .bg-left-top {
      background-position: 0 0;
    }

    .bg-right {
      background-position: 100%;
    }

    .bg-right-bottom {
      background-position: 100% 100%;
    }

    .bg-right-top {
      background-position: 100% 0;
    }

    .bg-top {
      background-position: top;
    }

    .bg-top-left {
      background-position: 0 0;
    }

    .bg-top-right {
      background-position: 100% 0;
    }

    .bg-no-repeat {
      background-repeat: no-repeat;
    }

    .bg-repeat {
      background-repeat: repeat;
    }

    .bg-repeat-round {
      background-repeat: round;
    }

    .bg-repeat-space {
      background-repeat: space;
    }

    .bg-repeat-x {
      background-repeat: repeat-x;
    }

    .bg-repeat-y {
      background-repeat: repeat-y;
    }"
  `);
  expect(
    await run([
      'bg',
      'bg-unknown',

      // background-color
      '-bg-red-500',
      '-bg-red-500/50',
      '-bg-red-500/[0.5]',
      '-bg-red-500/[50%]',
      '-bg-current',
      '-bg-current/50',
      '-bg-current/[0.5]',
      '-bg-current/[50%]',
      '-bg-inherit',
      '-bg-transparent',
      '-bg-[#0088cc]',
      '-bg-[#0088cc]/50',
      '-bg-[#0088cc]/[0.5]',
      '-bg-[#0088cc]/[50%]',

      // background-image
      '-bg-none',
      '-bg-gradient-to-br',
      '-bg-linear-to-br',
      '-bg-linear-[to_bottom]',

      // background-size
      '-bg-auto',
      '-bg-cover',
      '-bg-contain',

      // background-attachment
      '-bg-fixed',
      '-bg-local',
      '-bg-scroll',

      // background-position
      '-bg-center',
      '-bg-top',
      '-bg-right-top',
      '-bg-right-bottom',
      '-bg-bottom',
      '-bg-left-bottom',
      '-bg-left',
      '-bg-left-top',

      // background-repeat
      '-bg-repeat',
      '-bg-no-repeat',
      '-bg-repeat-x',
      '-bg-repeat-y',
      '-bg-round',
      '-bg-space',

      'bg-none/foo',
      'bg-[url(/image.png)]/foo',
      'bg-[url:var(--my-url)]/foo',
      'bg-[linear-gradient(to_bottom,red,blue)]/foo',
      'bg-[image:var(--my-gradient)]/foo',
      'bg-linear-[to_bottom]/hsl',
      'bg-conic-[45deg]/hsl',
      'bg-conic-[circle_at_center]/hsl',
      'bg-auto/foo',
      'bg-cover/foo',
      'bg-contain/foo',
      'bg-[cover]/foo',
      'bg-[contain]/foo',
      'bg-[size:120px_120px]/foo',
      'bg-fixed/foo',
      'bg-local/foo',
      'bg-scroll/foo',
      'bg-center/foo',
      'bg-top/foo',
      'bg-right-top/foo',
      'bg-right-bottom/foo',
      'bg-bottom/foo',
      'bg-left-bottom/foo',
      'bg-left/foo',
      'bg-left-top/foo',
      'bg-[50%]/foo',
      'bg-[120px]/foo',
      'bg-[120px_120px]/foo',
      'bg-[length:120px_120px]/foo',
      'bg-[position:120px_120px]/foo',
      'bg-[size:120px_120px]/foo',
      'bg-repeat/foo',
      'bg-no-repeat/foo',
      'bg-repeat-x/foo',
      'bg-repeat-y/foo',
      'bg-round/foo',
      'bg-space/foo',
    ]),
  ).toEqual('');

  expect(
    await compileCss(
      css`
        @theme reference {
          --opacity-half: 0.5;
          --opacity-custom: var(--custom-opacity);
        }
        @tailwind utilities;
      `,
      ['bg-current/half', 'bg-current/custom', '[color:red]/half'],
    ),
  ).toMatchInlineSnapshot(`
    ".bg-current\\/custom {
      background-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-current\\/custom {
        background-color: color-mix(in oklab, currentcolor var(--opacity-custom, var(--custom-opacity)), transparent);
      }
    }

    .bg-current\\/half {
      background-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .bg-current\\/half {
        background-color: color-mix(in oklab, currentcolor var(--opacity-half, .5), transparent);
      }
    }

    .\\[color\\:red\\]\\/half {
      color: color-mix(in srgb, red .5, transparent);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .\\[color\\:red\\]\\/half {
        color: color-mix(in oklab, red var(--opacity-half, .5), transparent);
      }
    }"
  `);
});

it('bg-position', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      ['bg-position-[120px]', 'bg-position-[120px_120px]', 'bg-position-[var(--some-var)]'],
    ),
  ).toMatchInlineSnapshot(`
    ".bg-position-\\[120px\\] {
      background-position: 120px;
    }

    .bg-position-\\[120px_120px\\] {
      background-position: 120px 120px;
    }

    .bg-position-\\[var\\(--some-var\\)\\] {
      background-position: var(--some-var);
    }"
  `);
  expect(
    await run([
      'bg-position',
      'bg-position/foo',
      '-bg-position',
      '-bg-position/foo',

      'bg-position-[120px_120px]/foo',

      '-bg-position-[120px_120px]',
      '-bg-position-[120px_120px]/foo',
    ]),
  ).toEqual('');
});

it('bg-size', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      ['bg-size-[120px]', 'bg-size-[120px_120px]', 'bg-size-[var(--some-var)]'],
    ),
  ).toMatchInlineSnapshot(`
    ".bg-size-\\[120px\\] {
      background-size: 120px;
    }

    .bg-size-\\[120px_120px\\] {
      background-size: 120px 120px;
    }

    .bg-size-\\[var\\(--some-var\\)\\] {
      background-size: var(--some-var);
    }"
  `);
  expect(
    await run([
      'bg-size',
      'bg-size/foo',
      '-bg-size',
      '-bg-size/foo',

      'bg-size-[120px_120px]/foo',

      '-bg-size-[120px_120px]',
      '-bg-size-[120px_120px]/foo',
    ]),
  ).toEqual('');
});

it('from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // --tw-gradient-from
        'from-red-500',
        'from-red-500/50',
        'from-red-500/[0.5]',
        'from-red-500/[50%]',
        'from-current',
        'from-current/50',
        'from-current/[0.5]',
        'from-current/[50%]',
        'from-inherit',
        'from-transparent',
        'from-[#0088cc]',
        'from-[#0088cc]/50',
        'from-[#0088cc]/[0.5]',
        'from-[#0088cc]/[50%]',
        'from-[var(--my-color)]',
        'from-[var(--my-color)]/50',
        'from-[var(--my-color)]/[0.5]',
        'from-[var(--my-color)]/[50%]',
        'from-[color:var(--my-color)]',
        'from-[color:var(--my-color)]/50',
        'from-[color:var(--my-color)]/[0.5]',
        'from-[color:var(--my-color)]/[50%]',

        // --tw-gradient-from-position
        'from-0%',
        'from-5%',
        'from-100%',
        'from-[50%]',
        'from-[50px]',
        'from-[length:var(--my-position)]',
        'from-[percentage:var(--my-position)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-gradient-position: initial;
          --tw-gradient-from: #0000;
          --tw-gradient-via: #0000;
          --tw-gradient-to: #0000;
          --tw-gradient-stops: initial;
          --tw-gradient-via-stops: initial;
          --tw-gradient-from-position: 0%;
          --tw-gradient-via-position: 50%;
          --tw-gradient-to-position: 100%;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .from-\\[\\#0088cc\\] {
      --tw-gradient-from: #08c;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .from-\\[\\#0088cc\\]\\/50, .from-\\[\\#0088cc\\]\\/\\[0\\.5\\], .from-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-gradient-from: oklab(59.9824% -.067 -.124 / .5);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .from-\\[color\\:var\\(--my-color\\)\\], .from-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      --tw-gradient-from: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        --tw-gradient-from: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .from-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-gradient-from: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-gradient-from: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .from-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-gradient-from: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-gradient-from: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .from-\\[var\\(--my-color\\)\\], .from-\\[var\\(--my-color\\)\\]\\/50 {
      --tw-gradient-from: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-\\[var\\(--my-color\\)\\]\\/50 {
        --tw-gradient-from: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .from-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-gradient-from: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-gradient-from: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .from-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-gradient-from: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-gradient-from: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .from-current, .from-current\\/50 {
      --tw-gradient-from: currentcolor;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-current\\/50 {
        --tw-gradient-from: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .from-current\\/\\[0\\.5\\] {
      --tw-gradient-from: currentcolor;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-current\\/\\[0\\.5\\] {
        --tw-gradient-from: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .from-current\\/\\[50\\%\\] {
      --tw-gradient-from: currentcolor;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-current\\/\\[50\\%\\] {
        --tw-gradient-from: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .from-inherit {
      --tw-gradient-from: inherit;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .from-red-500 {
      --tw-gradient-from: var(--color-red-500);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .from-red-500\\/50 {
      --tw-gradient-from: #ef444480;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-red-500\\/50 {
        --tw-gradient-from: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .from-red-500\\/\\[0\\.5\\] {
      --tw-gradient-from: #ef444480;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-red-500\\/\\[0\\.5\\] {
        --tw-gradient-from: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .from-red-500\\/\\[50\\%\\] {
      --tw-gradient-from: #ef444480;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .from-red-500\\/\\[50\\%\\] {
        --tw-gradient-from: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .from-transparent {
      --tw-gradient-from: transparent;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .from-0\\% {
      --tw-gradient-from-position: 0%;
    }

    .from-5\\% {
      --tw-gradient-from-position: 5%;
    }

    .from-100\\% {
      --tw-gradient-from-position: 100%;
    }

    .from-\\[50\\%\\] {
      --tw-gradient-from-position: 50%;
    }

    .from-\\[50px\\] {
      --tw-gradient-from-position: 50px;
    }

    .from-\\[length\\:var\\(--my-position\\)\\], .from-\\[percentage\\:var\\(--my-position\\)\\] {
      --tw-gradient-from-position: var(--my-position);
    }

    @property --tw-gradient-position {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-from {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-via {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-to {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-stops {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-via-stops {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-from-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-gradient-via-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 50%;
    }

    @property --tw-gradient-to-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 100%;
    }"
  `);
  expect(
    await run([
      'from',
      'from-25.%',
      'from-25.0%',
      'from-123',
      'from--123',
      'from--5%',
      'from-unknown',
      'from-unknown%',

      // --tw-gradient-from
      '-from-red-500',
      '-from-red-500/50',
      '-from-red-500/[0.5]',
      '-from-red-500/[50%]',
      '-from-current',
      '-from-current/50',
      '-from-current/[0.5]',
      '-from-current/[50%]',
      '-from-inherit',
      '-from-transparent',
      '-from-[#0088cc]',
      '-from-[#0088cc]/50',
      '-from-[#0088cc]/[0.5]',
      '-from-[#0088cc]/[50%]',

      // --tw-gradient-from-position
      '-from-0%',
      '-from-5%',
      '-from-100%',
    ]),
  ).toEqual('');
});

it('via', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // --tw-gradient-stops
        'via-red-500',
        'via-red-500/50',
        'via-red-500/[0.5]',
        'via-red-500/[50%]',
        'via-current',
        'via-current/50',
        'via-current/[0.5]',
        'via-current/[50%]',
        'via-inherit',
        'via-transparent',
        'via-[#0088cc]',
        'via-[#0088cc]/50',
        'via-[#0088cc]/[0.5]',
        'via-[#0088cc]/[50%]',
        'via-[var(--my-color)]',
        'via-[var(--my-color)]/50',
        'via-[var(--my-color)]/[0.5]',
        'via-[var(--my-color)]/[50%]',
        'via-[color:var(--my-color)]',
        'via-[color:var(--my-color)]/50',
        'via-[color:var(--my-color)]/[0.5]',
        'via-[color:var(--my-color)]/[50%]',

        // --tw-gradient-via-position
        'via-0%',
        'via-5%',
        'via-100%',
        'via-[50%]',
        'via-[50px]',
        'via-[length:var(--my-position)]',
        'via-[percentage:var(--my-position)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-gradient-position: initial;
          --tw-gradient-from: #0000;
          --tw-gradient-via: #0000;
          --tw-gradient-to: #0000;
          --tw-gradient-stops: initial;
          --tw-gradient-via-stops: initial;
          --tw-gradient-from-position: 0%;
          --tw-gradient-via-position: 50%;
          --tw-gradient-to-position: 100%;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .via-\\[\\#0088cc\\] {
      --tw-gradient-via: #08c;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    .via-\\[\\#0088cc\\]\\/50, .via-\\[\\#0088cc\\]\\/\\[0\\.5\\], .via-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-gradient-via: oklab(59.9824% -.067 -.124 / .5);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    .via-\\[color\\:var\\(--my-color\\)\\], .via-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      --tw-gradient-via: var(--my-color);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        --tw-gradient-via: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .via-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-gradient-via: var(--my-color);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-gradient-via: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .via-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-gradient-via: var(--my-color);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-gradient-via: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .via-\\[var\\(--my-color\\)\\], .via-\\[var\\(--my-color\\)\\]\\/50 {
      --tw-gradient-via: var(--my-color);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-\\[var\\(--my-color\\)\\]\\/50 {
        --tw-gradient-via: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .via-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-gradient-via: var(--my-color);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-gradient-via: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .via-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-gradient-via: var(--my-color);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-gradient-via: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .via-current, .via-current\\/50 {
      --tw-gradient-via: currentcolor;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-current\\/50 {
        --tw-gradient-via: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .via-current\\/\\[0\\.5\\] {
      --tw-gradient-via: currentcolor;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-current\\/\\[0\\.5\\] {
        --tw-gradient-via: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .via-current\\/\\[50\\%\\] {
      --tw-gradient-via: currentcolor;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-current\\/\\[50\\%\\] {
        --tw-gradient-via: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .via-inherit {
      --tw-gradient-via: inherit;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    .via-red-500 {
      --tw-gradient-via: var(--color-red-500);
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    .via-red-500\\/50 {
      --tw-gradient-via: #ef444480;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-red-500\\/50 {
        --tw-gradient-via: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .via-red-500\\/\\[0\\.5\\] {
      --tw-gradient-via: #ef444480;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-red-500\\/\\[0\\.5\\] {
        --tw-gradient-via: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .via-red-500\\/\\[50\\%\\] {
      --tw-gradient-via: #ef444480;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .via-red-500\\/\\[50\\%\\] {
        --tw-gradient-via: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .via-transparent {
      --tw-gradient-via: transparent;
      --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-via-stops);
    }

    .via-0\\% {
      --tw-gradient-via-position: 0%;
    }

    .via-5\\% {
      --tw-gradient-via-position: 5%;
    }

    .via-100\\% {
      --tw-gradient-via-position: 100%;
    }

    .via-\\[50\\%\\] {
      --tw-gradient-via-position: 50%;
    }

    .via-\\[50px\\] {
      --tw-gradient-via-position: 50px;
    }

    .via-\\[length\\:var\\(--my-position\\)\\], .via-\\[percentage\\:var\\(--my-position\\)\\] {
      --tw-gradient-via-position: var(--my-position);
    }

    @property --tw-gradient-position {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-from {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-via {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-to {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-stops {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-via-stops {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-from-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-gradient-via-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 50%;
    }

    @property --tw-gradient-to-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 100%;
    }"
  `);
  expect(
    await run([
      'via',
      'via-123',
      'via--123',
      'via--5%',
      'via-unknown',
      'via-unknown%',

      // --tw-gradient-stops
      '-via-red-500',
      '-via-red-500/50',
      '-via-red-500/[0.5]',
      '-via-red-500/[50%]',
      '-via-current',
      '-via-current/50',
      '-via-current/[0.5]',
      '-via-current/[50%]',
      '-via-inherit',
      '-via-transparent',
      '-via-[#0088cc]',
      '-via-[#0088cc]/50',
      '-via-[#0088cc]/[0.5]',
      '-via-[#0088cc]/[50%]',

      // --tw-gradient-via-position
      '-via-0%',
      '-via-5%',
      '-via-100%',
    ]),
  ).toEqual('');
});

it('to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // --tw-gradient-to
        'to-red-500',
        'to-red-500/50',
        'to-red-500/[0.5]',
        'to-red-500/[50%]',
        'to-current',
        'to-current/50',
        'to-current/[0.5]',
        'to-current/[50%]',
        'to-inherit',
        'to-transparent',
        'to-[#0088cc]',
        'to-[#0088cc]/50',
        'to-[#0088cc]/[0.5]',
        'to-[#0088cc]/[50%]',
        'to-[var(--my-color)]',
        'to-[var(--my-color)]/50',
        'to-[var(--my-color)]/[0.5]',
        'to-[var(--my-color)]/[50%]',
        'to-[color:var(--my-color)]',
        'to-[color:var(--my-color)]/50',
        'to-[color:var(--my-color)]/[0.5]',
        'to-[color:var(--my-color)]/[50%]',

        // --tw-gradient-to-position
        'to-0%',
        'to-5%',
        'to-100%',
        'to-[50%]',
        'to-[50px]',
        'to-[length:var(--my-position)]',
        'to-[percentage:var(--my-position)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-gradient-position: initial;
          --tw-gradient-from: #0000;
          --tw-gradient-via: #0000;
          --tw-gradient-to: #0000;
          --tw-gradient-stops: initial;
          --tw-gradient-via-stops: initial;
          --tw-gradient-from-position: 0%;
          --tw-gradient-via-position: 50%;
          --tw-gradient-to-position: 100%;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .to-\\[\\#0088cc\\] {
      --tw-gradient-to: #08c;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .to-\\[\\#0088cc\\]\\/50, .to-\\[\\#0088cc\\]\\/\\[0\\.5\\], .to-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-gradient-to: oklab(59.9824% -.067 -.124 / .5);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .to-\\[color\\:var\\(--my-color\\)\\], .to-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      --tw-gradient-to: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        --tw-gradient-to: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .to-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-gradient-to: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-gradient-to: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .to-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-gradient-to: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-gradient-to: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .to-\\[var\\(--my-color\\)\\], .to-\\[var\\(--my-color\\)\\]\\/50 {
      --tw-gradient-to: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-\\[var\\(--my-color\\)\\]\\/50 {
        --tw-gradient-to: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .to-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-gradient-to: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-gradient-to: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .to-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-gradient-to: var(--my-color);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-gradient-to: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .to-current, .to-current\\/50 {
      --tw-gradient-to: currentcolor;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-current\\/50 {
        --tw-gradient-to: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .to-current\\/\\[0\\.5\\] {
      --tw-gradient-to: currentcolor;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-current\\/\\[0\\.5\\] {
        --tw-gradient-to: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .to-current\\/\\[50\\%\\] {
      --tw-gradient-to: currentcolor;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-current\\/\\[50\\%\\] {
        --tw-gradient-to: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .to-inherit {
      --tw-gradient-to: inherit;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .to-red-500 {
      --tw-gradient-to: var(--color-red-500);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .to-red-500\\/50 {
      --tw-gradient-to: #ef444480;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-red-500\\/50 {
        --tw-gradient-to: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .to-red-500\\/\\[0\\.5\\] {
      --tw-gradient-to: #ef444480;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-red-500\\/\\[0\\.5\\] {
        --tw-gradient-to: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .to-red-500\\/\\[50\\%\\] {
      --tw-gradient-to: #ef444480;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    @supports (color: color-mix(in lab, red, red)) {
      .to-red-500\\/\\[50\\%\\] {
        --tw-gradient-to: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .to-transparent {
      --tw-gradient-to: transparent;
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }

    .to-0\\% {
      --tw-gradient-to-position: 0%;
    }

    .to-5\\% {
      --tw-gradient-to-position: 5%;
    }

    .to-100\\% {
      --tw-gradient-to-position: 100%;
    }

    .to-\\[50\\%\\] {
      --tw-gradient-to-position: 50%;
    }

    .to-\\[50px\\] {
      --tw-gradient-to-position: 50px;
    }

    .to-\\[length\\:var\\(--my-position\\)\\], .to-\\[percentage\\:var\\(--my-position\\)\\] {
      --tw-gradient-to-position: var(--my-position);
    }

    @property --tw-gradient-position {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-from {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-via {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-to {
      syntax: "<color>";
      inherits: false;
      initial-value: #0000;
    }

    @property --tw-gradient-stops {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-via-stops {
      syntax: "*";
      inherits: false
    }

    @property --tw-gradient-from-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-gradient-via-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 50%;
    }

    @property --tw-gradient-to-position {
      syntax: "<length-percentage>";
      inherits: false;
      initial-value: 100%;
    }"
  `);
  expect(
    await run([
      'to',
      'to-123',
      'to--123',
      'to--5%',
      'to-unknown',
      'to-unknown%',

      // --tw-gradient-to
      '-to-red-500',
      '-to-red-500/50',
      '-to-red-500/[0.5]',
      '-to-red-500/[50%]',
      '-to-current',
      '-to-current/50',
      '-to-current/[0.5]',
      '-to-current/[50%]',
      '-to-inherit',
      '-to-transparent',
      '-to-[#0088cc]',
      '-to-[#0088cc]/50',
      '-to-[#0088cc]/[0.5]',
      '-to-[#0088cc]/[50%]',

      // --tw-gradient-to-position
      '-to-0%',
      '-to-5%',
      '-to-100%',
    ]),
  ).toEqual('');
});

it('mask', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // mask-image
        'mask-none',
        'mask-[linear-gradient(#ffff,#0000)]',
        'mask-[url(http://example.com)]',
        'mask-[var(--some-var)]',
        'mask-[image:var(--some-var)]',
        'mask-[url:var(--some-var)]',

        // mask-composite
        'mask-add',
        'mask-subtract',
        'mask-intersect',
        'mask-exclude',

        // mask-mode
        'mask-alpha',
        'mask-luminance',
        'mask-match',

        // mask-type
        'mask-type-alpha',
        'mask-type-luminance',

        // mask-size
        'mask-auto',
        'mask-cover',
        'mask-contain',
        'mask-[cover]',
        'mask-[contain]',
        'mask-[size:120px_120px]',

        // mask-position
        'mask-center',
        'mask-top',
        'mask-top-right',
        'mask-top-left',
        'mask-bottom',
        'mask-bottom-right',
        'mask-bottom-left',
        'mask-left',
        'mask-right',
        'mask-center',
        'mask-[50%]',
        'mask-[120px]',
        'mask-[120px_120px]',
        'mask-[length:120px_120px]',
        'mask-[position:120px_120px]',

        // mask-repeat
        'mask-repeat',
        'mask-no-repeat',
        'mask-repeat-x',
        'mask-repeat-y',
        'mask-repeat-round',
        'mask-repeat-space',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ".mask-\\[image\\:var\\(--some-var\\)\\] {
      -webkit-mask-image: var(--some-var);
      -webkit-mask-image: var(--some-var);
      mask-image: var(--some-var);
    }

    .mask-\\[linear-gradient\\(\\#ffff\\,\\#0000\\)\\] {
      -webkit-mask-image: linear-gradient(#fff, #0000);
      mask-image: linear-gradient(#fff, #0000);
    }

    .mask-\\[url\\(http\\:\\/\\/example\\.com\\)\\] {
      -webkit-mask-image: url("http://example.com");
      mask-image: url("http://example.com");
    }

    .mask-\\[url\\:var\\(--some-var\\)\\], .mask-\\[var\\(--some-var\\)\\] {
      -webkit-mask-image: var(--some-var);
      -webkit-mask-image: var(--some-var);
      mask-image: var(--some-var);
    }

    .mask-none {
      -webkit-mask-image: none;
      mask-image: none;
    }

    .mask-add {
      -webkit-mask-composite: source-over;
      -webkit-mask-composite: source-over;
      mask-composite: add;
    }

    .mask-exclude {
      -webkit-mask-composite: xor;
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    .mask-intersect {
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-subtract {
      -webkit-mask-composite: source-out;
      -webkit-mask-composite: source-out;
      mask-composite: subtract;
    }

    .mask-alpha {
      -webkit-mask-source-type: alpha;
      -webkit-mask-source-type: alpha;
      mask-mode: alpha;
    }

    .mask-luminance {
      -webkit-mask-source-type: luminance;
      -webkit-mask-source-type: luminance;
      mask-mode: luminance;
    }

    .mask-match {
      -webkit-mask-source-type: auto;
      -webkit-mask-source-type: auto;
      mask-mode: match-source;
    }

    .mask-type-alpha {
      mask-type: alpha;
    }

    .mask-type-luminance {
      mask-type: luminance;
    }

    .mask-\\[contain\\] {
      -webkit-mask-size: contain;
      mask-size: contain;
    }

    .mask-\\[cover\\] {
      -webkit-mask-size: cover;
      mask-size: cover;
    }

    .mask-\\[length\\:120px_120px\\], .mask-\\[size\\:120px_120px\\] {
      -webkit-mask-size: 120px 120px;
      mask-size: 120px 120px;
    }

    .mask-auto {
      -webkit-mask-size: auto;
      mask-size: auto;
    }

    .mask-contain {
      -webkit-mask-size: contain;
      mask-size: contain;
    }

    .mask-cover {
      -webkit-mask-size: cover;
      mask-size: cover;
    }

    .mask-\\[50\\%\\] {
      -webkit-mask-position: 50%;
      mask-position: 50%;
    }

    .mask-\\[120px\\] {
      -webkit-mask-position: 120px;
      mask-position: 120px;
    }

    .mask-\\[120px_120px\\], .mask-\\[position\\:120px_120px\\] {
      -webkit-mask-position: 120px 120px;
      mask-position: 120px 120px;
    }

    .mask-bottom {
      -webkit-mask-position: bottom;
      mask-position: bottom;
    }

    .mask-bottom-left {
      -webkit-mask-position: 0 100%;
      mask-position: 0 100%;
    }

    .mask-bottom-right {
      -webkit-mask-position: 100% 100%;
      mask-position: 100% 100%;
    }

    .mask-center {
      -webkit-mask-position: center;
      mask-position: center;
    }

    .mask-left {
      -webkit-mask-position: 0;
      mask-position: 0;
    }

    .mask-right {
      -webkit-mask-position: 100%;
      mask-position: 100%;
    }

    .mask-top {
      -webkit-mask-position: top;
      mask-position: top;
    }

    .mask-top-left {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }

    .mask-top-right {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }

    .mask-no-repeat {
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }

    .mask-repeat {
      -webkit-mask-repeat: repeat;
      mask-repeat: repeat;
    }

    .mask-repeat-round {
      -webkit-mask-repeat: round;
      mask-repeat: round;
    }

    .mask-repeat-space {
      -webkit-mask-repeat: space;
      mask-repeat: space;
    }

    .mask-repeat-x {
      -webkit-mask-repeat: repeat-x;
      mask-repeat: repeat-x;
    }

    .mask-repeat-y {
      -webkit-mask-repeat: repeat-y;
      mask-repeat: repeat-y;
    }"
  `);
  expect(
    await run([
      'mask',
      'mask-unknown',

      // mask-image
      '-mask-none',
      'mask-none/foo',
      '-mask-[var(--some-var)]',
      'mask-[var(--some-var)]/foo',
      '-mask-[image:var(--some-var)]',
      'mask-[image:var(--some-var)]/foo',
      '-mask-[url:var(--some-var)]',
      'mask-[url:var(--some-var)]/foo',

      // mask-composite
      '-mask-add',
      '-mask-subtract',
      '-mask-intersect',
      '-mask-exclude',
      'mask-add/foo',
      'mask-subtract/foo',
      'mask-intersect/foo',
      'mask-exclude/foo',

      // mask-mode
      '-mask-alpha',
      '-mask-luminance',
      '-mask-match',
      'mask-alpha/foo',
      'mask-luminance/foo',
      'mask-match/foo',

      // mask-type
      '-mask-type-alpha',
      '-mask-type-luminance',
      'mask-type-alpha/foo',
      'mask-type-luminance/foo',

      // mask-size
      '-mask-auto',
      '-mask-cover',
      '-mask-contain',
      '-mask-auto/foo',
      '-mask-cover/foo',
      '-mask-contain/foo',

      // mask-position
      '-mask-center',
      '-mask-top',
      '-mask-right-top',
      '-mask-right-bottom',
      '-mask-bottom',
      '-mask-left-bottom',
      '-mask-left',
      '-mask-left-top',
      '-mask-center/foo',
      '-mask-top/foo',
      '-mask-right-top/foo',
      '-mask-right-bottom/foo',
      '-mask-bottom/foo',
      '-mask-left-bottom/foo',
      '-mask-left/foo',
      '-mask-left-top/foo',

      // mask-repeat
      'mask-repeat/foo',
      'mask-no-repeat/foo',
      'mask-repeat-x/foo',
      'mask-repeat-y/foo',
      'mask-round/foo',
      'mask-space/foo',
      '-mask-repeat',
      '-mask-no-repeat',
      '-mask-repeat-x',
      '-mask-repeat-y',
      '-mask-round',
      '-mask-space',
      '-mask-repeat/foo',
      '-mask-no-repeat/foo',
      '-mask-repeat-x/foo',
      '-mask-repeat-y/foo',
      '-mask-round/foo',
      '-mask-space/foo',
    ]),
  ).toEqual('');

  expect(
    await compileCss(
      css`
        @theme reference {
          --opacity-half: 0.5;
          --opacity-custom: var(--custom-opacity);
        }
        @tailwind utilities;
      `,
      ['mask-current/half', 'mask-current/custom', '[color:red]/half'],
    ),
  ).toMatchInlineSnapshot(`
    ".\\[color\\:red\\]\\/half {
      color: color-mix(in srgb, red .5, transparent);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .\\[color\\:red\\]\\/half {
        color: color-mix(in oklab, red var(--opacity-half, .5), transparent);
      }
    }"
  `);
});

it('mask-position', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      ['mask-position-[120px]', 'mask-position-[120px_120px]', 'mask-position-[var(--some-var)]'],
    ),
  ).toMatchInlineSnapshot(`
    ".mask-position-\\[120px\\] {
      -webkit-mask-position: 120px;
      mask-position: 120px;
    }

    .mask-position-\\[120px_120px\\] {
      -webkit-mask-position: 120px 120px;
      mask-position: 120px 120px;
    }

    .mask-position-\\[var\\(--some-var\\)\\] {
      -webkit-mask-position: var(--some-var);
      -webkit-mask-position: var(--some-var);
      mask-position: var(--some-var);
    }"
  `);
  expect(
    await run([
      'mask-position',
      'mask-position/foo',
      '-mask-position',
      '-mask-position/foo',

      'mask-position-[120px_120px]/foo',

      '-mask-position-[120px_120px]',
      '-mask-position-[120px_120px]/foo',
    ]),
  ).toEqual('');
});

it('mask-size', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      ['mask-size-[120px]', 'mask-size-[120px_120px]', 'mask-size-[var(--some-var)]'],
    ),
  ).toMatchInlineSnapshot(`
    ".mask-size-\\[120px\\] {
      -webkit-mask-size: 120px;
      mask-size: 120px;
    }

    .mask-size-\\[120px_120px\\] {
      -webkit-mask-size: 120px 120px;
      mask-size: 120px 120px;
    }

    .mask-size-\\[var\\(--some-var\\)\\] {
      -webkit-mask-size: var(--some-var);
      -webkit-mask-size: var(--some-var);
      mask-size: var(--some-var);
    }"
  `);
  expect(
    await run([
      'mask-size',
      'mask-size/foo',
      '-mask-size',
      '-mask-size/foo',

      'mask-size-[120px_120px]/foo',

      '-mask-size-[120px_120px]',
      '-mask-size-[120px_120px]/foo',
    ]),
  ).toEqual('');
});

it('mask-t-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-t-from-0',
        'mask-t-from-1.5',
        'mask-t-from-2',
        'mask-t-from-0%',
        'mask-t-from-2%',
        'mask-t-from-[0px]',
        'mask-t-from-[0%]',
        'mask-t-from-(--my-var)',
        'mask-t-from-(color:--my-var)',
        'mask-t-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-top-from-position: 0%;
          --tw-mask-top-to-position: 100%;
          --tw-mask-top-from-color: black;
          --tw-mask-top-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-t-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-\\(--my-var\\), .mask-t-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-top-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-top-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-top-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-t-from',
        'mask-t-from-2.8175',
        'mask-t-from--1.5',
        'mask-t-from--2',

        'mask-t-from-2.5%',
        'mask-t-from--5%',
        'mask-t-from-unknown',
        'mask-t-from-unknown%',

        '-mask-t-from-0',
        '-mask-t-from-1.5',
        '-mask-t-from-2',
        '-mask-t-from-0%',
        '-mask-t-from-2%',
        '-mask-t-from-[0px]',
        '-mask-t-from-[0%]',

        '-mask-t-from-(--my-var)',
        '-mask-t-from-(color:--my-var)',
        '-mask-t-from-(length:--my-var)',

        'mask-l-from-[-25%]',
        'mask-l-from-[25%]/foo',
        'mask-l-from-[-25%]/foo',
        '-mask-l-from-[-25%]',
        '-mask-l-from-[25%]/foo',
        '-mask-l-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-t-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-t-to-0',
        'mask-t-to-1.5',
        'mask-t-to-2',
        'mask-t-to-0%',
        'mask-t-to-2%',
        'mask-t-to-[0px]',
        'mask-t-to-[0%]',
        'mask-t-to-(--my-var)',
        'mask-t-to-(color:--my-var)',
        'mask-t-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-top-from-position: 0%;
          --tw-mask-top-to-position: 100%;
          --tw-mask-top-from-color: black;
          --tw-mask-top-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-t-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-\\(--my-var\\), .mask-t-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-t-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-top-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-top-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-top-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-t-to',
        'mask-t-to-2.8175',
        'mask-t-to--1.5',
        'mask-t-to--2',

        'mask-t-to-2.5%',
        'mask-t-to--5%',
        'mask-t-to-unknown',
        'mask-t-to-unknown%',

        '-mask-t-to-0',
        '-mask-t-to-1.5',
        '-mask-t-to-2',
        '-mask-t-to-0%',
        '-mask-t-to-2%',
        '-mask-t-to-[0px]',
        '-mask-t-to-[0%]',

        '-mask-t-to-(--my-var)',
        '-mask-t-to-(color:--my-var)',
        '-mask-t-to-(length:--my-var)',

        'mask-l-from-[-25%]',
        'mask-l-from-[25%]/foo',
        'mask-l-from-[-25%]/foo',
        '-mask-l-from-[-25%]',
        '-mask-l-from-[25%]/foo',
        '-mask-l-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-r-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-r-from-0',
        'mask-r-from-1.5',
        'mask-r-from-2',
        'mask-r-from-0%',
        'mask-r-from-2%',
        'mask-r-from-[0px]',
        'mask-r-from-[0%]',

        'mask-r-from-(--my-var)',
        'mask-r-from-(color:--my-var)',
        'mask-r-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-right-from-position: 0%;
          --tw-mask-right-to-position: 100%;
          --tw-mask-right-from-color: black;
          --tw-mask-right-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-r-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-\\(--my-var\\), .mask-r-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-right-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-right-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-right-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-r-from',
        'mask-r-from-2.8175',
        'mask-r-from--1.5',
        'mask-r-from--2',

        'mask-r-from-2.5%',
        'mask-r-from--5%',
        'mask-r-from-unknown',
        'mask-r-from-unknown%',

        '-mask-r-from-0',
        '-mask-r-from-1.5',
        '-mask-r-from-2',
        '-mask-r-from-0%',
        '-mask-r-from-2%',
        '-mask-r-from-[0px]',
        '-mask-r-from-[0%]',

        '-mask-r-from-(--my-var)',
        '-mask-r-from-(color:--my-var)',
        '-mask-r-from-(length:--my-var)',

        'mask-r-from-[-25%]',
        'mask-r-from-[25%]/foo',
        'mask-r-from-[-25%]/foo',
        '-mask-r-from-[-25%]',
        '-mask-r-from-[25%]/foo',
        '-mask-r-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-r-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-r-to-0',
        'mask-r-to-1.5',
        'mask-r-to-2',
        'mask-r-to-0%',
        'mask-r-to-2%',
        'mask-r-to-[0px]',
        'mask-r-to-[0%]',

        'mask-r-to-(--my-var)',
        'mask-r-to-(color:--my-var)',
        'mask-r-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-right-from-position: 0%;
          --tw-mask-right-to-position: 100%;
          --tw-mask-right-from-color: black;
          --tw-mask-right-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-r-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-\\(--my-var\\), .mask-r-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-r-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-right-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-right-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-right-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-r-to',
        'mask-r-to-2.8175',
        'mask-r-to--1.5',
        'mask-r-to--2',

        'mask-r-to-2.5%',
        'mask-r-to--5%',
        'mask-r-to-unknown',
        'mask-r-to-unknown%',

        '-mask-r-to-0',
        '-mask-r-to-1.5',
        '-mask-r-to-2',
        '-mask-r-to-0%',
        '-mask-r-to-2%',
        '-mask-r-to-[0px]',
        '-mask-r-to-[0%]',

        '-mask-r-to-(--my-var)',
        '-mask-r-to-(color:--my-var)',
        '-mask-r-to-(length:--my-var)',

        'mask-r-to-[-25%]',
        'mask-r-to-[25%]/foo',
        'mask-r-to-[-25%]/foo',
        '-mask-r-to-[-25%]',
        '-mask-r-to-[25%]/foo',
        '-mask-r-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-b-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-b-from-0',
        'mask-b-from-1.5',
        'mask-b-from-2',
        'mask-b-from-0%',
        'mask-b-from-2%',
        'mask-b-from-[0px]',
        'mask-b-from-[0%]',

        'mask-b-from-(--my-var)',
        'mask-b-from-(color:--my-var)',
        'mask-b-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-bottom-from-position: 0%;
          --tw-mask-bottom-to-position: 100%;
          --tw-mask-bottom-from-color: black;
          --tw-mask-bottom-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-b-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-\\(--my-var\\), .mask-b-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-bottom-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-bottom-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-bottom-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-b-from',
        'mask-b-from-2.8175',
        'mask-b-from--1.5',
        'mask-b-from--2',

        'mask-b-from-2.5%',
        'mask-b-from--5%',
        'mask-b-from-unknown',
        'mask-b-from-unknown%',

        '-mask-b-from-0',
        '-mask-b-from-1.5',
        '-mask-b-from-2',
        '-mask-b-from-0%',
        '-mask-b-from-2%',
        '-mask-b-from-[0px]',
        '-mask-b-from-[0%]',

        '-mask-b-from-(--my-var)',
        '-mask-b-from-(color:--my-var)',
        '-mask-b-from-(length:--my-var)',

        'mask-b-from-[-25%]',
        'mask-b-from-[25%]/foo',
        'mask-b-from-[-25%]/foo',
        '-mask-b-from-[-25%]',
        '-mask-b-from-[25%]/foo',
        '-mask-b-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-b-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-b-to-0',
        'mask-b-to-1.5',
        'mask-b-to-2',
        'mask-b-to-0%',
        'mask-b-to-2%',
        'mask-b-to-[0px]',
        'mask-b-to-[0%]',

        'mask-b-to-(--my-var)',
        'mask-b-to-(color:--my-var)',
        'mask-b-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-bottom-from-position: 0%;
          --tw-mask-bottom-to-position: 100%;
          --tw-mask-bottom-from-color: black;
          --tw-mask-bottom-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-b-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-\\(--my-var\\), .mask-b-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-b-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-bottom-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-bottom-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-bottom-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-b-to',
        'mask-b-to-2.8175',
        'mask-b-to--1.5',
        'mask-b-to--2',

        'mask-b-to-2.5%',
        'mask-b-to--5%',
        'mask-b-to-unknown',
        'mask-b-to-unknown%',

        '-mask-b-to-0',
        '-mask-b-to-1.5',
        '-mask-b-to-2',
        '-mask-b-to-0%',
        '-mask-b-to-2%',
        '-mask-b-to-[0px]',
        '-mask-b-to-[0%]',

        '-mask-b-to-(--my-var)',
        '-mask-b-to-(color:--my-var)',
        '-mask-b-to-(length:--my-var)',

        'mask-b-to-[-25%]',
        'mask-b-to-[25%]/foo',
        'mask-b-to-[-25%]/foo',
        '-mask-b-to-[-25%]',
        '-mask-b-to-[25%]/foo',
        '-mask-b-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-l-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-l-from-0',
        'mask-l-from-1.5',
        'mask-l-from-2',
        'mask-l-from-0%',
        'mask-l-from-2%',
        'mask-l-from-[0px]',
        'mask-l-from-[0%]',

        'mask-l-from-(--my-var)',
        'mask-l-from-(color:--my-var)',
        'mask-l-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-left-from-position: 0%;
          --tw-mask-left-to-position: 100%;
          --tw-mask-left-from-color: black;
          --tw-mask-left-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-l-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-\\(--my-var\\), .mask-l-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-left-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-left-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-left-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-l-from',
        'mask-l-from-2.8175',
        'mask-l-from--1.5',
        'mask-l-from--2',

        'mask-l-from-2.5%',
        'mask-l-from--5%',
        'mask-l-from-unknown',
        'mask-l-from-unknown%',

        '-mask-l-from-0',
        '-mask-l-from-1.5',
        '-mask-l-from-2',
        '-mask-l-from-0%',
        '-mask-l-from-2%',
        '-mask-l-from-[0px]',
        '-mask-l-from-[0%]',

        '-mask-l-from-(--my-var)',
        '-mask-l-from-(color:--my-var)',
        '-mask-l-from-(length:--my-var)',

        'mask-l-from-[-25%]',
        'mask-l-from-[25%]/foo',
        'mask-l-from-[-25%]/foo',
        '-mask-l-from-[-25%]',
        '-mask-l-from-[25%]/foo',
        '-mask-l-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-l-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-l-to-0',
        'mask-l-to-1.5',
        'mask-l-to-2',
        'mask-l-to-0%',
        'mask-l-to-2%',
        'mask-l-to-[0px]',
        'mask-l-to-[0%]',

        'mask-l-to-(--my-var)',
        'mask-l-to-(color:--my-var)',
        'mask-l-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-left-from-position: 0%;
          --tw-mask-left-to-position: 100%;
          --tw-mask-left-from-color: black;
          --tw-mask-left-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-l-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-\\(--my-var\\), .mask-l-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-l-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-left-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-left-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-left-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-l-to',
        'mask-l-to-2.8175',
        'mask-l-to--1.5',
        'mask-l-to--2',

        'mask-l-to-2.5%',
        'mask-l-to--5%',
        'mask-l-to-unknown',
        'mask-l-to-unknown%',

        '-mask-l-to-0',
        '-mask-l-to-1.5',
        '-mask-l-to-2',
        '-mask-l-to-0%',
        '-mask-l-to-2%',
        '-mask-l-to-[0px]',
        '-mask-l-to-[0%]',

        '-mask-l-to-(--my-var)',
        '-mask-l-to-(color:--my-var)',
        '-mask-l-to-(length:--my-var)',

        'mask-l-to-[-25%]',
        'mask-l-to-[25%]/foo',
        'mask-l-to-[-25%]/foo',
        '-mask-l-to-[-25%]',
        '-mask-l-to-[25%]/foo',
        '-mask-l-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-x-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-x-from-0',
        'mask-x-from-1.5',
        'mask-x-from-2',
        'mask-x-from-0%',
        'mask-x-from-2%',
        'mask-x-from-[0px]',
        'mask-x-from-[0%]',

        'mask-x-from-(--my-var)',
        'mask-x-from-(color:--my-var)',
        'mask-x-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-right-from-position: 0%;
          --tw-mask-right-to-position: 100%;
          --tw-mask-right-from-color: black;
          --tw-mask-right-to-color: transparent;
          --tw-mask-left-from-position: 0%;
          --tw-mask-left-to-position: 100%;
          --tw-mask-left-from-color: black;
          --tw-mask-left-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-x-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-color: var(--my-var);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-\\(--my-var\\), .mask-x-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: var(--my-var);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: calc(var(--spacing) * 0);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 0%;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: calc(var(--spacing) * 1.5);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: calc(var(--spacing) * 2);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 2%;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 0%;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-from-position: 0px;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-right-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-right-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-right-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-left-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-left-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-left-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-left-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-x-from',
        'mask-x-from-2.8175',
        'mask-x-from--1.5',
        'mask-x-from--2',

        'mask-x-from-2.5%',
        'mask-x-from--5%',
        'mask-x-from-unknown',
        'mask-x-from-unknown%',

        '-mask-x-from-0',
        '-mask-x-from-1.5',
        '-mask-x-from-2',
        '-mask-x-from-0%',
        '-mask-x-from-2%',
        '-mask-x-from-[0px]',
        '-mask-x-from-[0%]',

        '-mask-x-from-(--my-var)',
        '-mask-x-from-(color:--my-var)',
        '-mask-x-from-(length:--my-var)',

        'mask-x-from-[-25%]',
        'mask-x-from-[25%]/foo',
        'mask-x-from-[-25%]/foo',
        '-mask-x-from-[-25%]',
        '-mask-x-from-[25%]/foo',
        '-mask-x-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-x-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-x-to-0',
        'mask-x-to-1.5',
        'mask-x-to-2',
        'mask-x-to-0%',
        'mask-x-to-2%',
        'mask-x-to-[0px]',
        'mask-x-to-[0%]',

        'mask-x-to-(--my-var)',
        'mask-x-to-(color:--my-var)',
        'mask-x-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-right-from-position: 0%;
          --tw-mask-right-to-position: 100%;
          --tw-mask-right-from-color: black;
          --tw-mask-right-to-color: transparent;
          --tw-mask-left-from-position: 0%;
          --tw-mask-left-to-position: 100%;
          --tw-mask-left-from-color: black;
          --tw-mask-left-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-x-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-color: var(--my-var);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-\\(--my-var\\), .mask-x-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: var(--my-var);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: calc(var(--spacing) * 0);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 0%;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: calc(var(--spacing) * 1.5);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: calc(var(--spacing) * 2);
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 2%;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 0%;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-x-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-right: linear-gradient(to right, var(--tw-mask-right-from-color) var(--tw-mask-right-from-position), var(--tw-mask-right-to-color) var(--tw-mask-right-to-position));
      --tw-mask-right-to-position: 0px;
      --tw-mask-left: linear-gradient(to left, var(--tw-mask-left-from-color) var(--tw-mask-left-from-position), var(--tw-mask-left-to-color) var(--tw-mask-left-to-position));
      --tw-mask-left-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-right-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-right-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-right-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-left-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-left-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-left-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-left-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-x-to',
        'mask-x-to-2.8175',
        'mask-x-to--1.5',
        'mask-x-to--2',

        'mask-x-to-2.5%',
        'mask-x-to--5%',
        'mask-x-to-unknown',
        'mask-x-to-unknown%',

        '-mask-x-to-0',
        '-mask-x-to-1.5',
        '-mask-x-to-2',
        '-mask-x-to-0%',
        '-mask-x-to-2%',
        '-mask-x-to-[0px]',
        '-mask-x-to-[0%]',

        '-mask-x-to-(--my-var)',
        '-mask-x-to-(color:--my-var)',
        '-mask-x-to-(length:--my-var)',

        'mask-x-to-[-25%]',
        'mask-x-to-[25%]/foo',
        'mask-x-to-[-25%]/foo',
        '-mask-x-to-[-25%]',
        '-mask-x-to-[25%]/foo',
        '-mask-x-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-y-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-y-from-0',
        'mask-y-from-1.5',
        'mask-y-from-2',
        'mask-y-from-0%',
        'mask-y-from-2%',
        'mask-y-from-[0px]',
        'mask-y-from-[0%]',

        'mask-y-from-(--my-var)',
        'mask-y-from-(color:--my-var)',
        'mask-y-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-top-from-position: 0%;
          --tw-mask-top-to-position: 100%;
          --tw-mask-top-from-color: black;
          --tw-mask-top-to-color: transparent;
          --tw-mask-bottom-from-position: 0%;
          --tw-mask-bottom-to-position: 100%;
          --tw-mask-bottom-from-color: black;
          --tw-mask-bottom-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-y-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-color: var(--my-var);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-\\(--my-var\\), .mask-y-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: var(--my-var);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: calc(var(--spacing) * 0);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 0%;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: calc(var(--spacing) * 1.5);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: calc(var(--spacing) * 2);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 2%;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 0%;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-from-position: 0px;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-top-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-top-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-top-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-bottom-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-bottom-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-bottom-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-bottom-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-y-from',
        'mask-y-from-2.8175',
        'mask-y-from--1.5',
        'mask-y-from--2',

        'mask-y-from-2.5%',
        'mask-y-from--5%',
        'mask-y-from-unknown',
        'mask-y-from-unknown%',

        '-mask-y-from-0',
        '-mask-y-from-1.5',
        '-mask-y-from-2',
        '-mask-y-from-0%',
        '-mask-y-from-2%',
        '-mask-y-from-[0px]',
        '-mask-y-from-[0%]',

        '-mask-y-from-(--my-var)',
        '-mask-y-from-(color:--my-var)',
        '-mask-y-from-(length:--my-var)',

        'mask-y-from-[-25%]',
        'mask-y-from-[25%]/foo',
        'mask-y-from-[-25%]/foo',
        '-mask-y-from-[-25%]',
        '-mask-y-from-[25%]/foo',
        '-mask-y-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-y-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-y-to-0',
        'mask-y-to-1.5',
        'mask-y-to-2',
        'mask-y-to-0%',
        'mask-y-to-2%',
        'mask-y-to-[0px]',
        'mask-y-to-[0%]',

        'mask-y-to-(--my-var)',
        'mask-y-to-(color:--my-var)',
        'mask-y-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-left: linear-gradient(#fff, #fff);
          --tw-mask-right: linear-gradient(#fff, #fff);
          --tw-mask-bottom: linear-gradient(#fff, #fff);
          --tw-mask-top: linear-gradient(#fff, #fff);
          --tw-mask-top-from-position: 0%;
          --tw-mask-top-to-position: 100%;
          --tw-mask-top-from-color: black;
          --tw-mask-top-to-color: transparent;
          --tw-mask-bottom-from-position: 0%;
          --tw-mask-bottom-to-position: 100%;
          --tw-mask-bottom-from-color: black;
          --tw-mask-bottom-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-y-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-color: var(--my-var);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-\\(--my-var\\), .mask-y-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: var(--my-var);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: calc(var(--spacing) * 0);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 0%;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: calc(var(--spacing) * 1.5);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: calc(var(--spacing) * 2);
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 2%;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 0%;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-y-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top);
      --tw-mask-top: linear-gradient(to top, var(--tw-mask-top-from-color) var(--tw-mask-top-from-position), var(--tw-mask-top-to-color) var(--tw-mask-top-to-position));
      --tw-mask-top-to-position: 0px;
      --tw-mask-bottom: linear-gradient(to bottom, var(--tw-mask-bottom-from-color) var(--tw-mask-bottom-from-position), var(--tw-mask-bottom-to-color) var(--tw-mask-bottom-to-position));
      --tw-mask-bottom-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-left {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-right {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-bottom {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-top-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-top-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-top-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-top-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-bottom-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-bottom-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-bottom-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-bottom-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-y-to',
        'mask-y-to-2.8175',
        'mask-y-to--1.5',
        'mask-y-to--2',

        'mask-y-to-2.5%',
        'mask-y-to--5%',
        'mask-y-to-unknown',
        'mask-y-to-unknown%',

        '-mask-y-to-0',
        '-mask-y-to-1.5',
        '-mask-y-to-2',
        '-mask-y-to-0%',
        '-mask-y-to-2%',
        '-mask-y-to-[0px]',
        '-mask-y-to-[0%]',

        '-mask-y-to-(--my-var)',
        '-mask-y-to-(color:--my-var)',
        '-mask-y-to-(length:--my-var)',

        'mask-y-to-[-25%]',
        'mask-y-to-[25%]/foo',
        'mask-y-to-[-25%]/foo',
        '-mask-y-to-[-25%]',
        '-mask-y-to-[25%]/foo',
        '-mask-y-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-linear', async () => {
  expect(
    await compileCss(
      css`
        @tailwind utilities;
      `,
      ['mask-linear-45', 'mask-linear-[3rad]', '-mask-linear-45'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-linear-position: 0deg;
          --tw-mask-linear-from-position: 0%;
          --tw-mask-linear-to-position: 100%;
          --tw-mask-linear-from-color: black;
          --tw-mask-linear-to-color: transparent;
        }
      }
    }

    .-mask-linear-45 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)));
      --tw-mask-linear-position: calc(1deg * -45);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-45 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)));
      --tw-mask-linear-position: calc(1deg * 45);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-\\[3rad\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)));
      --tw-mask-linear-position: 171.887deg;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-linear-position {
      syntax: "*";
      inherits: false;
      initial-value: 0deg;
    }

    @property --tw-mask-linear-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-linear-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-linear-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-linear-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await run([
      'mask-linear',
      '-mask-linear',

      'mask-linear--75',
      'mask-linear-unknown',
      'mask-linear--75/foo',
      'mask-linear-unknown/foo',

      'mask-linear-45/foo',
      '-mask-linear-45/foo',

      'mask-linear-[3rad]/foo',
      '-mask-linear-[3rad]/foo',
    ]),
  ).toEqual('');
});

it('mask-linear-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-linear-from-0',
        'mask-linear-from-1.5',
        'mask-linear-from-2',
        'mask-linear-from-0%',
        'mask-linear-from-2%',
        'mask-linear-from-[0px]',
        'mask-linear-from-[0%]',

        'mask-linear-from-(--my-var)',
        'mask-linear-from-(color:--my-var)',
        'mask-linear-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-linear-position: 0deg;
          --tw-mask-linear-from-position: 0%;
          --tw-mask-linear-to-position: 100%;
          --tw-mask-linear-from-color: black;
          --tw-mask-linear-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-linear-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-\\(--my-var\\), .mask-linear-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-linear-position {
      syntax: "*";
      inherits: false;
      initial-value: 0deg;
    }

    @property --tw-mask-linear-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-linear-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-linear-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-linear-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-linear-from',
        'mask-linear-from-2.8175',
        'mask-linear-from--1.5',
        'mask-linear-from--2',

        'mask-linear-from-2.5%',
        'mask-linear-from--5%',
        'mask-linear-from-unknown',
        'mask-linear-from-unknown%',

        '-mask-linear-from-0',
        '-mask-linear-from-1.5',
        '-mask-linear-from-2',
        '-mask-linear-from-0%',
        '-mask-linear-from-2%',
        '-mask-linear-from-[0px]',
        '-mask-linear-from-[0%]',

        '-mask-linear-from-(--my-var)',
        '-mask-linear-from-(color:--my-var)',
        '-mask-linear-from-(length:--my-var)',

        'mask-linear-from-[-25%]',
        'mask-linear-from-[25%]/foo',
        'mask-linear-from-[-25%]/foo',
        '-mask-linear-from-[-25%]',
        '-mask-linear-from-[25%]/foo',
        '-mask-linear-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-linear-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-linear-to-0',
        'mask-linear-to-1.5',
        'mask-linear-to-2',
        'mask-linear-to-0%',
        'mask-linear-to-2%',
        'mask-linear-to-[0px]',
        'mask-linear-to-[0%]',

        'mask-linear-to-(--my-var)',
        'mask-linear-to-(color:--my-var)',
        'mask-linear-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-linear-position: 0deg;
          --tw-mask-linear-from-position: 0%;
          --tw-mask-linear-to-position: 100%;
          --tw-mask-linear-from-color: black;
          --tw-mask-linear-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-linear-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-\\(--my-var\\), .mask-linear-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-linear-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-linear-stops: var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position);
      --tw-mask-linear: linear-gradient(var(--tw-mask-linear-stops));
      --tw-mask-linear-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-linear-position {
      syntax: "*";
      inherits: false;
      initial-value: 0deg;
    }

    @property --tw-mask-linear-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-linear-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-linear-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-linear-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-linear-to',
        'mask-linear-to-2.8175',
        'mask-linear-to--1.5',
        'mask-linear-to--2',

        'mask-linear-to-2.5%',
        'mask-linear-to--5%',
        'mask-linear-to-unknown',
        'mask-linear-to-unknown%',

        '-mask-linear-to-0',
        '-mask-linear-to-1.5',
        '-mask-linear-to-2',
        '-mask-linear-to-0%',
        '-mask-linear-to-2%',
        '-mask-linear-to-[0px]',
        '-mask-linear-to-[0%]',

        '-mask-linear-to-(--my-var)',
        '-mask-linear-to-(color:--my-var)',
        '-mask-linear-to-(length:--my-var)',

        'mask-linear-to-[-25%]',
        'mask-linear-to-[25%]/foo',
        'mask-linear-to-[-25%]/foo',
        '-mask-linear-to-[-25%]',
        '-mask-linear-to-[25%]/foo',
        '-mask-linear-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-radial', async () => {
  expect(
    await compileCss(
      css`
        @tailwind utilities;
      `,
      [
        'mask-circle',
        'mask-ellipse',
        'mask-radial-closest-side',
        'mask-radial-farthest-side',
        'mask-radial-closest-corner',
        'mask-radial-farthest-corner',
        'mask-radial-[25%_25%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-radial-from-position: 0%;
          --tw-mask-radial-to-position: 100%;
          --tw-mask-radial-from-color: black;
          --tw-mask-radial-to-color: transparent;
          --tw-mask-radial-shape: ellipse;
          --tw-mask-radial-size: farthest-corner;
          --tw-mask-radial-position: center;
        }
      }
    }

    .mask-radial-\\[25\\%_25\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)));
      --tw-mask-radial-size: 25% 25%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-circle {
      --tw-mask-radial-shape: circle;
    }

    .mask-ellipse {
      --tw-mask-radial-shape: ellipse;
    }

    .mask-radial-closest-corner {
      --tw-mask-radial-size: closest-corner;
    }

    .mask-radial-closest-side {
      --tw-mask-radial-size: closest-side;
    }

    .mask-radial-farthest-corner {
      --tw-mask-radial-size: farthest-corner;
    }

    .mask-radial-farthest-side {
      --tw-mask-radial-size: farthest-side;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-radial-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-radial-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-radial-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-radial-shape {
      syntax: "*";
      inherits: false;
      initial-value: ellipse;
    }

    @property --tw-mask-radial-size {
      syntax: "*";
      inherits: false;
      initial-value: farthest-corner;
    }

    @property --tw-mask-radial-position {
      syntax: "*";
      inherits: false;
      initial-value: center;
    }"
  `);
  expect(
    await run([
      'mask-radial',
      'mask-radial-[25%_25%]/foo',
      'mask-radial/foo',
      '-mask-radial',
      '-mask-radial-[25%_25%]',
      '-mask-radial/foo',
      '-mask-radial-[25%_25%]/foo',

      'mask-radial-from-[-25%]',
      'mask-radial-from-[25%]/foo',
      'mask-radial-from-[-25%]/foo',
      '-mask-radial-from-[-25%]',
      '-mask-radial-from-[25%]/foo',
      '-mask-radial-from-[-25%]/foo',
    ]),
  ).toEqual('');
});

it('mask-radial-at', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-radial-at-top',
        'mask-radial-at-top-left',
        'mask-radial-at-top-right',
        'mask-radial-at-bottom',
        'mask-radial-at-bottom-left',
        'mask-radial-at-bottom-right',
        'mask-radial-at-left',
        'mask-radial-at-right',
        'mask-radial-at-[25%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ".mask-radial-at-\\[25\\%\\] {
      --tw-mask-radial-position: 25%;
    }

    .mask-radial-at-bottom {
      --tw-mask-radial-position: bottom;
    }

    .mask-radial-at-bottom-left {
      --tw-mask-radial-position: bottom left;
    }

    .mask-radial-at-bottom-right {
      --tw-mask-radial-position: bottom right;
    }

    .mask-radial-at-left {
      --tw-mask-radial-position: left;
    }

    .mask-radial-at-right {
      --tw-mask-radial-position: right;
    }

    .mask-radial-at-top {
      --tw-mask-radial-position: top;
    }

    .mask-radial-at-top-left {
      --tw-mask-radial-position: top left;
    }

    .mask-radial-at-top-right {
      --tw-mask-radial-position: top right;
    }"
  `);
  expect(
    await run([
      'mask-radial-at',
      'mask-radial-at/foo',
      'mask-radial-at-25',
      'mask-radial-at-unknown',
      'mask-radial-at-[25%]/foo',
      'mask-radial-at-top/foo',
      'mask-radial-at-top-left/foo',
      'mask-radial-at-top-right/foo',
      'mask-radial-at-bottom/foo',
      'mask-radial-at-bottom-left/foo',
      'mask-radial-at-bottom-right/foo',
      'mask-radial-at-left/foo',
      'mask-radial-at-right/foo',

      '-mask-radial-at',
      '-mask-radial-at/foo',
      '-mask-radial-at-25',
      '-mask-radial-at-unknown',
      '-mask-radial-at-[25%]',
      '-mask-radial-at-[25%]/foo',

      '-mask-radial-at-top',
      '-mask-radial-at-top-left',
      '-mask-radial-at-top-right',
      '-mask-radial-at-bottom',
      '-mask-radial-at-bottom-left',
      '-mask-radial-at-bottom-right',
      '-mask-radial-at-left',
      '-mask-radial-at-right',

      'mask-radial-at-[25%]/foo',
      'mask-radial-at-[-25%]/foo',
      '-mask-radial-at-[-25%]',
      '-mask-radial-at-[25%]/foo',
      '-mask-radial-at-[-25%]/foo',
    ]),
  ).toEqual('');
});

it('mask-radial-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-radial-from-0',
        'mask-radial-from-1.5',
        'mask-radial-from-2',
        'mask-radial-from-0%',
        'mask-radial-from-2%',
        'mask-radial-from-[0px]',
        'mask-radial-from-[0%]',

        'mask-radial-from-(--my-var)',
        'mask-radial-from-(color:--my-var)',
        'mask-radial-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-radial-from-position: 0%;
          --tw-mask-radial-to-position: 100%;
          --tw-mask-radial-from-color: black;
          --tw-mask-radial-to-color: transparent;
          --tw-mask-radial-shape: ellipse;
          --tw-mask-radial-size: farthest-corner;
          --tw-mask-radial-position: center;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-radial-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-\\(--my-var\\), .mask-radial-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-radial-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-radial-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-radial-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-radial-shape {
      syntax: "*";
      inherits: false;
      initial-value: ellipse;
    }

    @property --tw-mask-radial-size {
      syntax: "*";
      inherits: false;
      initial-value: farthest-corner;
    }

    @property --tw-mask-radial-position {
      syntax: "*";
      inherits: false;
      initial-value: center;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-radial-from',
        'mask-radial-from-2.8175',
        'mask-radial-from--1.5',
        'mask-radial-from--2',

        'mask-radial-from-2.5%',
        'mask-radial-from--5%',
        'mask-radial-from-unknown',
        'mask-radial-from-unknown%',

        '-mask-radial-from-0',
        '-mask-radial-from-1.5',
        '-mask-radial-from-2',
        '-mask-radial-from-0%',
        '-mask-radial-from-2%',
        '-mask-radial-from-[0px]',
        '-mask-radial-from-[0%]',

        '-mask-radial-from-(--my-var)',
        '-mask-radial-from-(color:--my-var)',
        '-mask-radial-from-(length:--my-var)',

        'mask-radial-from-[-25%]',
        'mask-radial-from-[25%]/foo',
        'mask-radial-from-[-25%]/foo',
        '-mask-radial-from-[-25%]',
        '-mask-radial-from-[25%]/foo',
        '-mask-radial-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-radial-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-radial-to-0',
        'mask-radial-to-1.5',
        'mask-radial-to-2',
        'mask-radial-to-0%',
        'mask-radial-to-2%',
        'mask-radial-to-[0px]',
        'mask-radial-to-[0%]',

        'mask-radial-to-(--my-var)',
        'mask-radial-to-(color:--my-var)',
        'mask-radial-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-radial-from-position: 0%;
          --tw-mask-radial-to-position: 100%;
          --tw-mask-radial-from-color: black;
          --tw-mask-radial-to-color: transparent;
          --tw-mask-radial-shape: ellipse;
          --tw-mask-radial-size: farthest-corner;
          --tw-mask-radial-position: center;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-radial-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-\\(--my-var\\), .mask-radial-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-radial-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-radial-stops: var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position);
      --tw-mask-radial: radial-gradient(var(--tw-mask-radial-stops));
      --tw-mask-radial-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-radial-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-radial-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-radial-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }

    @property --tw-mask-radial-shape {
      syntax: "*";
      inherits: false;
      initial-value: ellipse;
    }

    @property --tw-mask-radial-size {
      syntax: "*";
      inherits: false;
      initial-value: farthest-corner;
    }

    @property --tw-mask-radial-position {
      syntax: "*";
      inherits: false;
      initial-value: center;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-radial-to',
        'mask-radial-to-2.8175',
        'mask-radial-to--1.5',
        'mask-radial-to--2',

        'mask-radial-to-2.5%',
        'mask-radial-to--5%',
        'mask-radial-to-unknown',
        'mask-radial-to-unknown%',

        '-mask-radial-to-0',
        '-mask-radial-to-1.5',
        '-mask-radial-to-2',
        '-mask-radial-to-0%',
        '-mask-radial-to-2%',
        '-mask-radial-to-[0px]',
        '-mask-radial-to-[0%]',

        '-mask-radial-to-(--my-var)',
        '-mask-radial-to-(color:--my-var)',
        '-mask-radial-to-(length:--my-var)',

        'mask-radial-to-[-25%]',
        'mask-radial-to-[25%]/foo',
        'mask-radial-to-[-25%]/foo',
        '-mask-radial-to-[-25%]',
        '-mask-radial-to-[25%]/foo',
        '-mask-radial-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-conic', async () => {
  expect(
    await compileCss(
      css`
        @tailwind utilities;
      `,
      ['mask-conic-45', 'mask-conic-[3rad]', '-mask-conic-45'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-conic-position: 0deg;
          --tw-mask-conic-from-position: 0%;
          --tw-mask-conic-to-position: 100%;
          --tw-mask-conic-from-color: black;
          --tw-mask-conic-to-color: transparent;
        }
      }
    }

    .-mask-conic-45 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)));
      --tw-mask-conic-position: calc(1deg * -45);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-45 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)));
      --tw-mask-conic-position: calc(1deg * 45);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-\\[3rad\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)));
      --tw-mask-conic-position: 171.887deg;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic-position {
      syntax: "*";
      inherits: false;
      initial-value: 0deg;
    }

    @property --tw-mask-conic-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-conic-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-conic-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-conic-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await run([
      'mask-conic',
      '-mask-conic',

      'mask-conic--75',
      'mask-conic-unknown',
      'mask-conic--75/foo',
      'mask-conic-unknown/foo',

      'mask-conic-45/foo',
      '-mask-conic-45/foo',

      'mask-conic-[3rad]/foo',
      '-mask-conic-[3rad]/foo',
    ]),
  ).toEqual('');
});

it('mask-conic-from', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-conic-from-0',
        'mask-conic-from-1.5',
        'mask-conic-from-2',
        'mask-conic-from-0%',
        'mask-conic-from-2%',
        'mask-conic-from-[0px]',
        'mask-conic-from-[0%]',

        'mask-conic-from-(--my-var)',
        'mask-conic-from-(color:--my-var)',
        'mask-conic-from-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-conic-position: 0deg;
          --tw-mask-conic-from-position: 0%;
          --tw-mask-conic-to-position: 100%;
          --tw-mask-conic-from-color: black;
          --tw-mask-conic-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-conic-from-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-\\(--my-var\\), .mask-conic-from-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-from-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-from-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic-position {
      syntax: "*";
      inherits: false;
      initial-value: 0deg;
    }

    @property --tw-mask-conic-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-conic-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-conic-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-conic-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-conic-from',
        'mask-conic-from-2.8175',
        'mask-conic-from--1.5',
        'mask-conic-from--2',

        'mask-conic-from-2.5%',
        'mask-conic-from--5%',
        'mask-conic-from-unknown',
        'mask-conic-from-unknown%',

        '-mask-conic-from-0',
        '-mask-conic-from-1.5',
        '-mask-conic-from-2',
        '-mask-conic-from-0%',
        '-mask-conic-from-2%',
        '-mask-conic-from-[0px]',
        '-mask-conic-from-[0%]',

        '-mask-conic-from-(--my-var)',
        '-mask-conic-from-(color:--my-var)',
        '-mask-conic-from-(length:--my-var)',

        'mask-conic-from-[-25%]',
        'mask-conic-from-[25%]/foo',
        'mask-conic-from-[-25%]/foo',
        '-mask-conic-from-[-25%]',
        '-mask-conic-from-[25%]/foo',
        '-mask-conic-from-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('mask-conic-to', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-conic-to-0',
        'mask-conic-to-1.5',
        'mask-conic-to-2',
        'mask-conic-to-0%',
        'mask-conic-to-2%',
        'mask-conic-to-[0px]',
        'mask-conic-to-[0%]',

        'mask-conic-to-(--my-var)',
        'mask-conic-to-(color:--my-var)',
        'mask-conic-to-(length:--my-var)',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-mask-linear: linear-gradient(#fff, #fff);
          --tw-mask-radial: linear-gradient(#fff, #fff);
          --tw-mask-conic: linear-gradient(#fff, #fff);
          --tw-mask-conic-position: 0deg;
          --tw-mask-conic-from-position: 0%;
          --tw-mask-conic-to-position: 100%;
          --tw-mask-conic-from-color: black;
          --tw-mask-conic-to-color: transparent;
        }
      }
    }

    :root, :host {
      --spacing: .25rem;
    }

    .mask-conic-to-\\(color\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-color: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-\\(--my-var\\), .mask-conic-to-\\(length\\:--my-var\\) {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: var(--my-var);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-0 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: calc(var(--spacing) * 0);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-0\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-1\\.5 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: calc(var(--spacing) * 1.5);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-2 {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: calc(var(--spacing) * 2);
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-2\\% {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: 2%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-\\[0\\%\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: 0%;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    .mask-conic-to-\\[0px\\] {
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      -webkit-mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      mask-image: var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic);
      --tw-mask-conic-stops: from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position);
      --tw-mask-conic: conic-gradient(var(--tw-mask-conic-stops));
      --tw-mask-conic-to-position: 0px;
      -webkit-mask-composite: source-in;
      -webkit-mask-composite: source-in;
      mask-composite: intersect;
    }

    @property --tw-mask-linear {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-radial {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic {
      syntax: "*";
      inherits: false;
      initial-value: linear-gradient(#fff, #fff);
    }

    @property --tw-mask-conic-position {
      syntax: "*";
      inherits: false;
      initial-value: 0deg;
    }

    @property --tw-mask-conic-from-position {
      syntax: "*";
      inherits: false;
      initial-value: 0%;
    }

    @property --tw-mask-conic-to-position {
      syntax: "*";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-mask-conic-from-color {
      syntax: "*";
      inherits: false;
      initial-value: black;
    }

    @property --tw-mask-conic-to-color {
      syntax: "*";
      inherits: false;
      initial-value: transparent;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
        }
        @tailwind utilities;
      `,
      [
        'mask-conic-to',
        'mask-conic-to-2.8175',
        'mask-conic-to--1.5',
        'mask-conic-to--2',

        'mask-conic-to-2.5%',
        'mask-conic-to--5%',
        'mask-conic-to-unknown',
        'mask-conic-to-unknown%',

        '-mask-conic-to-0',
        '-mask-conic-to-1.5',
        '-mask-conic-to-2',
        '-mask-conic-to-0%',
        '-mask-conic-to-2%',
        '-mask-conic-to-[0px]',
        '-mask-conic-to-[0%]',

        '-mask-conic-to-(--my-var)',
        '-mask-conic-to-(color:--my-var)',
        '-mask-conic-to-(length:--my-var)',

        'mask-conic-to-[-25%]',
        'mask-conic-to-[25%]/foo',
        'mask-conic-to-[-25%]/foo',
        '-mask-conic-to-[-25%]',
        '-mask-conic-to-[25%]/foo',
        '-mask-conic-to-[-25%]/foo',
      ],
    ),
  ).toEqual('');
});

it('box-decoration', async () => {
  expect(await run(['box-decoration-slice', 'box-decoration-clone'])).toMatchInlineSnapshot(`
    ".box-decoration-clone {
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }

    .box-decoration-slice {
      -webkit-box-decoration-break: slice;
      box-decoration-break: slice;
    }"
  `);
  expect(
    await run([
      'box',
      'box-decoration',
      '-box-decoration-slice',
      '-box-decoration-clone',
      'box-decoration-slice/foo',
      'box-decoration-clone/foo',
    ]),
  ).toEqual('');
});

it('bg-clip', async () => {
  expect(await run(['bg-clip-border', 'bg-clip-padding', 'bg-clip-content', 'bg-clip-text']))
    .toMatchInlineSnapshot(`
      ".bg-clip-border {
        background-clip: border-box;
      }

      .bg-clip-content {
        background-clip: content-box;
      }

      .bg-clip-padding {
        background-clip: padding-box;
      }

      .bg-clip-text {
        -webkit-background-clip: text;
        background-clip: text;
      }"
    `);
  expect(
    await run([
      'bg-clip',
      '-bg-clip-border',
      '-bg-clip-padding',
      '-bg-clip-content',
      '-bg-clip-text',
      'bg-clip-border/foo',
      'bg-clip-padding/foo',
      'bg-clip-content/foo',
      'bg-clip-text/foo',
    ]),
  ).toEqual('');
});

it('bg-origin', async () => {
  expect(await run(['bg-origin-border', 'bg-origin-padding', 'bg-origin-content']))
    .toMatchInlineSnapshot(`
    ".bg-origin-border {
      background-origin: border-box;
    }

    .bg-origin-content {
      background-origin: content-box;
    }

    .bg-origin-padding {
      background-origin: padding-box;
    }"
  `);
  expect(
    await run([
      'bg-origin',
      '-bg-origin-border',
      '-bg-origin-padding',
      '-bg-origin-content',
      'bg-origin-border/foo',
      'bg-origin-padding/foo',
      'bg-origin-content/foo',
    ]),
  ).toEqual('');
});

it('mask-clip', async () => {
  expect(
    await run([
      'mask-clip-border',
      'mask-clip-padding',
      'mask-clip-content',
      'mask-clip-fill',
      'mask-clip-stroke',
      'mask-clip-view',
      'mask-no-clip',
    ]),
  ).toMatchInlineSnapshot(`
    ".mask-clip-border {
      -webkit-mask-clip: border-box;
      mask-clip: border-box;
    }

    .mask-clip-content {
      -webkit-mask-clip: content-box;
      mask-clip: content-box;
    }

    .mask-clip-fill {
      -webkit-mask-clip: fill-box;
      mask-clip: fill-box;
    }

    .mask-clip-padding {
      -webkit-mask-clip: padding-box;
      mask-clip: padding-box;
    }

    .mask-clip-stroke {
      -webkit-mask-clip: stroke-box;
      mask-clip: stroke-box;
    }

    .mask-clip-view {
      -webkit-mask-clip: view-box;
      mask-clip: view-box;
    }

    .mask-no-clip {
      -webkit-mask-clip: no-clip;
      mask-clip: no-clip;
    }"
  `);
  expect(
    await run([
      'mask-clip',
      '-mask-clip-border',
      '-mask-clip-padding',
      '-mask-clip-content',
      '-mask-clip-fill',
      '-mask-clip-stroke',
      '-mask-clip-view',
      '-mask-no-clip',
      'mask-clip-border/foo',
      'mask-clip-padding/foo',
      'mask-clip-content/foo',
      'mask-clip-fill/foo',
      'mask-clip-stroke/foo',
      'mask-clip-view/foo',
      'mask-no-clip/foo',
    ]),
  ).toEqual('');
});

it('mask-origin', async () => {
  expect(
    await run([
      'mask-origin-border',
      'mask-origin-padding',
      'mask-origin-content',
      'mask-origin-fill',
      'mask-origin-stroke',
      'mask-origin-view',
    ]),
  ).toMatchInlineSnapshot(`
    ".mask-origin-border {
      -webkit-mask-origin: border-box;
      mask-origin: border-box;
    }

    .mask-origin-content {
      -webkit-mask-origin: content-box;
      mask-origin: content-box;
    }

    .mask-origin-fill {
      -webkit-mask-origin: fill-box;
      mask-origin: fill-box;
    }

    .mask-origin-padding {
      -webkit-mask-origin: padding-box;
      mask-origin: padding-box;
    }

    .mask-origin-stroke {
      -webkit-mask-origin: stroke-box;
      mask-origin: stroke-box;
    }

    .mask-origin-view {
      -webkit-mask-origin: view-box;
      mask-origin: view-box;
    }"
  `);
  expect(
    await run([
      'mask-origin',
      '-mask-origin-border',
      '-mask-origin-padding',
      '-mask-origin-content',
      '-mask-origin-fill',
      '-mask-origin-stroke',
      '-mask-origin-view',
      'mask-origin-border/foo',
      'mask-origin-padding/foo',
      'mask-origin-content/foo',
      'mask-origin-fill/foo',
      'mask-origin-stroke/foo',
      'mask-origin-view/foo',
    ]),
  ).toEqual('');
});

it('bg-blend', async () => {
  expect(
    await run([
      'bg-blend-normal',
      'bg-blend-multiply',
      'bg-blend-screen',
      'bg-blend-overlay',
      'bg-blend-darken',
      'bg-blend-lighten',
      'bg-blend-color-dodge',
      'bg-blend-color-burn',
      'bg-blend-hard-light',
      'bg-blend-soft-light',
      'bg-blend-difference',
      'bg-blend-exclusion',
      'bg-blend-hue',
      'bg-blend-saturation',
      'bg-blend-color',
      'bg-blend-luminosity',
    ]),
  ).toMatchInlineSnapshot(`
    ".bg-blend-color {
      background-blend-mode: color;
    }

    .bg-blend-color-burn {
      background-blend-mode: color-burn;
    }

    .bg-blend-color-dodge {
      background-blend-mode: color-dodge;
    }

    .bg-blend-darken {
      background-blend-mode: darken;
    }

    .bg-blend-difference {
      background-blend-mode: difference;
    }

    .bg-blend-exclusion {
      background-blend-mode: exclusion;
    }

    .bg-blend-hard-light {
      background-blend-mode: hard-light;
    }

    .bg-blend-hue {
      background-blend-mode: hue;
    }

    .bg-blend-lighten {
      background-blend-mode: lighten;
    }

    .bg-blend-luminosity {
      background-blend-mode: luminosity;
    }

    .bg-blend-multiply {
      background-blend-mode: multiply;
    }

    .bg-blend-normal {
      background-blend-mode: normal;
    }

    .bg-blend-overlay {
      background-blend-mode: overlay;
    }

    .bg-blend-saturation {
      background-blend-mode: saturation;
    }

    .bg-blend-screen {
      background-blend-mode: screen;
    }

    .bg-blend-soft-light {
      background-blend-mode: soft-light;
    }"
  `);
  expect(
    await run([
      'bg-blend',
      '-bg-blend-normal',
      '-bg-blend-multiply',
      '-bg-blend-screen',
      '-bg-blend-overlay',
      '-bg-blend-darken',
      '-bg-blend-lighten',
      '-bg-blend-color-dodge',
      '-bg-blend-color-burn',
      '-bg-blend-hard-light',
      '-bg-blend-soft-light',
      '-bg-blend-difference',
      '-bg-blend-exclusion',
      '-bg-blend-hue',
      '-bg-blend-saturation',
      '-bg-blend-color',
      '-bg-blend-luminosity',
      'bg-blend-normal/foo',
      'bg-blend-multiply/foo',
      'bg-blend-screen/foo',
      'bg-blend-overlay/foo',
      'bg-blend-darken/foo',
      'bg-blend-lighten/foo',
      'bg-blend-color-dodge/foo',
      'bg-blend-color-burn/foo',
      'bg-blend-hard-light/foo',
      'bg-blend-soft-light/foo',
      'bg-blend-difference/foo',
      'bg-blend-exclusion/foo',
      'bg-blend-hue/foo',
      'bg-blend-saturation/foo',
      'bg-blend-color/foo',
      'bg-blend-luminosity/foo',
    ]),
  ).toEqual('');
});

it('mix-blend', async () => {
  expect(
    await run([
      'mix-blend-normal',
      'mix-blend-multiply',
      'mix-blend-screen',
      'mix-blend-overlay',
      'mix-blend-darken',
      'mix-blend-lighten',
      'mix-blend-color-dodge',
      'mix-blend-color-burn',
      'mix-blend-hard-light',
      'mix-blend-soft-light',
      'mix-blend-difference',
      'mix-blend-exclusion',
      'mix-blend-hue',
      'mix-blend-saturation',
      'mix-blend-color',
      'mix-blend-luminosity',
      'mix-blend-plus-darker',
      'mix-blend-plus-lighter',
    ]),
  ).toMatchInlineSnapshot(`
    ".mix-blend-color {
      mix-blend-mode: color;
    }

    .mix-blend-color-burn {
      mix-blend-mode: color-burn;
    }

    .mix-blend-color-dodge {
      mix-blend-mode: color-dodge;
    }

    .mix-blend-darken {
      mix-blend-mode: darken;
    }

    .mix-blend-difference {
      mix-blend-mode: difference;
    }

    .mix-blend-exclusion {
      mix-blend-mode: exclusion;
    }

    .mix-blend-hard-light {
      mix-blend-mode: hard-light;
    }

    .mix-blend-hue {
      mix-blend-mode: hue;
    }

    .mix-blend-lighten {
      mix-blend-mode: lighten;
    }

    .mix-blend-luminosity {
      mix-blend-mode: luminosity;
    }

    .mix-blend-multiply {
      mix-blend-mode: multiply;
    }

    .mix-blend-normal {
      mix-blend-mode: normal;
    }

    .mix-blend-overlay {
      mix-blend-mode: overlay;
    }

    .mix-blend-plus-darker {
      mix-blend-mode: plus-darker;
    }

    .mix-blend-plus-lighter {
      mix-blend-mode: plus-lighter;
    }

    .mix-blend-saturation {
      mix-blend-mode: saturation;
    }

    .mix-blend-screen {
      mix-blend-mode: screen;
    }

    .mix-blend-soft-light {
      mix-blend-mode: soft-light;
    }"
  `);
  expect(
    await run([
      'mix-blend',
      '-mix-blend-normal',
      '-mix-blend-multiply',
      '-mix-blend-screen',
      '-mix-blend-overlay',
      '-mix-blend-darken',
      '-mix-blend-lighten',
      '-mix-blend-color-dodge',
      '-mix-blend-color-burn',
      '-mix-blend-hard-light',
      '-mix-blend-soft-light',
      '-mix-blend-difference',
      '-mix-blend-exclusion',
      '-mix-blend-hue',
      '-mix-blend-saturation',
      '-mix-blend-color',
      '-mix-blend-luminosity',
      '-mix-blend-plus-lighter',
      'mix-blend-normal/foo',
      'mix-blend-multiply/foo',
      'mix-blend-screen/foo',
      'mix-blend-overlay/foo',
      'mix-blend-darken/foo',
      'mix-blend-lighten/foo',
      'mix-blend-color-dodge/foo',
      'mix-blend-color-burn/foo',
      'mix-blend-hard-light/foo',
      'mix-blend-soft-light/foo',
      'mix-blend-difference/foo',
      'mix-blend-exclusion/foo',
      'mix-blend-hue/foo',
      'mix-blend-saturation/foo',
      'mix-blend-color/foo',
      'mix-blend-luminosity/foo',
      'mix-blend-plus-darker/foo',
      'mix-blend-plus-lighter/foo',
    ]),
  ).toEqual('');
});

it('fill', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        'fill-red-500',
        'fill-red-500/50',
        'fill-red-500/2.25',
        'fill-red-500/2.5',
        'fill-red-500/2.75',
        'fill-red-500/[0.5]',
        'fill-red-500/[50%]',
        'fill-current',
        'fill-current/50',
        'fill-current/[0.5]',
        'fill-current/[50%]',
        'fill-inherit',
        'fill-transparent',
        'fill-[#0088cc]',
        'fill-[#0088cc]/50',
        'fill-[#0088cc]/[0.5]',
        'fill-[#0088cc]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .fill-\\[\\#0088cc\\] {
      fill: #08c;
    }

    .fill-\\[\\#0088cc\\]\\/50, .fill-\\[\\#0088cc\\]\\/\\[0\\.5\\], .fill-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      fill: oklab(59.9824% -.067 -.124 / .5);
    }

    .fill-current, .fill-current\\/50 {
      fill: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-current\\/50 {
        fill: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .fill-current\\/\\[0\\.5\\] {
      fill: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-current\\/\\[0\\.5\\] {
        fill: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .fill-current\\/\\[50\\%\\] {
      fill: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-current\\/\\[50\\%\\] {
        fill: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .fill-inherit {
      fill: inherit;
    }

    .fill-red-500 {
      fill: var(--color-red-500);
    }

    .fill-red-500\\/2\\.5 {
      fill: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-red-500\\/2\\.5 {
        fill: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .fill-red-500\\/2\\.25 {
      fill: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-red-500\\/2\\.25 {
        fill: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .fill-red-500\\/2\\.75 {
      fill: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-red-500\\/2\\.75 {
        fill: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .fill-red-500\\/50 {
      fill: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-red-500\\/50 {
        fill: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .fill-red-500\\/\\[0\\.5\\] {
      fill: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-red-500\\/\\[0\\.5\\] {
        fill: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .fill-red-500\\/\\[50\\%\\] {
      fill: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .fill-red-500\\/\\[50\\%\\] {
        fill: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .fill-transparent {
      fill: #0000;
    }"
  `);
  expect(
    await run([
      'fill',
      'fill-unknown',
      '-fill-red-500',
      '-fill-red-500/50',
      '-fill-red-500/[0.5]',
      '-fill-red-500/[50%]',
      '-fill-current',
      '-fill-current/50',
      '-fill-current/[0.5]',
      '-fill-current/[50%]',
      '-fill-inherit',
      '-fill-transparent',
      '-fill-[#0088cc]',
      '-fill-[#0088cc]/50',
      '-fill-[#0088cc]/[0.5]',
      '-fill-[#0088cc]/[50%]',
    ]),
  ).toEqual('');
});

it('stroke', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // Color
        'stroke-red-500',
        'stroke-red-500/50',
        'stroke-red-500/2.25',
        'stroke-red-500/2.5',
        'stroke-red-500/2.75',
        'stroke-red-500/[0.5]',
        'stroke-red-500/[50%]',
        'stroke-current',
        'stroke-current/50',
        'stroke-current/[0.5]',
        'stroke-current/[50%]',
        'stroke-inherit',
        'stroke-transparent',
        'stroke-[#0088cc]',
        'stroke-[#0088cc]/50',
        'stroke-[#0088cc]/[0.5]',
        'stroke-[#0088cc]/[50%]',
        'stroke-[var(--my-color)]',
        'stroke-[var(--my-color)]/50',
        'stroke-[var(--my-color)]/[0.5]',
        'stroke-[var(--my-color)]/[50%]',
        'stroke-[color:var(--my-color)]',
        'stroke-[color:var(--my-color)]/50',
        'stroke-[color:var(--my-color)]/[0.5]',
        'stroke-[color:var(--my-color)]/[50%]',
        'stroke-none',

        // Width
        'stroke-0',
        'stroke-1',
        'stroke-2',
        'stroke-[1.5]',
        'stroke-[12px]',
        'stroke-[50%]',
        'stroke-[number:var(--my-width)]',
        'stroke-[length:var(--my-width)]',
        'stroke-[percentage:var(--my-width)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .stroke-\\[\\#0088cc\\] {
      stroke: #08c;
    }

    .stroke-\\[\\#0088cc\\]\\/50, .stroke-\\[\\#0088cc\\]\\/\\[0\\.5\\], .stroke-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      stroke: oklab(59.9824% -.067 -.124 / .5);
    }

    .stroke-\\[color\\:var\\(--my-color\\)\\], .stroke-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      stroke: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        stroke: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .stroke-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      stroke: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        stroke: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .stroke-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      stroke: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        stroke: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .stroke-\\[var\\(--my-color\\)\\], .stroke-\\[var\\(--my-color\\)\\]\\/50 {
      stroke: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-\\[var\\(--my-color\\)\\]\\/50 {
        stroke: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .stroke-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      stroke: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        stroke: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .stroke-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      stroke: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        stroke: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .stroke-current, .stroke-current\\/50 {
      stroke: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-current\\/50 {
        stroke: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .stroke-current\\/\\[0\\.5\\] {
      stroke: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-current\\/\\[0\\.5\\] {
        stroke: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .stroke-current\\/\\[50\\%\\] {
      stroke: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-current\\/\\[50\\%\\] {
        stroke: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .stroke-inherit {
      stroke: inherit;
    }

    .stroke-none {
      stroke: none;
    }

    .stroke-red-500 {
      stroke: var(--color-red-500);
    }

    .stroke-red-500\\/2\\.5 {
      stroke: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-red-500\\/2\\.5 {
        stroke: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .stroke-red-500\\/2\\.25 {
      stroke: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-red-500\\/2\\.25 {
        stroke: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .stroke-red-500\\/2\\.75 {
      stroke: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-red-500\\/2\\.75 {
        stroke: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .stroke-red-500\\/50 {
      stroke: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-red-500\\/50 {
        stroke: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .stroke-red-500\\/\\[0\\.5\\] {
      stroke: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-red-500\\/\\[0\\.5\\] {
        stroke: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .stroke-red-500\\/\\[50\\%\\] {
      stroke: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .stroke-red-500\\/\\[50\\%\\] {
        stroke: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .stroke-transparent {
      stroke: #0000;
    }

    .stroke-0 {
      stroke-width: 0;
    }

    .stroke-1 {
      stroke-width: 1px;
    }

    .stroke-2 {
      stroke-width: 2px;
    }

    .stroke-\\[1\\.5\\] {
      stroke-width: 1.5px;
    }

    .stroke-\\[12px\\] {
      stroke-width: 12px;
    }

    .stroke-\\[50\\%\\] {
      stroke-width: 50%;
    }

    .stroke-\\[length\\:var\\(--my-width\\)\\], .stroke-\\[number\\:var\\(--my-width\\)\\], .stroke-\\[percentage\\:var\\(--my-width\\)\\] {
      stroke-width: var(--my-width);
    }"
  `);
  expect(
    await run([
      'stroke',
      'stroke-unknown',

      // Color
      '-stroke-red-500',
      '-stroke-red-500/50',
      '-stroke-red-500/[0.5]',
      '-stroke-red-500/[50%]',
      '-stroke-current',
      '-stroke-current/50',
      '-stroke-current/[0.5]',
      '-stroke-current/[50%]',
      '-stroke-inherit',
      '-stroke-transparent',
      '-stroke-[#0088cc]',
      '-stroke-[#0088cc]/50',
      '-stroke-[#0088cc]/[0.5]',
      '-stroke-[#0088cc]/[50%]',

      // Width
      '-stroke-0',
      'stroke--1',
    ]),
  ).toEqual('');
});

it('object', async () => {
  expect(
    await run([
      // object-fit
      'object-contain',
      'object-cover',
      'object-fill',
      'object-none',
      'object-scale-down',

      // object-position
      'object-[var(--value)]',
      'object-top',
      'object-top-left',
      'object-top-right',
      'object-bottom',
      'object-bottom-left',
      'object-bottom-right',
      'object-left',
      'object-right',
      'object-center',

      // Legacy versions in v4.0 and earlier
      'object-left-bottom',
      'object-left-top',
      'object-right-bottom',
      'object-right-top',
    ]),
  ).toMatchInlineSnapshot(`
    ".object-contain {
      object-fit: contain;
    }

    .object-cover {
      object-fit: cover;
    }

    .object-fill {
      object-fit: fill;
    }

    .object-none {
      object-fit: none;
    }

    .object-scale-down {
      object-fit: scale-down;
    }

    .object-\\[var\\(--value\\)\\] {
      object-position: var(--value);
    }

    .object-bottom {
      object-position: bottom;
    }

    .object-bottom-left {
      object-position: left bottom;
    }

    .object-bottom-right {
      object-position: right bottom;
    }

    .object-center {
      object-position: center;
    }

    .object-left {
      object-position: left;
    }

    .object-left-bottom {
      object-position: left bottom;
    }

    .object-left-top {
      object-position: left top;
    }

    .object-right {
      object-position: right;
    }

    .object-right-bottom {
      object-position: right bottom;
    }

    .object-right-top {
      object-position: right top;
    }

    .object-top {
      object-position: top;
    }

    .object-top-left {
      object-position: left top;
    }

    .object-top-right {
      object-position: right top;
    }"
  `);
  expect(
    await run([
      'object',
      // object-fit
      '-object-contain',
      '-object-cover',
      '-object-fill',
      '-object-none',
      '-object-scale-down',

      // object-position
      '-object-[var(--value)]',
      '-object-bottom',

      'object-contain/foo',
      'object-cover/foo',
      'object-fill/foo',
      'object-none/foo',
      'object-scale-down/foo',
      'object-[var(--value)]/foo',
      'object-bottom/foo',
      'object-center/foo',
      'object-left/foo',
      'object-left-bottom/foo',
      'object-left-top/foo',
      'object-right/foo',
      'object-right-bottom/foo',
      'object-right-top/foo',
      'object-top/foo',
    ]),
  ).toEqual('');
});

it('text-align', async () => {
  expect(
    await run(['text-left', 'text-center', 'text-right', 'text-justify', 'text-start', 'text-end']),
  ).toMatchInlineSnapshot(`
    ".text-center {
      text-align: center;
    }

    .text-end {
      text-align: end;
    }

    .text-justify {
      text-align: justify;
    }

    .text-left {
      text-align: left;
    }

    .text-right {
      text-align: right;
    }

    .text-start {
      text-align: start;
    }"
  `);
  expect(
    await run([
      '-text-left',
      '-text-center',
      '-text-right',
      '-text-justify',
      '-text-start',
      '-text-end',
      'text-left/foo',
      'text-center/foo',
      'text-right/foo',
      'text-justify/foo',
      'text-start/foo',
      'text-end/foo',
    ]),
  ).toEqual('');
});

it('indent', async () => {
  expect(await run(['indent-[4px]', '-indent-[4px]'])).toMatchInlineSnapshot(`
    ".-indent-\\[4px\\] {
      text-indent: -4px;
    }

    .indent-\\[4px\\] {
      text-indent: 4px;
    }"
  `);
  expect(await run(['indent', 'indent-[4px]/foo', '-indent-[4px]/foo'])).toEqual('');
});

it('align', async () => {
  expect(
    await run([
      'align-baseline',
      'align-top',
      'align-middle',
      'align-bottom',
      'align-text-top',
      'align-text-bottom',
      'align-sub',
      'align-super',

      'align-[var(--value)]',
    ]),
  ).toMatchInlineSnapshot(`
    ".align-\\[var\\(--value\\)\\] {
      vertical-align: var(--value);
    }

    .align-baseline {
      vertical-align: baseline;
    }

    .align-bottom {
      vertical-align: bottom;
    }

    .align-middle {
      vertical-align: middle;
    }

    .align-sub {
      vertical-align: sub;
    }

    .align-super {
      vertical-align: super;
    }

    .align-text-bottom {
      vertical-align: text-bottom;
    }

    .align-text-top {
      vertical-align: text-top;
    }

    .align-top {
      vertical-align: top;
    }"
  `);
  expect(
    await run([
      'align',
      '-align-baseline',
      '-align-top',
      '-align-middle',
      '-align-bottom',
      '-align-text-top',
      '-align-text-bottom',
      '-align-sub',
      '-align-super',

      '-align-[var(--value)]',

      'align-baseline/foo',
      'align-top/foo',
      'align-middle/foo',
      'align-bottom/foo',
      'align-text-top/foo',
      'align-text-bottom/foo',
      'align-sub/foo',
      'align-super/foo',
      'align-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('font', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --font-sans:
            ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
          --font-weight-bold: 650;
        }
        @tailwind utilities;
      `,
      [
        // font-family
        'font-sans',
        'font-["arial_rounded"]',
        'font-[ui-sans-serif]',
        'font-[var(--my-family)]',
        'font-[family-name:var(--my-family)]',
        'font-[generic-name:var(--my-family)]',

        // font-weight
        'font-bold',
        'font-[100]',
        'font-[number:var(--my-weight)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-font-weight: initial;
        }
      }
    }

    :root, :host {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-weight-bold: 650;
    }

    .font-\\[\\"arial_rounded\\"\\] {
      font-family: arial rounded;
    }

    .font-\\[family-name\\:var\\(--my-family\\)\\], .font-\\[generic-name\\:var\\(--my-family\\)\\] {
      font-family: var(--my-family);
    }

    .font-\\[ui-sans-serif\\] {
      font-family: ui-sans-serif;
    }

    .font-sans {
      font-family: var(--font-sans);
    }

    .font-\\[100\\] {
      --tw-font-weight: 100;
      font-weight: 100;
    }

    .font-\\[number\\:var\\(--my-weight\\)\\] {
      --tw-font-weight: var(--my-weight);
      font-weight: var(--my-weight);
    }

    .font-\\[var\\(--my-family\\)\\] {
      --tw-font-weight: var(--my-family);
      font-weight: var(--my-family);
    }

    .font-bold {
      --tw-font-weight: var(--font-weight-bold);
      font-weight: var(--font-weight-bold);
    }

    @property --tw-font-weight {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme reference {
          --font-sans:
            ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
          --font-weight-bold: 650;
        }
        @tailwind utilities;
      `,
      [
        'font',
        // font-family
        '-font-sans',

        // font-weight
        '-font-bold',

        'font-weight-bold',
        'font-sans/foo',
        'font-["arial_rounded"]/foo',
        'font-[ui-sans-serif]/foo',
        'font-[var(--my-family)]/foo',
        'font-[family-name:var(--my-family)]/foo',
        'font-[generic-name:var(--my-family)]/foo',
        'font-bold/foo',
        'font-[100]/foo',
        'font-[number:var(--my-weight)]/foo',
      ],
    ),
  ).toEqual('');
});

it('text-transform', async () => {
  expect(await run(['uppercase', 'lowercase', 'capitalize', 'normal-case'])).toMatchInlineSnapshot(`
    ".capitalize {
      text-transform: capitalize;
    }

    .lowercase {
      text-transform: lowercase;
    }

    .normal-case {
      text-transform: none;
    }

    .uppercase {
      text-transform: uppercase;
    }"
  `);
  expect(
    await run([
      '-uppercase',
      '-lowercase',
      '-capitalize',
      '-normal-case',
      'uppercase/foo',
      'lowercase/foo',
      'capitalize/foo',
      'normal-case/foo',
    ]),
  ).toEqual('');
});

it('font-style', async () => {
  expect(await run(['italic', 'not-italic'])).toMatchInlineSnapshot(`
    ".italic {
      font-style: italic;
    }

    .not-italic {
      font-style: normal;
    }"
  `);
  expect(await run(['-italic', '-not-italic', 'italic/foo', 'not-italic/foo'])).toEqual('');
});

it('font-stretch', async () => {
  expect(await run(['font-stretch-ultra-expanded', 'font-stretch-50%', 'font-stretch-200%']))
    .toMatchInlineSnapshot(`
      ".font-stretch-50\\% {
        font-stretch: 50%;
      }

      .font-stretch-200\\% {
        font-stretch: 200%;
      }

      .font-stretch-ultra-expanded {
        font-stretch: ultra-expanded;
      }"
    `);
  expect(
    await run([
      'font-stretch',
      'font-stretch-20%',
      'font-stretch-50',
      'font-stretch-400%',
      'font-stretch-50.5%',
      'font-stretch-potato',
      'font-stretch-ultra-expanded/foo',
      'font-stretch-50%/foo',
      'font-stretch-200%/foo',
    ]),
  ).toEqual('');
});

it('text-decoration-line', async () => {
  expect(await run(['underline', 'overline', 'line-through', 'no-underline']))
    .toMatchInlineSnapshot(`
    ".line-through {
      text-decoration-line: line-through;
    }

    .no-underline {
      text-decoration-line: none;
    }

    .overline {
      text-decoration-line: overline;
    }

    .underline {
      text-decoration-line: underline;
    }"
  `);
  expect(
    await run([
      '-underline',
      '-overline',
      '-line-through',
      '-no-underline',
      'underline/foo',
      'overline/foo',
      'line-through/foo',
      'no-underline/foo',
    ]),
  ).toEqual('');
});

it('placeholder', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        'placeholder-red-500',
        'placeholder-red-500/50',
        'placeholder-red-500/2.25',
        'placeholder-red-500/2.5',
        'placeholder-red-500/2.75',
        'placeholder-red-500/[0.5]',
        'placeholder-red-500/[50%]',
        'placeholder-current',
        'placeholder-current/50',
        'placeholder-current/[0.5]',
        'placeholder-current/[50%]',
        'placeholder-inherit',
        'placeholder-transparent',
        'placeholder-[#0088cc]',
        'placeholder-[#0088cc]/50',
        'placeholder-[#0088cc]/[0.5]',
        'placeholder-[#0088cc]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .placeholder-\\[\\#0088cc\\]::placeholder {
      color: #08c;
    }

    .placeholder-\\[\\#0088cc\\]\\/50::placeholder, .placeholder-\\[\\#0088cc\\]\\/\\[0\\.5\\]::placeholder, .placeholder-\\[\\#0088cc\\]\\/\\[50\\%\\]::placeholder {
      color: oklab(59.9824% -.067 -.124 / .5);
    }

    .placeholder-current::placeholder, .placeholder-current\\/50::placeholder {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-current\\/50::placeholder {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .placeholder-current\\/\\[0\\.5\\]::placeholder {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-current\\/\\[0\\.5\\]::placeholder {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .placeholder-current\\/\\[50\\%\\]::placeholder {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-current\\/\\[50\\%\\]::placeholder {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .placeholder-inherit::placeholder {
      color: inherit;
    }

    .placeholder-red-500::placeholder {
      color: var(--color-red-500);
    }

    .placeholder-red-500\\/2\\.5::placeholder {
      color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-red-500\\/2\\.5::placeholder {
        color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .placeholder-red-500\\/2\\.25::placeholder {
      color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-red-500\\/2\\.25::placeholder {
        color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .placeholder-red-500\\/2\\.75::placeholder {
      color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-red-500\\/2\\.75::placeholder {
        color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .placeholder-red-500\\/50::placeholder {
      color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-red-500\\/50::placeholder {
        color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .placeholder-red-500\\/\\[0\\.5\\]::placeholder {
      color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-red-500\\/\\[0\\.5\\]::placeholder {
        color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .placeholder-red-500\\/\\[50\\%\\]::placeholder {
      color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .placeholder-red-500\\/\\[50\\%\\]::placeholder {
        color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .placeholder-transparent::placeholder {
      color: #0000;
    }"
  `);
  expect(
    await run([
      'placeholder',
      '-placeholder-red-500',
      '-placeholder-red-500/50',
      '-placeholder-red-500/[0.5]',
      '-placeholder-red-500/[50%]',
      '-placeholder-current',
      '-placeholder-current/50',
      '-placeholder-current/[0.5]',
      '-placeholder-current/[50%]',
      '-placeholder-inherit',
      '-placeholder-transparent',
      '-placeholder-[#0088cc]',
      '-placeholder-[#0088cc]/50',
      '-placeholder-[#0088cc]/[0.5]',
      '-placeholder-[#0088cc]/[50%]',
    ]),
  ).toEqual('');
});

it('decoration', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // text-decoration-color
        'decoration-red-500',
        'decoration-red-500/50',
        'decoration-red-500/[0.5]',
        'decoration-red-500/[50%]',
        'decoration-current',
        'decoration-current/50',
        'decoration-current/[0.5]',
        'decoration-current/[50%]',
        'decoration-inherit',
        'decoration-transparent',
        'decoration-[#0088cc]',
        'decoration-[#0088cc]/50',
        'decoration-[#0088cc]/[0.5]',
        'decoration-[#0088cc]/[50%]',
        'decoration-[var(--my-color)]',
        'decoration-[var(--my-color)]/50',
        'decoration-[var(--my-color)]/[0.5]',
        'decoration-[var(--my-color)]/[50%]',
        'decoration-[color:var(--my-color)]',
        'decoration-[color:var(--my-color)]/50',
        'decoration-[color:var(--my-color)]/[0.5]',
        'decoration-[color:var(--my-color)]/[50%]',

        // text-decoration-style
        'decoration-solid',
        'decoration-double',
        'decoration-dotted',
        'decoration-dashed',
        'decoration-wavy',

        // text-decoration-thickness
        'decoration-auto',
        'decoration-from-font',
        'decoration-0',
        'decoration-1',
        'decoration-2',
        'decoration-4',
        'decoration-123',
        'decoration-[12px]',
        'decoration-[50%]',
        'decoration-[length:var(--my-thickness)]',
        'decoration-[percentage:var(--my-thickness)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .decoration-\\[\\#0088cc\\] {
      text-decoration-color: #08c;
    }

    .decoration-\\[\\#0088cc\\]\\/50, .decoration-\\[\\#0088cc\\]\\/\\[0\\.5\\], .decoration-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      text-decoration-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .decoration-\\[color\\:var\\(--my-color\\)\\], .decoration-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      -webkit-text-decoration-color: var(--my-color);
      -webkit-text-decoration-color: var(--my-color);
      text-decoration-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .decoration-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      -webkit-text-decoration-color: var(--my-color);
      -webkit-text-decoration-color: var(--my-color);
      text-decoration-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .decoration-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      -webkit-text-decoration-color: var(--my-color);
      -webkit-text-decoration-color: var(--my-color);
      text-decoration-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .decoration-\\[var\\(--my-color\\)\\], .decoration-\\[var\\(--my-color\\)\\]\\/50 {
      -webkit-text-decoration-color: var(--my-color);
      -webkit-text-decoration-color: var(--my-color);
      text-decoration-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-\\[var\\(--my-color\\)\\]\\/50 {
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .decoration-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      -webkit-text-decoration-color: var(--my-color);
      -webkit-text-decoration-color: var(--my-color);
      text-decoration-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .decoration-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      -webkit-text-decoration-color: var(--my-color);
      -webkit-text-decoration-color: var(--my-color);
      text-decoration-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .decoration-current, .decoration-current\\/50 {
      text-decoration-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-current\\/50 {
        -webkit-text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
        text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .decoration-current\\/\\[0\\.5\\] {
      text-decoration-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-current\\/\\[0\\.5\\] {
        -webkit-text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
        text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .decoration-current\\/\\[50\\%\\] {
      text-decoration-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-current\\/\\[50\\%\\] {
        -webkit-text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
        text-decoration-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .decoration-inherit {
      -webkit-text-decoration-color: inherit;
      -webkit-text-decoration-color: inherit;
      text-decoration-color: inherit;
    }

    .decoration-red-500 {
      -webkit-text-decoration-color: var(--color-red-500);
      -webkit-text-decoration-color: var(--color-red-500);
      text-decoration-color: var(--color-red-500);
    }

    .decoration-red-500\\/50 {
      text-decoration-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-red-500\\/50 {
        -webkit-text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .decoration-red-500\\/\\[0\\.5\\] {
      text-decoration-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-red-500\\/\\[0\\.5\\] {
        -webkit-text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .decoration-red-500\\/\\[50\\%\\] {
      text-decoration-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .decoration-red-500\\/\\[50\\%\\] {
        -webkit-text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
        -webkit-text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
        text-decoration-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .decoration-transparent {
      text-decoration-color: #0000;
    }

    .decoration-dashed {
      text-decoration-style: dashed;
    }

    .decoration-dotted {
      text-decoration-style: dotted;
    }

    .decoration-double {
      text-decoration-style: double;
    }

    .decoration-solid {
      text-decoration-style: solid;
    }

    .decoration-wavy {
      text-decoration-style: wavy;
    }

    .decoration-0 {
      text-decoration-thickness: 0;
    }

    .decoration-1 {
      text-decoration-thickness: 1px;
    }

    .decoration-2 {
      text-decoration-thickness: 2px;
    }

    .decoration-4 {
      text-decoration-thickness: 4px;
    }

    .decoration-123 {
      text-decoration-thickness: 123px;
    }

    .decoration-\\[12px\\] {
      text-decoration-thickness: 12px;
    }

    .decoration-\\[50\\%\\] {
      text-decoration-thickness: .5em;
    }

    .decoration-\\[length\\:var\\(--my-thickness\\)\\], .decoration-\\[percentage\\:var\\(--my-thickness\\)\\] {
      text-decoration-thickness: var(--my-thickness);
    }

    .decoration-auto {
      text-decoration-thickness: auto;
    }

    .decoration-from-font {
      text-decoration-thickness: from-font;
    }"
  `);
  expect(
    await run([
      'decoration',
      // text-decoration-color
      '-decoration-red-500',
      '-decoration-red-500/50',
      '-decoration-red-500/[0.5]',
      '-decoration-red-500/[50%]',
      '-decoration-current',
      '-decoration-current/50',
      '-decoration-current/[0.5]',
      '-decoration-current/[50%]',
      '-decoration-transparent',
      '-decoration-[#0088cc]',
      '-decoration-[#0088cc]/50',
      '-decoration-[#0088cc]/[0.5]',
      '-decoration-[#0088cc]/[50%]',

      // text-decoration-style
      '-decoration-solid',
      '-decoration-double',
      '-decoration-dotted',
      '-decoration-dashed',
      '-decoration-wavy',

      // text-decoration-thickness
      'decoration--2',
      '-decoration-auto',
      '-decoration-from-font',
      '-decoration-0',
      '-decoration-1',
      '-decoration-2',
      '-decoration-4',
      '-decoration-123',

      'decoration-solid/foo',
      'decoration-double/foo',
      'decoration-dotted/foo',
      'decoration-dashed/foo',
      'decoration-wavy/foo',
      'decoration-auto/foo',
      'decoration-from-font/foo',
      'decoration-0/foo',
      'decoration-1/foo',
      'decoration-2/foo',
      'decoration-4/foo',
      'decoration-123/foo',
      'decoration-[12px]/foo',
      'decoration-[50%]/foo',
      'decoration-[length:var(--my-thickness)]/foo',
      'decoration-[percentage:var(--my-thickness)]/foo',
    ]),
  ).toEqual('');
});

it('animate', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --animate-spin: spin 1s linear infinite;
        }
        @tailwind utilities;
      `,
      ['animate-spin', 'animate-none', 'animate-[bounce_1s_infinite]', 'animate-not-found'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --animate-spin: spin 1s linear infinite;
    }

    .animate-\\[bounce_1s_infinite\\] {
      animation: 1s infinite bounce;
    }

    .animate-none {
      animation: none;
    }

    .animate-spin {
      animation: var(--animate-spin);
    }"
  `);
  expect(
    await run([
      'animate',
      '-animate-spin',
      '-animate-none',
      '-animate-[bounce_1s_infinite]',
      '-animate-not-found',
      'animate-spin/foo',
      'animate-none/foo',
      'animate-[bounce_1s_infinite]/foo',
      'animate-not-found/foo',
    ]),
  ).toEqual('');
});

it('filter', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --blur-xl: 24px;
          --color-red-500: #ef4444;
          --drop-shadow: 0 1px 1px rgb(0 0 0 / 0.05);
          --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
        }
        @theme inline {
          --drop-shadow-multi: 0 1px 1px rgb(0 0 0 / 0.05), 0 9px 7px rgb(0 0 0 / 0.1);
        }
        @tailwind utilities;
      `,
      [
        'filter',
        'filter-none',
        'filter-[var(--value)]',
        'blur-xl',
        'blur-none',
        'blur-[4px]',
        'brightness-50',
        'brightness-[1.23]',
        'contrast-50',
        'contrast-[1.23]',
        'grayscale',
        'grayscale-0',
        'grayscale-[var(--value)]',
        'hue-rotate-15',
        'hue-rotate-[45deg]',
        '-hue-rotate-15',
        '-hue-rotate-[45deg]',
        'invert',
        'invert-0',
        'invert-[var(--value)]',
        'drop-shadow',
        'drop-shadow/25',
        'drop-shadow-xl',
        'drop-shadow-multi',
        'drop-shadow-[0_0_red]',
        'drop-shadow-red-500',
        'drop-shadow-red-500/50',
        'saturate-0',
        'saturate-[1.75]',
        'saturate-[var(--value)]',
        'sepia',
        'sepia-0',
        'sepia-[50%]',
        'sepia-[var(--value)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-blur: initial;
          --tw-brightness: initial;
          --tw-contrast: initial;
          --tw-grayscale: initial;
          --tw-hue-rotate: initial;
          --tw-invert: initial;
          --tw-opacity: initial;
          --tw-saturate: initial;
          --tw-sepia: initial;
          --tw-drop-shadow: initial;
          --tw-drop-shadow-color: initial;
          --tw-drop-shadow-alpha: 100%;
          --tw-drop-shadow-size: initial;
        }
      }
    }

    :root, :host {
      --blur-xl: 24px;
      --color-red-500: #ef4444;
      --drop-shadow: 0 1px 1px #0000000d;
      --drop-shadow-xl: 0 9px 7px #0000001a;
    }

    .blur-\\[4px\\] {
      --tw-blur: blur(4px);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .blur-none {
      --tw-blur: ;
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .blur-xl {
      --tw-blur: blur(var(--blur-xl));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .brightness-50 {
      --tw-brightness: brightness(50%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .brightness-\\[1\\.23\\] {
      --tw-brightness: brightness(1.23);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .contrast-50 {
      --tw-contrast: contrast(50%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .contrast-\\[1\\.23\\] {
      --tw-contrast: contrast(1.23);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .drop-shadow\\/25 {
      --tw-drop-shadow-alpha: 25%;
      --tw-drop-shadow-size: drop-shadow(0 1px 1px var(--tw-drop-shadow-color, oklab(0% 0 0 / .25)));
      --tw-drop-shadow: drop-shadow(var(--drop-shadow));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .drop-shadow {
      --tw-drop-shadow-size: drop-shadow(0 1px 1px var(--tw-drop-shadow-color, #0000000d));
      --tw-drop-shadow: drop-shadow(var(--drop-shadow));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .drop-shadow-\\[0_0_red\\] {
      --tw-drop-shadow-size: drop-shadow(0 0 var(--tw-drop-shadow-color, red));
      --tw-drop-shadow: var(--tw-drop-shadow-size);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .drop-shadow-multi {
      --tw-drop-shadow-size: drop-shadow(0 1px 1px var(--tw-drop-shadow-color, #0000000d)) drop-shadow(0 9px 7px var(--tw-drop-shadow-color, #0000001a));
      --tw-drop-shadow: drop-shadow(0 1px 1px #0000000d) drop-shadow(0 9px 7px #0000001a);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .drop-shadow-xl {
      --tw-drop-shadow-size: drop-shadow(0 9px 7px var(--tw-drop-shadow-color, #0000001a));
      --tw-drop-shadow: drop-shadow(var(--drop-shadow-xl));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .drop-shadow-red-500 {
      --tw-drop-shadow-color: #ef4444;
      --tw-drop-shadow: var(--tw-drop-shadow-size);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .drop-shadow-red-500 {
        --tw-drop-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-drop-shadow-alpha), transparent);
      }
    }

    .drop-shadow-red-500\\/50 {
      --tw-drop-shadow-color: #ef444480;
      --tw-drop-shadow: var(--tw-drop-shadow-size);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .drop-shadow-red-500\\/50 {
        --tw-drop-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-drop-shadow-alpha), transparent);
      }
    }

    .grayscale {
      --tw-grayscale: grayscale(100%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .grayscale-0 {
      --tw-grayscale: grayscale(0%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .grayscale-\\[var\\(--value\\)\\] {
      --tw-grayscale: grayscale(var(--value));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .-hue-rotate-15 {
      --tw-hue-rotate: hue-rotate(calc(15deg * -1));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .-hue-rotate-\\[45deg\\] {
      --tw-hue-rotate: hue-rotate(calc(45deg * -1));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .hue-rotate-15 {
      --tw-hue-rotate: hue-rotate(15deg);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .hue-rotate-\\[45deg\\] {
      --tw-hue-rotate: hue-rotate(45deg);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .invert {
      --tw-invert: invert(100%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .invert-0 {
      --tw-invert: invert(0%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .invert-\\[var\\(--value\\)\\] {
      --tw-invert: invert(var(--value));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .saturate-0 {
      --tw-saturate: saturate(0%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .saturate-\\[1\\.75\\] {
      --tw-saturate: saturate(1.75);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .saturate-\\[var\\(--value\\)\\] {
      --tw-saturate: saturate(var(--value));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .sepia {
      --tw-sepia: sepia(100%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .sepia-0 {
      --tw-sepia: sepia(0%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .sepia-\\[50\\%\\] {
      --tw-sepia: sepia(50%);
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .sepia-\\[var\\(--value\\)\\] {
      --tw-sepia: sepia(var(--value));
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .filter {
      filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
    }

    .filter-\\[var\\(--value\\)\\] {
      filter: var(--value);
    }

    .filter-none {
      filter: none;
    }

    @property --tw-blur {
      syntax: "*";
      inherits: false
    }

    @property --tw-brightness {
      syntax: "*";
      inherits: false
    }

    @property --tw-contrast {
      syntax: "*";
      inherits: false
    }

    @property --tw-grayscale {
      syntax: "*";
      inherits: false
    }

    @property --tw-hue-rotate {
      syntax: "*";
      inherits: false
    }

    @property --tw-invert {
      syntax: "*";
      inherits: false
    }

    @property --tw-opacity {
      syntax: "*";
      inherits: false
    }

    @property --tw-saturate {
      syntax: "*";
      inherits: false
    }

    @property --tw-sepia {
      syntax: "*";
      inherits: false
    }

    @property --tw-drop-shadow {
      syntax: "*";
      inherits: false
    }

    @property --tw-drop-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-drop-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-drop-shadow-size {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      '-filter',
      '-filter-none',
      '-filter-[var(--value)]',
      '-blur-xl',
      '-blur-[4px]',
      'brightness--50',
      '-brightness-50',
      '-brightness-[1.23]',
      'brightness-unknown',
      'contrast--50',
      '-contrast-50',
      '-contrast-[1.23]',
      'contrast-unknown',
      '-grayscale',
      '-grayscale-0',
      'grayscale--1',
      '-grayscale-[var(--value)]',
      'grayscale-unknown',
      'hue-rotate--5',
      'hue-rotate-unknown',
      '-invert',
      'invert--5',
      '-invert-0',
      '-invert-[var(--value)]',
      'invert-unknown',
      '-drop-shadow-xl',
      '-drop-shadow-[0_0_red]',

      'drop-shadow/foo',
      '-drop-shadow/foo',
      '-drop-shadow/25',
      '-drop-shadow-red-500',
      'drop-shadow-red-500/foo',
      '-drop-shadow-red-500/foo',
      '-drop-shadow-red-500/50',

      '-saturate-0',
      'saturate--5',
      '-saturate-[1.75]',
      '-saturate-[var(--value)]',
      'saturate-saturate',
      '-sepia',
      'sepia--50',
      '-sepia-0',
      '-sepia-[50%]',
      '-sepia-[var(--value)]',
      'sepia-unknown',
      'filter/foo',
      'filter-none/foo',
      'filter-[var(--value)]/foo',
      'blur-xl/foo',
      'blur-none/foo',
      'blur-[4px]/foo',
      'brightness-50/foo',
      'brightness-[1.23]/foo',
      'contrast-50/foo',
      'contrast-[1.23]/foo',
      'grayscale/foo',
      'grayscale-0/foo',
      'grayscale-[var(--value)]/foo',
      'hue-rotate-15/foo',
      'hue-rotate-[45deg]/foo',
      'invert/foo',
      'invert-0/foo',
      'invert-[var(--value)]/foo',
      'drop-shadow-xl/foo',
      'drop-shadow-[0_0_red]/foo',
      'saturate-0/foo',
      'saturate-[1.75]/foo',
      'saturate-[var(--value)]/foo',
      'sepia/foo',
      'sepia-0/foo',
      'sepia-[50%]/foo',
      'sepia-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('backdrop-filter', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --blur-xl: 24px;
        }
        @tailwind utilities;
      `,
      [
        'backdrop-filter',
        'backdrop-filter-none',
        'backdrop-filter-[var(--value)]',
        'backdrop-blur-none',
        'backdrop-blur-xl',
        'backdrop-blur-[4px]',
        'backdrop-brightness-50',
        'backdrop-brightness-[1.23]',
        'backdrop-contrast-50',
        'backdrop-contrast-[1.23]',
        'backdrop-grayscale',
        'backdrop-grayscale-0',
        'backdrop-grayscale-[var(--value)]',
        'backdrop-hue-rotate-15',
        'backdrop-hue-rotate-[45deg]',
        '-backdrop-hue-rotate-15',
        '-backdrop-hue-rotate-[45deg]',
        'backdrop-invert',
        'backdrop-invert-0',
        'backdrop-invert-[var(--value)]',
        'backdrop-opacity-50',
        'backdrop-opacity-71',
        'backdrop-opacity-1.25',
        'backdrop-opacity-2.5',
        'backdrop-opacity-3.75',
        'backdrop-opacity-[0.5]',
        'backdrop-saturate-0',
        'backdrop-saturate-[1.75]',
        'backdrop-saturate-[var(--value)]',
        'backdrop-sepia',
        'backdrop-sepia-0',
        'backdrop-sepia-[50%]',
        'backdrop-sepia-[var(--value)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-backdrop-blur: initial;
          --tw-backdrop-brightness: initial;
          --tw-backdrop-contrast: initial;
          --tw-backdrop-grayscale: initial;
          --tw-backdrop-hue-rotate: initial;
          --tw-backdrop-invert: initial;
          --tw-backdrop-opacity: initial;
          --tw-backdrop-saturate: initial;
          --tw-backdrop-sepia: initial;
        }
      }
    }

    :root, :host {
      --blur-xl: 24px;
    }

    .backdrop-blur-\\[4px\\] {
      --tw-backdrop-blur: blur(4px);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-blur-none {
      --tw-backdrop-blur: ;
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-blur-xl {
      --tw-backdrop-blur: blur(var(--blur-xl));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-brightness-50 {
      --tw-backdrop-brightness: brightness(50%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-brightness-\\[1\\.23\\] {
      --tw-backdrop-brightness: brightness(1.23);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-contrast-50 {
      --tw-backdrop-contrast: contrast(50%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-contrast-\\[1\\.23\\] {
      --tw-backdrop-contrast: contrast(1.23);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-grayscale {
      --tw-backdrop-grayscale: grayscale(100%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-grayscale-0 {
      --tw-backdrop-grayscale: grayscale(0%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-grayscale-\\[var\\(--value\\)\\] {
      --tw-backdrop-grayscale: grayscale(var(--value));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .-backdrop-hue-rotate-15 {
      --tw-backdrop-hue-rotate: hue-rotate(calc(15deg * -1));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .-backdrop-hue-rotate-\\[45deg\\] {
      --tw-backdrop-hue-rotate: hue-rotate(calc(45deg * -1));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-hue-rotate-15 {
      --tw-backdrop-hue-rotate: hue-rotate(15deg);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-hue-rotate-\\[45deg\\] {
      --tw-backdrop-hue-rotate: hue-rotate(45deg);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-invert {
      --tw-backdrop-invert: invert(100%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-invert-0 {
      --tw-backdrop-invert: invert(0%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-invert-\\[var\\(--value\\)\\] {
      --tw-backdrop-invert: invert(var(--value));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-opacity-1\\.25 {
      --tw-backdrop-opacity: opacity(1.25%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-opacity-2\\.5 {
      --tw-backdrop-opacity: opacity(2.5%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-opacity-3\\.75 {
      --tw-backdrop-opacity: opacity(3.75%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-opacity-50 {
      --tw-backdrop-opacity: opacity(50%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-opacity-71 {
      --tw-backdrop-opacity: opacity(71%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-opacity-\\[0\\.5\\] {
      --tw-backdrop-opacity: opacity(.5);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-saturate-0 {
      --tw-backdrop-saturate: saturate(0%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-saturate-\\[1\\.75\\] {
      --tw-backdrop-saturate: saturate(1.75);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-saturate-\\[var\\(--value\\)\\] {
      --tw-backdrop-saturate: saturate(var(--value));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-sepia {
      --tw-backdrop-sepia: sepia(100%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-sepia-0 {
      --tw-backdrop-sepia: sepia(0%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-sepia-\\[50\\%\\] {
      --tw-backdrop-sepia: sepia(50%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-sepia-\\[var\\(--value\\)\\] {
      --tw-backdrop-sepia: sepia(var(--value));
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-filter {
      -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
      backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    }

    .backdrop-filter-\\[var\\(--value\\)\\] {
      -webkit-backdrop-filter: var(--value);
      backdrop-filter: var(--value);
    }

    .backdrop-filter-none {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
    }

    @property --tw-backdrop-blur {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-brightness {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-contrast {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-grayscale {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-hue-rotate {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-invert {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-opacity {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-saturate {
      syntax: "*";
      inherits: false
    }

    @property --tw-backdrop-sepia {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      '-backdrop-filter',
      '-backdrop-filter-none',
      '-backdrop-filter-[var(--value)]',
      '-backdrop-blur-xl',
      '-backdrop-blur-[4px]',
      'backdrop-brightness--50',
      '-backdrop-brightness-50',
      '-backdrop-brightness-[1.23]',
      'backdrop-brightness-unknown',
      'backdrop-contrast--50',
      '-backdrop-contrast-50',
      '-backdrop-contrast-[1.23]',
      'backdrop-contrast-unknown',
      '-backdrop-grayscale',
      'backdrop-grayscale--1',
      '-backdrop-grayscale-0',
      '-backdrop-grayscale-[var(--value)]',
      'backdrop-grayscale-unknown',
      'backdrop-hue-rotate-unknown',
      '-backdrop-invert',
      'backdrop-invert--1',
      '-backdrop-invert-0',
      '-backdrop-invert-[var(--value)]',
      'backdrop-invert-unknown',
      'backdrop-opacity--50',
      '-backdrop-opacity-50',
      '-backdrop-opacity-[0.5]',
      'backdrop-opacity-unknown',
      '-backdrop-saturate-0',
      'backdrop-saturate--50',
      '-backdrop-saturate-[1.75]',
      '-backdrop-saturate-[var(--value)]',
      'backdrop-saturate-unknown',
      '-backdrop-sepia',
      'backdrop-sepia--50',
      '-backdrop-sepia-0',
      '-backdrop-sepia-[50%]',
      '-backdrop-sepia-[var(--value)]',
      'backdrop-sepia-unknown',
      'backdrop-filter/foo',
      'backdrop-filter-none/foo',
      'backdrop-filter-[var(--value)]/foo',
      'backdrop-blur-none/foo',
      'backdrop-blur-xl/foo',
      'backdrop-blur-[4px]/foo',
      'backdrop-brightness-50/foo',
      'backdrop-brightness-[1.23]/foo',
      'backdrop-contrast-50/foo',
      'backdrop-contrast-[1.23]/foo',
      'backdrop-grayscale/foo',
      'backdrop-grayscale-0/foo',
      'backdrop-grayscale-[var(--value)]/foo',
      'backdrop-hue-rotate--15',
      'backdrop-hue-rotate-15/foo',
      'backdrop-hue-rotate-[45deg]/foo',
      'backdrop-invert/foo',
      'backdrop-invert-0/foo',
      'backdrop-invert-[var(--value)]/foo',
      'backdrop-opacity-50/foo',
      'backdrop-opacity-71/foo',
      'backdrop-opacity-[0.5]/foo',
      'backdrop-saturate-0/foo',
      'backdrop-saturate-[1.75]/foo',
      'backdrop-saturate-[var(--value)]/foo',
      'backdrop-sepia/foo',
      'backdrop-sepia-0/foo',
      'backdrop-sepia-[50%]/foo',
      'backdrop-sepia-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('transition', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --default-transition-timing-function: ease;
          --default-transition-duration: 100ms;
          --transition-property:
            color, background-color, border-color, text-decoration-color, fill, stroke, opacity,
            box-shadow, transform, filter, backdrop-filter;
          --transition-property-opacity: opacity;
        }
        @tailwind utilities;
      `,
      [
        'transition',
        'transition-none',
        'transition-all',
        'transition-transform',
        'transition-shadow',
        'transition-colors',
        'transition-opacity',
        'transition-[var(--value)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --default-transition-timing-function: ease;
      --default-transition-duration: .1s;
      --transition-property-opacity: opacity;
    }

    .transition {
      transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-\\[var\\(--value\\)\\] {
      transition-property: var(--value);
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-all {
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-colors {
      transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-opacity {
      transition-property: opacity;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      transition-property: var(--transition-property-opacity);
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-shadow {
      transition-property: box-shadow;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-transform {
      transition-property: transform, translate, scale, rotate;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
    }

    .transition-none {
      transition-property: none;
    }"
  `);

  expect(
    await compileCss(
      css`
        @theme inline {
          --default-transition-timing-function: ease;
          --default-transition-duration: 100ms;
        }
        @tailwind utilities;
      `,
      ['transition', 'transition-all', 'transition-colors'],
    ),
  ).toMatchInlineSnapshot(`
    ".transition {
      transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;
      transition-timing-function: var(--tw-ease, ease);
      transition-duration: var(--tw-duration, .1s);
    }

    .transition-all {
      transition-property: all;
      transition-timing-function: var(--tw-ease, ease);
      transition-duration: var(--tw-duration, .1s);
    }

    .transition-colors {
      transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
      transition-timing-function: var(--tw-ease, ease);
      transition-duration: var(--tw-duration, .1s);
    }"
  `);

  expect(
    await compileCss(
      css`
        @tailwind utilities;
      `,
      ['transition-all'],
    ),
  ).toMatchInlineSnapshot(`
    ".transition-all {
      transition-property: all;
      transition-timing-function: var(--tw-ease, ease);
      transition-duration: var(--tw-duration, 0s);
    }"
  `);

  expect(
    await run([
      '-transition',
      '-transition-none',
      '-transition-all',
      '-transition-opacity',
      '-transition-[var(--value)]',
      'transition/foo',
      'transition-none/foo',
      'transition-all/foo',
      'transition-transform/foo',
      'transition-shadow/foo',
      'transition-colors/foo',
      'transition-opacity/foo',
      'transition-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('transition-behavior', async () => {
  expect(await run(['transition-discrete', 'transition-normal'])).toMatchInlineSnapshot(`
    ".transition-discrete {
      transition-behavior: allow-discrete;
    }

    .transition-normal {
      transition-behavior: normal;
    }"
  `);

  expect(await run(['-transition-discrete', '-transition-normal'])).toEqual('');
});

it('delay', async () => {
  expect(await run(['delay-123', 'delay-200', 'delay-[300ms]'])).toMatchInlineSnapshot(`
    ".delay-123 {
      transition-delay: .123s;
    }

    .delay-200 {
      transition-delay: .2s;
    }

    .delay-\\[300ms\\] {
      transition-delay: .3s;
    }"
  `);
  expect(
    await run([
      'delay',
      'delay--200',
      '-delay-200',
      '-delay-[300ms]',
      'delay-unknown',
      'delay-123/foo',
      'delay-200/foo',
      'delay-[300ms]/foo',
    ]),
  ).toEqual('');
});

it('duration', async () => {
  expect(await run(['duration-123', 'duration-200', 'duration-[300ms]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-duration: initial;
        }
      }
    }

    .duration-123 {
      --tw-duration: .123s;
      transition-duration: .123s;
    }

    .duration-200 {
      --tw-duration: .2s;
      transition-duration: .2s;
    }

    .duration-\\[300ms\\] {
      --tw-duration: .3s;
      transition-duration: .3s;
    }

    @property --tw-duration {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      'duration',
      'duration--200',
      '-duration-200',
      '-duration-[300ms]',
      'duration-123/foo',
      'duration-200/foo',
      'duration-[300ms]/foo',
    ]),
  ).toEqual('');
});

it('ease', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --ease-in: cubic-bezier(0.4, 0, 1, 1);
          --ease-out: cubic-bezier(0, 0, 0.2, 1);
        }
        @tailwind utilities;
      `,
      ['ease-in', 'ease-out', 'ease-[var(--value)]'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-ease: initial;
        }
      }
    }

    :root, :host {
      --ease-in: cubic-bezier(.4, 0, 1, 1);
      --ease-out: cubic-bezier(0, 0, .2, 1);
    }

    .ease-\\[var\\(--value\\)\\] {
      --tw-ease: var(--value);
      transition-timing-function: var(--value);
    }

    .ease-in {
      --tw-ease: var(--ease-in);
      transition-timing-function: var(--ease-in);
    }

    .ease-out {
      --tw-ease: var(--ease-out);
      transition-timing-function: var(--ease-out);
    }

    @property --tw-ease {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      '-ease-in',
      '-ease-out',
      '-ease-[var(--value)]',
      'ease-in/foo',
      'ease-out/foo',
      'ease-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('will-change', async () => {
  expect(
    await run([
      'will-change-auto',
      'will-change-contents',
      'will-change-transform',
      'will-change-scroll',
      'will-change-[var(--value)]',
    ]),
  ).toMatchInlineSnapshot(`
    ".will-change-\\[var\\(--value\\)\\] {
      will-change: var(--value);
    }

    .will-change-auto {
      will-change: auto;
    }

    .will-change-contents {
      will-change: contents;
    }

    .will-change-scroll {
      will-change: scroll-position;
    }

    .will-change-transform {
      will-change: transform;
    }"
  `);
  expect(
    await run([
      'will-change',
      '-will-change-auto',
      '-will-change-contents',
      '-will-change-transform',
      '-will-change-scroll',
      '-will-change-[var(--value)]',
      'will-change-auto/foo',
      'will-change-contents/foo',
      'will-change-transform/foo',
      'will-change-scroll/foo',
      'will-change-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('contain', async () => {
  expect(
    await run([
      'contain-none',
      'contain-content',
      'contain-strict',
      'contain-size',
      'contain-inline-size',
      'contain-layout',
      'contain-paint',
      'contain-style',
      'contain-[unset]',
    ]),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-contain-size: initial;
          --tw-contain-layout: initial;
          --tw-contain-paint: initial;
          --tw-contain-style: initial;
        }
      }
    }

    .contain-inline-size {
      --tw-contain-size: inline-size;
      contain: var(--tw-contain-size, ) var(--tw-contain-layout, ) var(--tw-contain-paint, ) var(--tw-contain-style, );
    }

    .contain-layout {
      --tw-contain-layout: layout;
      contain: var(--tw-contain-size, ) var(--tw-contain-layout, ) var(--tw-contain-paint, ) var(--tw-contain-style, );
    }

    .contain-paint {
      --tw-contain-paint: paint;
      contain: var(--tw-contain-size, ) var(--tw-contain-layout, ) var(--tw-contain-paint, ) var(--tw-contain-style, );
    }

    .contain-size {
      --tw-contain-size: size;
      contain: var(--tw-contain-size, ) var(--tw-contain-layout, ) var(--tw-contain-paint, ) var(--tw-contain-style, );
    }

    .contain-style {
      --tw-contain-style: style;
      contain: var(--tw-contain-size, ) var(--tw-contain-layout, ) var(--tw-contain-paint, ) var(--tw-contain-style, );
    }

    .contain-\\[unset\\] {
      contain: unset;
    }

    .contain-content {
      contain: content;
    }

    .contain-none {
      contain: none;
    }

    .contain-strict {
      contain: strict;
    }

    @property --tw-contain-size {
      syntax: "*";
      inherits: false
    }

    @property --tw-contain-layout {
      syntax: "*";
      inherits: false
    }

    @property --tw-contain-paint {
      syntax: "*";
      inherits: false
    }

    @property --tw-contain-style {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      'contain-none/foo',
      'contain-content/foo',
      'contain-strict/foo',
      'contain-size/foo',
      'contain-inline-size/foo',
      'contain-layout/foo',
      'contain-paint/foo',
      'contain-style/foo',
      'contain-[unset]/foo',
    ]),
  ).toEqual('');
});

it('content', async () => {
  expect(await run(['content-["hello_world"]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-content: "";
        }
      }
    }

    .content-\\[\\"hello_world\\"\\] {
      --tw-content: "hello world";
      content: var(--tw-content);
    }

    @property --tw-content {
      syntax: "*";
      inherits: false;
      initial-value: "";
    }"
  `);
  expect(await run(['content', '-content-["hello_world"]', 'content-["hello_world"]/foo'])).toEqual(
    '',
  );
});

it('forced-color-adjust', async () => {
  expect(await run(['forced-color-adjust-none', 'forced-color-adjust-auto']))
    .toMatchInlineSnapshot(`
    ".forced-color-adjust-auto {
      forced-color-adjust: auto;
    }

    .forced-color-adjust-none {
      forced-color-adjust: none;
    }"
  `);
  expect(
    await run([
      'forced',
      'forced-color',
      'forced-color-adjust',
      '-forced-color-adjust-none',
      '-forced-color-adjust-auto',
      'forced-color-adjust-none/foo',
      'forced-color-adjust-auto/foo',
    ]),
  ).toEqual('');
});

it('leading', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --leading-tight: 1.25;
          --leading-6: 1.5rem;
        }
        @tailwind utilities;
      `,
      ['leading-tight', 'leading-6', 'leading-[var(--value)]'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-leading: initial;
        }
      }
    }

    :root, :host {
      --leading-tight: 1.25;
      --leading-6: 1.5rem;
    }

    .leading-6 {
      --tw-leading: var(--leading-6);
      line-height: var(--leading-6);
    }

    .leading-\\[var\\(--value\\)\\] {
      --tw-leading: var(--value);
      line-height: var(--value);
    }

    .leading-tight {
      --tw-leading: var(--leading-tight);
      line-height: var(--leading-tight);
    }

    @property --tw-leading {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      'leading',
      '-leading-tight',
      '-leading-6',
      '-leading-[var(--value)]',
      'leading-tight/foo',
      'leading-6/foo',
      'leading-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('tracking', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --tracking-normal: 0em;
          --tracking-wide: 0.025em;
        }
        @tailwind utilities;
      `,
      ['tracking-normal', 'tracking-wide', 'tracking-[var(--value)]', '-tracking-[var(--value)]'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-tracking: initial;
        }
      }
    }

    :root, :host {
      --tracking-normal: 0em;
      --tracking-wide: .025em;
    }

    .-tracking-\\[var\\(--value\\)\\] {
      --tw-tracking: calc(var(--value) * -1);
      letter-spacing: calc(var(--value) * -1);
    }

    .tracking-\\[var\\(--value\\)\\] {
      --tw-tracking: var(--value);
      letter-spacing: var(--value);
    }

    .tracking-normal {
      --tw-tracking: var(--tracking-normal);
      letter-spacing: var(--tracking-normal);
    }

    .tracking-wide {
      --tw-tracking: var(--tracking-wide);
      letter-spacing: var(--tracking-wide);
    }

    @property --tw-tracking {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      'tracking',
      'tracking-normal/foo',
      'tracking-wide/foo',
      'tracking-[var(--value)]/foo',
      '-tracking-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('font-smoothing', async () => {
  expect(await run(['antialiased', 'subpixel-antialiased'])).toMatchInlineSnapshot(`
    ".antialiased {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .subpixel-antialiased {
      -webkit-font-smoothing: auto;
      -moz-osx-font-smoothing: auto;
    }"
  `);
  expect(
    await run([
      '-antialiased',
      '-subpixel-antialiased',
      'antialiased/foo',
      'subpixel-antialiased/foo',
    ]),
  ).toEqual('');
});

it('font-variant-numeric', async () => {
  expect(
    await run([
      'normal-nums',
      'ordinal',
      'slashed-zero',
      'lining-nums',
      'oldstyle-nums',
      'proportional-nums',
      'tabular-nums',
      'diagonal-fractions',
      'stacked-fractions',
    ]),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-ordinal: initial;
          --tw-slashed-zero: initial;
          --tw-numeric-figure: initial;
          --tw-numeric-spacing: initial;
          --tw-numeric-fraction: initial;
        }
      }
    }

    .diagonal-fractions {
      --tw-numeric-fraction: diagonal-fractions;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .lining-nums {
      --tw-numeric-figure: lining-nums;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .oldstyle-nums {
      --tw-numeric-figure: oldstyle-nums;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .ordinal {
      --tw-ordinal: ordinal;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .proportional-nums {
      --tw-numeric-spacing: proportional-nums;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .slashed-zero {
      --tw-slashed-zero: slashed-zero;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .stacked-fractions {
      --tw-numeric-fraction: stacked-fractions;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .tabular-nums {
      --tw-numeric-spacing: tabular-nums;
      font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );
    }

    .normal-nums {
      font-variant-numeric: normal;
    }

    @property --tw-ordinal {
      syntax: "*";
      inherits: false
    }

    @property --tw-slashed-zero {
      syntax: "*";
      inherits: false
    }

    @property --tw-numeric-figure {
      syntax: "*";
      inherits: false
    }

    @property --tw-numeric-spacing {
      syntax: "*";
      inherits: false
    }

    @property --tw-numeric-fraction {
      syntax: "*";
      inherits: false
    }"
  `);
  expect(
    await run([
      '-normal-nums',
      '-ordinal',
      '-slashed-zero',
      '-lining-nums',
      '-oldstyle-nums',
      '-proportional-nums',
      '-tabular-nums',
      '-diagonal-fractions',
      '-stacked-fractions',
      'normal-nums/foo',
      'ordinal/foo',
      'slashed-zero/foo',
      'lining-nums/foo',
      'oldstyle-nums/foo',
      'proportional-nums/foo',
      'tabular-nums/foo',
      'diagonal-fractions/foo',
      'stacked-fractions/foo',
    ]),
  ).toEqual('');
});

it('outline', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        'outline',
        'outline-hidden',

        // outline-style
        'outline-none',
        'outline-solid',
        'outline-dashed',
        'outline-dotted',
        'outline-double',

        // outline-color
        'outline-red-500',
        'outline-red-500/50',
        'outline-red-500/[0.5]',
        'outline-red-500/[50%]',
        'outline-current',
        'outline-current/50',
        'outline-current/[0.5]',
        'outline-current/[50%]',
        'outline-inherit',
        'outline-transparent',
        'outline-[#0088cc]',
        'outline-[#0088cc]/50',
        'outline-[#0088cc]/[0.5]',
        'outline-[#0088cc]/[50%]',
        'outline-[black]',
        'outline-[black]/50',
        'outline-[black]/[0.5]',
        'outline-[black]/[50%]',
        'outline-[var(--value)]',
        'outline-[var(--value)]/50',
        'outline-[var(--value)]/[0.5]',
        'outline-[var(--value)]/[50%]',
        'outline-[color:var(--value)]',
        'outline-[color:var(--value)]/50',
        'outline-[color:var(--value)]/[0.5]',
        'outline-[color:var(--value)]/[50%]',

        // outline-width
        'outline-0',
        'outline-[1.5]',
        'outline-[12px]',
        'outline-[50%]',
        'outline-[number:var(--my-width)]',
        'outline-[length:var(--my-width)]',
        'outline-[percentage:var(--my-width)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-outline-style: solid;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .outline-hidden {
      --tw-outline-style: none;
      outline-style: none;
    }

    @media (forced-colors: active) {
      .outline-hidden {
        outline-offset: 2px;
        outline: 2px solid #0000;
      }
    }

    .outline {
      outline-style: var(--tw-outline-style);
      outline-width: 1px;
    }

    .outline-0 {
      outline-style: var(--tw-outline-style);
      outline-width: 0;
    }

    .outline-\\[1\\.5\\] {
      outline-style: var(--tw-outline-style);
      outline-width: 1.5px;
    }

    .outline-\\[12px\\] {
      outline-style: var(--tw-outline-style);
      outline-width: 12px;
    }

    .outline-\\[50\\%\\] {
      outline-style: var(--tw-outline-style);
      outline-width: 50%;
    }

    .outline-\\[length\\:var\\(--my-width\\)\\], .outline-\\[number\\:var\\(--my-width\\)\\], .outline-\\[percentage\\:var\\(--my-width\\)\\] {
      outline-style: var(--tw-outline-style);
      outline-width: var(--my-width);
    }

    .outline-\\[\\#0088cc\\] {
      outline-color: #08c;
    }

    .outline-\\[\\#0088cc\\]\\/50, .outline-\\[\\#0088cc\\]\\/\\[0\\.5\\], .outline-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      outline-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .outline-\\[black\\] {
      outline-color: #000;
    }

    .outline-\\[black\\]\\/50 {
      outline-color: oklab(0% none none / .5);
    }

    .outline-\\[black\\]\\/\\[0\\.5\\] {
      outline-color: oklab(0% none none / .5);
    }

    .outline-\\[black\\]\\/\\[50\\%\\] {
      outline-color: oklab(0% none none / .5);
    }

    .outline-\\[color\\:var\\(--value\\)\\], .outline-\\[color\\:var\\(--value\\)\\]\\/50 {
      outline-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-\\[color\\:var\\(--value\\)\\]\\/50 {
        outline-color: color-mix(in oklab, var(--value) 50%, transparent);
      }
    }

    .outline-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
      outline-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
        outline-color: color-mix(in oklab, var(--value) 50%, transparent);
      }
    }

    .outline-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
      outline-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
        outline-color: color-mix(in oklab, var(--value) 50%, transparent);
      }
    }

    .outline-\\[var\\(--value\\)\\], .outline-\\[var\\(--value\\)\\]\\/50 {
      outline-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-\\[var\\(--value\\)\\]\\/50 {
        outline-color: color-mix(in oklab, var(--value) 50%, transparent);
      }
    }

    .outline-\\[var\\(--value\\)\\]\\/\\[0\\.5\\] {
      outline-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-\\[var\\(--value\\)\\]\\/\\[0\\.5\\] {
        outline-color: color-mix(in oklab, var(--value) 50%, transparent);
      }
    }

    .outline-\\[var\\(--value\\)\\]\\/\\[50\\%\\] {
      outline-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-\\[var\\(--value\\)\\]\\/\\[50\\%\\] {
        outline-color: color-mix(in oklab, var(--value) 50%, transparent);
      }
    }

    .outline-current, .outline-current\\/50 {
      outline-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-current\\/50 {
        outline-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .outline-current\\/\\[0\\.5\\] {
      outline-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-current\\/\\[0\\.5\\] {
        outline-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .outline-current\\/\\[50\\%\\] {
      outline-color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-current\\/\\[50\\%\\] {
        outline-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .outline-inherit {
      outline-color: inherit;
    }

    .outline-red-500 {
      outline-color: var(--color-red-500);
    }

    .outline-red-500\\/50 {
      outline-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-red-500\\/50 {
        outline-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .outline-red-500\\/\\[0\\.5\\] {
      outline-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-red-500\\/\\[0\\.5\\] {
        outline-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .outline-red-500\\/\\[50\\%\\] {
      outline-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .outline-red-500\\/\\[50\\%\\] {
        outline-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .outline-transparent {
      outline-color: #0000;
    }

    .outline-dashed {
      --tw-outline-style: dashed;
      outline-style: dashed;
    }

    .outline-dotted {
      --tw-outline-style: dotted;
      outline-style: dotted;
    }

    .outline-double {
      --tw-outline-style: double;
      outline-style: double;
    }

    .outline-none {
      --tw-outline-style: none;
      outline-style: none;
    }

    .outline-solid {
      --tw-outline-style: solid;
      outline-style: solid;
    }

    @property --tw-outline-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --default-outline-width: 2px;
        }
        @tailwind utilities;
      `,
      ['outline'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-outline-style: solid;
        }
      }
    }

    .outline {
      outline-style: var(--tw-outline-style);
      outline-width: 2px;
    }

    @property --tw-outline-style {
      syntax: "*";
      inherits: false;
      initial-value: solid;
    }"
  `);
  expect(
    await run([
      '-outline',

      // outline-style
      '-outline-none',
      '-outline-dashed',
      '-outline-dotted',
      '-outline-double',

      // outline-color
      '-outline-red-500',
      '-outline-red-500/50',
      '-outline-red-500/[0.5]',
      '-outline-red-500/[50%]',
      '-outline-current',
      '-outline-current/50',
      '-outline-current/[0.5]',
      '-outline-current/[50%]',
      '-outline-inherit',
      '-outline-transparent',
      '-outline-[#0088cc]',
      '-outline-[#0088cc]/50',
      '-outline-[#0088cc]/[0.5]',
      '-outline-[#0088cc]/[50%]',
      '-outline-[black]',

      // outline-width
      '-outline-0',
      'outline--10',

      'outline/foo',
      'outline-none/foo',
      'outline-solid/foo',
      'outline-dashed/foo',
      'outline-dotted/foo',
      'outline-double/foo',
    ]),
  ).toEqual('');
});

it('outline-offset', async () => {
  expect(
    await run([
      'outline-offset-4',
      '-outline-offset-4',
      'outline-offset-[var(--value)]',
      '-outline-offset-[var(--value)]',
    ]),
  ).toMatchInlineSnapshot(`
    ".-outline-offset-4 {
      outline-offset: calc(4px * -1);
    }

    .-outline-offset-\\[var\\(--value\\)\\] {
      outline-offset: calc(var(--value) * -1);
    }

    .outline-offset-4 {
      outline-offset: 4px;
    }

    .outline-offset-\\[var\\(--value\\)\\] {
      outline-offset: var(--value);
    }"
  `);
  expect(
    await run([
      'outline-offset',
      'outline-offset--4',
      'outline-offset-unknown',
      'outline-offset-4/foo',
      '-outline-offset-4/foo',
      'outline-offset-[var(--value)]/foo',
      '-outline-offset-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('opacity', async () => {
  expect(
    await run([
      'opacity-15',
      'opacity-2.5',
      'opacity-3.25',
      'opacity-4.75',
      'opacity-[var(--value)]',
    ]),
  ).toMatchInlineSnapshot(`
    ".opacity-2\\.5 {
      opacity: .025;
    }

    .opacity-3\\.25 {
      opacity: .0325;
    }

    .opacity-4\\.75 {
      opacity: .0475;
    }

    .opacity-15 {
      opacity: .15;
    }

    .opacity-\\[var\\(--value\\)\\] {
      opacity: var(--value);
    }"
  `);
  expect(
    await run([
      'opacity',
      'opacity--15',
      'opacity-1.125',
      '-opacity-15',
      '-opacity-[var(--value)]',
      'opacity-unknown',
      'opacity-15/foo',
      'opacity-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('underline-offset', async () => {
  expect(
    await compileCss(
      css`
        @theme {
        }
        @tailwind utilities;
      `,
      [
        'underline-offset-auto',
        'underline-offset-4',
        '-underline-offset-4',
        'underline-offset-123',
        '-underline-offset-123',
        'underline-offset-[var(--value)]',
        '-underline-offset-[var(--value)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ".-underline-offset-4 {
      text-underline-offset: calc(4px * -1);
    }

    .-underline-offset-123 {
      text-underline-offset: calc(123px * -1);
    }

    .-underline-offset-\\[var\\(--value\\)\\] {
      text-underline-offset: calc(var(--value) * -1);
    }

    .underline-offset-4 {
      text-underline-offset: 4px;
    }

    .underline-offset-123 {
      text-underline-offset: 123px;
    }

    .underline-offset-\\[var\\(--value\\)\\] {
      text-underline-offset: var(--value);
    }

    .underline-offset-auto {
      text-underline-offset: auto;
    }"
  `);
  expect(
    await run([
      'underline-offset',
      'underline-offset--4',
      '-underline-offset-auto',
      'underline-offset-unknown',
      'underline-offset-auto/foo',
      'underline-offset-4/foo',
      '-underline-offset-4/foo',
      'underline-offset-123/foo',
      '-underline-offset-123/foo',
      'underline-offset-[var(--value)]/foo',
      '-underline-offset-[var(--value)]/foo',
    ]),
  ).toEqual('');
});

it('text', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --spacing: 0.25rem;
          --color-red-500: #ef4444;
          --text-sm: 0.875rem;
          --text-sm--line-height: 1.25rem;
          --leading-snug: 1.375;
        }
        @tailwind utilities;
      `,
      [
        // color
        'text-red-500',
        'text-red-500/50',
        'text-red-500/2.25',
        'text-red-500/2.5',
        'text-red-500/2.75',
        'text-red-500/[0.5]',
        'text-red-500/[50%]',
        'text-current',
        'text-current/50',
        'text-current/[0.5]',
        'text-current/[50%]',
        'text-inherit',
        'text-transparent',
        'text-[#0088cc]',
        'text-[#0088cc]/50',
        'text-[#0088cc]/[0.5]',
        'text-[#0088cc]/[50%]',

        'text-[var(--my-color)]',
        'text-[var(--my-color)]/50',
        'text-[var(--my-color)]/[0.5]',
        'text-[var(--my-color)]/[50%]',
        'text-[color:var(--my-color)]',
        'text-[color:var(--my-color)]/50',
        'text-[color:var(--my-color)]/[0.5]',
        'text-[color:var(--my-color)]/[50%]',

        // font-size / line-height / letter-spacing / font-weight
        'text-sm',
        'text-sm/6',
        'text-sm/none',
        'text-[10px]/none',
        'text-sm/snug',
        'text-sm/[4px]',
        'text-[12px]',
        'text-[12px]/6',
        'text-[50%]',
        'text-[50%]/6',
        'text-[xx-large]',
        'text-[xx-large]/6',
        'text-[larger]',
        'text-[larger]/6',
        'text-[length:var(--my-size)]',
        'text-[percentage:var(--my-size)]',
        'text-[absolute-size:var(--my-size)]',
        'text-[relative-size:var(--my-size)]',
        'text-[clamp(1rem,2rem,3rem)]',
        'text-[clamp(1rem,var(--size),3rem)]',
        'text-[clamp(1rem,var(--size),3rem)]/9',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --spacing: .25rem;
      --color-red-500: #ef4444;
      --text-sm: .875rem;
      --text-sm--line-height: 1.25rem;
      --leading-snug: 1.375;
    }

    .text-\\[10px\\]\\/none {
      font-size: 10px;
      line-height: 1;
    }

    .text-\\[12px\\]\\/6 {
      font-size: 12px;
      line-height: calc(var(--spacing) * 6);
    }

    .text-\\[50\\%\\]\\/6 {
      font-size: 50%;
      line-height: calc(var(--spacing) * 6);
    }

    .text-\\[clamp\\(1rem\\,var\\(--size\\)\\,3rem\\)\\]\\/9 {
      font-size: clamp(1rem, var(--size), 3rem);
      line-height: calc(var(--spacing) * 9);
    }

    .text-\\[larger\\]\\/6 {
      font-size: larger;
      line-height: calc(var(--spacing) * 6);
    }

    .text-\\[xx-large\\]\\/6 {
      font-size: xx-large;
      line-height: calc(var(--spacing) * 6);
    }

    .text-sm {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }

    .text-sm\\/6 {
      font-size: var(--text-sm);
      line-height: calc(var(--spacing) * 6);
    }

    .text-sm\\/\\[4px\\] {
      font-size: var(--text-sm);
      line-height: 4px;
    }

    .text-sm\\/none {
      font-size: var(--text-sm);
      line-height: 1;
    }

    .text-sm\\/snug {
      font-size: var(--text-sm);
      line-height: var(--leading-snug);
    }

    .text-\\[12px\\] {
      font-size: 12px;
    }

    .text-\\[50\\%\\] {
      font-size: 50%;
    }

    .text-\\[absolute-size\\:var\\(--my-size\\)\\] {
      font-size: var(--my-size);
    }

    .text-\\[clamp\\(1rem\\,2rem\\,3rem\\)\\] {
      font-size: 2rem;
    }

    .text-\\[clamp\\(1rem\\,var\\(--size\\)\\,3rem\\)\\] {
      font-size: clamp(1rem, var(--size), 3rem);
    }

    .text-\\[larger\\] {
      font-size: larger;
    }

    .text-\\[length\\:var\\(--my-size\\)\\], .text-\\[percentage\\:var\\(--my-size\\)\\], .text-\\[relative-size\\:var\\(--my-size\\)\\] {
      font-size: var(--my-size);
    }

    .text-\\[xx-large\\] {
      font-size: xx-large;
    }

    .text-\\[\\#0088cc\\] {
      color: #08c;
    }

    .text-\\[\\#0088cc\\]\\/50, .text-\\[\\#0088cc\\]\\/\\[0\\.5\\], .text-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      color: oklab(59.9824% -.067 -.124 / .5);
    }

    .text-\\[color\\:var\\(--my-color\\)\\], .text-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .text-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .text-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .text-\\[var\\(--my-color\\)\\], .text-\\[var\\(--my-color\\)\\]\\/50 {
      color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-\\[var\\(--my-color\\)\\]\\/50 {
        color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .text-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .text-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .text-current, .text-current\\/50 {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-current\\/50 {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .text-current\\/\\[0\\.5\\] {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-current\\/\\[0\\.5\\] {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .text-current\\/\\[50\\%\\] {
      color: currentColor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-current\\/\\[50\\%\\] {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .text-inherit {
      color: inherit;
    }

    .text-red-500 {
      color: var(--color-red-500);
    }

    .text-red-500\\/2\\.5 {
      color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-red-500\\/2\\.5 {
        color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .text-red-500\\/2\\.25 {
      color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-red-500\\/2\\.25 {
        color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .text-red-500\\/2\\.75 {
      color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-red-500\\/2\\.75 {
        color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .text-red-500\\/50 {
      color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-red-500\\/50 {
        color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .text-red-500\\/\\[0\\.5\\] {
      color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-red-500\\/\\[0\\.5\\] {
        color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .text-red-500\\/\\[50\\%\\] {
      color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-red-500\\/\\[50\\%\\] {
        color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .text-transparent {
      color: #0000;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme inline reference {
          --text-sm: 0.875rem;
        }
        @tailwind utilities;
      `,
      [
        'text',
        // color
        '-text-red-500',
        '-text-red-500/50',
        '-text-red-500/[0.5]',
        '-text-red-500/[50%]',
        '-text-current',
        '-text-current/50',
        '-text-current/[0.5]',
        '-text-current/[50%]',
        '-text-inherit',
        '-text-transparent',
        '-text-[#0088cc]',
        '-text-[#0088cc]/50',
        '-text-[#0088cc]/[0.5]',
        '-text-[#0088cc]/[50%]',

        // font-size / line-height / letter-spacing / font-weight
        '-text-sm',
        '-text-sm/6',
        'text-sm/foo',
        '-text-sm/[4px]',
        'text-[10px]/foo',
      ],
    ),
  ).toEqual('');
});

it('text-shadow', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
          --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.1);
          --text-shadow-sm: 0px 1px 2px rgb(0 0 0 / 0.06), 0px 2px 2px rgb(0 0 0 / 0.06);
        }
        @tailwind utilities;
      `,
      [
        // Shadows
        'text-shadow-2xs',
        'text-shadow-sm',
        'text-shadow-none',
        'text-shadow-[12px_12px_#0088cc]',
        'text-shadow-[12px_12px_var(--value)]',
        'text-shadow-[10px_10px]',
        'text-shadow-[var(--value)]',
        'text-shadow-[shadow:var(--value)]',

        'text-shadow-sm/25',
        'text-shadow-[12px_12px_#0088cc]/25',
        'text-shadow-[12px_12px_var(--value)]/25',
        'text-shadow-[10px_10px]/25',

        // Colors
        'text-shadow-red-500',
        'text-shadow-red-500/50',
        'text-shadow-red-500/2.25',
        'text-shadow-red-500/2.5',
        'text-shadow-red-500/2.75',
        'text-shadow-red-500/[0.5]',
        'text-shadow-red-500/[50%]',
        'text-shadow-current',
        'text-shadow-current/50',
        'text-shadow-current/[0.5]',
        'text-shadow-current/[50%]',
        'text-shadow-inherit',
        'text-shadow-transparent',
        'text-shadow-[#0088cc]',
        'text-shadow-[#0088cc]/50',
        'text-shadow-[#0088cc]/[0.5]',
        'text-shadow-[#0088cc]/[50%]',
        'text-shadow-[color:var(--value)]',
        'text-shadow-[color:var(--value)]/50',
        'text-shadow-[color:var(--value)]/[0.5]',
        'text-shadow-[color:var(--value)]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-text-shadow-color: initial;
          --tw-text-shadow-alpha: 100%;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .text-shadow-\\[12px_12px_var\\(--value\\)\\]\\/25 {
      --tw-text-shadow-alpha: 25%;
      text-shadow: 12px 12px var(--tw-text-shadow-color, var(--value));
    }

    @supports (color: lab(from red l a b)) {
      .text-shadow-\\[12px_12px_var\\(--value\\)\\]\\/25 {
        text-shadow: 12px 12px var(--tw-text-shadow-color, oklab(from var(--value) l a b / 25%));
      }
    }

    .text-shadow-\\[10px_10px\\]\\/25 {
      --tw-text-shadow-alpha: 25%;
      text-shadow: 10px 10px var(--tw-text-shadow-color, currentcolor);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[10px_10px\\]\\/25 {
        text-shadow: 10px 10px var(--tw-text-shadow-color, color-mix(in oklab, currentcolor 25%, transparent));
      }
    }

    .text-shadow-\\[12px_12px_\\#0088cc\\]\\/25 {
      --tw-text-shadow-alpha: 25%;
      text-shadow: 12px 12px var(--tw-text-shadow-color, oklab(59.9824% -.067 -.124 / .25));
    }

    .text-shadow-sm\\/25 {
      --tw-text-shadow-alpha: 25%;
      text-shadow: 0px 1px 2px var(--tw-text-shadow-color, oklab(0% 0 0 / .25)), 0px 2px 2px var(--tw-text-shadow-color, oklab(0% 0 0 / .25));
    }

    .text-shadow-2xs {
      text-shadow: 0px 1px 0px var(--tw-text-shadow-color, #0000001a);
    }

    .text-shadow-\\[\\#0088cc\\] {
      --tw-text-shadow-color: #08c;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[\\#0088cc\\] {
        --tw-text-shadow-color: color-mix(in oklab, #08c var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[\\#0088cc\\]\\/50 {
      --tw-text-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[\\#0088cc\\]\\/50 {
        --tw-text-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[\\#0088cc\\]\\/\\[0\\.5\\] {
      --tw-text-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[\\#0088cc\\]\\/\\[0\\.5\\] {
        --tw-text-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-text-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[\\#0088cc\\]\\/\\[50\\%\\] {
        --tw-text-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[10px_10px\\] {
      text-shadow: 10px 10px var(--tw-text-shadow-color, currentcolor);
    }

    .text-shadow-\\[12px_12px_\\#0088cc\\] {
      text-shadow: 12px 12px var(--tw-text-shadow-color, #08c);
    }

    .text-shadow-\\[12px_12px_var\\(--value\\)\\] {
      text-shadow: 12px 12px var(--tw-text-shadow-color, var(--value));
    }

    .text-shadow-\\[color\\:var\\(--value\\)\\] {
      --tw-text-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[color\\:var\\(--value\\)\\] {
        --tw-text-shadow-color: color-mix(in oklab, var(--value) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[color\\:var\\(--value\\)\\]\\/50 {
      --tw-text-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[color\\:var\\(--value\\)\\]\\/50 {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
      --tw-text-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
      --tw-text-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-\\[shadow\\:var\\(--value\\)\\], .text-shadow-\\[var\\(--value\\)\\] {
      text-shadow: var(--value);
    }

    .text-shadow-current {
      --tw-text-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-current {
        --tw-text-shadow-color: color-mix(in oklab, currentcolor var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-current\\/50 {
      --tw-text-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-current\\/50 {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-current\\/\\[0\\.5\\] {
      --tw-text-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-current\\/\\[0\\.5\\] {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-current\\/\\[50\\%\\] {
      --tw-text-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-current\\/\\[50\\%\\] {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-inherit {
      --tw-text-shadow-color: inherit;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-inherit {
        --tw-text-shadow-color: color-mix(in oklab, inherit var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-none {
      text-shadow: none;
    }

    .text-shadow-red-500 {
      --tw-text-shadow-color: #ef4444;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500 {
        --tw-text-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-red-500\\/2\\.5 {
      --tw-text-shadow-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500\\/2\\.5 {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.5%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-red-500\\/2\\.25 {
      --tw-text-shadow-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500\\/2\\.25 {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.25%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-red-500\\/2\\.75 {
      --tw-text-shadow-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500\\/2\\.75 {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.75%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-red-500\\/50 {
      --tw-text-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500\\/50 {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-red-500\\/\\[0\\.5\\] {
      --tw-text-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500\\/\\[0\\.5\\] {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-red-500\\/\\[50\\%\\] {
      --tw-text-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-red-500\\/\\[50\\%\\] {
        --tw-text-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-text-shadow-alpha), transparent);
      }
    }

    .text-shadow-sm {
      text-shadow: 0px 1px 2px var(--tw-text-shadow-color, #0000000f), 0px 2px 2px var(--tw-text-shadow-color, #0000000f);
    }

    .text-shadow-transparent {
      --tw-text-shadow-color: transparent;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .text-shadow-transparent {
        --tw-text-shadow-color: color-mix(in oklab, transparent var(--tw-text-shadow-alpha), transparent);
      }
    }

    @property --tw-text-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-text-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }"
  `);
  expect(
    await run([
      '-shadow-xl',
      '-shadow-none',
      '-shadow-red-500',
      '-shadow-red-500/50',
      '-shadow-red-500/[0.5]',
      '-shadow-red-500/[50%]',
      '-shadow-current',
      '-shadow-current/50',
      '-shadow-current/[0.5]',
      '-shadow-current/[50%]',
      '-shadow-inherit',
      '-shadow-transparent',
      '-shadow-[#0088cc]',
      '-shadow-[#0088cc]/50',
      '-shadow-[#0088cc]/[0.5]',
      '-shadow-[#0088cc]/[50%]',
      '-shadow-[var(--value)]',
    ]),
  ).toEqual('');
});

it('shadow', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
          --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        @tailwind utilities;
      `,
      [
        // Shadows
        'shadow-sm',
        'shadow-xl',
        'shadow-none',
        'shadow-[12px_12px_#0088cc]',
        'shadow-[12px_12px_var(--value)]',
        'shadow-[10px_10px]',
        'shadow-[var(--value)]',
        'shadow-[shadow:var(--value)]',

        'shadow-sm/25',
        'shadow-[12px_12px_#0088cc]/25',
        'shadow-[12px_12px_var(--value)]/25',
        'shadow-[10px_10px]/25',

        // Colors
        'shadow-red-500',
        'shadow-red-500/50',
        'shadow-red-500/2.25',
        'shadow-red-500/2.5',
        'shadow-red-500/2.75',
        'shadow-red-500/[0.5]',
        'shadow-red-500/[50%]',
        'shadow-current',
        'shadow-current/50',
        'shadow-current/[0.5]',
        'shadow-current/[50%]',
        'shadow-inherit',
        'shadow-transparent',
        'shadow-[#0088cc]',
        'shadow-[#0088cc]/50',
        'shadow-[#0088cc]/[0.5]',
        'shadow-[#0088cc]/[50%]',
        'shadow-[color:var(--value)]',
        'shadow-[color:var(--value)]/50',
        'shadow-[color:var(--value)]/[0.5]',
        'shadow-[color:var(--value)]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-color: initial;
          --tw-shadow-alpha: 100%;
          --tw-inset-shadow: 0 0 #0000;
          --tw-inset-shadow-color: initial;
          --tw-inset-shadow-alpha: 100%;
          --tw-ring-color: initial;
          --tw-ring-shadow: 0 0 #0000;
          --tw-inset-ring-color: initial;
          --tw-inset-ring-shadow: 0 0 #0000;
          --tw-ring-inset: initial;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-offset-shadow: 0 0 #0000;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .shadow-\\[12px_12px_var\\(--value\\)\\]\\/25 {
      --tw-shadow-alpha: 25%;
      --tw-shadow: 12px 12px var(--tw-shadow-color, var(--value));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    @supports (color: lab(from red l a b)) {
      .shadow-\\[12px_12px_var\\(--value\\)\\]\\/25 {
        --tw-shadow: 12px 12px var(--tw-shadow-color, oklab(from var(--value) l a b / 25%));
      }
    }

    .shadow-\\[10px_10px\\]\\/25 {
      --tw-shadow-alpha: 25%;
      --tw-shadow: 10px 10px var(--tw-shadow-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[10px_10px\\]\\/25 {
        --tw-shadow: 10px 10px var(--tw-shadow-color, color-mix(in oklab, currentcolor 25%, transparent));
      }
    }

    .shadow-\\[12px_12px_\\#0088cc\\]\\/25 {
      --tw-shadow-alpha: 25%;
      --tw-shadow: 12px 12px var(--tw-shadow-color, oklab(59.9824% -.067 -.124 / .25));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-sm\\/25 {
      --tw-shadow-alpha: 25%;
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, oklab(0% 0 0 / .25)), 0 1px 2px -1px var(--tw-shadow-color, oklab(0% 0 0 / .25));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-\\[10px_10px\\] {
      --tw-shadow: 10px 10px var(--tw-shadow-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-\\[12px_12px_\\#0088cc\\] {
      --tw-shadow: 12px 12px var(--tw-shadow-color, #08c);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-\\[12px_12px_var\\(--value\\)\\] {
      --tw-shadow: 12px 12px var(--tw-shadow-color, var(--value));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-\\[shadow\\:var\\(--value\\)\\], .shadow-\\[var\\(--value\\)\\] {
      --tw-shadow: var(--value);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-none {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-sm {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-xl {
      --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .shadow-\\[\\#0088cc\\] {
      --tw-shadow-color: #08c;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[\\#0088cc\\] {
        --tw-shadow-color: color-mix(in oklab, #08c var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[\\#0088cc\\]\\/50 {
      --tw-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[\\#0088cc\\]\\/50 {
        --tw-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[\\#0088cc\\]\\/\\[0\\.5\\] {
      --tw-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[\\#0088cc\\]\\/\\[0\\.5\\] {
        --tw-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[\\#0088cc\\]\\/\\[50\\%\\] {
        --tw-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[color\\:var\\(--value\\)\\] {
      --tw-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[color\\:var\\(--value\\)\\] {
        --tw-shadow-color: color-mix(in oklab, var(--value) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[color\\:var\\(--value\\)\\]\\/50 {
      --tw-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[color\\:var\\(--value\\)\\]\\/50 {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
      --tw-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
      --tw-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-current {
      --tw-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-current {
        --tw-shadow-color: color-mix(in oklab, currentcolor var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-current\\/50 {
      --tw-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-current\\/50 {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-current\\/\\[0\\.5\\] {
      --tw-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-current\\/\\[0\\.5\\] {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-current\\/\\[50\\%\\] {
      --tw-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-current\\/\\[50\\%\\] {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-inherit {
      --tw-shadow-color: inherit;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-inherit {
        --tw-shadow-color: color-mix(in oklab, inherit var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500 {
      --tw-shadow-color: #ef4444;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500 {
        --tw-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500\\/2\\.5 {
      --tw-shadow-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500\\/2\\.5 {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.5%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500\\/2\\.25 {
      --tw-shadow-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500\\/2\\.25 {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.25%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500\\/2\\.75 {
      --tw-shadow-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500\\/2\\.75 {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.75%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500\\/50 {
      --tw-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500\\/50 {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500\\/\\[0\\.5\\] {
      --tw-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500\\/\\[0\\.5\\] {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-red-500\\/\\[50\\%\\] {
      --tw-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-red-500\\/\\[50\\%\\] {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }

    .shadow-transparent {
      --tw-shadow-color: transparent;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .shadow-transparent {
        --tw-shadow-color: color-mix(in oklab, transparent var(--tw-shadow-alpha), transparent);
      }
    }

    @property --tw-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-inset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-ring-inset {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-offset-width {
      syntax: "<length>";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-ring-offset-color {
      syntax: "*";
      inherits: false;
      initial-value: #fff;
    }

    @property --tw-ring-offset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }"
  `);
  expect(
    await run([
      '-shadow-xl',
      '-shadow-none',
      '-shadow-red-500',
      '-shadow-red-500/50',
      '-shadow-red-500/[0.5]',
      '-shadow-red-500/[50%]',
      '-shadow-current',
      '-shadow-current/50',
      '-shadow-current/[0.5]',
      '-shadow-current/[50%]',
      '-shadow-inherit',
      '-shadow-transparent',
      '-shadow-[#0088cc]',
      '-shadow-[#0088cc]/50',
      '-shadow-[#0088cc]/[0.5]',
      '-shadow-[#0088cc]/[50%]',
      '-shadow-[var(--value)]',
    ]),
  ).toEqual('');
});

it('inset-shadow', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
          --inset-shadow: inset 0 2px 4px rgb(0 0 0 / 0.05);
          --inset-shadow-sm: inset 0 1px 1px rgb(0 0 0 / 0.05);
        }
        @tailwind utilities;
      `,
      [
        // Shadows
        'inset-shadow',
        'inset-shadow-sm',
        'inset-shadow-none',
        'inset-shadow-[12px_12px_#0088cc]',
        'inset-shadow-[12px_12px_var(--value)]',
        'inset-shadow-[10px_10px]',
        'inset-shadow-[var(--value)]',
        'inset-shadow-[shadow:var(--value)]',
        'inset-shadow-[12px_12px_#0088cc,12px_12px_var(--value,#0088cc)]',

        'inset-shadow-sm/25',
        'inset-shadow-[12px_12px_#0088cc]/25',
        'inset-shadow-[12px_12px_var(--value)]/25',
        'inset-shadow-[10px_10px]/25',
        'inset-shadow-[12px_12px_#0088cc,12px_12px_var(--value,#0088cc)]/25',

        // Colors
        'inset-shadow-red-500',
        'inset-shadow-red-500/50',
        'inset-shadow-red-500/2.25',
        'inset-shadow-red-500/2.5',
        'inset-shadow-red-500/2.75',
        'inset-shadow-red-500/[0.5]',
        'inset-shadow-red-500/[50%]',
        'inset-shadow-current',
        'inset-shadow-current/50',
        'inset-shadow-current/[0.5]',
        'inset-shadow-current/[50%]',
        'inset-shadow-inherit',
        'inset-shadow-transparent',
        'inset-shadow-[#0088cc]',
        'inset-shadow-[#0088cc]/50',
        'inset-shadow-[#0088cc]/[0.5]',
        'inset-shadow-[#0088cc]/[50%]',
        'inset-shadow-[color:var(--value)]',
        'inset-shadow-[color:var(--value)]/50',
        'inset-shadow-[color:var(--value)]/[0.5]',
        'inset-shadow-[color:var(--value)]/[50%]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-color: initial;
          --tw-shadow-alpha: 100%;
          --tw-inset-shadow: 0 0 #0000;
          --tw-inset-shadow-color: initial;
          --tw-inset-shadow-alpha: 100%;
          --tw-ring-color: initial;
          --tw-ring-shadow: 0 0 #0000;
          --tw-inset-ring-color: initial;
          --tw-inset-ring-shadow: 0 0 #0000;
          --tw-ring-inset: initial;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-offset-shadow: 0 0 #0000;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .inset-shadow-\\[12px_12px_\\#0088cc\\,12px_12px_var\\(--value\\,\\#0088cc\\)\\]\\/25 {
      --tw-inset-shadow-alpha: 25%;
      --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, #08c), inset 12px 12px var(--tw-inset-shadow-color, var(--value, #08c));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    @supports (color: lab(from red l a b)) {
      .inset-shadow-\\[12px_12px_\\#0088cc\\,12px_12px_var\\(--value\\,\\#0088cc\\)\\]\\/25 {
        --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, oklab(59.9824% -.067 -.124 / .25)), inset 12px 12px var(--tw-inset-shadow-color, oklab(from var(--value, #08c) l a b / 25%));
      }
    }

    .inset-shadow-\\[12px_12px_var\\(--value\\)\\]\\/25 {
      --tw-inset-shadow-alpha: 25%;
      --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, var(--value));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    @supports (color: lab(from red l a b)) {
      .inset-shadow-\\[12px_12px_var\\(--value\\)\\]\\/25 {
        --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, oklab(from var(--value) l a b / 25%));
      }
    }

    .inset-shadow-\\[10px_10px\\]\\/25 {
      --tw-inset-shadow-alpha: 25%;
      --tw-inset-shadow: inset 10px 10px var(--tw-inset-shadow-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[10px_10px\\]\\/25 {
        --tw-inset-shadow: inset 10px 10px var(--tw-inset-shadow-color, color-mix(in oklab, currentcolor 25%, transparent));
      }
    }

    .inset-shadow-\\[12px_12px_\\#0088cc\\]\\/25 {
      --tw-inset-shadow-alpha: 25%;
      --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, oklab(59.9824% -.067 -.124 / .25));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-sm\\/25 {
      --tw-inset-shadow-alpha: 25%;
      --tw-inset-shadow: inset 0 1px 1px var(--tw-inset-shadow-color, oklab(0% 0 0 / .25));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow {
      --tw-inset-shadow: inset 0 2px 4px var(--tw-inset-shadow-color, #0000000d);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-\\[10px_10px\\] {
      --tw-inset-shadow: inset 10px 10px var(--tw-inset-shadow-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-\\[12px_12px_\\#0088cc\\,12px_12px_var\\(--value\\,\\#0088cc\\)\\] {
      --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, #08c), inset 12px 12px var(--tw-inset-shadow-color, var(--value, #08c));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-\\[12px_12px_\\#0088cc\\] {
      --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, #08c);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-\\[12px_12px_var\\(--value\\)\\] {
      --tw-inset-shadow: inset 12px 12px var(--tw-inset-shadow-color, var(--value));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-\\[shadow\\:var\\(--value\\)\\], .inset-shadow-\\[var\\(--value\\)\\] {
      --tw-inset-shadow: inset var(--value);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-none {
      --tw-inset-shadow: 0 0 #0000;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-sm {
      --tw-inset-shadow: inset 0 1px 1px var(--tw-inset-shadow-color, #0000000d);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-shadow-\\[\\#0088cc\\] {
      --tw-inset-shadow-color: #08c;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[\\#0088cc\\] {
        --tw-inset-shadow-color: color-mix(in oklab, #08c var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[\\#0088cc\\]\\/50 {
      --tw-inset-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[\\#0088cc\\]\\/50 {
        --tw-inset-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[\\#0088cc\\]\\/\\[0\\.5\\] {
      --tw-inset-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[\\#0088cc\\]\\/\\[0\\.5\\] {
        --tw-inset-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-inset-shadow-color: #0088cc80;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[\\#0088cc\\]\\/\\[50\\%\\] {
        --tw-inset-shadow-color: color-mix(in oklab, oklab(59.9824% -.067 -.124 / .5) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[color\\:var\\(--value\\)\\] {
      --tw-inset-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[color\\:var\\(--value\\)\\] {
        --tw-inset-shadow-color: color-mix(in oklab, var(--value) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[color\\:var\\(--value\\)\\]\\/50 {
      --tw-inset-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[color\\:var\\(--value\\)\\]\\/50 {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
      --tw-inset-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[0\\.5\\] {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
      --tw-inset-shadow-color: var(--value);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-\\[color\\:var\\(--value\\)\\]\\/\\[50\\%\\] {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--value) 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-current {
      --tw-inset-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-current {
        --tw-inset-shadow-color: color-mix(in oklab, currentcolor var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-current\\/50 {
      --tw-inset-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-current\\/50 {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-current\\/\\[0\\.5\\] {
      --tw-inset-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-current\\/\\[0\\.5\\] {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-current\\/\\[50\\%\\] {
      --tw-inset-shadow-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-current\\/\\[50\\%\\] {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, currentcolor 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-inherit {
      --tw-inset-shadow-color: inherit;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-inherit {
        --tw-inset-shadow-color: color-mix(in oklab, inherit var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500 {
      --tw-inset-shadow-color: #ef4444;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500 {
        --tw-inset-shadow-color: color-mix(in oklab, var(--color-red-500) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500\\/2\\.5 {
      --tw-inset-shadow-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500\\/2\\.5 {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.5%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500\\/2\\.25 {
      --tw-inset-shadow-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500\\/2\\.25 {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.25%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500\\/2\\.75 {
      --tw-inset-shadow-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500\\/2\\.75 {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 2.75%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500\\/50 {
      --tw-inset-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500\\/50 {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500\\/\\[0\\.5\\] {
      --tw-inset-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500\\/\\[0\\.5\\] {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-red-500\\/\\[50\\%\\] {
      --tw-inset-shadow-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-red-500\\/\\[50\\%\\] {
        --tw-inset-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-red-500) 50%, transparent) var(--tw-inset-shadow-alpha), transparent);
      }
    }

    .inset-shadow-transparent {
      --tw-inset-shadow-color: transparent;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-shadow-transparent {
        --tw-inset-shadow-color: color-mix(in oklab, transparent var(--tw-inset-shadow-alpha), transparent);
      }
    }

    @property --tw-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-inset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-ring-inset {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-offset-width {
      syntax: "<length>";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-ring-offset-color {
      syntax: "*";
      inherits: false;
      initial-value: #fff;
    }

    @property --tw-ring-offset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }"
  `);
  expect(
    await run([
      '-inset-shadow-sm',
      '-inset-shadow-none',
      '-inset-shadow-red-500',
      '-inset-shadow-red-500/50',
      '-inset-shadow-red-500/[0.5]',
      '-inset-shadow-red-500/[50%]',
      '-inset-shadow-current',
      '-inset-shadow-current/50',
      '-inset-shadow-current/[0.5]',
      '-inset-shadow-current/[50%]',
      '-inset-shadow-inherit',
      '-inset-shadow-transparent',
      '-inset-shadow-[#0088cc]',
      '-inset-shadow-[#0088cc]/50',
      '-inset-shadow-[#0088cc]/[0.5]',
      '-inset-shadow-[#0088cc]/[50%]',
      '-inset-shadow-[var(--value)]',
    ]),
  ).toEqual('');
});

it('ring', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // ring color
        'ring-inset',
        'ring-red-500',
        'ring-red-500/50',
        'ring-red-500/2.25',
        'ring-red-500/2.5',
        'ring-red-500/2.75',
        'ring-red-500/[0.5]',
        'ring-red-500/[50%]',
        'ring-current',
        'ring-current/50',
        'ring-current/[0.5]',
        'ring-current/[50%]',
        'ring-inherit',
        'ring-transparent',
        'ring-[#0088cc]',
        'ring-[#0088cc]/50',
        'ring-[#0088cc]/[0.5]',
        'ring-[#0088cc]/[50%]',
        'ring-[var(--my-color)]',
        'ring-[var(--my-color)]/50',
        'ring-[var(--my-color)]/[0.5]',
        'ring-[var(--my-color)]/[50%]',
        'ring-[color:var(--my-color)]',
        'ring-[color:var(--my-color)]/50',
        'ring-[color:var(--my-color)]/[0.5]',
        'ring-[color:var(--my-color)]/[50%]',

        // ring width
        'ring',
        'ring-0',
        'ring-1',
        'ring-2',
        'ring-4',
        'ring-[12px]',
        'ring-[length:var(--my-width)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-color: initial;
          --tw-shadow-alpha: 100%;
          --tw-inset-shadow: 0 0 #0000;
          --tw-inset-shadow-color: initial;
          --tw-inset-shadow-alpha: 100%;
          --tw-ring-color: initial;
          --tw-ring-shadow: 0 0 #0000;
          --tw-inset-ring-color: initial;
          --tw-inset-ring-shadow: 0 0 #0000;
          --tw-ring-inset: initial;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-offset-shadow: 0 0 #0000;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .ring {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-0 {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-1 {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-2 {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-4 {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-\\[12px\\] {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(12px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-\\[length\\:var\\(--my-width\\)\\] {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(var(--my-width)  + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .ring-\\[\\#0088cc\\] {
      --tw-ring-color: #08c;
    }

    .ring-\\[\\#0088cc\\]\\/50, .ring-\\[\\#0088cc\\]\\/\\[0\\.5\\], .ring-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-ring-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .ring-\\[color\\:var\\(--my-color\\)\\], .ring-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      --tw-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        --tw-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-\\[var\\(--my-color\\)\\], .ring-\\[var\\(--my-color\\)\\]\\/50 {
      --tw-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-\\[var\\(--my-color\\)\\]\\/50 {
        --tw-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-current, .ring-current\\/50 {
      --tw-ring-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-current\\/50 {
        --tw-ring-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .ring-current\\/\\[0\\.5\\] {
      --tw-ring-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-current\\/\\[0\\.5\\] {
        --tw-ring-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .ring-current\\/\\[50\\%\\] {
      --tw-ring-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-current\\/\\[50\\%\\] {
        --tw-ring-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .ring-inherit {
      --tw-ring-color: inherit;
    }

    .ring-red-500 {
      --tw-ring-color: var(--color-red-500);
    }

    .ring-red-500\\/2\\.5 {
      --tw-ring-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-red-500\\/2\\.5 {
        --tw-ring-color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .ring-red-500\\/2\\.25 {
      --tw-ring-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-red-500\\/2\\.25 {
        --tw-ring-color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .ring-red-500\\/2\\.75 {
      --tw-ring-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-red-500\\/2\\.75 {
        --tw-ring-color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .ring-red-500\\/50 {
      --tw-ring-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-red-500\\/50 {
        --tw-ring-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .ring-red-500\\/\\[0\\.5\\] {
      --tw-ring-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-red-500\\/\\[0\\.5\\] {
        --tw-ring-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .ring-red-500\\/\\[50\\%\\] {
      --tw-ring-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-red-500\\/\\[50\\%\\] {
        --tw-ring-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .ring-transparent {
      --tw-ring-color: transparent;
    }

    .ring-inset {
      --tw-ring-inset: inset;
    }

    @property --tw-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-inset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-ring-inset {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-offset-width {
      syntax: "<length>";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-ring-offset-color {
      syntax: "*";
      inherits: false;
      initial-value: #fff;
    }

    @property --tw-ring-offset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }"
  `);
  expect(
    await compileCss(
      css`
        @theme {
          --default-ring-width: 2px;
        }
        @tailwind utilities;
      `,
      ['ring'],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-color: initial;
          --tw-shadow-alpha: 100%;
          --tw-inset-shadow: 0 0 #0000;
          --tw-inset-shadow-color: initial;
          --tw-inset-shadow-alpha: 100%;
          --tw-ring-color: initial;
          --tw-ring-shadow: 0 0 #0000;
          --tw-inset-ring-color: initial;
          --tw-inset-ring-shadow: 0 0 #0000;
          --tw-ring-inset: initial;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-offset-shadow: 0 0 #0000;
        }
      }
    }

    .ring {
      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    @property --tw-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-inset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-ring-inset {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-offset-width {
      syntax: "<length>";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-ring-offset-color {
      syntax: "*";
      inherits: false;
      initial-value: #fff;
    }

    @property --tw-ring-offset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }"
  `);
  expect(
    await run([
      // ring color
      '-ring-inset',
      '-ring-red-500',
      '-ring-red-500/50',
      '-ring-red-500/[0.5]',
      '-ring-red-500/[50%]',
      '-ring-current',
      '-ring-current/50',
      '-ring-current/[0.5]',
      '-ring-current/[50%]',
      '-ring-inherit',
      '-ring-transparent',
      '-ring-[#0088cc]',
      '-ring-[#0088cc]/50',
      '-ring-[#0088cc]/[0.5]',
      '-ring-[#0088cc]/[50%]',

      // ring width
      '-ring',
      'ring--1',
      '-ring-0',
      '-ring-1',
      '-ring-2',
      '-ring-4',

      'ring/foo',
      'ring-0/foo',
      'ring-1/foo',
      'ring-2/foo',
      'ring-4/foo',
      'ring-[12px]/foo',
      'ring-[length:var(--my-width)]/foo',
    ]),
  ).toEqual('');
});

it('inset-ring', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // ring color
        'inset-ring-red-500',
        'inset-ring-red-500/50',
        'inset-ring-red-500/2.25',
        'inset-ring-red-500/2.5',
        'inset-ring-red-500/2.75',
        'inset-ring-red-500/[0.5]',
        'inset-ring-red-500/[50%]',
        'inset-ring-current',
        'inset-ring-current/50',
        'inset-ring-current/[0.5]',
        'inset-ring-current/[50%]',
        'inset-ring-inherit',
        'inset-ring-transparent',
        'inset-ring-[#0088cc]',
        'inset-ring-[#0088cc]/50',
        'inset-ring-[#0088cc]/[0.5]',
        'inset-ring-[#0088cc]/[50%]',
        'inset-ring-[var(--my-color)]',
        'inset-ring-[var(--my-color)]/50',
        'inset-ring-[var(--my-color)]/[0.5]',
        'inset-ring-[var(--my-color)]/[50%]',
        'inset-ring-[color:var(--my-color)]',
        'inset-ring-[color:var(--my-color)]/50',
        'inset-ring-[color:var(--my-color)]/[0.5]',
        'inset-ring-[color:var(--my-color)]/[50%]',

        // ring width
        'inset-ring',
        'inset-ring-0',
        'inset-ring-1',
        'inset-ring-2',
        'inset-ring-4',
        'inset-ring-[12px]',
        'inset-ring-[length:var(--my-width)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-color: initial;
          --tw-shadow-alpha: 100%;
          --tw-inset-shadow: 0 0 #0000;
          --tw-inset-shadow-color: initial;
          --tw-inset-shadow-alpha: 100%;
          --tw-ring-color: initial;
          --tw-ring-shadow: 0 0 #0000;
          --tw-inset-ring-color: initial;
          --tw-inset-ring-shadow: 0 0 #0000;
          --tw-ring-inset: initial;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-offset-shadow: 0 0 #0000;
        }
      }
    }

    :root, :host {
      --color-red-500: #ef4444;
    }

    .inset-ring {
      --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-0 {
      --tw-inset-ring-shadow: inset 0 0 0 0px var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-1 {
      --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-2 {
      --tw-inset-ring-shadow: inset 0 0 0 2px var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-4 {
      --tw-inset-ring-shadow: inset 0 0 0 4px var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-\\[12px\\] {
      --tw-inset-ring-shadow: inset 0 0 0 12px var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-\\[length\\:var\\(--my-width\\)\\] {
      --tw-inset-ring-shadow: inset 0 0 0 var(--my-width) var(--tw-inset-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }

    .inset-ring-\\[\\#0088cc\\] {
      --tw-inset-ring-color: #08c;
    }

    .inset-ring-\\[\\#0088cc\\]\\/50, .inset-ring-\\[\\#0088cc\\]\\/\\[0\\.5\\], .inset-ring-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-inset-ring-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .inset-ring-\\[color\\:var\\(--my-color\\)\\], .inset-ring-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      --tw-inset-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        --tw-inset-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .inset-ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-inset-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-inset-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .inset-ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-inset-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-inset-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .inset-ring-\\[var\\(--my-color\\)\\], .inset-ring-\\[var\\(--my-color\\)\\]\\/50 {
      --tw-inset-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-\\[var\\(--my-color\\)\\]\\/50 {
        --tw-inset-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .inset-ring-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-inset-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-inset-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .inset-ring-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-inset-ring-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-inset-ring-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .inset-ring-current, .inset-ring-current\\/50 {
      --tw-inset-ring-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-current\\/50 {
        --tw-inset-ring-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .inset-ring-current\\/\\[0\\.5\\] {
      --tw-inset-ring-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-current\\/\\[0\\.5\\] {
        --tw-inset-ring-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .inset-ring-current\\/\\[50\\%\\] {
      --tw-inset-ring-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-current\\/\\[50\\%\\] {
        --tw-inset-ring-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .inset-ring-inherit {
      --tw-inset-ring-color: inherit;
    }

    .inset-ring-red-500 {
      --tw-inset-ring-color: var(--color-red-500);
    }

    .inset-ring-red-500\\/2\\.5 {
      --tw-inset-ring-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-red-500\\/2\\.5 {
        --tw-inset-ring-color: color-mix(in oklab, var(--color-red-500) 2.5%, transparent);
      }
    }

    .inset-ring-red-500\\/2\\.25 {
      --tw-inset-ring-color: #ef444406;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-red-500\\/2\\.25 {
        --tw-inset-ring-color: color-mix(in oklab, var(--color-red-500) 2.25%, transparent);
      }
    }

    .inset-ring-red-500\\/2\\.75 {
      --tw-inset-ring-color: #ef444407;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-red-500\\/2\\.75 {
        --tw-inset-ring-color: color-mix(in oklab, var(--color-red-500) 2.75%, transparent);
      }
    }

    .inset-ring-red-500\\/50 {
      --tw-inset-ring-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-red-500\\/50 {
        --tw-inset-ring-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .inset-ring-red-500\\/\\[0\\.5\\] {
      --tw-inset-ring-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-red-500\\/\\[0\\.5\\] {
        --tw-inset-ring-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .inset-ring-red-500\\/\\[50\\%\\] {
      --tw-inset-ring-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .inset-ring-red-500\\/\\[50\\%\\] {
        --tw-inset-ring-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .inset-ring-transparent {
      --tw-inset-ring-color: transparent;
    }

    @property --tw-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-inset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-shadow-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-shadow-alpha {
      syntax: "<percentage>";
      inherits: false;
      initial-value: 100%;
    }

    @property --tw-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-inset-ring-color {
      syntax: "*";
      inherits: false
    }

    @property --tw-inset-ring-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }

    @property --tw-ring-inset {
      syntax: "*";
      inherits: false
    }

    @property --tw-ring-offset-width {
      syntax: "<length>";
      inherits: false;
      initial-value: 0;
    }

    @property --tw-ring-offset-color {
      syntax: "*";
      inherits: false;
      initial-value: #fff;
    }

    @property --tw-ring-offset-shadow {
      syntax: "*";
      inherits: false;
      initial-value: 0 0 #0000;
    }"
  `);
  expect(
    await run([
      // ring color
      '-inset-ring-red-500',
      '-inset-ring-red-500/50',
      '-inset-ring-red-500/[0.5]',
      '-inset-ring-red-500/[50%]',
      '-inset-ring-current',
      '-inset-ring-current/50',
      '-inset-ring-current/[0.5]',
      '-inset-ring-current/[50%]',
      '-inset-ring-inherit',
      '-inset-ring-transparent',
      '-inset-ring-[#0088cc]',
      '-inset-ring-[#0088cc]/50',
      '-inset-ring-[#0088cc]/[0.5]',
      '-inset-ring-[#0088cc]/[50%]',

      // ring width
      '-inset-ring',
      'inset-ring--1',
      '-inset-ring-0',
      '-inset-ring-1',
      '-inset-ring-2',
      '-inset-ring-4',

      'inset-ring/foo',
      'inset-ring-0/foo',
      'inset-ring-1/foo',
      'inset-ring-2/foo',
      'inset-ring-4/foo',
      'inset-ring-[12px]/foo',
      'inset-ring-[length:var(--my-width)]/foo',
    ]),
  ).toEqual('');
});

it('ring-offset', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --color-red-500: #ef4444;
        }
        @tailwind utilities;
      `,
      [
        // ring color
        'ring-offset-inset',
        'ring-offset-red-500',
        'ring-offset-red-500/50',
        'ring-offset-red-500/[0.5]',
        'ring-offset-red-500/[50%]',
        'ring-offset-current',
        'ring-offset-current/50',
        'ring-offset-current/[0.5]',
        'ring-offset-current/[50%]',
        'ring-offset-inherit',
        'ring-offset-transparent',
        'ring-offset-[#0088cc]',
        'ring-offset-[#0088cc]/50',
        'ring-offset-[#0088cc]/[0.5]',
        'ring-offset-[#0088cc]/[50%]',

        'ring-offset-[var(--my-color)]',
        'ring-offset-[var(--my-color)]/50',
        'ring-offset-[var(--my-color)]/[0.5]',
        'ring-offset-[var(--my-color)]/[50%]',
        'ring-offset-[color:var(--my-color)]',
        'ring-offset-[color:var(--my-color)]/50',
        'ring-offset-[color:var(--my-color)]/[0.5]',
        'ring-offset-[color:var(--my-color)]/[50%]',

        // ring width
        'ring-offset-0',
        'ring-offset-1',
        'ring-offset-2',
        'ring-offset-4',
        'ring-offset-[12px]',
        'ring-offset-[length:var(--my-width)]',
      ],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --color-red-500: #ef4444;
    }

    .ring-offset-0 {
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }

    .ring-offset-1 {
      --tw-ring-offset-width: 1px;
      --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }

    .ring-offset-2 {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }

    .ring-offset-4 {
      --tw-ring-offset-width: 4px;
      --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }

    .ring-offset-\\[12px\\] {
      --tw-ring-offset-width: 12px;
      --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }

    .ring-offset-\\[length\\:var\\(--my-width\\)\\] {
      --tw-ring-offset-width: var(--my-width);
      --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }

    .ring-offset-\\[\\#0088cc\\] {
      --tw-ring-offset-color: #08c;
    }

    .ring-offset-\\[\\#0088cc\\]\\/50, .ring-offset-\\[\\#0088cc\\]\\/\\[0\\.5\\], .ring-offset-\\[\\#0088cc\\]\\/\\[50\\%\\] {
      --tw-ring-offset-color: oklab(59.9824% -.067 -.124 / .5);
    }

    .ring-offset-\\[color\\:var\\(--my-color\\)\\], .ring-offset-\\[color\\:var\\(--my-color\\)\\]\\/50 {
      --tw-ring-offset-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-\\[color\\:var\\(--my-color\\)\\]\\/50 {
        --tw-ring-offset-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-offset-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-ring-offset-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-\\[color\\:var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-ring-offset-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-offset-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-ring-offset-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-\\[color\\:var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-ring-offset-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-offset-\\[var\\(--my-color\\)\\], .ring-offset-\\[var\\(--my-color\\)\\]\\/50 {
      --tw-ring-offset-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-\\[var\\(--my-color\\)\\]\\/50 {
        --tw-ring-offset-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-offset-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
      --tw-ring-offset-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-\\[var\\(--my-color\\)\\]\\/\\[0\\.5\\] {
        --tw-ring-offset-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-offset-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
      --tw-ring-offset-color: var(--my-color);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-\\[var\\(--my-color\\)\\]\\/\\[50\\%\\] {
        --tw-ring-offset-color: color-mix(in oklab, var(--my-color) 50%, transparent);
      }
    }

    .ring-offset-current, .ring-offset-current\\/50 {
      --tw-ring-offset-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-current\\/50 {
        --tw-ring-offset-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .ring-offset-current\\/\\[0\\.5\\] {
      --tw-ring-offset-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-current\\/\\[0\\.5\\] {
        --tw-ring-offset-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .ring-offset-current\\/\\[50\\%\\] {
      --tw-ring-offset-color: currentcolor;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-current\\/\\[50\\%\\] {
        --tw-ring-offset-color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }

    .ring-offset-inherit {
      --tw-ring-offset-color: inherit;
    }

    .ring-offset-red-500 {
      --tw-ring-offset-color: var(--color-red-500);
    }

    .ring-offset-red-500\\/50 {
      --tw-ring-offset-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-red-500\\/50 {
        --tw-ring-offset-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .ring-offset-red-500\\/\\[0\\.5\\] {
      --tw-ring-offset-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-red-500\\/\\[0\\.5\\] {
        --tw-ring-offset-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .ring-offset-red-500\\/\\[50\\%\\] {
      --tw-ring-offset-color: #ef444480;
    }

    @supports (color: color-mix(in lab, red, red)) {
      .ring-offset-red-500\\/\\[50\\%\\] {
        --tw-ring-offset-color: color-mix(in oklab, var(--color-red-500) 50%, transparent);
      }
    }

    .ring-offset-transparent {
      --tw-ring-offset-color: transparent;
    }"
  `);
  expect(
    await run([
      'ring-offset',
      // ring color
      '-ring-offset-inset',
      '-ring-offset-red-500',
      '-ring-offset-red-500/50',
      '-ring-offset-red-500/[0.5]',
      '-ring-offset-red-500/[50%]',
      '-ring-offset-current',
      '-ring-offset-current/50',
      '-ring-offset-current/[0.5]',
      '-ring-offset-current/[50%]',
      '-ring-offset-inherit',
      '-ring-offset-transparent',
      '-ring-offset-[#0088cc]',
      '-ring-offset-[#0088cc]/50',
      '-ring-offset-[#0088cc]/[0.5]',
      '-ring-offset-[#0088cc]/[50%]',

      // ring width
      'ring-offset--1',
      '-ring-offset-0',
      '-ring-offset-1',
      '-ring-offset-2',
      '-ring-offset-4',

      'ring-offset-0/foo',
      'ring-offset-1/foo',
      'ring-offset-2/foo',
      'ring-offset-4/foo',
      'ring-offset-[12px]/foo',
      'ring-offset-[length:var(--my-width)]/foo',
    ]),
  ).toEqual('');
});

it('@container', async () => {
  expect(
    await run([
      '@container',
      '@container-normal',
      '@container/sidebar',
      '@container-normal/sidebar',
      '@container-[size]',
      '@container-[size]/sidebar',
    ]),
  ).toMatchInlineSnapshot(`
    ".\\@container-\\[size\\]\\/sidebar {
      container: sidebar / size;
    }

    .\\@container-normal\\/sidebar {
      container: sidebar;
    }

    .\\@container\\/sidebar {
      container: sidebar / inline-size;
    }

    .\\@container {
      container-type: inline-size;
    }

    .\\@container-\\[size\\] {
      container-type: size;
    }

    .\\@container-normal {
      container-type: normal;
    }"
  `);
  expect(
    await run([
      '-@container',
      '-@container-normal',
      '-@container/sidebar',
      '-@container-normal/sidebar',
      '-@container-[size]',
      '-@container-[size]/sidebar',
    ]),
  ).toEqual('');
});

describe('spacing utilities', () => {
  it('`--spacing: initial` disables the spacing multiplier', async () => {
    const { build } = await compile(css`
      @theme {
        --spacing: initial;
        --spacing-4: 1rem;
      }
      @tailwind utilities;
    `);
    const compiled = build(['px-1', 'px-4']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      ":root, :host {
        --spacing-4: 1rem;
      }

      .px-4 {
        padding-inline: var(--spacing-4);
      }"
    `);
  });

  it('`--spacing-*: initial` disables the spacing multiplier', async () => {
    const { build } = await compile(css`
      @theme {
        --spacing-*: initial;
        --spacing-4: 1rem;
      }
      @tailwind utilities;
    `);
    const compiled = build(['px-1', 'px-4']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      ":root, :host {
        --spacing-4: 1rem;
      }

      .px-4 {
        padding-inline: var(--spacing-4);
      }"
    `);
  });

  it('only multiples of 0.25 with no trailing zeroes are supported with the spacing multiplier', async () => {
    const { build } = await compile(css`
      @theme {
        --spacing: 4px;
      }
      @tailwind utilities;
    `);
    const compiled = build(['px-0.25', 'px-1.5', 'px-2.75', 'px-0.375', 'px-2.50', 'px-.75']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      ":root, :host {
        --spacing: 4px;
      }

      .px-0\\.25 {
        padding-inline: calc(var(--spacing) * .25);
      }

      .px-1\\.5 {
        padding-inline: calc(var(--spacing) * 1.5);
      }

      .px-2\\.75 {
        padding-inline: calc(var(--spacing) * 2.75);
      }"
    `);
  });

  it('spacing utilities must have a value', async () => {
    const { build } = await compile(css`
      @theme reference {
        --spacing: 4px;
      }
      @tailwind utilities;
    `);
    const compiled = build(['px']);

    expect(optimizeCss(compiled).trim()).toEqual('');
  });

  it('--spacing-* variables take precedence over --container-* variables', async () => {
    const { build } = await compile(css`
      @theme {
        --spacing-sm: 8px;
        --container-sm: 256px;
      }
      @tailwind utilities;
    `);
    const compiled = build(['w-sm', 'max-w-sm', 'min-w-sm', 'basis-sm']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      ":root, :host {
        --spacing-sm: 8px;
      }

      .w-sm {
        width: var(--spacing-sm);
      }

      .max-w-sm {
        max-width: var(--spacing-sm);
      }

      .min-w-sm {
        min-width: var(--spacing-sm);
      }

      .basis-sm {
        flex-basis: var(--spacing-sm);
      }"
    `);
  });
});

describe('custom utilities', () => {
  it('custom static utility', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @theme reference {
        --breakpoint-lg: 1024px;
      }

      @utility text-trim {
        text-box-trim: both;
        text-box-edge: cap alphabetic;
      }
    `);
    const compiled = build(['text-trim', 'lg:text-trim']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .text-trim {
          text-box-trim: both;
          text-box-edge: cap alphabetic;
        }

        @media (min-width: 1024px) {
          .lg\\:text-trim {
            text-box-trim: both;
            text-box-edge: cap alphabetic;
          }
        }
      }"
    `);
  });

  it('custom static utility emit CSS variables if the utility is used', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @theme {
        --example-foo: 123px;
      }

      @utility foo {
        value: var(--example-foo);
      }
    `);
    let compiled = build([]);

    // `foo` is not used yet:
    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot('"@layer utilities;"');

    // `foo` is used, and the CSS variable is emitted:
    compiled = build(['foo']);
    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .foo {
          value: var(--example-foo);
        }
      }

      :root, :host {
        --example-foo: 123px;
      }"
    `);
  });

  it('custom static utility (negative)', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @utility -example {
        value: -1;
      }
    `);
    const compiled = build(['-example', 'lg:-example']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .-example {
          value: -1;
        }
      }"
    `);
  });

  it('Multiple static utilities are merged', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @utility really-round {
        --custom-prop: hi;
        border-radius: 50rem;
      }

      @utility really-round {
        border-radius: 30rem;
      }
    `);
    const compiled = build(['really-round']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .really-round {
          --custom-prop: hi;
          border-radius: 30rem;
        }
      }"
    `);
  });

  it('custom utilities support some special characters', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @utility push-1/2 {
        right: 50%;
      }

      @utility push-50% {
        right: 50%;
      }
    `);
    const compiled = build(['push-1/2', 'push-50%']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .push-1\\/2, .push-50\\% {
          right: 50%;
        }
      }"
    `);
  });

  it('can override specific versions of a functional utility with a static utility', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @theme reference {
        --text-sm: 0.875rem;
        --text-sm--line-height: 1.25rem;
      }

      @utility text-sm {
        font-size: var(--text-sm, 0.8755rem);
        line-height: var(--text-sm--line-height, 1.255rem);
        text-rendering: optimizeLegibility;
      }
    `);
    const compiled = build(['text-sm']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .text-sm {
          font-size: var(--text-sm, .8755rem);
          line-height: var(--text-sm--line-height, 1.255rem);
          text-rendering: optimizeLegibility;
          font-size: var(--text-sm, .875rem);
          line-height: var(--tw-leading, var(--text-sm--line-height, 1.25rem));
        }
      }"
    `);
  });

  it('can override the default value of a functional utility', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @theme reference {
        --radius-xl: 16px;
      }

      @utility rounded {
        border-radius: 50rem;
      }
    `);
    const compiled = build(['rounded', 'rounded-xl', 'rounded-[33px]']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .rounded {
          border-radius: 50rem;
        }

        .rounded-\\[33px\\] {
          border-radius: 33px;
        }

        .rounded-xl {
          border-radius: var(--radius-xl, 16px);
        }
      }"
    `);
  });

  it('custom utilities are sorted by used properties', async () => {
    const { build } = await compile(css`
      @layer utilities {
        @tailwind utilities;
      }

      @utility push-left {
        right: 100%;
      }
    `);
    const compiled = build(['top-[100px]', 'push-left', 'right-[100px]', 'bottom-[100px]']);

    expect(optimizeCss(compiled).trim()).toMatchInlineSnapshot(`
      "@layer utilities {
        .top-\\[100px\\] {
          top: 100px;
        }

        .push-left {
          right: 100%;
        }

        .right-\\[100px\\] {
          right: 100px;
        }

        .bottom-\\[100px\\] {
          bottom: 100px;
        }
      }"
    `);
  });

  it('custom utilities must use a valid name definitions', async () => {
    await expect(() =>
      compile(css`
        @utility push-| {
          right: 100%;
        }
      `),
    ).rejects.toThrowError(/should be alphanumeric/);

    await expect(() =>
      compile(css`
        @utility ~push {
          right: 100%;
        }
      `),
    ).rejects.toThrowError(/should be alphanumeric/);

    await expect(() =>
      compile(css`
        @utility @push {
          right: 100%;
        }
      `),
    ).rejects.toThrowError(/should be alphanumeric/);
  });

  it('custom utilities work with `@apply`', async () => {
    expect(
      await compileCss(
        css`
          @utility foo {
            @apply flex flex-col underline;
          }

          @utility bar {
            @apply z-10;

            .baz {
              @apply z-20;
            }
          }

          @tailwind utilities;
        `,
        ['foo', 'hover:foo', 'bar'],
      ),
    ).toMatchInlineSnapshot(`
      ".bar {
        z-index: 10;
      }

      .bar .baz {
        z-index: 20;
      }

      .foo {
        flex-direction: column;
        text-decoration-line: underline;
        display: flex;
      }

      @media (hover: hover) {
        .hover\\:foo:hover {
          flex-direction: column;
          text-decoration-line: underline;
          display: flex;
        }
      }"
    `);
  });

  it('referencing custom utilities in custom utilities via `@apply` should work', async () => {
    expect(
      await compileCss(
        css`
          @utility foo {
            @apply flex flex-col underline;
          }

          @utility bar {
            @apply dark:foo flex-wrap;
          }

          @tailwind utilities;
        `,
        ['bar'],
      ),
    ).toMatchInlineSnapshot(`
      ".bar {
        flex-wrap: wrap;
      }

      @media (prefers-color-scheme: dark) {
        .bar {
          flex-direction: column;
          text-decoration-line: underline;
          display: flex;
        }
      }"
    `);
  });

  it('custom utilities with `@apply` causing circular dependencies should error', async () => {
    await expect(() =>
      compileCss(
        css`
          @utility foo {
            @apply flex-wrap hover:bar;
          }

          @utility bar {
            @apply flex dark:foo;
          }

          @tailwind utilities;
        `,
        ['foo', 'bar'],
      ),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '[Error: You cannot `@apply` the `hover:bar` utility here because it creates a circular dependency.]',
    );
  });

  it('custom utilities with `@apply` causing circular dependencies should error (deeply nesting)', async () => {
    await expect(() =>
      compileCss(
        css`
          @utility foo {
            .bar {
              .baz {
                .qux {
                  @apply flex-wrap hover:bar;
                }
              }
            }
          }

          @utility bar {
            .baz {
              .qux {
                @apply flex dark:foo;
              }
            }
          }

          @tailwind utilities;
        `,
        ['foo', 'bar'],
      ),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '[Error: You cannot `@apply` the `hover:bar` utility here because it creates a circular dependency.]',
    );
  });

  it('custom utilities with `@apply` causing circular dependencies should error (multiple levels)', async () => {
    await expect(() =>
      compileCss(
        css`
          body {
            @apply foo;
          }

          @utility foo {
            @apply flex-wrap hover:bar;
          }

          @utility bar {
            @apply flex dark:baz;
          }

          @utility baz {
            @apply flex-wrap hover:foo;
          }

          @tailwind utilities;
        `,
        ['foo', 'bar'],
      ),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '[Error: You cannot `@apply` the `hover:bar` utility here because it creates a circular dependency.]',
    );
  });

  describe('functional utilities', () => {
    it('resolving values from `@theme`', async () => {
      const input = css`
        @theme reference {
          --tab-size-1: 1;
          --tab-size-2: 2;
          --tab-size-4: 4;
          --tab-size-github: 8;
        }

        @utility tab-* {
          tab-size: --value(--tab-size);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['tab-1', 'tab-2', 'tab-4', 'tab-github']))
        .toMatchInlineSnapshot(`
          ".tab-1 {
            tab-size: var(--tab-size-1, 1);
          }

          .tab-2 {
            tab-size: var(--tab-size-2, 2);
          }

          .tab-4 {
            tab-size: var(--tab-size-4, 4);
          }

          .tab-github {
            tab-size: var(--tab-size-github, 8);
          }"
        `);
      expect(await compileCss(input, ['tab-3', 'tab-gitlab'])).toEqual('');
    });

    it('resolving values from `@theme`, with `--tab-size-*` syntax', async () => {
      const input
        // Explicitly not using the css tagged template literal so that
        // Prettier doesn't format the `value(--tab-size-*)` as
        // `value(--tab-size- *)`
        = `
          @theme reference {
            --tab-size-1: 1;
            --tab-size-2: 2;
            --tab-size-4: 4;
            --tab-size-github: 8;
          }

          @utility tab-* {
            tab-size: --value(--tab-size-*);
          }

          @tailwind utilities;
        `;

      expect(await compileCss(input, ['tab-1', 'tab-2', 'tab-4', 'tab-github']))
        .toMatchInlineSnapshot(`
          ".tab-1 {
            tab-size: var(--tab-size-1, 1);
          }

          .tab-2 {
            tab-size: var(--tab-size-2, 2);
          }

          .tab-4 {
            tab-size: var(--tab-size-4, 4);
          }

          .tab-github {
            tab-size: var(--tab-size-github, 8);
          }"
        `);
      expect(await compileCss(input, ['tab-3', 'tab-gitlab'])).toEqual('');
    });

    it('resolving values from `@theme`, with `--tab-size-\\*` syntax (prettier friendly)', async () => {
      const input = css`
        @theme reference {
          --tab-size-1: 1;
          --tab-size-2: 2;
          --tab-size-4: 4;
          --tab-size-github: 8;
        }

        @utility tab-* {
          tab-size: --value(--tab-size-\*);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['tab-1', 'tab-2', 'tab-4', 'tab-github']))
        .toMatchInlineSnapshot(`
          ".tab-1 {
            tab-size: var(--tab-size-1, 1);
          }

          .tab-2 {
            tab-size: var(--tab-size-2, 2);
          }

          .tab-4 {
            tab-size: var(--tab-size-4, 4);
          }

          .tab-github {
            tab-size: var(--tab-size-github, 8);
          }"
        `);
      expect(await compileCss(input, ['tab-3', 'tab-gitlab'])).toEqual('');
    });

    it('resolving bare values', async () => {
      const input = css`
        @utility tab-* {
          tab-size: --value(integer);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['tab-1', 'tab-76', 'tab-971'])).toMatchInlineSnapshot(`
        ".tab-1 {
          tab-size: 1;
        }

        .tab-76 {
          tab-size: 76;
        }

        .tab-971 {
          tab-size: 971;
        }"
      `);
      expect(await compileCss(input, ['tab-foo'])).toEqual('');
    });

    it('bare values with unsupported data types should result in a warning', async () => {
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const input = css`
        @utility paint-* {
          paint: --value([color], color);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['paint-#0088cc', 'paint-red'])).toMatchInlineSnapshot('""');
      expect(spy.mock.calls).toMatchInlineSnapshot(`
        [
          [
            "Unsupported bare value data type: "color".
        Only valid data types are: "number", "integer", "ratio", "percentage".
        ",
          ],
          [
            "\`\`\`css
        --value([color],color)
                        ^^^^^
        \`\`\`",
          ],
        ]
      `);
    });

    it('resolve literal values', async () => {
      const input = css`
        @utility tab-* {
          tab-size: --value('revert');
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['tab-revert'])).toMatchInlineSnapshot(`
        ".tab-revert {
          tab-size: revert;
        }"
      `);
      expect(await compileCss(input, ['tab-initial'])).toEqual('');
    });

    it('resolving bare values with constraints for integer, percentage, and ratio', async () => {
      const input = css`
        @utility example-* {
          --value-as-number: --value(number);
          --value-as-percentage: --value(percentage);
          --value-as-ratio: --value(ratio);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-1', 'example-0.5', 'example-20%', 'example-2/3']))
        .toMatchInlineSnapshot(`
        ".example-0\\.5 {
          --value-as-number: .5;
        }

        .example-1 {
          --value-as-number: 1;
        }

        .example-2\\/3 {
          --value-as-ratio: 2 / 3;
        }

        .example-20\\% {
          --value-as-percentage: 20%;
        }"
      `);
      expect(
        await compileCss(input, [
          'example-1.23',
          'example-12.34%',
          'example-1.2/3',
          'example-1/2.3',
          'example-1.2/3.4',
        ]),
      ).toEqual('');
    });

    it('resolving unsupported bare values', async () => {
      const input = css`
        @utility tab-* {
          tab-size: --value(color);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['tab-#0088cc', 'tab-foo'])).toEqual('');
    });

    it('resolving arbitrary values', async () => {
      const input = css`
        @utility tab-* {
          tab-size: --value([integer]);
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'tab-[1]',
          'tab-[76]',
          'tab-[971]',
          'tab-[integer:var(--my-value)]',
          'tab-(integer:my-value)',
        ]),
      ).toMatchInlineSnapshot(`
        ".tab-\\[1\\] {
          tab-size: 1;
        }

        .tab-\\[76\\] {
          tab-size: 76;
        }

        .tab-\\[971\\] {
          tab-size: 971;
        }

        .tab-\\[integer\\:var\\(--my-value\\)\\] {
          tab-size: var(--my-value);
        }"
      `);
      expect(
        await compileCss(input, [
          'tab-[#0088cc]',
          'tab-[1px]',
          'tab-[var(--my-value)]',
          'tab-(--my-value)',
          'tab-[color:var(--my-value)]',
          'tab-(color:--my-value)',
        ]),
      ).toEqual('');
    });

    it('resolving any arbitrary values', async () => {
      const input = css`
        @utility tab-* {
          tab-size: --value([ *]);
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'tab-[1]',
          'tab-[76]',
          'tab-[971]',
          'tab-[var(--my-value)]',
          'tab-(--my-value)',
        ]),
      ).toMatchInlineSnapshot(`
        ".tab-\\(--my-value\\) {
          tab-size: var(--my-value);
        }

        .tab-\\[1\\] {
          tab-size: 1;
        }

        .tab-\\[76\\] {
          tab-size: 76;
        }

        .tab-\\[971\\] {
          tab-size: 971;
        }

        .tab-\\[var\\(--my-value\\)\\] {
          tab-size: var(--my-value);
        }"
      `);
    });

    it('resolving any arbitrary values (without space)', async () => {
      const input = `
        @utility tab-* {
          tab-size: --value([*]);
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'tab-[1]',
          'tab-[76]',
          'tab-[971]',
          'tab-[var(--my-value)]',
          'tab-(--my-value)',
        ]),
      ).toMatchInlineSnapshot(`
        ".tab-\\(--my-value\\) {
          tab-size: var(--my-value);
        }

        .tab-\\[1\\] {
          tab-size: 1;
        }

        .tab-\\[76\\] {
          tab-size: 76;
        }

        .tab-\\[971\\] {
          tab-size: 971;
        }

        .tab-\\[var\\(--my-value\\)\\] {
          tab-size: var(--my-value);
        }"
      `);
    });

    it('resolving any arbitrary values (with escaped `*`)', async () => {
      const input = css`
        @utility tab-* {
          tab-size: --value([\*]);
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'tab-[1]',
          'tab-[76]',
          'tab-[971]',
          'tab-[var(--my-value)]',
          'tab-(--my-value)',
        ]),
      ).toMatchInlineSnapshot(`
        ".tab-\\(--my-value\\) {
          tab-size: var(--my-value);
        }

        .tab-\\[1\\] {
          tab-size: 1;
        }

        .tab-\\[76\\] {
          tab-size: 76;
        }

        .tab-\\[971\\] {
          tab-size: 971;
        }

        .tab-\\[var\\(--my-value\\)\\] {
          tab-size: var(--my-value);
        }"
      `);
    });

    it('resolving theme, bare and arbitrary values all at once', async () => {
      const input = css`
        @theme reference {
          --tab-size-github: 8;
        }

        @utility tab-* {
          tab-size: --value([integer]);
          tab-size: --value(integer);
          tab-size: --value(--tab-size);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['tab-github', 'tab-76', 'tab-[123]'])).toMatchInlineSnapshot(`
        ".tab-76 {
          tab-size: 76;
        }

        .tab-\\[123\\] {
          tab-size: 123;
        }

        .tab-github {
          tab-size: var(--tab-size-github, 8);
        }"
      `);
      expect(await compileCss(input, ['tab-[#0088cc]', 'tab-[1px]'])).toEqual('');
    });

    it('in combination with calc to produce different data types of values', async () => {
      const input = css`
        @theme reference {
          --example-full: 100%;
        }

        @utility example-* {
          --value: --value([percentage]);
          --value: calc(--value(integer) * 1%);
          --value: --value(--example);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-full', 'example-12', 'example-[20%]']))
        .toMatchInlineSnapshot(`
          ".example-12 {
            --value: calc(12 * 1%);
          }

          .example-\\[20\\%\\] {
            --value: 20%;
          }

          .example-full {
            --value: var(--example-full, 100%);
          }"
        `);
      expect(await compileCss(input, ['example-half', 'example-[#0088cc]'])).toEqual('');
    });

    it('shorthand if resulting values are of the same type', async () => {
      const input = css`
        @theme reference {
          --tab-size-github: 8;
          --example-full: 100%;
        }

        @utility tab-* {
          tab-size: --value(--tab-size, integer, [integer]);
        }

        @utility example-* {
          --value: calc(--value(integer) * 1%);
          --value: --value(--example, [percentage]);
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'tab-github',
          'tab-76',
          'tab-[123]',
          'example-37',
          'example-[50%]',
          'example-full',
        ]),
      ).toMatchInlineSnapshot(`
        ".example-37 {
          --value: calc(37 * 1%);
        }

        .example-\\[50\\%\\] {
          --value: 50%;
        }

        .example-full {
          --value: var(--example-full, 100%);
        }

        .tab-76 {
          tab-size: 76;
        }

        .tab-\\[123\\] {
          tab-size: 123;
        }

        .tab-github {
          tab-size: var(--tab-size-github, 8);
        }"
      `);
      expect(
        await compileCss(input, ['tab-[#0088cc]', 'tab-[1px]', 'example-foo', 'example-[13px]']),
      ).toEqual('');
    });

    it('negative values', async () => {
      const input = css`
        @theme reference {
          --example-full: 100%;
        }

        @utility example-* {
          --value: --value(--example, [percentage], [length]);
        }

        @utility -example-* {
          --value: calc(--value(--example, [percentage], [length]) * -1);
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'example-full',
          '-example-full',
          'example-[10px]',
          '-example-[10px]',
          'example-[20%]',
          '-example-[20%]',
        ]),
      ).toMatchInlineSnapshot(`
        ".-example-\\[10px\\] {
          --value: calc(10px * -1);
        }

        .-example-\\[20\\%\\] {
          --value: calc(20% * -1);
        }

        .-example-full {
          --value: calc(var(--example-full, 100%) * -1);
        }

        .example-\\[10px\\] {
          --value: 10px;
        }

        .example-\\[20\\%\\] {
          --value: 20%;
        }

        .example-full {
          --value: var(--example-full, 100%);
        }"
      `);
      expect(await compileCss(input, ['example-10'])).toEqual('');
    });

    it('using the same value multiple times', async () => {
      const input = css`
        @utility example-* {
          --value: calc(var(--spacing) * --value(number)) calc(var(--spacing) * --value(number));
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-12'])).toMatchInlineSnapshot(`
        ".example-12 {
          --value: calc(var(--spacing) * 12) calc(var(--spacing) * 12);
        }"
      `);
    });

    it('using `--spacing(…)` shorthand', async () => {
      const input = css`
        @theme {
          --spacing: 4px;
        }

        @utility example-* {
          margin: --spacing(--value(number));
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-12'])).toMatchInlineSnapshot(`
        ":root, :host {
          --spacing: 4px;
        }

        .example-12 {
          margin: calc(var(--spacing) * 12);
        }"
      `);
    });

    it('using `--spacing(…)` shorthand (inline theme)', async () => {
      const input = css`
        @theme inline reference {
          --spacing: 4px;
        }

        @utility example-* {
          margin: --spacing(--value(number));
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-12'])).toMatchInlineSnapshot(`
        ".example-12 {
          margin: 48px;
        }"
      `);
    });

    it('modifiers', async () => {
      const input = css`
        @theme reference {
          --value-sm: 14px;
          --modifier-7: 28px;
        }

        @utility example-* {
          --value: --value(--value, [length]);
          --modifier: --modifier(--modifier, [length]);
          --modifier-with-calc: calc(--modifier(--modifier, [length]) * 2);
          --modifier-literals: --modifier('literal', 'literal-2');
        }

        @tailwind utilities;
      `;

      expect(
        await compileCss(input, [
          'example-sm',
          'example-sm/7',
          'example-[12px]',
          'example-[12px]/[16px]',
          'example-sm/literal',
          'example-sm/literal-2',
        ]),
      ).toMatchInlineSnapshot(`
        ".example-\\[12px\\]\\/\\[16px\\] {
          --value: 12px;
          --modifier: 16px;
          --modifier-with-calc: calc(16px * 2);
        }

        .example-sm\\/7 {
          --value: var(--value-sm, 14px);
          --modifier: var(--modifier-7, 28px);
          --modifier-with-calc: calc(var(--modifier-7, 28px) * 2);
        }

        .example-sm\\/literal {
          --value: var(--value-sm, 14px);
          --modifier-literals: literal;
        }

        .example-sm\\/literal-2 {
          --value: var(--value-sm, 14px);
          --modifier-literals: literal-2;
        }

        .example-\\[12px\\] {
          --value: 12px;
        }

        .example-sm {
          --value: var(--value-sm, 14px);
        }"
      `);
      expect(
        await compileCss(input, [
          'example-foo',
          'example-foo/[12px]',
          'example-foo/12',
          'example-sm/unknown-literal',
        ]),
      ).toEqual('');
    });

    it('fractions', async () => {
      const input = css`
        @theme reference {
          --example-video: 16 / 9;
        }

        @utility example-* {
          --value: --value(--example, ratio, [ratio]);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-video', 'example-1/1', 'example-[7/9]']))
        .toMatchInlineSnapshot(`
          ".example-1\\/1 {
            --value: 1 / 1;
          }

          .example-\\[7\\/9\\] {
            --value: 7 / 9;
          }

          .example-video {
            --value: var(--example-video, 16 / 9);
          }"
        `);
      expect(await compileCss(input, ['example-foo'])).toEqual('');
    });

    it('resolve theme values with sub-namespace (--text- * --line-height)', async () => {
      const input = css`
        @theme reference {
          --text-xs: 0.75rem;
          --text-xs--line-height: calc(1 / 0.75);
        }

        @utility example-* {
          font-size: --value(--text);
          line-height: --value(--text- * --line-height);
          line-height: --modifier(number);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-xs', 'example-xs/6'])).toMatchInlineSnapshot(`
        ".example-xs\\/6 {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
          line-height: 6;
        }

        .example-xs {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
        }"
      `);
      expect(await compileCss(input, ['example-foo', 'example-xs/foo'])).toEqual('');
    });

    it('resolve theme values with sub-namespace (--text-\\* --line-height)', async () => {
      const input = css`
        @theme reference {
          --text-xs: 0.75rem;
          --text-xs--line-height: calc(1 / 0.75);
        }

        @utility example-* {
          font-size: --value(--text);
          line-height: --value(--text-\* --line-height);
          line-height: --modifier(number);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-xs', 'example-xs/6'])).toMatchInlineSnapshot(`
        ".example-xs\\/6 {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
          line-height: 6;
        }

        .example-xs {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
        }"
      `);
      expect(await compileCss(input, ['example-foo', 'example-xs/foo'])).toEqual('');
    });

    it('resolve theme values with sub-namespace (--value(--text --line-height))', async () => {
      const input = css`
        @theme reference {
          --text-xs: 0.75rem;
          --text-xs--line-height: calc(1 / 0.75);
        }

        @utility example-* {
          font-size: --value(--text);
          line-height: --value(--text --line-height);
          line-height: --modifier(number);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-xs', 'example-xs/6'])).toMatchInlineSnapshot(`
        ".example-xs\\/6 {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
          line-height: 6;
        }

        .example-xs {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
        }"
      `);
      expect(await compileCss(input, ['example-foo', 'example-xs/foo'])).toEqual('');
    });

    it('resolve theme values with sub-namespace (--value(--text-*--line-height))', async () => {
      const input = `
        @theme reference {
          --text-xs: 0.75rem;
          --text-xs--line-height: calc(1 / 0.75);
        }

        @utility example-* {
          font-size: --value(--text);
          line-height: --value(--text-*--line-height);
          line-height: --modifier(number);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-xs', 'example-xs/6'])).toMatchInlineSnapshot(`
        ".example-xs\\/6 {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
          line-height: 6;
        }

        .example-xs {
          font-size: var(--text-xs, .75rem);
          line-height: var(--text-xs--line-height, calc(1 / .75));
        }"
      `);
      expect(await compileCss(input, ['example-foo', 'example-xs/foo'])).toEqual('');
    });

    it('variables used in `@utility` will not be emitted if the utility is not used', async () => {
      const input = css`
        @theme {
          --example-foo: red;
          --color-red-500: #f00;
        }

        @utility example-* {
          color: var(--color-red-500);
          background-color: --value(--example);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['flex'])).toMatchInlineSnapshot(`
        ".flex {
          display: flex;
        }"
      `);
    });

    it('variables used in `@utility` will be emitted if the utility is used', async () => {
      const input = css`
        @theme {
          --example-foo: red;
          --color-red-500: #f00;
        }

        @utility example-* {
          color: var(--color-red-500);
          background-color: --value(--example);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['example-foo'])).toMatchInlineSnapshot(`
        ":root, :host {
          --example-foo: red;
          --color-red-500: red;
        }

        .example-foo {
          color: var(--color-red-500);
          background-color: var(--example-foo);
        }"
      `);
    });

    // This originated from a bug. Essentially in the second `--mask-right` we
    // call both `--modifier(…)` and `--value(…)`. The moment we processed
    // `--modifier(…)` it deleted the `--mask-right` declaration (expected
    // behavior). But we didn't properly stop so the `--value(…)` was still
    // processed and also tried to remove the `--mask-right` declaration.
    //
    // This test now ensures that we only remove/replace a declaration once.
    it('declaration nodes are only replaced/removed once', async () => {
      const input = css`
        @utility mask-r-* {
          --mask-right: linear-gradient(to left, transparent, black --value(percentage));
          --mask-right: linear-gradient(
            to left,
            transparent calc(var(--spacing) * --modifier(integer)),
            black calc(var(--spacing) * --value(integer))
          );
          mask-image: var(--mask-linear), var(--mask-radial), var(--mask-conic);
        }

        @tailwind utilities;
      `;

      expect(await compileCss(input, ['mask-r-20%'])).toMatchInlineSnapshot(`
        ".mask-r-20\\% {
          --mask-right: linear-gradient(to left, transparent, black 20%);
          -webkit-mask-image: var(--mask-linear), var(--mask-radial), var(--mask-conic);
          -webkit-mask-image: var(--mask-linear), var(--mask-radial), var(--mask-conic);
          mask-image: var(--mask-linear), var(--mask-radial), var(--mask-conic);
        }"
      `);
    });
  });

  it('resolve value based on `@theme`', async () => {
    const input = css`
      @theme {
        --tab-size-github: 8;
      }

      @utility tab-* {
        tab-size: --value(--tab-size);
      }

      @tailwind utilities;
    `;

    expect(await compileCss(input, ['tab-github'])).toMatchInlineSnapshot(`
      ":root, :host {
        --tab-size-github: 8;
      }

      .tab-github {
        tab-size: var(--tab-size-github);
      }"
    `);
  });

  it('resolve value based on `@theme reference`', async () => {
    const input = css`
      @theme reference {
        --tab-size-github: 8;
      }

      @utility tab-* {
        tab-size: --value(--tab-size);
      }

      @tailwind utilities;
    `;

    expect(await compileCss(input, ['tab-github'])).toMatchInlineSnapshot(`
      ".tab-github {
        tab-size: var(--tab-size-github, 8);
      }"
    `);
  });

  it('resolve value based on `@theme inline`', async () => {
    const input = css`
      @theme inline {
        --tab-size-github: 8;
      }

      @utility tab-* {
        tab-size: --value(--tab-size);
      }

      @tailwind utilities;
    `;

    expect(await compileCss(input, ['tab-github'])).toMatchInlineSnapshot(`
      ".tab-github {
        tab-size: 8;
      }"
    `);
  });

  it('resolve value based on `@theme inline reference`', async () => {
    const input = css`
      @theme inline reference {
        --tab-size-github: 8;
      }

      @utility tab-* {
        tab-size: --value(--tab-size);
      }

      @tailwind utilities;
    `;

    expect(await compileCss(input, ['tab-github'])).toMatchInlineSnapshot(`
      ".tab-github {
        tab-size: 8;
      }"
    `);
  });

  it('sub namespaces can live in different @theme blocks (1)', async () => {
    const input = `
      @theme reference {
        --text-xs: 0.75rem;
      }

      @theme inline reference {
        --text-xs--line-height: calc(1 / 0.75);
      }

      @utility example-* {
        font-size: --value(--text);
        line-height: --value(--text-*--line-height);
      }

      @tailwind utilities;
    `;

    expect(await compileCss(input, ['example-xs'])).toMatchInlineSnapshot(`
      ".example-xs {
        font-size: var(--text-xs, .75rem);
        line-height: 1.33333;
      }"
    `);
  });

  it('sub namespaces can live in different @theme blocks (2)', async () => {
    const input = `
      @theme inline reference {
        --text-xs: 0.75rem;
      }

      @theme reference {
        --text-xs--line-height: calc(1 / 0.75);
      }

      @utility example-* {
        font-size: --value(--text);
        line-height: --value(--text-*--line-height);
      }

      @tailwind utilities;
    `;

    expect(await compileCss(input, ['example-xs'])).toMatchInlineSnapshot(`
      ".example-xs {
        font-size: .75rem;
        line-height: var(--text-xs--line-height, calc(1 / .75));
      }"
    `);
  });
});
