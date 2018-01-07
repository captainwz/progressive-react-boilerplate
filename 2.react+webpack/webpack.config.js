var path = require('path');
var dirPah = __dirname;


module.exports = {
    entry: path.resolve(dirPah, './src/entry.js'),
    output: {
        path: path.resolve(dirPah, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 102400
                    }
                }
            }
        ]
    }
}