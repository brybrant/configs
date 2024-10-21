import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import stylelint from 'stylelint';
import purgeCSSConfig from './purgecss.config.js';
import stylelintConfig from './stylelint.config.js';
import cssnanoConfig from './cssnano.config.js';
/** https://github.com/postcss/postcss-load-config */
const postcssConfigFn = function ( /* ctx */) {
    // const development = ctx.env === 'development';
    const postcssConfig = {
        syntax: 'postcss-scss',
        plugins: [
            stylelint(stylelintConfig),
            purgeCSSPlugin(purgeCSSConfig),
            cssnano(cssnanoConfig),
            autoprefixer(),
        ],
    };
    return postcssConfig;
};
export default postcssConfigFn;
//# sourceMappingURL=postcss.config.js.map