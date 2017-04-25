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
    extensions: ['.webpack.js', '.web.js', '.js', '.css', '.scss', '.vue'],
    alias: {
      'vue': 'vue/dist/vue',
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"]
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
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            }),
            sass: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader?indentedSyntax',
              fallback: 'vue-style-loader'
            })
          }
        }
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "./build"
        })
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
          publicPath: "./build"
        })
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=application/font-woff&name=[hash].[ext]&outputPath=fonts/&publicPath=../"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=application/octet-stream&name=[hash].[ext]&outputPath=fonts/&publicPath=../"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=application/octet-stream&name=[hash].[ext]&outputPath=fonts/&publicPath=../"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=image/svg+xml&name=[hash].[ext]&outputPath=fonts/&publicPath=../"
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
    new ExtractTextPlugin("css/style.css"),
  ]
}
