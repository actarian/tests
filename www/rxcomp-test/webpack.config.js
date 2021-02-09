const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'development',
  target: 'web', // enum
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
    ]
  },
  devServer: {
    port: 9000,
    open: true,
    // proxy: { '/api': 'http://localhost:3000' },
    // proxy URLs to backend development server
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },
  plugins: [
    new CleanWebpackPlugin(),
    /*
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }],
    }),
    */
    new HtmlWebpackPlugin({
      title: 'RxComp Test',
      template: './src/index.html',
      filename: './index.html',
      /*
      'meta': {
        'viewport': 'width=device-width, initial-scale=1.0',
        'charset': 'UTF-8'
      }
      */
    }),
    new webpack.ProgressPlugin({ percentBy: 'entries' }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ]
};

// eslint-disable-next-line no-unused-vars
module.exports = (env, options) => {
  const keys = ['development', 'production'];
  const mode = keys.reduce((p, c) => {
    return env[c] ? c : p;
  }, keys[0]);
  const configPath = `./webpack.${mode}.js`;
  console.log(`Webpack ${mode} - ${configPath}`);
  if (mode && fs.existsSync(path.resolve(__dirname, configPath))) {
    return mergeConfig(config, require(configPath));
  } else {
    return config;
  }
}

function mergeConfig(target, source) {
  if (typeof source === 'object') {
    Object.keys(source).forEach(key => {
      const value = source[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        target[key] = target[key] || {};
        target[key] = mergeConfig(target[key], value);
      } else {
        target[key] = value;
      }
    });
  }
  return target;
}
