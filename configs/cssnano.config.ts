import defaultPreset from 'cssnano-preset-default';

import svgoConfig from './svgo.config.js';

const cssnanoConfig = defaultPreset({
  svgo: svgoConfig,
});

export default cssnanoConfig;