const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'static/[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // Change to production source maps
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        // We configure 'MiniCssExtractPlugin'              
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // Allows to configure how many loaders 
                            // before css-loader should be applied
                            // to @import(ed) resources
                            importLoaders: 1,
                            localsConvention: 'camelCase',
                            // Create source maps for CSS files
                            sourceMap: true
                        }
                    },
                    {
                        // PostCSS will run before css-loader and will 
                        // minify and autoprefix our CSS rules.
                        loader: 'postcss-loader',
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),

        // Create the stylesheet under 'styles' directory
        new MiniCssExtractPlugin({
            filename: 'styles/styles.[hash].css'
        })
    ]
};