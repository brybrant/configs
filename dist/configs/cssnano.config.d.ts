import defaultPreset from 'cssnano-preset-default';
/**
 * ### [CSSNANO Config Object](./cssnano.config.js)
 *
 * Extends the default preset with [custom SVGO configuration](./svgo.config.js)
 */
declare const cssnanoConfig: {
    plugins: [import("postcss/lib/postcss").PluginCreator<any>, defaultPreset.Options[keyof defaultPreset.Options]][];
};
export default cssnanoConfig;
