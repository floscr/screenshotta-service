'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    main: path.join(__dirname, 'examples/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ],
  },
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.node'],
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  },
  target: 'electron-main',
}
