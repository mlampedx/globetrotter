const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: './client/index.js',
  html: './client/index.html',
  dist: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html,
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'webpack-bundle.js',
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }, 
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, 
    {
      test: /\.(css|scss)$/,
      loaders: ['style', 'css', 'sass']
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
  // plugins: [
  //   new ExtractTextPlugin('./client/styles.css', {
  //     allChunks: true
  //   }),
  // ]
};