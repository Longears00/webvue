
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: ['css-loader',  'postcss-loader'],
              }),
              stylus: ExtractTextPlugin.extract({
                    use: ['css-loader',  'postcss-loader', 'stylus-loader'],
                  }),
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader',  'postcss-loader'],
        }),
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'stylus-loader'],
            }),
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
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
  ],
  resolve: {
    extensions: [' ', '.js'],
    alias: {
      vue: 'vue/dist/vue.js',
      filter: path.join(__dirname, './src/filters'),
    },
  },
  devtool: 'eval-source-map',
};
