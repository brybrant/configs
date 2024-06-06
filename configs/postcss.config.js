import autoprefixer from 'autoprefixer';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';

import purgeCSSConfig from './purgecss.config';

// https://github.com/postcss/postcss-load-config
export default () => ({
  plugins: [
    autoprefixer({
      flexbox: false,
    }),
    purgeCSSPlugin(purgeCSSConfig),
  ],
});
