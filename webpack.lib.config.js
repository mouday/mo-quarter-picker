var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');

const package = JSON.parse(fs.readFileSync('./package.json'));

module.exports = {
  // 根据不同的执行环境配置不同的入口
  entry: "./src/components/index.js",

  output:{
    clean: true,
    path: path.resolve(__dirname, "./lib"),
    // publicPath: "/lib/",
    filename: "mo-quarter-picker.min.js",
    // 输出一个库
    library: {
      // 指定的就是你使用require时的模块名
      name: "MoQuarterPicker",
      // CMD只能在 Node 环境执行，AMD 只能在浏览器端执行，UMD 同时支持两种执行环境
      type: "umd",
      // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
      umdNamedDefine: true
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
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

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html"
    // }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: "mo-quarter-picker.min.css",
    }),
    // 版本信息
    new webpack.BannerPlugin({
      banner: `${package.name} \nV${package.version}`,
    })
  ],
  
  // 模式
  mode: "production",

  externals: {
    moment: "moment",
    Vue: "vue",
    ElementUI: "element-ui"
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
        extractComments: false
      })
    ]
  }
};
