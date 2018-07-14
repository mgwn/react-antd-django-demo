var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDebug = (process.env.NODE_ENV === 'development');

var SRC_PATH = path.resolve(__dirname, 'src');
var ASSET_PATH = path.resolve(SRC_PATH, 'assets');
var OUT_PUT_PATH = isDebug ? path.join(__dirname, '/dist') : path.resolve(__dirname, '..', 'static');
var PUBLICH_PATH = isDebug ? '/dist/' : 'static';


module.exports = {
    devServer: {
        disableHostCheck: true
    },

    entry: { "index": path.resolve(SRC_PATH, 'index') },

    output: {
        filename: isDebug? 'js/[name].js' : 'js/[name].[hash:8].js' ,
        chunkFilename: isDebug? 'js/[name].chunk.js' : 'js/[name].chunk.[hash:8].js',
        path: OUT_PUT_PATH,
        publicPath: PUBLICH_PATH,
    },

    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), SRC_PATH],
        extensions: ['.jsx','.js','json'],
        alias: {
            '@components': path.join(SRC_PATH, 'components'),
            '@routes': path.join(SRC_PATH, 'routes'),
            '@services': path.join(SRC_PATH, 'services'),
            '@containers': path.join(SRC_PATH, 'containers')
        },
    },

    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["import", { libraryName: "antd", style: "css" }]
                    ],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
              {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: 'url?limit=8192&name=images/[name].[hash:8].[ext]'
              },
              {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/font-woff'
              },
              {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/font-woff2'
              },
              {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/octet-stream'
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'svg-url-loader?limit=10000&mimetype=image/svg+xml'
              }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: isDebug?'js/vendors.js':'js/vendors.[hash:8].js'
        }),
        new HtmlWebpackPlugin({
            chunk: ['vendors', 'index'],
            template: `raw-loader!${path.join(ASSET_PATH, 'index.html')}`,
            filename: isDebug? path.join(__dirname, 'index.html') : path.join(OUT_PUT_PATH, 'index.html'),
        }),
        new ExtractTextPlugin(isDebug?'css/[name].css':'css/[name].[hash:8].css'),
    ],

}