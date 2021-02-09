const path = require('path');

const config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../docs/svelte-test'),
    publicPath: '/tests/svelte-test/',
    filename: '[name].[contenthash].js',
  },
  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
};

module.exports = config;
