import { Linter } from "eslint";

//#region eslint.config.d.ts
/**
 * ## ESLint Config Function
 *
 * Ignores all files in the `dist` folder within the current working directory.
 *
 * ### Configs:
 * 1. [Recommended JS ESLint config](https://www.npmjs.com/@eslint/js)
 * 2. {@link tseslintConfig my TS ESLint config}
 * 3. **ESLint config object(s)** *(rest parameter)*
 * 4. [my Prettier config](https://www.npmjs.com/@brybrant/prettier-config)
 * 5. {@link jsdocConfigs JSDoc ESLint config}
 *
 * @param configs - [ESLint config object(s)](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects)
 */
declare function export_default(...configs: Linter.Config[]): Linter.Config[];
//#endregion
export { export_default as default };