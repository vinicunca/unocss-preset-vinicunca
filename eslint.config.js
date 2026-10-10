import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: true,
    react: false,
    typescript: true,
    unocss: true,
    vue: true,
    pnpm: true,
  },

  {
    rules: {
      'perfectionist/sort-modules': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/regex-complexity': 'off',
      'sonarjs/no-nested-functions': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-misleading-capturing-group': 'off',
      'pnpm/yaml-enforce-settings': 'off',
    },
  },

  // Snapshot fixtures must match the generator byte for byte; formatting them breaks the tests
  {
    ignores: ['tests/fluid/cases/**'],
  },
);
