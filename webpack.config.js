const path = require('path');
const webpack = require('webpack');

const base = path.resolve(__dirname);
const paths = {
  base,
  src     : path.resolve(base, 'src'),
  dist    : path.resolve(base, 'dist'),
};

// Configuration for Ionize examples
module.exports = {
  performance: {
    hints: false,
  },
  target: 'electron',
  devtool: 'source-map',
  entry: 'main.js',
  context: paths.src,
  output: {
    filename: 'main.js',
    path: paths.dist,
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      paths.src,
      'node_modules'
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: {
    '7zip': 'commonjs 7zip'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].html'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'],
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
