const path              = require("path")
const webpack           = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    bail   : true,
    devtool: "cheap-module-source-map",
    entry  : "./client/index",
    output : {
        path      : path.resolve("dist"),
        filename  : "[name].[chunkhash].js",
        publicPath: "/"
    },
    resolve: { extensions: [".js", ".jsx"] },
    module : {
        loaders: [
            { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/index.html",
            filename: "index.html",
            inject  : true,
            minify  : {
                removeComments               : true,
                collapseWhitespace           : true,
                removeRedundantAttributes    : true,
                useShortDoctype              : true,
                removeEmptyAttributes        : true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash             : true,
                minifyJS                     : true,
                minifyCSS                    : true,
                minifyURLs                   : true
            }
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings    : false,
                conditionals: true,
                unused      : true,
                comparisons : true,
                sequences   : true,
                dead_code   : true,
                evaluate    : true,
                if_return   : true,
                join_vars   : true
            },

            output: {
                comments  : false,
                ascii_only: true
            },

            sourceMap: true
        }),
        new CompressionPlugin({
            asset               : "[path].gz[query]",
            algorithm           : "gzip",
            test                : /\.js$|\.css$|\.html$/,
            threshold           : 10240,
            minRatio            : 0.8,
            deleteOriginalAssets: true
        })
    ],

    node: {
        dgram        : "empty",
        fs           : "empty",
        net          : "empty",
        tls          : "empty",
        child_process: "empty"
    }
}
