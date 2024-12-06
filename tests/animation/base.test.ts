import type { AnimationOptions } from '../../packages/core/src/types';

import { describe, it } from 'vitest';

import { getUnoWithoutPreflights } from '../utils';

describe.concurrent('base', () => {
  describe('animate class names', () => {
    it('"animate-in" should generate enter keyframe and css variables', async ({ expect }) => {
      const uno = await getUnoWithoutPreflights();
      const { css } = await uno.generate('animate-in');

      expect(css).toMatchInlineSnapshot(`
        "/* layer: default */
        @keyframes vin-in{from{opacity:var(--vin-enter-opacity,1);transform:translate3d(var(--vin-enter-translate-x,0),var(--vin-enter-translate-y,0),0) scale3d(var(--vin-enter-scale,1),var(--vin-enter-scale,1),var(--vin-enter-scale,1)) rotate(var(--vin-enter-rotate,0))}}
        .animate-in{animation:vin-in;animation-name:vin-in;animation-duration:150ms;--vin-enter-opacity:initial;--vin-enter-scale:initial;--vin-enter-rotate:initial;--vin-enter-translate-x:initial;--vin-enter-translate-y:initial;}"
      `);
    });

    it('"animate-out" should generate exit keyframe and css variables', async ({ expect }) => {
      const uno = await getUnoWithoutPreflights();
      const { css } = await uno.generate('animate-out');

      expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @keyframes vin-out{to{opacity:var(--vin-exit-opacity,1);transform:translate3d(var(--vin-exit-translate-x,0),var(--vin-exit-translate-y,0),0) scale3d(var(--vin-exit-scale,1),var(--vin-exit-scale,1),var(--vin-exit-scale,1)) rotate(var(--vin-exit-rotate,0))}}
      .animate-out{animation:vin-out;animation-name:vin-out;animation-duration:150ms;--vin-exit-opacity:initial;--vin-exit-scale:initial;--vin-exit-rotate:initial;--vin-exit-translate-x:initial;--vin-exit-translate-y:initial;}"
    `);
    });
  });

  describe('options', () => {
    const DEFAULT_UNIT = 'ms';

    describe('unit', () => {
      it('should respect the given value', async ({ expect }) => {
        const DURATION = 500;
        const UNIT: AnimationOptions['unit'] = 's';

        const uno = await getUnoWithoutPreflights({
          animation: {
            unit: UNIT,
            duration: DURATION,
          },
        });

        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-duration:${DURATION}${UNIT}`);
      });

      it('should default to "ms" if no unit is provided', async ({ expect }) => {
        const DURATION = 500;

        const uno = await getUnoWithoutPreflights({
          animation: {
            duration: DURATION,
          },
        });

        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-duration:${DURATION}${DEFAULT_UNIT}`);
      });
    });

    describe('delay', () => {
      it('should generate "animation-delay" based on given value', async ({ expect }) => {
        const DELAY = 100;

        const uno = await getUnoWithoutPreflights({
          animation: {
            delay: DELAY,
          },
        });

        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-delay:${DELAY}${DEFAULT_UNIT}`);
      });

      it('should not generate "animation-delay" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).not.toContain('animation-delay');
      });
    });

    describe('direction', () => {
      it('should generate "animation-direction" based on given value', async ({ expect }) => {
        const DIRECTION: NonNullable<AnimationOptions['direction']> = 'reverse';
        const uno = await getUnoWithoutPreflights({
          animation: {
            direction: DIRECTION,
          },
        });
        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-direction:${DIRECTION}`);
      });

      it('should not generate "animation-direction" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).not.toContain('animation-direction');
      });
    });

    describe('duration', () => {
      it('should generate "animation-duration" based on given value', async ({ expect }) => {
        const DURATION = 100;

        const uno = await getUnoWithoutPreflights({
          animation: {
            duration: DURATION,
          },
        });

        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-duration:${DURATION}${DEFAULT_UNIT}`);
      });

      it('should fallback to default "animation-duration" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).toContain('animation-duration');
      });
    });

    describe('fill-mode', () => {
      it('should generate "animation-fill-mode" based on given value', async ({ expect }) => {
        const FILL_MODE: NonNullable<AnimationOptions['fillMode']> = 'forwards';

        const uno = await getUnoWithoutPreflights({
          animation: {
            fillMode: FILL_MODE,
          },
        });
        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-fill-mode:${FILL_MODE}`);
      });

      it('should not generate "animation-fill-mode" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).not.toContain('animation-fill-mode');
      });
    });

    describe('iteration-count', () => {
      it('should generate "animation-iteration-count" based on given value', async ({ expect }) => {
        const ITERATION_COUNT = 3;

        const uno = await getUnoWithoutPreflights({
          animation: {
            iterationCount: ITERATION_COUNT,
          },
        });
        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-iteration-count:${ITERATION_COUNT}`);
      });

      it('should not generate "animation-iteration-count" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).not.toContain('animation-iteration-count');
      });
    });

    describe('play-state', () => {
      it('should generate "animation-play-state" based on given value', async ({ expect }) => {
        const PLAY_STATE: NonNullable<AnimationOptions['playState']> = 'paused';
        const uno = await getUnoWithoutPreflights({
          animation: {
            playState: PLAY_STATE,
          },
        });
        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-play-state:${PLAY_STATE}`);
      });

      it('should not generate "animation-play-state" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).not.toContain('animation-play-state');
      });
    });

    describe('timing-function', () => {
      it('should generate "animation-timing-function" based on given value', async ({ expect }) => {
        const TIMING_FUNCTION: NonNullable<AnimationOptions['timingFunction']> = 'ease-in-out';
        const uno = await getUnoWithoutPreflights({
          animation: {
            timingFunction: TIMING_FUNCTION,
          },
        });
        const { css } = await uno.generate('animate-in');

        expect(css).toContain(`animation-timing-function:${TIMING_FUNCTION}`);
      });

      it('should not generate "animation-timing-function" if no value is provided', async ({ expect }) => {
        const uno = await getUnoWithoutPreflights();
        const { css } = await uno.generate('animate-in');

        expect(css).not.toContain('animation-timing-function');
      });
    });
  });
});
