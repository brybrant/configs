import { Config } from "prettier";

//#region packages/prettier/prettier.config.d.ts
/**
 * ### Prettier Config Object
 *
 * https://prettier.io/docs/en/options
 */
declare const prettierConfig: Config;
//#endregion
export { prettierConfig as default };