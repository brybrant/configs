// https://purgecss.com/configuration.html

export default {
  content: ['index.html', './src/**/*.(jsx|vue)', './modules/*.json'],
  safelist: ['active'],
  extractors: [
    {
      // css modules class name extractor
      // https://github.com/madyankin/postcss-modules#saving-exported-classes
      extractor: content => content.match(/\w+(?="[,}])/g) || [],
      extensions: ['json'],
    },
  ],
};