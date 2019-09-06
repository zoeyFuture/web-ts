const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      '@src': path.join(__dirname, '..', 'src'),
      '@store': path.join(__dirname, '..', 'src/store'),
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
