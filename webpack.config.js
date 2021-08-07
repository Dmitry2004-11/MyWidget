const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

  entry: {
    main: path.resolve(__dirname, "./src/index.js")
  },

  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./build")
  },

  devServer: {
    contentBase: path.join(__dirname, './build/build.js'),
    compress: true,
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: false
    }),

    new MiniCssExtractPlugin({
      filename: "style.css",
      ignoreOrder: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "babel-preset-es2015", "babel-preset-react"]
          }
        }
      },
        {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            },
          },
          "css-loader"
        ],
      },
    ]
  },

}
