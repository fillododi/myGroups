import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileURLToPath} from "url"

export default {
    entry: './src/index.js',
    output: {
        path: path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: './dist',
        hot: true,
    },
};
