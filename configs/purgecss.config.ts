import type { UserDefinedOptions } from '@fullhuman/postcss-purgecss';

/** 
 * ### [PurgeCSS Config Object](./purgecss.config.js)
 * 
 * https://purgecss.com/configuration.html
 */
const purgecssConfig: UserDefinedOptions = {
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

export default purgecssConfig;