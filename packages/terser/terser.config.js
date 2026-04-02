//#region packages/terser/terser.config.ts
/**
* ### Terser Config Object
*
* https://terser.org/docs/options/
*/
const terserConfig = {
	compress: {
		drop_console: true,
		ecma: 2015,
		module: true,
		passes: 2
	},
	mangle: { module: true },
	format: { comments: false }
};
//#endregion
export { terserConfig as default };
