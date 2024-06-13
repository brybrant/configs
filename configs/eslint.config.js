import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

import prettierConfig from './prettier.config.js';

/**
 * @typedef {import('eslint').Linter.FlatConfig} ESLintConfig
 * @typedef {ESLintConfig|ESLintConfig[]} ESLintConfigs
 */

/**
 * https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions
 * @param {ESLintConfigs} [config] - ESLint config object(s)
 * @returns {ESLintConfig[]}
 */
export default (config) => ([
  js.configs.recommended,
  ...config ? (Array.isArray(config) ? config : [config]) : [],
  eslintPluginPrettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        prettierConfig,
      ],
    },
  },
]);