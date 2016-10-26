const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './build/webpack-bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
      {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: [
           'file?hash=sha512&digest=hex&name=[hash].[ext]',
           'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./client/stylesheets/styles.css', {
      allChunks: true
    })
  ]
};