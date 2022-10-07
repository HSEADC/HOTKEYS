const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: './dev_build'
  },
  output: {
    path: path.resolve(__dirname, 'dev_build')
  }
})
