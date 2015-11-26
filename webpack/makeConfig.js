'use strict';

var webpack = require('webpack');

module.exports = function(mode, options) {
  var isDevelopment = mode === 'development';
  var isProduction = mode === 'production';

  return {
    cache: isDevelopment,
    debug: isDevelopment,
    devtool: (isDevelopment) ? 'eval' : '',
    watch: isDevelopment,
    entry: {
      bundle: './client/main.js'
    },
    output: {
      path: './server/static/build',
      filename: '[name].js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json-loader', exclude: /node_modules/ }
      ]
    },
    plugins: (function() {
      var plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')
          },
          '__DEBUG__': isDevelopment
        })
      ];

      if (isProduction) {
        plugins = plugins.concat([
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
          })
        ]);
      }

      return plugins;
    })()
  };
};
