import js from '@eslint/js';
// import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

import prettierConfig from './prettier.config.js';

/** @typedef {import('eslint').Linter.Config} ESLintConfig */

/** @type {ESLintConfig} */
// const baseConfig = {
//   env: {
//     browser: true,
//   },
//   extends: [
//     'eslint:recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
// };

/** @type {ESLintConfig} */
const jsdocConfig = {
  extends: [
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    'jsdoc',
  ],
  rules: {
    'jsdoc/check-indentation': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/no-blank-block-descriptions': 1,
    'jsdoc/no-blank-blocks': 1,
    'jsdoc/no-defaults': 1,
    'jsdoc/no-multi-asterisks': [1, {'allowWhitespace': true}],
    'jsdoc/require-asterisk-prefix': 1,
  },
  settings: {
    jsdoc: {
      tagNamePreference: {
        property: 'prop',
        augments: 'extends',
      },
    },
  },
};

/**
 * https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
 * @param {ESLintConfig|ESLintConfig[]} [configs] - ESLint config object(s)
 * @returns {ESLintConfig[]}
 */
export default (configs) => ([
  js.configs.recommended,
  ...configs ? (Array.isArray(configs) ? configs : [configs]) : [],
  eslintPluginPrettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        prettierConfig,
      ],
    },
  },
  jsdocConfig,
]);