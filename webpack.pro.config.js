var path = require("path");
// var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const fs = require("fs");

// const package = JSON.parse(fs.readFileSync('./package.json'));
const { version } = require("./package.json");

module.exports = {
  // 根据不同的执行环境配置不同的入口
  entry: "./src/main-pro.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename: "build.[hash:8].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
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
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    // noInfo: true,
    open: true,
    // overlay: true,
    // port: 8080
  },

  performance: {
    hints: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index-test.html",
      minify: false,
      inject: "body",
      templateParameters: {
        version: version,
      },
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],

  // 模式
  mode: "production",

  externals: {
    moment: "moment",
    vue: "Vue",
    "element-ui": "ElementUI",
    "mo-quarter-picker": "MoQuarterPicker",
  },

  devtool: false,
  // devtool: "#eval-source-map"

  optimization: {
    // 开发环境下启用 CSS 优化
    minimize: true,
    minimizer: [
      // 使用 cssnano 优化和压缩 CSS
      new CssMinimizerPlugin(),

      // 使用 terser 优化和压缩 JS
      new TerserPlugin({
        // 不将注释提取到单独的文件中
        extractComments: false,
      }),
    ],
  },
};
