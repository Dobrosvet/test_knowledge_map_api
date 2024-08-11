import { build } from 'esbuild'
// import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader';
// import graphqlLoaderPlugin from 'gqlhook.js'
import { default as graphqlLoaderPlugin } from "@luckycatfactory/esbuild-graphql-loader";

build({
  plugins: [graphqlLoaderPlugin()],
  platform: "node",
  // entryNames: "[dir]/[name]",
  // outbase: "src",
  outdir: "dist",
  entryPoints: ['./src/index.ts'],
  // bundle: true,
  // outfile: 'out.js',
}).catch(() => {
  process.exit(1);
});