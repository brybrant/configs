import type { Config } from 'svgo';

/**
 * ### SVGO Config Object
 * 
 * https://svgo.dev/docs/plugins/
 */
const svgoConfig: Config = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeXMLNS',
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