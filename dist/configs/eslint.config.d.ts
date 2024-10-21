import type { Linter } from 'eslint';
/**
 * https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
 * 1. Recommended ESLint config
 * 2. Custom ESLint config object(s) *(rest parameter)*
 * 3. Prettier ESLint config
 * 4. JSDoc ESLint config
 * @param configs - ESLint config object(s)
 */
export default function (...configs: Linter.Config[]): Linter.Config[];
