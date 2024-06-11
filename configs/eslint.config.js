import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/**
 * @typedef {import('eslint').Linter.FlatConfig} ESLintConfig
 */

/**
 * https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions
 * @param {ESLintConfig|ESLintConfig[]} [config] - ESLint config object(s)
 * @returns {ESLintConfig[]}
 */
export default (config) => ([
  js.configs.recommended,
  ...config ? (Array.isArray(config) ? config : [config]) : [],
  eslintPluginPrettier,
  {
    'prettier/prettier': [
      {
        'endOfLine': 'auto',
      },
    ],
  },
]);