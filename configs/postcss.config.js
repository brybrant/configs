import autoprefixer from 'autoprefixer';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';

import purgeCSSConfig from './purgecss.config.js';

/**
 * @typedef {import('postcss-load-config').Config} Configuration
 */

/**
 * https://github.com/postcss/postcss-load-config
 * @param {Object} [ctx] - Context
 * @param {String} ctx.env - Environment (process.env.NODE_ENV)
 * @param {String} ctx.cwd - Current working directory (process.cwd())
 * @returns {Configuration}
 */
export default (/* ctx */) => ({
  plugins: [
    autoprefixer({
      flexbox: false,
    }),
    purgeCSSPlugin(purgeCSSConfig),
  ],
});