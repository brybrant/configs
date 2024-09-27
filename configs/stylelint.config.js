/** BEM (block__element--modifier) */
const bemSyntax = /^[a-z][a-z0-9-]*(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+)?$/;

const snake_case = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/;

/**
 * https://stylelint.io/user-guide/configure/
 * @type {import('stylelint').Config}
 */
export default {
  cache: true,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-hudochenkov/order',
  ],
  fix: false,
  plugins: [
    'stylelint-high-performance-animation',
  ],
  rules: {
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'number',
    'number-max-precision': [4, {
      ignoreUnits: ['%'],
    }],
    'selector-attribute-quotes': 'never',
    'selector-class-pattern': [bemSyntax, {
      message: 'Expected class selector "%s" to be BEM syntax',
    }],
    'selector-pseudo-element-colon-notation': 'single',
    'value-keyword-case': ['lower', {
      camelCaseSvgKeywords: true,
    }],
    'plugin/no-low-performance-animation-properties': true,
  },
  overrides: [
    {
      files: ['**/*.module.scss'],
      rules: {
        'selector-class-pattern': [snake_case, {
          message: 'Expected class selector "%s" to be snake_case',
        }],
      },
    },
  ],
};