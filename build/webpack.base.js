const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      '@mock': path.join(__dirname, '..', 'mock'),
      '@src': path.join(__dirname, '..', 'src'),
      '@redux': path.join(__dirname, '..', 'src/redux'),
      '@unstated': path.join(__dirname, '..', 'src/unstated'),
      '@common': path.join(__dirname, '..', 'src/common'),
      '@utils': path.join(__dirname, '..', 'src/common/utils'),
      '@container': path.join(__dirname, '..', 'src/common/container'),
      '@components': path.join(__dirname, '..', 'src/common/components'),
    },
    extensions: ['.js', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts)$/,
        include: path.resolve('./src'),
        use: 'babel-loader',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BUILD_TO: JSON.stringify(process.env.BUILD_TO)
    }),

    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
      template: 'index.html'
    }),
  ],
  performance: {
    hints: false
  }
}
