import type { Preset, Rule } from 'unocss';
import type { FluidOptions } from './types';
import { toKebabCase } from '@vinicunca/perkakas';
import { defu } from 'defu';
import { DEFAULT_CSS_VAR_VALUE, DEFAULT_FLUID_OPTIONS, FluidUnit } from './constant';
import { fluidTheme } from './theme';

type FluidUnitKey = keyof typeof FluidUnit;

const units = Object.keys(FluidUnit).join('|');
// Option and utility names use the FluidUnit keys (e.g. `percent`), the CSS value uses the mapped unit (e.g. `%`)
const unitToNumber = (unit: FluidUnitKey): string => `1${FluidUnit[unit]}`;

// Cache for regex patterns to avoid recompilation
const regexCache = new Map<string, RegExp>();
function getRegExp(pattern: string): RegExp {
  if (!regexCache.has(pattern)) {
    regexCache.set(pattern, new RegExp(pattern));
  }
  return regexCache.get(pattern)!;
}

export class FluidPreset {
  /** Memoized CSS variable names and expressions; per instance because they depend on the prefix and options */
  private cssVarNamesCache = new Map<string, string>();
  private cssVarExpressionsCache = new Map<string, string>();

  prefix: string;
  minContainerWidth?: number;
  maxContainerWidth?: number;
  baseUnit: string;
  expandCSSVariables: boolean;
  cssVars: Record<string, any>;

  constructor(options: FluidOptions) {
    const opts = defu(options, DEFAULT_FLUID_OPTIONS);

    this.prefix = opts.prefix;
    this.minContainerWidth = opts.minContainerWidth;
    this.maxContainerWidth = opts.maxContainerWidth;
    this.baseUnit = unitToNumber(opts.defaultBaseUnit);
    this.expandCSSVariables = !!opts.expandCSSVariables;

    // Initialize CSS vars with the current config
    this.cssVars = {
      max: DEFAULT_CSS_VAR_VALUE,
      min: DEFAULT_CSS_VAR_VALUE,
      maxContainer: this.maxContainerWidth,
      minContainer: this.minContainerWidth,
      unit: this.baseUnit,
      rangeWidth: undefined,
      factor: undefined,
      rangeSize: undefined,
      fluid: undefined,
      size: undefined,
      container: '100vw',
    };
  }

  /**
   * Factory for creating both static utility rules and dynamic CSS variable rules
   * utilitiesMap needed for CSS vars to auto-apply to matching utility properties
   */
  makeRulesFactory(isCSSVar: boolean = false, utilitiesMap?: Map<string, Array<string>>) {
    return (utility: string, cssProperties: Array<string> = []): Array<Rule<object>> => {
      const rules: Array<Rule<object>> = [];

      // For CSS vars we need a special regex pattern
      const reUtilityBase = isCSSVar
        ? `${this.prefix}\\$(\\w+)`
        : `${this.prefix}${utility}`;

      // Helper for adding dynamic rules
      function addRule(pattern: string, handler: (math: Array<string>) => Record<string, string> | undefined, autocomplete?: string): void {
        const regex = getRegExp(`^${pattern}$`);
        rules.push([
          regex,
          handler,
          autocomplete ? { autocomplete } : undefined,
        ]);
      }

      if (isCSSVar) {
        // CSS var rules with dynamic utility capture
        addRule(`${reUtilityBase}-min-(\\d+)`, ([_, utility, minSize]) => ({
          [this.getCSSVarName('min', utility)]: minSize,
        }), `${this.prefix}$<name>-min-<num>`);

        addRule(`${reUtilityBase}-min-container-(\\d+)`, ([_, utility, minContainerWidth]) => ({
          [this.getCSSVarName('minContainer', utility)]: minContainerWidth,
        }), `${this.prefix}$<name>-min-container-<num>`);

        addRule(`${reUtilityBase}-max-(\\d+)`, ([_, utility, maxSize]) => ({
          [this.getCSSVarName('max', utility)]: maxSize,
        }), `${this.prefix}$<name>-max-<num>`);

        addRule(`${reUtilityBase}-max-container-(\\d+)`, ([_, utility, maxContainerWidth]) => ({
          [this.getCSSVarName('maxContainer', utility)]: maxContainerWidth,
        }), `${this.prefix}$<name>-max-container-<num>`);

        addRule(`${reUtilityBase}`, (matches) => {
          if (matches.length !== 2 || matches.includes(undefined as any)) {
            return;
          }
          const utilityName = matches[1];
          const css: Record<string, string> = {};

          const varProperty = this.getCSSVarName('', utilityName);
          const fluidCSS = this.getFluidCSS({ utility: utilityName, properties: [varProperty] });
          Object.assign(css, fluidCSS);

          // Apply the variable to matching utility properties to enable direct usage like `fluid-$px-24/32`
          // This allows the CSS variable to automatically control the corresponding CSS properties
          if (utilitiesMap && utilitiesMap.has(utilityName)) {
            const properties = utilitiesMap.get(utilityName)!;
            const varRef = `var(${varProperty})`;
            properties.forEach((prop) => {
              css[prop] = varRef;
            });
          }

          return css;
        }, reUtilityBase);

        addRule(`${reUtilityBase}-base-(${units})`, ([_, utility, newUnit]) => ({
          [this.getCSSVarName('unit', utility)]: unitToNumber(newUnit as FluidUnitKey),
        }));

        addRule(`${reUtilityBase}-container`, ([_, utility]) => ({
          [this.getCSSVarName('container', utility)]: '100cqw',
        }));
      } else {
        // Standard rules with fixed utility name
        addRule(`${reUtilityBase}-min-(\\d+)`, ([_, minSize]) => ({
          [this.getCSSVarName('min', utility)]: minSize,
        }), `${reUtilityBase}-min-<num>`);

        addRule(`${reUtilityBase}-min-container-(\\d+)`, ([_, minContainerWidth]) => ({
          [this.getCSSVarName('minContainer', utility)]: minContainerWidth,
        }), `${reUtilityBase}-min-container-<num>`);

        addRule(`${reUtilityBase}-max-(\\d+)`, ([_, maxSize]) => ({
          [this.getCSSVarName('max', utility)]: maxSize,
        }), `${reUtilityBase}-max-<num>`);

        addRule(`${reUtilityBase}-max-container-(\\d+)`, ([_, maxContainerWidth]) => ({
          [this.getCSSVarName('maxContainer', utility)]: maxContainerWidth,
        }), `${reUtilityBase}-max-container-<num>`);

        addRule(`${reUtilityBase}`, (matches) => {
          if (matches.length !== 1 || matches.includes(undefined as any)) {
            return;
          }
          return this.getFluidCSS({ utility, properties: cssProperties });
        }, reUtilityBase);

        addRule(`${reUtilityBase}-base-(${units})`, ([_, newUnit]) => ({
          [this.getCSSVarName('unit', utility)]: unitToNumber(newUnit as FluidUnitKey),
        }), `${reUtilityBase}-base-<unit>`);

        addRule(`${reUtilityBase}-container`, () => ({
          [this.getCSSVarName('container', utility)]: '100cqw',
        }));
      }

      return rules;
    };
  }

