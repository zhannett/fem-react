/**
 * Created by janetkulyk on 2017-04-20.
 */

const path = require('path')

module.exports = {
    context: __dirname,
    entry: './js/ClientApp.js',
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                include: path.resolve(__dirname, 'js'),
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}