const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const umdConfig = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "lpFileNameSort",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  module: {
    rules: [{ test: /\.js?$/, exclude: /node_modules/, use: ["babel-loader"] }],
  },
};

const esmConfig = {
  entry: "./src/index.js",
  output: {
    filename: "index.esm.js",
    path: path.resolve(__dirname, "dist"),
    library: "lpFileNameSort",
    libraryTarget: "var",
    globalObject: "this",
  },
  module: {
    rules: [{ test: /\.js?$/, exclude: /node_modules/, use: ["babel-loader"] }],
  },
  plugins: [new EsmWebpackPlugin()],
};

module.exports = [umdConfig, esmConfig];
