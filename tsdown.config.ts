import { defineConfig } from 'tsdown';

export default defineConfig({
  deps: {
    skipNodeModulesBundle: true,
  },
  dts: true,
  entry: `*.ts`,
  outExtensions: () => ({
    dts: '.d.ts',
    js: '.js',
  }),
  workspace: true,
});
