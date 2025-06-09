it('place-self', async () => {
  const css = await run([
    'place-self-auto',
    'place-self-start',
    'place-self-end',
    'place-self-end-safe',
    'place-self-center',
    'place-self-center-safe',
    'place-self-stretch',
  ]);

  expect(css).toMatchInlineSnapshot(`
    ".place-self-auto {
      place-self: auto;
    }

    .place-self-center {
      place-self: center;
    }

    .place-self-center-safe {
      place-self: safe center;
    }

    .place-self-end {
      place-self: end;
    }

    .place-self-end-safe {
      place-self: safe end;
    }

    .place-self-start {
      place-self: start;
    }

    .place-self-stretch {
      place-self: stretch stretch;
    }"
  `);
});
