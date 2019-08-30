const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@common': path.resolve(__dirname, './src/common'),
    },
    extensions: ['.js', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts)$/,
        include: path.resolve('./src'),
        use: 'babel-loader'
      },
      {
        test: /\.ts(x?)$/,
        include: path.resolve('./src'),
        use: "awesome-typescript-loader"
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BUILD_TO: JSON.stringify(process.env.BUILD_TO)
    }),

    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  performance: {
    hints: false
  }
}
