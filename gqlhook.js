const { default: graphqlLoaderPlugin } = require("@luckycatfactory/esbuild-graphql-loader");

module.exports = [
    graphqlLoaderPlugin()
]