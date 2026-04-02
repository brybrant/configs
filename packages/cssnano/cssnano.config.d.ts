import { Options } from "cssnano";

//#region packages/cssnano/cssnano.config.d.ts
/**
 * ### CSSNANO Config Object
 *
 * Extends the default CSSNANO preset with
 * [my SVGO configuration](https://www.npmjs.com/@brybrant/svgo-config)
 */
declare const cssnanoConfig: Options;
//#endregion
export { cssnanoConfig as default };