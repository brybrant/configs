import * as path from 'node:path';
import * as fs from 'node:fs';

import postCSSConfig from './configs/postcss.config.js';
import purgeCSSConfig from './configs/purgecss.config.js';
import stylelintConfig from './configs/stylelint.config.js';
import svgoConfig from './configs/svgo.config.js';

/**
 * https://github.com/madyankin/postcss-modules
 * @param {String} [cssFileName] - Name of the CSS file
 * @param {Object.<String, String>} [json] - Transformed classes
 */
function exportCSSModuleJSON(cssFileName, json) {
  const module = path.basename(cssFileName, '.scss');

  fs.mkdir('./modules', {recursive: true}, (error) => {
    if (error) throw error;

    fs.writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
  });
};

export {
  exportCSSModuleJSON,
  postCSSConfig,
  purgeCSSConfig,
  stylelintConfig,
  svgoConfig,
};