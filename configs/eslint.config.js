// import js from '@eslint/js';
// import jsdoc from 'eslint-plugin-jsdoc';
// import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

import prettierConfig from './prettier.config.js';

/**
 * Simple object check.
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  return (value && typeof value === 'object' && !Array.isArray(value));
}

/**
 * Deep merge two objects.
 * @param {object} target
 * @param {...object} sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;

  sources.reduce((previousObject, currentObject) => {
    for (const [key, currentValue] of Object.entries(currentObject)) {
      const previousValue = previousObject[key];

      if (Array.isArray(previousValue) && Array.isArray(currentValue)) {
        previousObject[key] = [...new Set([...previousValue, ...currentValue])];
      } else if (isObject(previousValue) && isObject(currentValue)) {
        previousObject[key] = mergeDeep(previousValue, currentValue);
      } else {
        previousObject[key] = currentValue;
      }
    }

    return previousObject;
  }, {});
}

/** @typedef {import('eslint').Linter.BaseConfig} ESLintConfig */

/** @type {ESLintConfig} */
const baseConfig = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};

/** @type {ESLintConfig} */
const jsdocConfig = {
  plugins: [
    'jsdoc',
  ],
  rules: {
    'jsdoc/check-alignment': 1,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-property-names': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/check-values': 1,
    'jsdoc/empty-tags': 1,
    'jsdoc/implements-on-classes': 1,
    'jsdoc/multiline-blocks': 1,
    'jsdoc/no-blank-block-descriptions': 1,
    'jsdoc/no-blank-blocks': 1,
    'jsdoc/no-defaults': 1,
    'jsdoc/no-multi-asterisks': [1, {'allowWhitespace': true}],
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-asterisk-prefix': 1,
    'jsdoc/require-jsdoc': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-property': 1,
    'jsdoc/require-property-description': 1,
    'jsdoc/require-property-name': 1,
    'jsdoc/require-property-type': 1,
    'jsdoc/require-returns': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/require-yields': 1,
    'jsdoc/require-yields-check': 1,
    'jsdoc/tag-lines': 1,
    'jsdoc/valid-types': 1,
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
 * https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions
 * @param {ESLintConfig|ESLintConfig[]} [config] - ESLint config object(s)
 * @returns {ESLintConfig}
 */
export default (config) => {
  return mergeDeep(
    baseConfig,
    config || {},
    jsdocConfig,
    {
      extends: [
        'prettier',
      ],
      plugins: [
        'prettier',
      ],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
      }
    },
  );
};

// export default (config) => ([
//   js.configs.recommended,
//   ...config ? (Array.isArray(config) ? config : [config]) : [],
//   eslintPluginPrettier,
//   {
//     rules: {
//       'prettier/prettier': [
//         'error',
//         prettierConfig,
//       ],
//     },
//   },
//   {
//     files: ['**/*.js'],
//     plugins: {
//       jsdoc,
//     },
//     rules: {
//       'jsdoc/check-alignment': 1,
//       'jsdoc/check-indentation': 1,
//       'jsdoc/check-param-names': 1,
//       'jsdoc/check-property-names': 1,
//       'jsdoc/check-syntax': 1,
//       'jsdoc/check-tag-names': 1,
//       'jsdoc/check-types': 1,
//       'jsdoc/check-values': 1,
//       'jsdoc/empty-tags': 1,
//       'jsdoc/implements-on-classes': 1,
//       'jsdoc/multiline-blocks': 1,
//       'jsdoc/no-blank-block-descriptions': 1,
//       'jsdoc/no-blank-blocks': 1,
//       'jsdoc/no-defaults': 1,
//       'jsdoc/no-multi-asterisks': [1, {'allowWhitespace': true}],
//       'jsdoc/no-undefined-types': 1,
//       'jsdoc/require-asterisk-prefix': 1,
//       'jsdoc/require-jsdoc': 1,
//       'jsdoc/require-param': 1,
//       'jsdoc/require-param-description': 1,
//       'jsdoc/require-param-name': 1,
//       'jsdoc/require-param-type': 1,
//       'jsdoc/require-property': 1,
//       'jsdoc/require-property-description': 1,
//       'jsdoc/require-property-name': 1,
//       'jsdoc/require-property-type': 1,
//       'jsdoc/require-returns': 1,
//       'jsdoc/require-returns-check': 1,
//       'jsdoc/require-returns-type': 1,
//       'jsdoc/require-yields': 1,
//       'jsdoc/require-yields-check': 1,
//       'jsdoc/tag-lines': 1,
//       'jsdoc/valid-types': 1,
//     },
//     settings: {
//       jsdoc: {
//         tagNamePreference: {
//           property: 'prop',
//           augments: 'extends',
//         },
//       },
//     },
//   },
// ]);