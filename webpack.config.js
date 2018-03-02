var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');


module.exports = env => {
  let devFlagPlugin = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env.name),
      'WSYS_ENV': true,  // 是否连接ERP接口
      'API_ENV': JSON.stringify(env.name),
      'DEBUG': false
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  })

  let _obj = {

    devtool: 'eval',

    entry: [
      'babel-polyfill',
      './js/entry.js'
    ],

    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.[hash].js'
    },

    plugins: [
      devFlagPlugin,
      new UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        title: '云仓',
        template: 'index.ejs',
        inject: 'body',
        hash: true
      }),
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
              loader: 'css-loader?modules',
            }, {
              loader: 'resolve-url-loader',
            }, {
              loader: 'sass-loader?sourceMap?modules'
            }
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
          test: /\.(png|jpg|jpeg)$/,
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
  return _obj
}
