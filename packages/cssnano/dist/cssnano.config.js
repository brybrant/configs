import defaultPreset from "cssnano-preset-default";
import svgoConfig from "@brybrant/svgo-config";
//#region cssnano.config.ts
/**
* ### CSSNANO Config Object
* 
* Extends the default CSSNANO preset with
* [my SVGO configuration](https://www.npmjs.com/@brybrant/svgo-config)
*/
const cssnanoConfig = defaultPreset({ svgo: svgoConfig });
//#endregion
export { cssnanoConfig as default };
