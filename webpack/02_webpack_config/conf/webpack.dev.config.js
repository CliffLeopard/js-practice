const webpackMerge = require('webpack-merge')
const baseConfig = require('./wepack.base.config')
module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  }
}) 