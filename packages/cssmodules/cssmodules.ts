import { basename } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';

/**
 * ### CSS Modules Config Function
 *
 * Exports [CSS module](https://github.com/madyankin/postcss-modules) selectors
 * as JSON object, where the key is the original selector and the value is the
 * transformed selector.
 *
 * This is output to JSON files in `./modules` folder for input to other
 * processors such as PurgeCSS.
 *
 * @example
 * The following SCSS module file:
 * ```scss
 * // example.module.scss
 * .selector {
 *   display: block;
 * }
 * ```
 * Will output the following JSON file:
 * ```json
 * // ./modules/example.module.json
 * {
 *   "selector": "_selector_hash"
 * }
 * ```
 * @param cssFileName Name of the CSS file
 * @param json `{"class": "_class_hash", ... }`
 * @returns Promise which fulfills with `void` upon success
 */
async function cssModulesExportJSON(
  cssFileName: string,
  json: Record<string, string>,
): Promise<void> {
  const module = basename(cssFileName, '.scss');

  return mkdir('./modules', { recursive: true }).then(() => {
    return writeFile(`./modules/${module}.json`, JSON.stringify(json));
  });
};

export default cssModulesExportJSON;
