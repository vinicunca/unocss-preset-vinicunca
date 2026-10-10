import type { Postprocessor } from 'unocss';
import type { PresetVinicuncaOptions, VinicuncaTheme } from './types';
import { defu } from 'defu';
import { definePreset } from 'unocss';
import { getPreflights, postprocessWithUnColor } from './core';
import { resolveOptions } from './resolver';

export type { VinicuncaTheme };

export const presetVinicunca = definePreset<PresetVinicuncaOptions, VinicuncaTheme>(
  async (options) => {
    const resolvedOptions = await resolveOptions(options ?? {});

    const {
      unColor,
      meta,
    } = resolvedOptions;

    return {
      name: 'unocss-preset-vinicunca',

      extendTheme: (oriTheme: VinicuncaTheme) => {
        const mergedTheme = defu(
          meta.extendedTheme,
          oriTheme,
        );

        // Aliases reuse the target keyframes under their own name so they keep their own timing.
        // Resolved here because built-in keyframes (e.g. `spin`) only exist on the merged theme.
        // New objects, so the shared theme objects of other presets are never mutated.
        const keyframes = { ...mergedTheme.animation?.keyframes };
        const properties = { ...mergedTheme.animation?.properties };
        for (const [alias, name] of Object.entries(meta.animationAliases)) {
          if (keyframes[name] && !keyframes[alias]) {
            keyframes[alias] = keyframes[name];
          }
          if (properties[name] && !properties[alias]) {
            properties[alias] = properties[name];
          }
        }

        return {
          ...mergedTheme,
          animation: { ...mergedTheme.animation, keyframes, properties },
        };
      },

      postprocess: [
        unColor ? postprocessWithUnColor(unColor as string) : undefined,
      ].filter(Boolean) as Array<Postprocessor>,

      presets: meta.presets,

      transformers: meta.transformers,

      preflights: getPreflights(resolvedOptions),
    };
  },
);
