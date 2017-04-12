/**
 * Created by FG0003 on 10/04/2017.
 */
var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/js/index.module.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'angular-material-components.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};