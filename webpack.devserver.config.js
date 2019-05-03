const webpack = require('webpack')
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  target: 'node',
  entry: ['babel-polyfill', './server.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  externals: [webpackNodeExternals()],
  resolve: {
    extensions: ['.jsx', '.json', '.js']
  }
})
