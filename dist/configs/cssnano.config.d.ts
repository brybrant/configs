import defaultPreset from 'cssnano-preset-default';
/**
 * ### CSSNANO Config Object
 *
 * Extends the default preset with [custom SVGO configuration](./node_modules/@brybrant/configs/dist/configs/svgo.config.js)
 */
declare const cssnanoConfig: {
    plugins: [import("postcss/lib/postcss").PluginCreator<any>, defaultPreset.Options[keyof defaultPreset.Options]][];
};
export default cssnanoConfig;