  /** Get the CSS variable name for a utility and variable */
  getCSSVarName(variable?: string, utility?: string): string {
    const cacheKey = `${utility || ''}-${variable || ''}`;
    if (!this.cssVarNamesCache.has(cacheKey)) {
      const name = `--${this.prefix}${utility?.replace('$', '')}${variable ? `-${toKebabCase(variable)}` : ''}`;
      this.cssVarNamesCache.set(cacheKey, name);
    }
    return this.cssVarNamesCache.get(cacheKey)!;
  }

  /** Generate fluid CSS for a utility */
  getFluidCSS(
    options: {
      utility: string;
      properties: Array<string>;
      expandCSSVariables?: boolean;
      minSize?: string;
      minSizeC?: string;
      maxSize?: string;
      maxSizeC?: string;
    },
  ): Record<string, string> {
    const utility = options.utility.replaceAll('$', '');
    const {
      properties,
      minSize = this.getCSSVar('min', utility),
      maxSize = this.getCSSVar('max', utility),
      maxSizeC = this.getCSSVar('maxContainer', utility),
      minSizeC = this.getCSSVar('minContainer', utility),
      expandCSSVariables = this.expandCSSVariables,
    } = options;

    const containerVar = this.getCSSVar('container', utility);
    const unitVar = this.getCSSVar('unit', utility);

    const css: Record<string, string> = {};
    let value: string = '';

    if (expandCSSVariables) {
      const [rangeWidthVar, rangeWidthVarName] = this.getCSSVars('rangeWidth', utility);
      const [factorVar, factorVarName] = this.getCSSVars('factor', utility);
      const [rangeSizeVar, rangeSizeVarName] = this.getCSSVars('rangeSize', utility);
      const [fluidVar, fluidVarName] = this.getCSSVars('fluid', utility);
      const [sizeVar, sizeVarName] = this.getCSSVars('size', utility);

      css[rangeWidthVarName] = `calc(${maxSizeC} - ${minSizeC})`;
      css[factorVarName] = `calc((${containerVar} - (${unitVar} * ${minSizeC})) / ${rangeWidthVar})`;
      css[rangeSizeVarName] = `calc(${maxSize} - ${minSize})`;
      css[fluidVarName] = `calc(${unitVar} * ${minSize} + ${rangeSizeVar} * ${factorVar})`;
      const clamp = `clamp(calc(${unitVar} * ${minSize}), ${fluidVar}, calc(${unitVar} * ${maxSize}))`;
      css[sizeVarName] = clamp;
      value = `${sizeVar} `;
    } else {
      const calcKey = `fluid-calc-${utility}`;
      if (!this.cssVarExpressionsCache.has(calcKey)) {
        const fluid = `calc(${unitVar} * ${minSize} + (${maxSize} - ${minSize}) * (${containerVar} - (${unitVar} * ${minSizeC})) / (${maxSizeC} - ${minSizeC}))`;
        const minValue = `calc(${unitVar} * ${minSize})`;
        const maxValue = `calc(${unitVar} * ${maxSize})`;
        this.cssVarExpressionsCache.set(calcKey, `clamp(${minValue}, ${fluid}, ${maxValue})`);
      }
      value = this.cssVarExpressionsCache.get(calcKey)!;
    }

    properties.forEach((prop) => {
      css[prop] = value;
    });
    return css;
  }

