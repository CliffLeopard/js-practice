const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./wepack.base.config')
module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}) 