const path = require('path');
module.exports = {
    dev: {
        outputPath: path.resolve(__dirname, '../static'),
        outputPublicPath: '/',
        port: 8009,
      },
    prod: {
        outputPath: path.resolve(__dirname, '../static'),
        outputPublicPath: '/static/',
      },
  };
