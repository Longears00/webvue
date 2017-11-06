
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

var cssLang = [{
    name: 'css',
    reg: /\.css$/,
    loader: 'css-loader',
  }, {
    name: 'stylus',
    reg: /\.styl$/,
    loader: 'stylus-loader',
  },
];

function genLoaders(lang) {
  var loaders = ['css-loader', 'postcss-loader'];
  if (lang.name !== 'css') {
    loaders.push(lang.loader);
  }

  if (isProd) {
    loaders = ExtractTextPlugin.extract({
            use: loaders,
          });
  } else {
    loaders = ExtractTextPlugin.extract({
            use: loaders,
          });
  }

  return loaders;
}

exports.styleLoaders = function () {
    var output = [];
    cssLang.forEach(lang => {
        output.push({
            test: lang.reg,
            use: genLoaders(lang),
          });
      });
    return output;
  };

exports.vueLoaderOptions = function () {
    var options = {
        loaders: {},
      };
    cssLang.forEach(lang => {
        options.loaders[lang.name] = genLoaders(lang);
      });
    return options;
  };
