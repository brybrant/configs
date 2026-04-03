import { MinifyOptions } from "terser";

//#region terser.config.d.ts
/**
 * ### Terser Config Object
 *
 * https://terser.org/docs/options/
 */
declare const terserConfig: MinifyOptions;
//#endregion
export { terserConfig as default };