import { Config } from "prettier";

//#region prettier.config.d.ts
/**
 * ### Prettier Config Object
 *
 * https://prettier.io/docs/en/options
 */
declare const prettierConfig: Config;
//#endregion
export { prettierConfig as default };