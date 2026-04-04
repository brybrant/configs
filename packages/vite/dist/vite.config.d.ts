import { UserConfig, UserConfigFnObject } from "vite";

//#region vite.config.d.ts
type ViteOptions = Pick<UserConfig, 'base' | 'plugins'> & {
  /**
   * Does the project use CSS modules?
   * @default false
   */
  cssmodules?: boolean;
};
declare const viteConfig: (viteOptions: ViteOptions) => UserConfigFnObject;
//#endregion
export { ViteOptions, viteConfig as default };