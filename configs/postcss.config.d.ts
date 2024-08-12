declare function _default(ctx?: {
    env: string;
    cwd: string;
}): Configuration;
export default _default;
export type Configuration = import("postcss-load-config").Config;
