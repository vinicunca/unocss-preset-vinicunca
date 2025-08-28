import type { Postprocessor, Shortcut, UserConfig } from '@unocss/core';
import type { PresetVinicuncaOptions, VinicuncaTheme } from './types';
import { definePreset, mergeConfigs } from '@unocss/core';
import { defaultShortcuts, getPreflights, postprocessWithUnColor } from './core';
import { PRESET_NAME } from './meta';
import { resolveOptions } from './resolver';

export type { VinicuncaTheme };

export const presetVinicunca = definePreset<PresetVinicuncaOptions, VinicuncaTheme>(
  async (options) => {
    const resolvedOptions = await resolveOptions(options ?? {});

    const {
      enableDefaultShortcuts,
      unColor,
      theme,
      meta,
    } = resolvedOptions;

    return {
      name: `unocss-preset-${PRESET_NAME}`,

      layers: {
        [PRESET_NAME]: 10,
      },

      theme,

      shortcuts: [
        ...enableDefaultShortcuts ? defaultShortcuts : [],
        ...meta.shortcuts,
      ] as Array<Shortcut>,

      postprocess: [
        unColor ? postprocessWithUnColor(unColor as string) : undefined,
      ].filter(Boolean) as Array<Postprocessor>,

      presets: meta.presets,

      transformers: meta.transformers,

      preflights: getPreflights(resolvedOptions),
    };
  },
);

export function defineVinicuncaConfig<T extends object = VinicuncaTheme>(
  options: PresetVinicuncaOptions = {},
  config: UserConfig<T> = {},
) {
  return mergeConfigs([
    defineConfig<T>({
      presets: [
        presetVinicunca(options) as any,
      ],
    }),
    config,
  ]);
}

export function defineConfig<T extends object = VinicuncaTheme>(
  config: UserConfig<T>,
) {
  return config;
}
