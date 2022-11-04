// This file contains configuration for development
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CreateHashFileWebpack = require("create-hash-file-webpack");

const PORT = 3005;
const MODULE_FILE_NAME_PLAYER = "sample-animation-player.js";
const MODULE_FILE_NAME_APP = "sample-animation-app.js";
const ANIMATION_UID = "sample-animation";

// Common configuration for Animation used in Player and App
const webpackCommon = {
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

// Configuration for Development
const webpackDev = {
  entry: [
    path.resolve(__dirname, "index-player.ts"),
    path.resolve(__dirname, "index-app.ts"),
  ],
  ...webpackCommon,
  devtool: "source-map",
  mode: "development",
  devServer: {
    hot: false,
    liveReload: false,
    static: "./static",
    port: PORT,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  plugins: [
    new CreateHashFileWebpack([
      {
        path: "./static",
        fileName: "hash.json",
        content: `{"hash":"[hash]"}`,
      },
    ]),
    new HtmlWebpackPlugin({
      template: "static/index.html",
      templateParameters: {
        port: PORT,
        filenamePlayer: MODULE_FILE_NAME_PLAYER,
        filenameApp: MODULE_FILE_NAME_APP,
        animationUid: ANIMATION_UID,
      },
    }),
  ],
};

// Configuration for Animation used in Web Slider app
const webpackApp = {
  entry: path.resolve(__dirname, "index-app.ts"),
  ...webpackCommon,
  output: {
    filename: MODULE_FILE_NAME_APP,
  },
};

// Configuration for Animation used in Web Slider Player
const webpackPlayer = {
  entry: path.resolve(__dirname, "index-player.ts"),
  ...webpackCommon,
  output: {
    filename: MODULE_FILE_NAME_PLAYER,
  },
};

module.exports = [webpackDev, webpackApp, webpackPlayer];
