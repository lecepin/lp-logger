const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const umdConfig = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "LpLogger",
    libraryTarget: "umd",
    libraryExport: "default",
    globalObject: "this",
  },
  module: {
    rules: [{ test: /\.js?$/, exclude: /node_modules/, use: ["babel-loader"] }],
  },
  mode: "production"
};

const esmConfig = {
  entry: "./src/index.js",
  output: {
    filename: "index.esm.js",
    path: path.resolve(__dirname, "dist"),
    library: "LpLogger",
    libraryTarget: "var",
    globalObject: "this",
  },
  module: {
    rules: [{ test: /\.js?$/, exclude: /node_modules/, use: ["babel-loader"] }],
  },
  plugins: [new EsmWebpackPlugin()],
  mode: "production"
};

module.exports = [umdConfig, esmConfig];
