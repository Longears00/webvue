const webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
const devConfig = require('./webpack.dev.config');
const config = require('./config');
const compiler = webpack(devConfig);

var server = new WebpackDevServer(compiler, {
    hot: true,
    noInfo: true,
    publicPath: config.dev.outputPublicPath,
    stats: { colors: true },
  });
server.listen(config.dev.port, '0.0.0.0');
var url = `http://localhost:${config.dev.port}/`;
var opn = require('opn');
server.middleware.waitUntilValid(function () {
    console.log(`> Listening at ${url}`);
    opn(`${url}`);
  });
