
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ entryPoint, outputPath, templatePath, port }) => ({
    mode: 'development',
    entry: entryPoint,
    output: {
        path: outputPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }],
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: port,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: templatePath,
            inject: 'body',
        }),
    ],
});
