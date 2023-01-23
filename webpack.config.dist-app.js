// This file contains configuration for production build
const path = require("path");
const WebpackStrip = require("strip-loader");

const MODULE_FILE_NAME_APP = "io.webslider.sample-animation-app.js";

// Configuration for animation build used in Web Slider app
module.exports = {
  entry: path.resolve(__dirname, "index-app.ts"),
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: WebpackStrip.loader(
          // "logger.animation.fatal", // this should be visible in prod
          // "logger.animation.error", // this should be visible in prod
          "logger.animation.trace",
          "logger.animation.debug",
          "logger.animation.info",
          "logger.animation.notice",
          "logger.animation.warn",
          "logger.animation.add",
          "logger.animation.flush"
        ),
        exclude: /node_modules/,
      },
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

  output: {
    filename: MODULE_FILE_NAME_APP,
  },
};
