import type { IconsOptions } from '@unocss/preset-icons';
import type { PresetUnoOptions } from '@unocss/preset-uno';
import type { WebFontsOptions } from '@unocss/preset-web-fonts';
import type { Preset } from 'unocss';

export interface VinicuncaOptions {
  /**
   * Enable default shortcuts
   *
   * @default true
   */
  enableDefaultShortcuts?: boolean;

  /**
   * Enable magic animations
   *
   * @default true
   */
  enableMagicAnimations?: boolean;

  /**
   * Enable reset styles
   *
   * @default true
   */
  enableResetStyles?: boolean;

  /**
   * Enable icons preset and the options of it
   * @default true
   */
  icons?: IconsOptions | boolean;

  /**
   * Enable the default preset
   * @default true
   */
  uno?: PresetUnoOptions | boolean;

  /**
   * Enable webFonts preset and the options of it
   * @default false
   */
  webFonts?: WebFontsOptions | boolean;
}

export type ResolvedOptions = {
  presets: Array<Preset>;
  // shortcuts: CustomStaticShortcuts;
} & Required<VinicuncaOptions>;
