import { basename } from 'node:path';
import { mkdir, writeFileSync } from 'node:fs';
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
 * @param cssFileName - Name of the CSS file
 * @param json - {"class": "_class_hash", ...}
 */
export default (cssFileName, json) => {
    const module = basename(cssFileName, '.scss');
    mkdir('./modules', { recursive: true }, (error) => {
        if (error)
            throw error;
        writeFileSync(`./modules/${module}.json`, JSON.stringify(json));
    });
};
//# sourceMappingURL=cssmodules.js.map