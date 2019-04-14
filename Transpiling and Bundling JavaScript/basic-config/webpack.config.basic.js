const path = require('path'),
webpack = require('webpack');

const publicPath = '/static/';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'wwwroot', 'static'),
    filename: 'app.bundle.js',
    publicPath,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'wwwroot'),
    watchContentBase: false,
    publicPath,
    hotOnly: true
  }
}
