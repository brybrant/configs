import defaultPreset from "cssnano-preset-default";
//#endregion
//#region packages/cssnano/cssnano.config.ts
/**
* ### CSSNANO Config Object
* 
* Extends the default CSSNANO preset with
* [my SVGO configuration](https://www.npmjs.com/@brybrant/svgo-config)
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
export { cssnanoConfig as default };
