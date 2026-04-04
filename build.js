import { build } from 'tsdown';

/**
 * https://tsdown.dev/reference/api/Interface.Workspace#include
 * @param {string[]} workspaces
 * @returns {import('tsdown').UserConfig}
 */
function createConfig(workspaces) {
  return {
    deps: {
      skipNodeModulesBundle: true,
    },
    dts: true,
    entry: `*.ts`,
    outExtensions: () => ({
      dts: '.d.ts',
      js: '.js',
    }),
    workspace: {
      include: workspaces,
    },
  };
}

await build(
  createConfig([
    'packages/cssmodules',
    'packages/prettier',
    'packages/purgecss',
    'packages/stylelint',
    'packages/svgo',
    'packages/terser',
  ]),
);

await build(
  createConfig([
    'packages/cssnano',
    'packages/eslint',
  ]),
);

await build(
  createConfig([
    'packages/postcss',
  ]),
);

await build(
  createConfig([
    'packages/vite',
  ]),
);
