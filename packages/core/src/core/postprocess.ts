import type { Postprocessor } from '@unocss/core';
import { isString } from '@vinicunca/perkakas';

const RE_RGB = /rgb\(([\d\s]+?)\s*\/\s*([^)]+)\)/;
const RE_RGBA = /rgba\(([\d\s,]+),\s*([^)]+)\)/;

export function postprocessWithUnColor(unColor: string): Postprocessor {
  return (util) => {
    util.entries.forEach((entry) => {
      const value = entry[1];

      if (isString(value)) {
        let match = value.match(RE_RGBA);

        if (match != null) {
          entry[1] = value.replace(RE_RGBA, `rgba(var(${unColor}) , $2)`);
          util.entries.unshift([unColor, match[1]]);
        } else {
          match = value.match(RE_RGB);

          if (match != null) {
            entry[1] = value.replace(
              RE_RGB,
              `rgb(var(${unColor}) / $2)`,
            );
            util.entries.unshift([unColor, match[1].trim()]);
          }
        }
      }
    });
  };
}
