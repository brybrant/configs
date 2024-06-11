import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/**
 * @typedef {import('eslint').ESLint.Options} ESLintConfig
 * @typedef {import('eslint').Linter.FlatConfig} ESLintConfigOptions
 */

/**
 * https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions
 * @param {ESLintConfigOptions} [config] - An ESLint configuration object
 * @returns {ESLintConfig}
 */
export default (config) => ({
  baseConfig: {
    ...js.configs.recommended,
    ...config,
    ...eslintPluginPrettier,
    ...{
      'prettier/prettier': [
        {
          'endOfLine': 'auto',
        },
      ],
    },
  },
  cache: true,
  lintInWorker: true,
});