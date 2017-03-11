var path = require('path');
var webpack = require("webpack");
var sourcesPath = path.join(__dirname, 'sources');
var nodeModulesPath = path.join(__dirname, 'node_modules');
module.exports = {
  entry: {
    app: "./index.jsx",
    vendor: [
      'react',
      'react-dom'
    ]
  },

  output: {
    filename: '../backend/static/app.js'
  },


  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename : "../backend/static/vendor.js"
    }),
    // Polyfill for old IE https://gist.github.com/Couto/b29676dd1ab8714a818f
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: nodeModulesPath,
        query:
          {
              presets:['react']
          }
      }
    ],
    noParse: /node_modules\/quill\/dist/
  },
  resolve: {
    modules: [sourcesPath, nodeModulesPath],
    extensions: ['.js','.jsx']
  }
};
