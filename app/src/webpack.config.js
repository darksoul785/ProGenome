const path = require('path');

module.exports = {
    // otras configuraciones ...
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: '../assets/'
          }
        }
      ]
    }
  };
  