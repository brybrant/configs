import type { Linter } from 'eslint';
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
export default function (...configs: Linter.Config[]): Linter.Config[];
