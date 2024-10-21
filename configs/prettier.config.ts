import type { Config } from 'prettier';

/** https://prettier.io/docs/en/options */
const prettierConfig: Config = {
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'auto',
  singleQuote: true,
  jsxSingleQuote: true,
};

export default prettierConfig;