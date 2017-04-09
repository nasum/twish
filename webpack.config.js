const webpack           = require('webpack')
const path              = require('path');
const I18nPlugin        = require("i18n-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExternalsPlugin   = webpack.ExternalsPlugin;

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
    extensions: ['.webpack.js', '.web.js', '.js', '.scss']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
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
    ]),
    new I18nPlugin(
			languages["jp"]
		)
  ]
}
