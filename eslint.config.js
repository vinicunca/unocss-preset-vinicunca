import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: true,
    react: false,
    typescript: true,
    unocss: true,
    vue: true,
  },

  {
    rules: {
      'perfectionist/sort-modules': 'off',
      'sonar/cognitive-complexity': 'off',
      'sonar/slow-regex': 'off',
      'sonar/regex-complexity': 'off',
      'sonar/no-nested-functions': 'off',
      'regexp/no-super-linear-backtracking': 'off',
      'regexp/no-misleading-capturing-group': 'off',
    },
  },
);
