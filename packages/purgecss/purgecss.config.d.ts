import { UserDefinedOptions } from "@fullhuman/postcss-purgecss";

//#region packages/purgecss/purgecss.config.d.ts
/**
 * ### PurgeCSS Config Object
 *
 * https://purgecss.com/configuration.html
 */
declare const purgecssConfig: UserDefinedOptions;
//#endregion
export { purgecssConfig as default };