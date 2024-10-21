import type { ConfigFn } from 'postcss-load-config';
/**
 * ## PostCSS Config Function
 *
 * ### Syntax:
 * - [SCSS](https://github.com/postcss/postcss-scss#readme)
 *
 * ### Plugins:
 * - Stylelint ([config](./node_modules/@brybrant/configs/dist/configs/stylelint.config.js))
 * - PurgeCSS ([config](./node_modules/@brybrant/configs/dist/configs/purgecss.config.js))
 * - CSSNANO ([config](./node_modules/@brybrant/configs/dist/configs/cssnano.config.js))
 * - Autoprefixer
 */
declare const postcssConfigFn: ConfigFn;
export default postcssConfigFn;
