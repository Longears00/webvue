const path = require('path');
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
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  resolve: {
    extensions: [' ', '.js'],
    alias: {
      vue: 'vue/dist/vue.js',
      filter: path.join(__dirname, './src/filters'),
    },
  },
  devtool: 'eval-source-map',
};
