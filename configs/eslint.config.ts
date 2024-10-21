import type { Linter } from 'eslint';

import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

import prettierConfig from './prettier.config.js';

/** https://github.com/gajus/eslint-plugin-jsdoc#configuration */
const jsdocConfig: Linter.Config = {
  ...jsdoc.configs['flat/recommended'],
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
 * ## ESLint Config Function
 * 
 * ### Configs:
 * 1. [Recommended ESLint config](./node_modules/@eslint/js/src/configs/eslint-recommended.js)
 * 2. **ESLint config object(s)** *(rest parameter)*
 * 3. [Prettier ESLint config](./node_modules/@brybrant/configs/dist/configs/prettier.config.js)
 * 4. JSDoc ESLint config
 * 
 * @param configs - [ESLint config object(s)](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects)
 */
export default function(...configs: Linter.Config[]): Linter.Config[] {
  return [
    js.configs.recommended,
    ...configs,
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
  ];
};