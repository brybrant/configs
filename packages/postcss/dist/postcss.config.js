import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import stylelint from "stylelint";
import cssnanoConfig from "@brybrant/cssnano-config";
import purgeCSSConfig from "@brybrant/purgecss-config";
import stylelintConfig from "@brybrant/stylelint-config";
//#region postcss.config.ts
/**
* ## PostCSS Config Function
* 
* ### Syntax:
* - [SCSS](https://github.com/postcss/postcss-scss#readme)
* 
* ### Plugins:
* - Stylelint ([config](https://www.npmjs.com/@brybrant/stylelint-config))
* - PurgeCSS ([config](https://www.npmjs.com/@brybrant/purgecss-config))
* - CSSNANO ([config](https://www.npmjs.com/@brybrant/cssnano-config))
* - [Autoprefixer](https://github.com/postcss/autoprefixer#options)
*/
const postcssConfigFn = function() {
	return {
		syntax: "postcss-scss",
		plugins: [
			stylelint(stylelintConfig),
			purgeCSSPlugin(purgeCSSConfig),
			cssnano(cssnanoConfig),
			autoprefixer()
		]
	};
};
//#endregion
export { postcssConfigFn as default };
