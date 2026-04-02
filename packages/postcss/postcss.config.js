import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import stylelint from "stylelint";
import defaultPreset from "cssnano-preset-default";
//#endregion
//#region packages/cssnano/cssnano.config.mjs
/**
* ### CSSNANO Config Object
* 
* Extends the default preset with [custom SVGO configuration](./node_modules/@brybrant/configs/dist/configs/svgo.config.js)
*/
const cssnanoConfig = defaultPreset({ svgo: { plugins: [
	"removeDoctype",
	"removeXMLProcInst",
	"removeComments",
	"removeMetadata",
	"removeEditorsNSData",
	"removeDimensions",
	"cleanupAttrs",
	"mergeStyles",
	"inlineStyles",
	"minifyStyles",
	"removeUselessDefs",
	"cleanupNumericValues",
	"convertColors",
	"removeUnknownsAndDefaults",
	"removeNonInheritableGroupAttrs",
	"removeUselessStrokeAndFill",
	"removeHiddenElems",
	"removeEmptyText",
	"convertShapeToPath",
	"convertEllipseToCircle",
	"moveElemsAttrsToGroup",
	"moveGroupAttrsToElems",
	"collapseGroups",
	"convertPathData",
	"convertTransform",
	"removeEmptyAttrs",
	"removeEmptyContainers",
	"removeUnusedNS",
	"reusePaths",
	"mergePaths",
	"cleanupListOfValues",
	"sortAttrs",
	"sortDefsChildren",
	"removeTitle",
	"removeDesc",
	"removeXlink"
] } });
//#endregion
//#region packages/purgecss/purgecss.config.mjs
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
//#region packages/stylelint/stylelint.config.mjs
/** BEM (block__element--modifier) */
const bemSyntax = /^[a-z][a-z0-9-]*(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+)?$/;
const snake_case = /^[a-z][a-z0-9]*(_[a-z0-9]+)*$/;
const privateKebab = /^_?[a-z][a-z0-9]*(-[a-z0-9]+)*$/;
/**
* ### Stylelint Config Object
* 
* https://stylelint.io/user-guide/configure/
*/
const stylelintConfig = {
	cache: true,
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-prettier-scss",
		"stylelint-config-hudochenkov/order"
	],
	fix: false,
	plugins: ["stylelint-high-performance-animation"],
	rules: {
		"alpha-value-notation": "number",
		"hue-degree-notation": "number",
		"number-max-precision": [5, { ignoreUnits: ["%"] }],
		"scss/at-function-pattern": [privateKebab, { message: "Expected function \"%s\" to be kebab-case (private functions must start with an underscore)" }],
		"scss/at-mixin-pattern": [privateKebab, { message: "Expected mixin \"%s\" to be kebab-case (private mixins must start with an underscore)" }],
		"scss/dollar-variable-pattern": [privateKebab, { message: "Expected variable \"%s\" to be kebab-case (private variables must start with an underscore)" }],
		"scss/percent-placeholder-pattern": [privateKebab, { message: "Expected placeholder \"%s\" to be kebab-case (private placeholders must start with an underscore)" }],
		"selector-attribute-quotes": "never",
		"selector-class-pattern": [bemSyntax, { message: "Expected class selector \"%s\" to be BEM syntax" }],
		"selector-pseudo-element-colon-notation": "single",
		"value-keyword-case": ["lower", { camelCaseSvgKeywords: true }],
		"plugin/no-low-performance-animation-properties": true
	},
	overrides: [{
		files: ["**/*.module.scss"],
		rules: {
			"selector-class-pattern": [snake_case, { message: "Expected class selector \"%s\" to be snake_case" }],
			"selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["export"] }],
			"property-no-unknown": [true, { ignoreSelectors: [":export"] }]
		}
	}]
};
//#endregion
//#region packages/postcss/postcss.config.ts
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
			purgeCSSPlugin(purgecssConfig),
			cssnano(cssnanoConfig),
			autoprefixer()
		]
	};
};
//#endregion
export { postcssConfigFn as default };
