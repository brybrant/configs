import { dirname } from 'node:path';

import { build } from 'tsdown';

const buildSequence = [
  'cssmodules/cssmodules.ts',
  'terser/terser.config.ts',
  'svgo/svgo.config.ts',
  'cssnano/cssnano.config.ts',
  'purgecss/purgecss.config.ts',
  'stylelint/stylelint.config.ts',
  'postcss/postcss.config.ts',
  'prettier/prettier.config.ts',
  'eslint/eslint.config.ts',
];

buildSequence.forEach(async (entry) => {
  const dir = dirname(entry);

  await build({
    clean: false,
    deps: {
      skipNodeModulesBundle: true,
    },
    dts: true,
    entry: `./packages/${entry}`,
    outDir: `./packages/${dir}`,
    outExtensions: () => ({
      dts: '.d.ts',
      js: '.js',
    }),
  });
});
