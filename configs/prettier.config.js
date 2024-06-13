/**
 * https://prettier.io/docs/en/options
 * @type {import('prettier').Config}
 */
export default {
  bracketSpacing: false,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
  plugins: ['prettier-plugin-svelte'],
  singleQuote: true,
  jsxSingleQuote: true,
};