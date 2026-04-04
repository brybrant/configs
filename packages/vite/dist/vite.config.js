import { readFile } from "node:fs/promises";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint2";
import stylelintPlugin from "vite-plugin-stylelint";
import { optimize } from "svgo";
import { NodePackageImporter } from "sass-embedded";
import cssModulesExportJSON from "@brybrant/cssmodules";
import stylelintConfig from "@brybrant/stylelint-config";
import svgoConfig from "@brybrant/svgo-config";
import terserConfig from "@brybrant/terser-config";
//#region vite.config.ts
const svgoPlugin = {
	name: "@brybrant/vite-plugin-svgo",
	enforce: "pre",
	async load(id) {
		const [path, qs] = id.split("?");
		if (!path.endsWith(".svg")) return null;
		const convertToJSX = new URLSearchParams(qs).has("jsx");
		return readFile(path, "utf8").then((svg) => {
			const { data } = optimize(svg, Object.assign({}, svgoConfig, { path }));
			/** Borrowed from `vite-plugin-solid-svg` */
			if (convertToJSX) return `export default (props = {}) => ${data.replace(/([{}])/g, "{\"$1\"}").replace(/<!--\s*([\s\S]*?)\s*-->/g, "{/* $1 */}").replace(/(<svg[^>]*)>/i, "$1{...props}>")}`;
			return `export default \`${data}\`;`;
		});
	}
};
const viteConfig = (viteOptions) => {
	return defineConfig(({ mode }) => {
		const development = mode === "development";
		return {
			base: viteOptions.base ?? "/",
			build: {
				minify: development ? true : "terser",
				...!development && { terserOptions: terserConfig }
			},
			css: {
				...viteOptions.cssmodules && { modules: { getJSON: cssModulesExportJSON } },
				postcss: `${import.meta.dirname}/node_modules/@brybrant/postcss-config`,
				preprocessorOptions: { scss: { importers: [new NodePackageImporter()] } }
			},
			plugins: [
				stylelintPlugin({
					lintInWorker: true,
					config: stylelintConfig
				}),
				svgoPlugin,
				...viteOptions.plugins ?? [],
				eslintPlugin({ lintInWorker: true })
			],
			server: {
				host: "127.0.0.1",
				port: 3e3,
				strictPort: true
			}
		};
	});
};
//#endregion
export { viteConfig as default };
