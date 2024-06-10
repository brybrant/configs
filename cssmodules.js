import { basename } from 'node:path';
import { mkdir, writeFileSync } from 'node:fs';

/**
 * Export CSS module JSON ("class": "transformedClass")
 * https://github.com/madyankin/postcss-modules
 * @param {String} cssFileName - Name of the CSS file
 * @param {Object.<String, String>} json - Transformed classes
 */
export default (cssFileName, json) => {
  const module = basename(cssFileName, '.scss');

  mkdir('./modules', {recursive: true}, (error) => {
    if (error) throw error;

    writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
  });
};