import advancedPreset from 'cssnano-preset-advanced';

import svgoConfig from './svgo.config.js';

export default advancedPreset({
  autoprefixer: {
    flexbox: false,
  },
  svgo: svgoConfig,
});