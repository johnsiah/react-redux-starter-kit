const path              = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./client/index.html",
    filename: "index.html",
    inject  : "body"
})

module.exports = {
    entry  : "./client/index.jsx",
    plugins: [HtmlWebpackPluginConfig],
    resolve: { extensions: [".js", ".jsx"] },
    output : {
        path      : path.resolve("dist"),
        publicPath: "/",
        filename  : "[name].[chunkhash].js"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    },

    devServer: {
        historyApiFallback: true,
        port              : 3000,
        proxy             : {
            "^/api/*": {
                target: "http://localhost:8000/api/",
                secure: false
            }
        }
    }
}
