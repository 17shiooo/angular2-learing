var webpack = require('webpack');

module.exports = {
    entry: './app/main',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'css-loader'},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.ts/, loader: 'ts-loader'}
        ]
    }
}