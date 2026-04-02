//#region packages/purgecss/purgecss.config.ts
/**
* ### PurgeCSS Config Object
*
* https://purgecss.com/configuration.html
*/
const purgecssConfig = {
	content: [
		"index.html",
		"./src/**/*.(jsx|tsx|vue)",
		"./modules/*.json"
	],
	extractors: [{
		extractor: (content) => content.match(/\w+(?="[,}])/g) || [],
		extensions: ["json"]
	}],
	safelist: ["active"]
};
//#endregion
export { purgecssConfig as default };
