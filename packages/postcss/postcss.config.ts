import type { Config, ConfigFn } from 'postcss-load-config';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import stylelint from 'stylelint';

import cssnanoConfig from '@brybrant/cssnano-config';
import purgeCSSConfig from '@brybrant/purgecss-config';
import stylelintConfig from '@brybrant/stylelint-config';

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
