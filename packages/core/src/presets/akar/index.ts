import type { Preflight, Preset } from '@unocss/core';
import type { VinicuncaAkarOptions } from '../../types';
import { getAkarPreflight } from './akar.brand-css-variables';
import { drawerPreflight } from './akar.drawer-preflights';

export function presetAkar(options: VinicuncaAkarOptions): Preset {
  const preflights: Array<Preflight> = [
    getAkarPreflight(options),
  ];

  if (options.enableDrawer) {
    preflights.push(drawerPreflight);
  }

  const pohonTheme = resolveTheme(options.pohonThemes);

  return {
    name: 'unocss-preset-akar',

    preflights,

    theme: {
      colors: {
        ...pohonTheme,
      },
    },
  };
}

function resolveTheme(pohon: VinicuncaAkarOptions['pohonThemes']) {
  const enablePohon = Boolean(pohon);

  if (!enablePohon) {
    return {};
  }

  return {
    text: {
      dimmed: 'var(--pohon-text-dimmed)',
      muted: 'var(--pohon-text-muted)',
      toned: 'var(--pohon-text-toned)',
      DEFAULT: 'var(--pohon-text)',
      highlighted: 'var(--pohon-text-highlighted)',
      inverted: 'var(--pohon-text-inverted)',
    },
    background: {
      DEFAULT: 'var(--pohon-bg)',
      muted: 'var(--pohon-bg-muted)',
      elevated: 'var(--pohon-bg-elevated)',
      accented: 'var(--pohon-bg-accented)',
      inverted: 'var(--pohon-bg-inverted)',
      border: 'var(--pohon-border)',
    },
    border: {
      DEFAULT: 'var(--pohon-border)',
      muted: 'var(--pohon-border-muted)',
      accented: 'var(--pohon-border-accented)',
      inverted: 'var(--pohon-border-inverted)',
      bg: 'var(--pohon-bg)',
    },
    ring: {
      DEFAULT: 'var(--pohon-border)',
      muted: 'var(--pohon-border-muted)',
      accented: 'var(--pohon-border-accented)',
      inverted: 'var(--pohon-border-inverted)',
      bg: 'var(--pohon-bg)',
      offset: {
        DEFAULT: 'var(--pohon-border)',
        muted: 'var(--pohon-border-muted)',
        accented: 'var(--pohon-border-accented)',
        inverted: 'var(--pohon-border-inverted)',
        bg: 'var(--pohon-bg)',
      },
    },
    divide: {
      DEFAULT: 'var(--pohon-border)',
      muted: 'var(--pohon-border-muted)',
      accented: 'var(--pohon-border-accented)',
      inverted: 'var(--pohon-border-inverted)',
    },
    outline: {
      DEFAULT: 'var(--pohon-border)',
      inverted: 'var(--pohon-border-inverted)',
    },
    stroke: {
      DEFAULT: 'var(--pohon-border)',
      inverted: 'var(--pohon-border-inverted)',
    },
    fill: {
      DEFAULT: 'var(--pohon-border)',
      inverted: 'var(--pohon-border-inverted)',
    },
  };
}
