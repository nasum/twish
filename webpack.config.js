const webpack = require('webpack')
const path = require('path');
const ExternalsPlugin = webpack.ExternalsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    "main/app": './src/main/app.js',
    "render/index": './src/render/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js"
  },
  target: "node",
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    __dirname: false
  },
  plugins: [
    new ExternalsPlugin('commonjs', [
      'electron'
    ]),
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: 'index.html' },
      { from: 'src/package.json', to: 'package.json' }
    ])
  ]
}
