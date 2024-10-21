import { basename } from 'node:path';
import { mkdir, writeFileSync } from 'node:fs';

/**
 * Export CSS module JSON
 * https://github.com/madyankin/postcss-modules
 * @param cssFileName - Name of the CSS file
 * @param json - {"class": "_class_hash", ...}
 */
export default (cssFileName: string, json: Record<string, string>) => {
  const module = basename(cssFileName, '.scss');

  mkdir('./modules', {recursive: true}, (error) => {
    if (error) throw error;

    writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
  });
};