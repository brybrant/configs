/**
 * ### SVGO Config Object
 *
 * https://svgo.dev/docs/plugins/
 */
const svgoConfig = {
    plugins: [
        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeEditorsNSData',
        'removeDimensions',
        'cleanupAttrs',
        'mergeStyles',
        'inlineStyles',
        'minifyStyles',
        'removeUselessDefs',
        'cleanupNumericValues',
        'convertColors',
        'removeUnknownsAndDefaults',
        'removeNonInheritableGroupAttrs',
        'removeUselessStrokeAndFill',
        'removeHiddenElems',
        'removeEmptyText',
        'convertShapeToPath',
        'convertEllipseToCircle',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'collapseGroups',
        'convertPathData',
        'convertTransform',
        'removeEmptyAttrs',
        'removeEmptyContainers',
        'removeUnusedNS',
        'reusePaths',
        'mergePaths',
        'cleanupListOfValues',
        'sortAttrs',
        'sortDefsChildren',
        'removeTitle',
        'removeDesc',
        'removeXlink',
    ],
};
export default svgoConfig;
//# sourceMappingURL=svgo.config.js.map