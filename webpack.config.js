const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
``
module.exports = {
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'},{loader: 'css-loader'}]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {loader: 'file-loader'}
            },
    ]},
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output!"
        }),
        new CleanWebpackPlugin()
    ],
};