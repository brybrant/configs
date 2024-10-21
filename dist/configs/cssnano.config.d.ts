import defaultPreset from 'cssnano-preset-default';
declare const cssnanoConfig: {
    plugins: [import("postcss/lib/postcss").PluginCreator<any>, defaultPreset.Options[keyof defaultPreset.Options]][];
};
export default cssnanoConfig;
