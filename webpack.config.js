const path = require("path");
const autoprefixer = require("autoprefixer");
const sass = require("node-sass");
const htmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    src: path.resolve(__dirname, "src"),
    build: path.resolve(__dirname, "build")
};

module.exports = {
    entry: `${PATHS.src}/index.jsx`,
    output: {
        path: PATHS.build,
        filename: "bundle.js",
        publicPath: `/`
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|json)$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsersList: ["ie >= 10", "last 4 versions"]
                                })
                            ]
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            hash: true,
            template: "src/index.html"
        })
    ],
    devServer: {
        port: 8080,
        hot: true,
        overlay: true
    }
};