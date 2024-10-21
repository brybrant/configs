import type { Config, ConfigFn } from 'postcss-load-config';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import stylelint from 'stylelint';

import purgeCSSConfig from './purgecss.config.js';
import stylelintConfig from './stylelint.config.js';
import cssnanoConfig from './cssnano.config.js';

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
const postcssConfigFn: ConfigFn = function(/* ctx */) {
  // const development = ctx.env === 'development';

  const postcssConfig: Config = {
    syntax: 'postcss-scss',
    plugins: [
      stylelint(stylelintConfig),
      purgeCSSPlugin(purgeCSSConfig),
      cssnano(cssnanoConfig),
      autoprefixer(),
    ],
  };

  return postcssConfig;
}

export default postcssConfigFn;