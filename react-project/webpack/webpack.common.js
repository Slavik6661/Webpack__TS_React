const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname,"..","src"),
    },
  },
  devServer: {
    port: 8001,
    static: {
      directory: path.join(__dirname, "..", "src"),
    },
    watchFiles: {
      paths: ['src/**/*'],
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
            from: path.resolve(__dirname, "..","src/public"),
            to: path.resolve(__dirname,"..","src/imgs"),
            noErrorOnMissing: true,
            }   
        ],      
      }),
      new Dotenv(),
  ],
};
