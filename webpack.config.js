const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    publicPath: '/'
  },

  devServer: {
    quiet: true,
    inline: true,
    port: 1414,
    historyApiFallback: true
  },

  module: {
    loaders: [
      // Javascript
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      // Stylesheets
      { test: /\.s?css$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },

      // HTML
      { test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  },

  devtool: 'eval-source-map',

  plugins: [
    // HTML generation
    new HtmlWebpackPlugin({
      title: 'Proto HTML',
      template: 'index.ejs'
    })
  ]
};
