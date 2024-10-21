import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import prettierConfig from './prettier.config.js';
/** https://github.com/gajus/eslint-plugin-jsdoc#configuration */
const jsdocConfig = {
    ...jsdoc.configs['flat/recommended'],
    rules: {
        'jsdoc/check-indentation': 1,
        'jsdoc/check-syntax': 1,
        'jsdoc/no-blank-block-descriptions': 1,
        'jsdoc/no-blank-blocks': 1,
        'jsdoc/no-defaults': 1,
        'jsdoc/no-multi-asterisks': [1, { 'allowWhitespace': true }],
        'jsdoc/require-asterisk-prefix': 1,
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                property: 'prop',
                augments: 'extends',
            },
        },
    },
};
/**
 * https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects
 * 1. Recommended ESLint config
 * 2. Custom ESLint config object(s) *(rest parameter)*
 * 3. Prettier ESLint config
 * 4. JSDoc ESLint config
 * @param configs - ESLint config object(s)
 */
export default function (...configs) {
    return [
        js.configs.recommended,
        ...configs,
        eslintPluginPrettier,
        {
            rules: {
                'prettier/prettier': [
                    'error',
                    prettierConfig,
                ],
            },
        },
        jsdocConfig,
    ];
}
;
//# sourceMappingURL=eslint.config.js.map