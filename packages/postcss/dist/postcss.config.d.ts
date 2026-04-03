import { ConfigFn } from "postcss-load-config";

//#region postcss.config.d.ts
/**
 * ## PostCSS Config Function
 *
 * ### Syntax:
 * - [SCSS](https://github.com/postcss/postcss-scss#readme)
 *
 * ### Plugins:
 * - Stylelint ([config](https://www.npmjs.com/@brybrant/stylelint-config))
 * - PurgeCSS ([config](https://www.npmjs.com/@brybrant/purgecss-config))
 * - CSSNANO ([config](https://www.npmjs.com/@brybrant/cssnano-config))
 * - [Autoprefixer](https://github.com/postcss/autoprefixer#options)
 */
declare const postcssConfigFn: ConfigFn;
//#endregion
export { postcssConfigFn as default };