declare module "cssmodules" {
    function _default(cssFileName: string, json: Record<string, string>): void;
    export default _default;
}
declare module "svgo.config" {
    const _default: import("svgo").Config;
    export default _default;
}
declare module "cssnano.config" {
    const _default: {
        plugins: [import("postcss").PluginCreator<any>, advancedPreset.Options[keyof advancedPreset.Options]][];
    };
    export default _default;
    import advancedPreset from "cssnano-preset-advanced";
}
declare module "prettier.config" {
    const _default: import("prettier").Config;
    export default _default;
}
declare module "eslint.config" {
    function _default(...configs: ESLintConfig[]): ESLintConfig[];
    export default _default;
    export type ESLintConfig = import("eslint").Linter.FlatConfig;
}
declare module "purgecss.config" {
    const _default: import("@fullhuman/postcss-purgecss").UserDefinedOptions;
    export default _default;
}
declare module "stylelint.config" {
    const _default: import("stylelint").Config;
    export default _default;
}
declare module "postcss.config" {
    function _default(ctx?: {
        env: string;
        cwd: string;
    }): Configuration;
    export default _default;
    export type Configuration = import("postcss-load-config").Config;
}
