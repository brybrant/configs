import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import stylelint from 'stylelint';

import purgeCSSConfig from './purgecss.config.js';
import stylelintConfig from './stylelint.config.js';
import cssnanoConfig from './cssnano.config.js';

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
export default (ctx) => {
  // const development = ctx.env === 'development';

  return {
    syntax: 'postcss-scss',
    plugins: [
      stylelint(stylelintConfig),
      purgeCSSPlugin(purgeCSSConfig),
      cssnano(cssnanoConfig),
      autoprefixer(),
    ],
  };
};