
const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    publicPath:  '/dist/',
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          use: 'babel-loader',
          include: [path.resolve(__dirname, 'src')],
        },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: utils.vueLoaderOptions(),
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000,
            name:  'images/[name].[hash:7].[ext]',
          },
        },
        ],
      },
      {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [{
              loader: 'url-loader',
              options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]',
                  },
            },
          ],
        },
    ],
  },
};
