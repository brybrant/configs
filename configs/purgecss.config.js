/**
 * https://purgecss.com/configuration.html
 * @type {import('purgecss').Options}
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