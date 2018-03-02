const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin')
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin')

var devFlagPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('local'),
    'WSYS_ENV': true,  // 是否连接ERP接口
    'API_ENV': JSON.stringify(process.env.API_ENV),
    'DEBUG': false
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'babel-polyfill',
    './js/entry.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    devFlagPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
    }),
  ],

  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }]
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'resolve-url-loader',
          }, {
            loader: 'sass-loader?sourceMap'
          },
        ],
      },
      {
        test: /\.css?$/,

        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }
        ],
        include: __dirname
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader'
      }, {
        loader: 'json-loader',
        test: /\.json$/
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  }
}
