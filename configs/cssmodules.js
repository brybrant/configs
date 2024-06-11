import { basename } from 'node:path';
import { mkdir, writeFileSync } from 'node:fs';

/**
 * Export CSS module JSON
 * https://github.com/madyankin/postcss-modules
 * @param {String} cssFileName - Name of the CSS file
 * @param {Record<String, String>} json - {"class": "transformedClass", ...}
 */
export default (cssFileName, json) => {
  const module = basename(cssFileName, '.scss');

  mkdir('./modules', {recursive: true}, (error) => {
    if (error) throw error;

    writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
  });
};