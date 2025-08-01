it('sorts breakpoints based on unit and then in ascending order', async () => {
  const css = await run(['container']);

  expect(
    await compileCss(
      css`
          @theme reference {
            --breakpoint-lg: 64rem;
            --breakpoint-xl: 80rem;
            --breakpoint-3xl: 1600px;
            --breakpoint-sm: 40em;
            --breakpoint-2xl: 96rem;
            --breakpoint-xs: 30px;
            --breakpoint-md: 48em;
          }
          @tailwind utilities;
        `,
      ['container'],
    ),
  ).toMatchInlineSnapshot(`
      ".container {
        width: 100%;
      }

      @media (min-width: 40em) {
        .container {
          max-width: 40em;
        }
      }

      @media (min-width: 48em) {
        .container {
          max-width: 48em;
        }
      }

      @media (min-width: 30px) {
        .container {
          max-width: 30px;
        }
      }

      @media (min-width: 1600px) {
        .container {
          max-width: 1600px;
        }
      }

      @media (min-width: 64rem) {
        .container {
          max-width: 64rem;
        }
      }

      @media (min-width: 80rem) {
        .container {
          max-width: 80rem;
        }
      }

      @media (min-width: 96rem) {
        .container {
          max-width: 96rem;
        }
      }"
    `);
});

it('custom `@utility container` always follow the core utility ', async () => {
  expect(
    await compileCss(
      css`
          @theme {
            --breakpoint-sm: 40rem;
            --breakpoint-md: 48rem;
            --breakpoint-lg: 64rem;
            --breakpoint-xl: 80rem;
            --breakpoint-2xl: 96rem;
          }
          @tailwind utilities;

          @utility container {
            margin-inline: auto;
            padding-inline: 1rem;

            @media (width >= theme(--breakpoint-sm)) {
              padding-inline: 2rem;
            }
          }
        `,
      ['w-1/2', 'container', 'max-w-[var(--breakpoint-sm)]'],
    ),
  ).toMatchInlineSnapshot(`
      ":root, :host {
        --breakpoint-sm: 40rem;
      }

      .container {
        width: 100%;
      }

      @media (min-width: 40rem) {
        .container {
          max-width: 40rem;
        }
      }

      @media (min-width: 48rem) {
        .container {
          max-width: 48rem;
        }
      }

      @media (min-width: 64rem) {
        .container {
          max-width: 64rem;
        }
      }

      @media (min-width: 80rem) {
        .container {
          max-width: 80rem;
        }
      }

      @media (min-width: 96rem) {
        .container {
          max-width: 96rem;
        }
      }

      .container {
        margin-inline: auto;
        padding-inline: 1rem;
      }

      @media (min-width: 40rem) {
        .container {
          padding-inline: 2rem;
        }
      }

      .w-1\\/2 {
        width: 50%;
      }

      .max-w-\\[var\\(--breakpoint-sm\\)\\] {
        max-width: var(--breakpoint-sm);
      }"
    `);
});
