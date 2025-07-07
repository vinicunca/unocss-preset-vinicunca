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
