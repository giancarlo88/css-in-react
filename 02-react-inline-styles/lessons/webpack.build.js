var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill','./App.js'],
  output: {
    path: path.join(__dirname + '/build'),
    filename: 'app.js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: '../../assets/templates/app.html' }),
    new ExtractTextPlugin({ filename: 'app.css', disable: false, allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}