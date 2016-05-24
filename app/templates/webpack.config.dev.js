var webpack = require('webpack');

var devServer = '<%= devServerPath %>';
var webpackServer = '<%= webpackDevServer %>';
var publicPath = webpackServer + '/bundled/';
var bundleDir = '/bundled/';
var bundlePath = 'app/js/bundled';

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            'webpack-dev-server/client?' + webpackServer,
            'webpack/hot/only-dev-server',
            './app/js/src/app.js'
        ]
    },
    output: {
        path: 'app/js/bundled/',
        filename: '[name].bundle.js',
        publicPath: publicPath
    },
    module: {
        loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] }]
    },
    resolve: {
        alias: {
            react: 'react'
        },
        // so we can import things other than .js files with the extension
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: [
            'node_modules'
        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': devServer,
            'Access-Control-Allow-Credentials': true
        }
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
