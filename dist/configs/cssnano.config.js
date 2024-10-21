import defaultPreset from 'cssnano-preset-default';
import svgoConfig from './svgo.config.js';
/**
 * ### [CSSNANO Config Object](./cssnano.config.js)
 *
 * Extends the default preset with [custom SVGO configuration](./svgo.config.js)
 */
const cssnanoConfig = defaultPreset({
    svgo: svgoConfig,
});
export default cssnanoConfig;
//# sourceMappingURL=cssnano.config.js.map