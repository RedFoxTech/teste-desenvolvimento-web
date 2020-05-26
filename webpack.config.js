const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./api/index.ts",
  watch: true,
  target: 'node',
  externals: [nodeExternals()],
  watchOptions: {
    ignored: ['./**/*.js', 'node_modules/**', 'client/**']
  },
  output: {
    filename: "index.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};