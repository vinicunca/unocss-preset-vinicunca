import { vinicuncaESLint } from '@vinicunca/eslint-config';

export default vinicuncaESLint(
  {
    formatters: false,
    react: false,
    typescript: true,
    unocss: false,
    vue: false,
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
    },
  },
);
