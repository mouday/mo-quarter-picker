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
        exclude: /node_modules/
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

  performance: {
    hints: false
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  // 模式
  mode: "development"
  // devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.mode = "production";

  module.exports.devtool = false;

  module.exports.externals = {
    moment: "moment",
    Vue: "vue",
    ElementUI: "element-ui"
  };

  // 根据不同的执行环境配置不同的入口
  module.exports.entry = "./src/components/index.js";

  module.exports.output = {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "mo-quarter-picker.min.js",
    // 输出一个库
    library: {
      // 指定的就是你使用require时的模块名
      name: "mo-quarter-picker",
      // CMD只能在 Node 环境执行，AMD 只能在浏览器端执行，UMD 同时支持两种执行环境
      type: "umd",
      // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
      umdNamedDefine: true
    },

    clean: true
  };

  // http://vue-loader.vuejs.org/en/workflow/production.html
  // module.exports.plugins = (module.exports.plugins || []).concat([
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       NODE_ENV: '"production"'
  //     }
  //   })
  // ]);

  module.exports.plugins = [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ];

  module.exports.optimization = {
    // 开发环境下启用 CSS 优化
    minimize: true,
    minimizer: [
      // 使用 cssnano 优化和压缩 CSS
      new CssMinimizerPlugin(),

      // 使用 terser 优化和压缩 JS
      new TerserPlugin()
    ]
  };
}
