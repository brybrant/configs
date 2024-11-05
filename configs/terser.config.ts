import type { MinifyOptions } from 'terser';

/**
 * ### Terser Config Object
 * 
 * https://terser.org/docs/options/
 */
const terserConfig: MinifyOptions = {
  compress: {
    booleans_as_integers: true,
    drop_console: true,
    ecma: 2015,
    module: true,
    passes: 2,
  },
  mangle: {
    module: true,
  },
  format: {
    comments: false,
  },
};

export default terserConfig;