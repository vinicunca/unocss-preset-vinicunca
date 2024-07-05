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
    files: ['**/tsconfig.**'],
    rules: {
      'jsonc/sort-keys': 'off',
    },
  },

  {
    rules: {
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-interfaces': 'off',
      'sonar/no-duplicate-string': 'off',
    },
  },
);
