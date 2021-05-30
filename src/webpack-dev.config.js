const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "build/js/[name].js",
        pathinfo: true,
        publicPath: "/"
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, 
            {
                test: /\.(css)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }


        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src/index.html'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('assests'),
                    to: path.resolve('dist/assests')
                }
            ]
        }),
    ], 
    devServer: {
        hot: true,
        port: "8080",
    }
}