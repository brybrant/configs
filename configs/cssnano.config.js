import defaultPreset from 'cssnano-preset-default';

import svgoConfig from './svgo.config.js';

export default defaultPreset({
  svgo: svgoConfig,
});