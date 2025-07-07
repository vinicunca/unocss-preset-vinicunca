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
