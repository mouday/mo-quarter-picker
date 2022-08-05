var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  // 根据不同的执行环境配置不同的入口
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "build.js",
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
        // options: {
        //   loaders: {}
        //   // other vue-loader options go here
        // }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    // noInfo: true,
    open: true
    // overlay: true,
    // port: 8080
  },

  // performance: {
  //   hints: false
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  // 模式
  mode: "development",
  // devtool: "#eval-source-map"
};
