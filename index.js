import * as path from 'node:path';
import * as fs from 'node:fs';

import postCSSConfig from './configs/postcss.config';
import purgeCSSConfig from './configs/purgecss.config';
import stylelintConfig from './configs/stylelint.config';
import svgoConfig from './configs/svgo.config';

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