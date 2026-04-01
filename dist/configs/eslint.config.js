import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import { jsdoc } from 'eslint-plugin-jsdoc';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.js';
const tseslintConfig = {
    files: ['./**/*.{ts,tsx,cts,mts}'],
    plugins: {
        '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
        parser: tseslint.parser,
        globals: globals.nodeBuiltin,
        /** https://typescript-eslint.io/packages/parser */
        parserOptions: {
            /** Required for rules which require type information */
            projectService: true,
            /** Root directory for relative TSConfig paths */
            tsconfigRootDir: import.meta.dirname,
        },
    },
    rules: tseslint.configs.strictTypeChecked.reduce((rules, config) => Object.assign(rules, config.rules ?? {}), {}),
};
const jsdocSettings = {
    tagNamePreference: {
        property: 'prop',
        augments: 'extends',
    },
};
/** https://github.com/gajus/eslint-plugin-jsdoc#configuration */
const jsdocConfigs = [
    /** JavaScript */
    jsdoc({
        files: ['./**/*.{js,jsx,cjs,mjs}'],
        config: 'flat/recommended-typescript-flavor',
        rules: {
            'jsdoc/check-indentation': 1,
            'jsdoc/check-syntax': 1,
            'jsdoc/no-blank-block-descriptions': 1,
            'jsdoc/no-blank-blocks': 1,
            'jsdoc/no-defaults': 1,
            'jsdoc/no-multi-asterisks': [1, { 'allowWhitespace': true }],
            'jsdoc/require-asterisk-prefix': 1,
            'jsdoc/require-param-description': 0,
            'jsdoc/require-property-description': 0,
            'jsdoc/require-returns': 0,
        },
        settings: jsdocSettings,
    }),
    /** TypeScript */
    jsdoc({
        files: ['./**/*.{ts,tsx,cts,mts}'],
        config: 'flat/recommended-typescript',
        rules: {
            'jsdoc/check-indentation': 1,
            'jsdoc/check-syntax': 1,
            'jsdoc/no-blank-block-descriptions': 1,
            'jsdoc/no-blank-blocks': 1,
            'jsdoc/no-defaults': 1,
            'jsdoc/no-multi-asterisks': [1, { 'allowWhitespace': true }],
            'jsdoc/require-asterisk-prefix': 1,
        },
        settings: jsdocSettings,
    }),
];
/**
 * ## ESLint Config Function
 *
 * Ignores all files in the `dist` folder within the current working directory.
 *
 * ### Configs:
 * 1. [Recommended ESLint config](./node_modules/@eslint/js/src/configs/eslint-recommended.js)
 * 2. **ESLint config object(s)** *(rest parameter)*
 * 3. [Prettier ESLint config](./node_modules/@brybrant/configs/dist/configs/prettier.config.js)
 * 4. JSDoc ESLint config
 *
 * @param configs - [ESLint config object(s)](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects)
 */
export default function (...configs) {
    return defineConfig([
        globalIgnores(['./dist/**/*']),
        js.configs.recommended,
        tseslintConfig,
        ...configs,
        {
            files: ['./**/*.{js,ts,jsx,tsx,cjs,cts,mjs,mts}'],
            plugins: eslintPluginPrettier.plugins,
            rules: {
                ...eslintPluginPrettier.rules,
                'prettier/prettier': ['error', prettierConfig],
            },
        },
        ...jsdocConfigs,
    ]);
}
;
//# sourceMappingURL=eslint.config.js.map