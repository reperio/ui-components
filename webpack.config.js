const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: '',
        libraryTarget: 'commonjs'
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(s*)css$/,
            use: extractCSS.extract({
                fallback: 'style-loader',

                use: [{
                    //because remove style-loader,my css can't work
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    } // translates CSS into CommonJS
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            })
        },
        {
            test: /\.(png|gif|jpg|cur)$/i,
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }]
    },
    plugins: [extractCSS],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};
