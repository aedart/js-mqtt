var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './node_modules/mqtt/mqtt.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'mqtt.js',
        publicPath: '/',
        library: 'mqtt'
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx'],
    //     root: path.resolve(path.join(__dirname, 'src')),
    // },
    devtool: 'source-map',
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoErrorsPlugin()
    // ],
    // module: {
    //     loaders: [
    //         {
    //             test: /\.jsx?$/,
    //             loaders: ['react-hot', 'babel'],
    //             include: path.join(__dirname, 'src')
    //         }
    //     ]
    // }
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        //__filename: "mock",
        //__dirname: "mock",
        setImmediate: false
    }
};
