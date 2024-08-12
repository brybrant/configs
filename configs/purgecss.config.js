/**
 * https://purgecss.com/configuration.html
 * @type {import('@fullhuman/postcss-purgecss').UserDefinedOptions}
 */
export default {
  content: ['index.html', './src/**/*.(jsx|vue)', './modules/*.json'],
  extractors: [
    {
      /**
       * CSS module class name extractor
       * https://github.com/madyankin/postcss-modules#saving-exported-classes
       */
      extractor: content => content.match(/\w+(?="[,}])/g) || [],
      extensions: ['json'],
    },
  ],
  safelist: ['active'],
};