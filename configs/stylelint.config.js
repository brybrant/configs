// https://stylelint.io/user-guide/configure/
// https://stylelint.io/awesome-stylelint/

// snake_case
const namePattern = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/;

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
    'hue-degree-notation': 'number',
    'keyframes-name-pattern': [namePattern, {
      message: 'Expected keyframe name "%s" to be snake_case',
    }],
    'selector-class-pattern': [namePattern, {
      message: 'Expected class selector "%s" to be snake_case',
    }],
    'selector-pseudo-element-colon-notation': 'single',
    'value-keyword-case': ['lower', {
      camelCaseSvgKeywords: true,
    }],
    'plugin/no-low-performance-animation-properties': true,
  },
};