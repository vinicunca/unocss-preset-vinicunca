

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
