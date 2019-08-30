const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
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
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024
          }
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'hashed',
    splitChunks: {
      maxSize: 2 * 1024 * 1024,
      cacheGroups: {
        npm: {
          name: 'npm',
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
          chunks: 'initial'
        },
        common: {
          name: 'common',
          test: path.resolve('src/common'),
          priority: 10,
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new InlineManifestWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    new OptimizeCSSAssetsPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['zh-cn']
    }),
    new CleanWebpackPlugin()
  ]
})
