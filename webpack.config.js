/**
 * Created by FG0003 on 10/04/2017.
 */

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'angular-material-components.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};