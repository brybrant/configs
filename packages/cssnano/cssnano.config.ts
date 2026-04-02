import type { Options } from 'cssnano';

import defaultPreset from 'cssnano-preset-default';

import svgoConfig from '@brybrant/svgo-config';

/**
 * ### CSSNANO Config Object
 * 
 * Extends the default CSSNANO preset with
 * [my SVGO configuration](https://www.npmjs.com/@brybrant/svgo-config)
 */
const cssnanoConfig: Options = defaultPreset({
  svgo: svgoConfig,
});

export default cssnanoConfig;