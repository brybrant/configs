import { Config } from "svgo";

//#region svgo.config.d.ts
/**
 * ### SVGO Config Object
 *
 * https://svgo.dev/docs/plugins/
 */
declare const svgoConfig: Config;
//#endregion
export { svgoConfig as default };