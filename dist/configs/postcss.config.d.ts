import type { ConfigFn } from 'postcss-load-config';
/**
 * ## [PostCSS Config Function](./postcss.config.js)
 *
 * ### Syntax:
 * - [SCSS](https://github.com/postcss/postcss-scss#readme)
 *
 * ### Plugins:
 * - Stylelint ([config](./stylelint.config.js))
 * - PurgeCSS ([config](./purgecss.config.js))
 * - CSSNANO ([config](./cssnano.config.js))
 * - Autoprefixer
 */
declare const postcssConfigFn: ConfigFn;
export default postcssConfigFn;
