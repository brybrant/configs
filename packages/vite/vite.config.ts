import { readFile } from 'node:fs/promises';

import type { Plugin, UserConfig, UserConfigFnObject } from 'vite';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint2';
import stylelintPlugin from 'vite-plugin-stylelint';
import { optimize } from 'svgo';
import { NodePackageImporter } from 'sass-embedded';

import cssModulesExportJSON from '@brybrant/cssmodules';
import stylelintConfig from '@brybrant/stylelint-config';
import svgoConfig from '@brybrant/svgo-config';
import terserConfig from '@brybrant/terser-config';

const svgoPlugin: Plugin = {
  name: '@brybrant/vite-plugin-svgo',
  enforce: 'pre',
  async load(path) {
    if (!path.endsWith('.svg')) return null;

    return readFile(path, 'utf8').then((svg) => {
      const { data } = optimize(svg, Object.assign({}, svgoConfig, { path }));

      return `export default \`${data}\`;`;
    });
  },
};

export type ViteOptions = Pick<UserConfig, 'base' | 'plugins'> & {
  /**
   * Does the project use CSS modules?
   * @default false
   */
  cssmodules?: boolean;
};

const viteConfig = (viteOptions: ViteOptions): UserConfigFnObject => {
  return defineConfig(({ mode }) => {
    const development = mode === 'development';
    
    return {
      base: viteOptions.base ?? '/',
      build: {
        minify: development ? true : 'terser',
        ...(!development && {
          terserOptions: terserConfig,
        }),
      },
      css: {
        ...(viteOptions.cssmodules && {
          modules: {
            getJSON: cssModulesExportJSON,
          },
        }),
        postcss: `${import.meta.dirname}/node_modules/@brybrant/postcss-config`,
        preprocessorOptions: {
          scss: {
            importers: [new NodePackageImporter()],
          },
        },
      },
      plugins: [
        stylelintPlugin({
          lintInWorker: true,
          config: stylelintConfig,
        }),
        svgoPlugin,
        ...(viteOptions.plugins ?? []),
        eslintPlugin({
          lintInWorker: true,
        }),
      ],
      server: {
        host: '127.0.0.1',
        port: 3000,
        strictPort: true,
      },
    }
  });
};

export default viteConfig;
