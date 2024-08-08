import advancedPreset from 'cssnano-preset-advanced';

import svgoConfig from './svgo.config.js';

export default advancedPreset({
  autoprefixer: {},
  svgo: svgoConfig,
});