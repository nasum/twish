const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')
const path = require('path');
const I18nPlugin = require("i18n-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExternalsPlugin = webpack.ExternalsPlugin;

const languages = {
  "en": null,
  "jp": require("./src/i18n/jp.json")
};

module.exports = {
  entry: {
    "browser/app": './src/browser/app.js',
    "renderer/index": './src/renderer/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js"
  },
  target: "node",
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  node: {
    __dirname: false
  },
  plugins: [
    new ExternalsPlugin('commonjs', ['electron']),
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html'
      }, {
        from: 'src/package.json',
        to: 'package.json'
      }
    ]),
    new I18nPlugin(languages["jp"]),
    new ExtractTextPlugin("css/photon.css"),
  ]
}
