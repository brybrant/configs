import { eslintConfig } from '@brybrant/eslint-config';

import globals from 'globals';

export default eslintConfig({
  files: '*.js',
  languageOptions: {
    globals: globals.node,
  },
});
