const merge = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base')

const config = require('../config')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: ['url-loader']
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    port: config.port,
  }
})
