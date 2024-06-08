/**
 * @typedef {Function} ExtractorFunction
 * @param {String} content - Content of the file
 * @returns {String[]} CSS selectors
 */

/**
 * @typedef {Object} Extractor
 * @property {ExtractorFunction} Extractor.extractor
 * @property {String[]} Extractor.extensions - File extensions of the extractor
 */

/**
 * https://purgecss.com/configuration.html
 * @type {Object}
 * @property {String[]} content - Filenames or globs for PurgeCSS to analyze
 * @property {Extractor[]} extractors - Custom extractors
 * @property {String[]} safelist - Selectors that are safe to leave in the CSS
 */
export default {
  content: ['index.html', './src/**/*.(jsx|vue)', './modules/*.json'],
  extractors: [
    {
      // css modules class name extractor
      // https://github.com/madyankin/postcss-modules#saving-exported-classes
      extractor: content => content.match(/\w+(?="[,}])/g) || [],
      extensions: ['json'],
    },
  ],
  safelist: ['active'],
};