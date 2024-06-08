import { basename } from 'node:path';
import { mkdir, writeFileSync } from 'node:fs';

export { default as postCSSConfig } from './configs/postcss.config.js';
export { default as purgeCSSConfig } from './configs/purgecss.config.js';
export { default as stylelintConfig } from './configs/stylelint.config.js';
export { default as svgoConfig } from './configs/svgo.config.js';

/**
 * https://github.com/madyankin/postcss-modules
 * @param {String} [cssFileName] - Name of the CSS file
 * @param {Object.<String, String>} [json] - Transformed classes
 */
export function exportCSSModuleJSON(cssFileName, json) {
  const module = basename(cssFileName, '.scss');

  mkdir('./modules', {recursive: true}, (error) => {
    if (error) throw error;

    writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
  });
};