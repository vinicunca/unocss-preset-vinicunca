it('rotate-x', async () => {
  const css = await run(['rotate-x-45', '-rotate-x-45', 'rotate-x-[123deg]']);

  expect(css).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-rotate-x: rotateX(0);
          --tw-rotate-y: rotateY(0);
          --tw-rotate-z: rotateZ(0);
          --tw-skew-x: skewX(0);
          --tw-skew-y: skewY(0);
        }
      }
    }

    .-rotate-x-45 {
      --tw-rotate-x: rotateX(calc(45deg * -1));
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .rotate-x-45 {
      --tw-rotate-x: rotateX(45deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .rotate-x-\\[123deg\\] {
      --tw-rotate-x: rotateX(123deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    @property --tw-rotate-x {
      syntax: "*";
      inherits: false;
      initial-value: rotateX(0);
    }

    @property --tw-rotate-y {
      syntax: "*";
      inherits: false;
      initial-value: rotateY(0);
    }

    @property --tw-rotate-z {
      syntax: "*";
      inherits: false;
      initial-value: rotateZ(0);
    }

    @property --tw-skew-x {
      syntax: "*";
      inherits: false;
      initial-value: skewX(0);
    }

    @property --tw-skew-y {
      syntax: "*";
      inherits: false;
      initial-value: skewY(0);
    }"
  `);
});

it('rotate-y', async () => {
  expect(await run(['rotate-y-45', '-rotate-y-45', 'rotate-y-[123deg]', '-rotate-y-[123deg]']))
    .toMatchInlineSnapshot(`
      "@layer properties {
        @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
          *, :before, :after, ::backdrop {
            --tw-rotate-x: rotateX(0);
            --tw-rotate-y: rotateY(0);
            --tw-rotate-z: rotateZ(0);
            --tw-skew-x: skewX(0);
            --tw-skew-y: skewY(0);
          }
        }
      }

      .-rotate-y-45 {
        --tw-rotate-y: rotateY(calc(45deg * -1));
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      .-rotate-y-\\[123deg\\] {
        --tw-rotate-y: rotateY(calc(123deg * -1));
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      .rotate-y-45 {
        --tw-rotate-y: rotateY(45deg);
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      .rotate-y-\\[123deg\\] {
        --tw-rotate-y: rotateY(123deg);
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      @property --tw-rotate-x {
        syntax: "*";
        inherits: false;
        initial-value: rotateX(0);
      }

      @property --tw-rotate-y {
        syntax: "*";
        inherits: false;
        initial-value: rotateY(0);
      }

      @property --tw-rotate-z {
        syntax: "*";
        inherits: false;
        initial-value: rotateZ(0);
      }

      @property --tw-skew-x {
        syntax: "*";
        inherits: false;
        initial-value: skewX(0);
      }

      @property --tw-skew-y {
        syntax: "*";
        inherits: false;
        initial-value: skewY(0);
      }"
    `);
  expect(
    await run([
      'rotate-y',
      'rotate-y--1',
      '-rotate-y',
      'rotate-y-potato',
      'rotate-y-45/foo',
      '-rotate-y-45/foo',
      'rotate-y-[123deg]/foo',
    ]),
  ).toEqual('');
});

it('rotate-z', async () => {
  expect(await run(['rotate-z-45', '-rotate-z-45', 'rotate-z-[123deg]', '-rotate-z-[123deg]']))
    .toMatchInlineSnapshot(`
      "@layer properties {
        @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
          *, :before, :after, ::backdrop {
            --tw-rotate-x: rotateX(0);
            --tw-rotate-y: rotateY(0);
            --tw-rotate-z: rotateZ(0);
            --tw-skew-x: skewX(0);
            --tw-skew-y: skewY(0);
          }
        }
      }

      .-rotate-z-45 {
        --tw-rotate-z: rotateZ(calc(45deg * -1));
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      .-rotate-z-\\[123deg\\] {
        --tw-rotate-z: rotateZ(calc(123deg * -1));
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      .rotate-z-45 {
        --tw-rotate-z: rotateZ(45deg);
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      .rotate-z-\\[123deg\\] {
        --tw-rotate-z: rotateZ(123deg);
        transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
      }

      @property --tw-rotate-x {
        syntax: "*";
        inherits: false;
        initial-value: rotateX(0);
      }

      @property --tw-rotate-y {
        syntax: "*";
        inherits: false;
        initial-value: rotateY(0);
      }

      @property --tw-rotate-z {
        syntax: "*";
        inherits: false;
        initial-value: rotateZ(0);
      }

      @property --tw-skew-x {
        syntax: "*";
        inherits: false;
        initial-value: skewX(0);
      }

      @property --tw-skew-y {
        syntax: "*";
        inherits: false;
        initial-value: skewY(0);
      }"
    `);
  expect(
    await run([
      'rotate-z',
      'rotate-z--1',
      '-rotate-z',
      'rotate-z-potato',
      'rotate-z-45/foo',
      '-rotate-z-45/foo',
      'rotate-z-[123deg]/foo',
    ]),
  ).toEqual('');
});

it('skew', async () => {
  expect(await run(['skew-6', '-skew-6', 'skew-[123deg]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-rotate-x: rotateX(0);
          --tw-rotate-y: rotateY(0);
          --tw-rotate-z: rotateZ(0);
          --tw-skew-x: skewX(0);
          --tw-skew-y: skewY(0);
        }
      }
    }

    .-skew-6 {
      --tw-skew-x: skewX(calc(6deg * -1));
      --tw-skew-y: skewY(calc(6deg * -1));
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .skew-6 {
      --tw-skew-x: skewX(6deg);
      --tw-skew-y: skewY(6deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .skew-\\[123deg\\] {
      --tw-skew-x: skewX(123deg);
      --tw-skew-y: skewY(123deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    @property --tw-rotate-x {
      syntax: "*";
      inherits: false;
      initial-value: rotateX(0);
    }

    @property --tw-rotate-y {
      syntax: "*";
      inherits: false;
      initial-value: rotateY(0);
    }

    @property --tw-rotate-z {
      syntax: "*";
      inherits: false;
      initial-value: rotateZ(0);
    }

    @property --tw-skew-x {
      syntax: "*";
      inherits: false;
      initial-value: skewX(0);
    }

    @property --tw-skew-y {
      syntax: "*";
      inherits: false;
      initial-value: skewY(0);
    }"
  `);
  expect(
    await run([
      'skew',
      'skew--1',
      'skew-unknown',
      'skew-6/foo',
      '-skew-6/foo',
      'skew-[123deg]/foo',
    ]),
  ).toEqual('');
});

it('skew-x', async () => {
  expect(await run(['skew-x-6', '-skew-x-6', 'skew-x-[123deg]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-rotate-x: rotateX(0);
          --tw-rotate-y: rotateY(0);
          --tw-rotate-z: rotateZ(0);
          --tw-skew-x: skewX(0);
          --tw-skew-y: skewY(0);
        }
      }
    }

    .-skew-x-6 {
      --tw-skew-x: skewX(calc(6deg * -1));
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .skew-x-6 {
      --tw-skew-x: skewX(6deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .skew-x-\\[123deg\\] {
      --tw-skew-x: skewX(123deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    @property --tw-rotate-x {
      syntax: "*";
      inherits: false;
      initial-value: rotateX(0);
    }

    @property --tw-rotate-y {
      syntax: "*";
      inherits: false;
      initial-value: rotateY(0);
    }

    @property --tw-rotate-z {
      syntax: "*";
      inherits: false;
      initial-value: rotateZ(0);
    }

    @property --tw-skew-x {
      syntax: "*";
      inherits: false;
      initial-value: skewX(0);
    }

    @property --tw-skew-y {
      syntax: "*";
      inherits: false;
      initial-value: skewY(0);
    }"
  `);
  expect(
    await run([
      'skew-x',
      'skew-x--1',
      'skew-x-unknown',
      'skew-x-6/foo',
      '-skew-x-6/foo',
      'skew-x-[123deg]/foo',
    ]),
  ).toEqual('');
});

it('skew-y', async () => {
  expect(await run(['skew-y-6', '-skew-y-6', 'skew-y-[123deg]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-rotate-x: rotateX(0);
          --tw-rotate-y: rotateY(0);
          --tw-rotate-z: rotateZ(0);
          --tw-skew-x: skewX(0);
          --tw-skew-y: skewY(0);
        }
      }
    }

    .-skew-y-6 {
      --tw-skew-y: skewY(calc(6deg * -1));
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .skew-y-6 {
      --tw-skew-y: skewY(6deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .skew-y-\\[123deg\\] {
      --tw-skew-y: skewY(123deg);
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    @property --tw-rotate-x {
      syntax: "*";
      inherits: false;
      initial-value: rotateX(0);
    }

    @property --tw-rotate-y {
      syntax: "*";
      inherits: false;
      initial-value: rotateY(0);
    }

    @property --tw-rotate-z {
      syntax: "*";
      inherits: false;
      initial-value: rotateZ(0);
    }

    @property --tw-skew-x {
      syntax: "*";
      inherits: false;
      initial-value: skewX(0);
    }

    @property --tw-skew-y {
      syntax: "*";
      inherits: false;
      initial-value: skewY(0);
    }"
  `);
  expect(
    await run([
      'skew-y',
      'skew-y--1',
      'skew-y-unknown',
      'skew-y-6/foo',
      '-skew-y-6/foo',
      'skew-y-[123deg]/foo',
    ]),
  ).toEqual('');
});

it('scale', async () => {
  expect(await run(['scale-50', '-scale-50', 'scale-[2]', 'scale-[2_1.5_3]']))
    .toMatchInlineSnapshot(`
      "@layer properties {
        @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
          *, :before, :after, ::backdrop {
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            --tw-scale-z: 1;
          }
        }
      }

      .-scale-50 {
        --tw-scale-x: calc(50% * -1);
        --tw-scale-y: calc(50% * -1);
        --tw-scale-z: calc(50% * -1);
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }

      .scale-50 {
        --tw-scale-x: 50%;
        --tw-scale-y: 50%;
        --tw-scale-z: 50%;
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }

      .scale-\\[2\\] {
        scale: 2;
      }

      .scale-\\[2_1\\.5_3\\] {
        scale: 2 1.5 3;
      }

      @property --tw-scale-x {
        syntax: "*";
        inherits: false;
        initial-value: 1;
      }

      @property --tw-scale-y {
        syntax: "*";
        inherits: false;
        initial-value: 1;
      }

      @property --tw-scale-z {
        syntax: "*";
        inherits: false;
        initial-value: 1;
      }"
    `);
  expect(
    await run([
      'scale',
      'scale--50',
      'scale-1.5',
      'scale-unknown',
      'scale-50/foo',
      '-scale-50/foo',
      'scale-[2]/foo',
      'scale-[2_1.5_3]/foo',
    ]),
  ).toEqual('');
});

it('scale-3d', async () => {
  expect(await run(['scale-3d'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scale-z: 1;
        }
      }
    }

    .scale-3d {
      scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
    }

    @property --tw-scale-x {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-y {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-z {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }"
  `);
  expect(await run(['-scale-3d', 'scale-3d/foo'])).toEqual('');
});

it('scale-x', async () => {
  expect(await run(['scale-x-50', '-scale-x-50', 'scale-x-[2]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scale-z: 1;
        }
      }
    }

    .-scale-x-50 {
      --tw-scale-x: calc(50% * -1);
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    .scale-x-50 {
      --tw-scale-x: 50%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    .scale-x-\\[2\\] {
      --tw-scale-x: 2;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    @property --tw-scale-x {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-y {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-z {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }"
  `);
  expect(await run(['scale-200', 'scale-x-400'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scale-z: 1;
        }
      }
    }

    .scale-200 {
      --tw-scale-x: 200%;
      --tw-scale-y: 200%;
      --tw-scale-z: 200%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    .scale-x-400 {
      --tw-scale-x: 400%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    @property --tw-scale-x {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-y {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-z {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }"
  `);
  expect(
    await run([
      'scale-x',
      'scale-x--1',
      'scale-x-1.5',
      'scale-x-unknown',
      'scale-200/foo',
      'scale-x-400/foo',
      'scale-x-50/foo',
      '-scale-x-50/foo',
      'scale-x-[2]/foo',
    ]),
  ).toEqual('');
});

it('scale-y', async () => {
  expect(await run(['scale-y-50', '-scale-y-50', 'scale-y-[2]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scale-z: 1;
        }
      }
    }

    .-scale-y-50 {
      --tw-scale-y: calc(50% * -1);
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    .scale-y-50 {
      --tw-scale-y: 50%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    .scale-y-\\[2\\] {
      --tw-scale-y: 2;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }

    @property --tw-scale-x {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-y {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-z {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }"
  `);
  expect(
    await run([
      'scale-y',
      'scale-y--1',
      'scale-y-1.5',
      'scale-y-unknown',
      'scale-y-50/foo',
      '-scale-y-50/foo',
      'scale-y-[2]/foo',
    ]),
  ).toEqual('');
});

it('scale-z', async () => {
  expect(await run(['scale-z-50', '-scale-z-50', 'scale-z-[123deg]'])).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-scale-z: 1;
        }
      }
    }

    .-scale-z-50 {
      --tw-scale-z: calc(50% * -1);
      scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
    }

    .scale-z-50 {
      --tw-scale-z: 50%;
      scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
    }

    .scale-z-\\[123deg\\] {
      --tw-scale-z: 123deg;
      scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);
    }

    @property --tw-scale-x {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-y {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }

    @property --tw-scale-z {
      syntax: "*";
      inherits: false;
      initial-value: 1;
    }"
  `);
  expect(
    await run([
      'scale-z',
      'scale-z--1',
      'scale-z-1.5',
      'scale-z-50/foo',
      '-scale-z-50/foo',
      'scale-z-[123deg]/foo',
    ]),
  ).toEqual('');
});

it('transform', async () => {
  expect(
    await run([
      'transform',
      'transform-cpu',
      'transform-gpu',
      'transform-none',
      'transform-[scaleZ(2)_rotateY(45deg)]',
    ]),
  ).toMatchInlineSnapshot(`
    "@layer properties {
      @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
        *, :before, :after, ::backdrop {
          --tw-rotate-x: rotateX(0);
          --tw-rotate-y: rotateY(0);
          --tw-rotate-z: rotateZ(0);
          --tw-skew-x: skewX(0);
          --tw-skew-y: skewY(0);
        }
      }
    }

    .transform {
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .transform-\\[scaleZ\\(2\\)_rotateY\\(45deg\\)\\] {
      transform: scaleZ(2)rotateY(45deg);
    }

    .transform-cpu {
      transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .transform-gpu {
      transform: translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
    }

    .transform-none {
      transform: none;
    }

    @property --tw-rotate-x {
      syntax: "*";
      inherits: false;
      initial-value: rotateX(0);
    }

    @property --tw-rotate-y {
      syntax: "*";
      inherits: false;
      initial-value: rotateY(0);
    }

    @property --tw-rotate-z {
      syntax: "*";
      inherits: false;
      initial-value: rotateZ(0);
    }

    @property --tw-skew-x {
      syntax: "*";
      inherits: false;
      initial-value: skewX(0);
    }

    @property --tw-skew-y {
      syntax: "*";
      inherits: false;
      initial-value: skewY(0);
    }"
  `);
  expect(
    await run([
      'transform-flat',
      'transform-3d',
      'transform-content',
      'transform-border',
      'transform-fill',
      'transform-stroke',
      'transform-view',
      'backface-visible',
      'backface-hidden',
    ]),
  ).toMatchInlineSnapshot(`
      ".backface-hidden {
        backface-visibility: hidden;
      }

      .backface-visible {
        backface-visibility: visible;
      }

      .transform-3d {
        transform-style: preserve-3d;
      }

      .transform-border {
        transform-box: border-box;
      }

      .transform-content {
        transform-box: content-box;
      }

      .transform-fill {
        transform-box: fill-box;
      }

      .transform-flat {
        transform-style: flat;
      }

      .transform-stroke {
        transform-box: stroke-box;
      }

      .transform-view {
        transform-box: view-box;
      }"
    `);
  expect(
    await run([
      '-transform',
      '-transform-cpu',
      '-transform-gpu',
      '-transform-none',
      'transform/foo',
      'transform-cpu/foo',
      'transform-gpu/foo',
      'transform-none/foo',
      'transform-[scaleZ(2)_rotateY(45deg)]/foo',
      'transform-flat/foo',
      'transform-3d/foo',
      'transform-content/foo',
      'transform-border/foo',
      'transform-fill/foo',
      'transform-stroke/foo',
      'transform-view/foo',
      'backface-visible/foo',
      'backface-hidden/foo',
    ]),
  ).toEqual('');
});

it('perspective', async () => {
  expect(
    await compileCss(
      css`
        @theme {
          --perspective-dramatic: 100px;
          --perspective-normal: 500px;
        }
        @tailwind utilities;
      `,
      ['perspective-normal', 'perspective-dramatic', 'perspective-none', 'perspective-[456px]'],
    ),
  ).toMatchInlineSnapshot(`
    ":root, :host {
      --perspective-dramatic: 100px;
      --perspective-normal: 500px;
    }

    .perspective-\\[456px\\] {
      perspective: 456px;
    }

    .perspective-dramatic {
      perspective: var(--perspective-dramatic);
    }

    .perspective-none {
      perspective: none;
    }

    .perspective-normal {
      perspective: var(--perspective-normal);
    }"
  `);
  expect(
    await run([
      'perspective',
      '-perspective',
      'perspective-potato',
      'perspective-123',
      'perspective-normal/foo',
      'perspective-dramatic/foo',
      'perspective-none/foo',
      'perspective-[456px]/foo',
    ]),
  ).toEqual('');
});