  /** Get both CSS var name and expression */
  getCSSVars(variable: string, utility?: string): [string, string] {
    return [
      this.getCSSVarName(variable, utility),
      this.getCSSVar(variable, utility),
    ];
  }

  /** Get the CSS variable expression */
  getCSSVar(variable: string, utility?: string): string {
    const cacheKey = `var-${utility || ''}-${variable}`;
    if (!this.cssVarExpressionsCache.has(cacheKey)) {
      const varName = this.getCSSVarName(variable, utility);
      const defaultVal = this.cssVars[variable]
        ? `, ${this.cssVars[variable]}`
        : '';
      this.cssVarExpressionsCache.set(
        cacheKey,
        `var(${varName}${defaultVal})`,
      );
    }
    return this.cssVarExpressionsCache.get(cacheKey)!;
  }

  /** Get shortcuts for the given utilities */
  getShortcuts(
    utilities: Array<string>,
    options: { attributify: boolean; disableTheme: boolean; themeShortcuts?: boolean },
  ): Preset['shortcuts'] {
    const { attributify, disableTheme, themeShortcuts = true } = options;
    const shortcuts: Preset['shortcuts'] = [];

    const getPrefixAttribute = (utility: string): string =>
      `${utility}-${this.prefix.endsWith('-') ? this.prefix.slice(0, -1) : this.prefix}`;

    // Add basic utility shortcuts
    for (const utility of utilities) {
      shortcuts.push([
        getRegExp(`^${this.prefix}${utility}-(\\d+)/(\\d+)$`),
        ([, min, max]) => `${this.prefix}${utility} ${this.prefix}${utility}-min-${min} ${this.prefix}${utility}-max-${max}`,
        { autocomplete: `${this.prefix}${utility}-<num>/<num>` },
      ] as const);

      // Add attributify mode shortcuts for slash syntax
      if (attributify) {
        shortcuts.push([
          getRegExp(`^${getPrefixAttribute(utility)}-(\\d+)/(\\d+)$`),
          ([, min, max]) => `${this.prefix}${utility} ${this.prefix}${utility}-min-${min} ${this.prefix}${utility}-max-${max}`,
          { autocomplete: `${getPrefixAttribute(utility)}-<num>/<num>` },
        ] as const);
      }
    }

    // Add custom CSS variable slash syntax: f-$myvar-10/20
    shortcuts.push([
      getRegExp(`^${this.prefix}\\$(\\w+)-(\\d+)/(\\d+)$`),
      ([, varName, min, max]) => `${this.prefix}$${varName} ${this.prefix}$${varName}-min-${min} ${this.prefix}$${varName}-max-${max}`,
      { autocomplete: `${this.prefix}$<name>-<num>/<num>` },
    ] as const);

    // Skip theme shortcuts if disabled or not requested
    if (disableTheme || !themeShortcuts) {
      return shortcuts;
    }

    // Add font size theme shortcuts
    for (const [name, [min, max]] of Object.entries(fluidTheme.fontSize)) {
      shortcuts.push([`${this.prefix}text-${name}`, `${this.prefix}text-${min}/${max}`]);
      if (attributify) {
        shortcuts.push([
          `${getPrefixAttribute('text')}-${name}`,
          `${this.prefix}text-${min}/${max}`,
          { autocomplete: [`${getPrefixAttribute('text')}-${name}`, 'f-lg'] },
        ]);
      }
    }

    // Add border radius theme shortcuts
    for (const [name, [min, max]] of Object.entries(fluidTheme.borderRadius)) {
      shortcuts.push([`${this.prefix}rounded-${name}`, `${this.prefix}rounded-${min}/${max}`]);
      if (attributify) {
        shortcuts.push([
          `${getPrefixAttribute('rounded')}-${name}`,
          `${this.prefix}rounded-${min}/${max}`,
        ]);
      }
    }

    // Add spacing shortcuts for other utilities
    const ignoredProperties = ['text', 'rounded'];
    for (const [name, [min, max]] of Object.entries(fluidTheme.spacing)) {
      for (const utility of utilities.filter((u) => !ignoredProperties.includes(u))) {
        shortcuts.push([`${this.prefix}${utility}-${name}`, `${this.prefix}${utility}-${min}/${max}`]);
        if (attributify) {
          shortcuts.push([
            `${getPrefixAttribute(utility)}-${name}`,
            `${this.prefix}${utility}-${min}/${max}`,
          ]);
        }
      }

      // Space utilities not included as built-ins to keep the preset simple and avoid complex selector generation
    }

    return shortcuts;
  }
}
