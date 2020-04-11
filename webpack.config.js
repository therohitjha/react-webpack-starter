const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry:"./src/index.js",
  mode:"development",
  module: {
    rules: [
      {
        test: /.\(js|jsx)$/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase:path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly:true
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename:"bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};
