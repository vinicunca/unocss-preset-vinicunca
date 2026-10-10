# unocss-preset-vinicunca review issues

Recovered from the Claude skills review on 2026-10-10. File paths and cited line numbers were checked against the current local files. Runtime findings explicitly attributed to the earlier audit were not rerun. Items that still need runtime confirmation say so.

Package HEAD: `d014690`. Docs HEAD: `3f65b93`. The docs checkout has uncommitted changes, so these references describe the working tree.

P1 means broken examples or important functionality. P2 means incorrect behavior or guidance. P3 means documentation cleanup or an investigation with limited evidence. These are follow-up tasks; no source fixes are included.

## Package source

- [x] **P1: Short slide directions match but produce no CSS.** The slide-in and slide-out regexes accept t, b, l, and r, but their switches handle only full direction names. The earlier generator probe confirmed missing output for slide-in-t/b/l/r. Evidence: `src/presets/animation/animation.rule.ts:70`, `src/presets/animation/animation.rule.ts:78`, `src/presets/animation/animation.rule.ts:100`, `src/presets/animation/animation.util.ts:15`. Suggested fix: Normalize short directions before handleSlide and the switches; cover both entering and exiting utilities.

- [x] **P1: Fluid percent uses inconsistent unit keys.** FluidUnit maps percent to %, while the rule matches percent and UNIT_TO_NUMBER_MAP is keyed by %. Both defaultBaseUnit: percent and a -base-percent utility look up the wrong key. The prior generator probe reported broken or empty CSS. Evidence: `src/presets/fluid/preset/constant.ts:13`, `src/presets/fluid/preset/index.ts:18`, `src/presets/fluid/preset/index.ts:51`, `src/presets/fluid/preset/index.ts:165`. Suggested fix: Normalize option and rule unit names through FluidUnit before looking up their CSS values.

- [x] **P2: Fluid container rule uses the literal undefined utility.** The container rule calls getCSSVarName with the string undefined rather than the matched utility, yielding a variable such as --fluid-undefined-container. Evidence: `src/presets/fluid/preset/index.ts:169`, `src/presets/fluid/preset/index.ts:179`. Suggested fix: Pass the actual utility and verify that the fluid expression reads the same container variable.

- [x] **P2: Fluid variable-name cache ignores the configured prefix.** The module-level cache key includes utility and variable but not this.prefix. A second preset instance with a different prefix can reuse names from the first. The prior audit probed default and f- instances in one process. Evidence: `src/presets/fluid/preset/index.ts:34`, `src/presets/fluid/preset/index.ts:180`. Suggested fix: Make the cache instance-local or include the prefix in its key, and verify two differently configured generators in one process.

- [x] **P2: Animation aliases share and overwrite target timing.** resolveAnimation stores duration, timing function, and count under the parsed animation name. A shake alias targeting wiggle overwrites wiggle timing instead of having its own timing. Evidence: `src/utils.ts:56`, `src/utils.ts:69`, `../docs/content/unocss-preset/1.getting-started/2.theme.md:62`. Suggested fix: Decide whether aliases should have independent timing. Implement that behavior, or explicitly document shared timing and adjust the example.

- [x] **P3: icons default comment contradicts the default options.** The icons option says @default false, while the default options enable it. Evidence: `src/types.ts:145`, `src/constants.ts:15`. Suggested fix: Change the type comment to true and keep option docs aligned.

## Docs pages

- [x] **P2: extendedTheme promises general theme tokens.** The theme page says the preset merges extendedTheme into the UnoCSS theme. The resolver only consumes animation and keyframes, so arbitrary colors and other fields are not forwarded. Evidence: `../docs/content/unocss-preset/1.getting-started/2.theme.md:7`, `../docs/content/unocss-preset/1.getting-started/2.theme.md:18`, `src/resolver.ts:113`, `src/resolver.ts:126`. Suggested fix: Document animation/keyframes as the supported fields and direct general tokens to UnoCSS theme, or implement the wider merge deliberately.

- [x] **P2: Alias example promises independent timing.** The shake/wiggle example supplies different timings even though both write to the same animation-name entry. Evidence: `../docs/content/unocss-preset/1.getting-started/2.theme.md:62`, `src/utils.ts:69`. Suggested fix: Update the example after deciding and implementing the alias behavior.

- [x] **P2: Percent option docs describe output the current build cannot provide.** The options page promises that percent emits %, but the option/rule normalization currently breaks that path. Evidence: `../docs/content/unocss-preset/1.getting-started/3.options.md:136`, `../docs/content/unocss-preset/1.getting-started/3.options.md:137`. Suggested fix: Fix the unit mapping or label percent as unsupported until fixed.
