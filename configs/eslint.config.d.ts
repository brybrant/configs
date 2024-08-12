declare function _default(...configs: ESLintConfig[]): ESLintConfig[];
export default _default;
export type ESLintConfig = import("eslint").Linter.FlatConfig;
