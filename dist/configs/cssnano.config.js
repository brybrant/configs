import defaultPreset from 'cssnano-preset-default';
import svgoConfig from './svgo.config.js';
/**
 * ### CSSNANO Config Object
 *
 * Extends the default preset with [custom SVGO configuration](./node_modules/@brybrant/configs/dist/configs/svgo.config.js)
 */
const cssnanoConfig = defaultPreset({
    svgo: svgoConfig,
});
export default cssnanoConfig;
//# sourceMappingURL=cssnano.config.js.map