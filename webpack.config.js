const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cssExtract = new ExtractTextPlugin("styles.css");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  entry: {
    entry: ["babel-polyfill", "react-hot-loader/patch", "./client/index.jsx"],
    vendor: ["react", "react-dom", "react-redux", "react-router"]
    
  },
   resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
    //create output path
    filename: "[name].bundle.js",
    path: path.join(__dirname, "client", "public", "dist"),
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for any files ending in .js or .jsx
        exclude: [/node_modules/], // doesn't include node modules
        use: ["babel-loader"] // uses babel as transpiler
      },
      {
        test: /\.(css|sass|scss)$/, // checks for any files ending in .css, .sass, or .scss
        use:
          process.env.NODE_ENV === "production"
            ? cssExtract.extract({
                use: ["css-loader", "sass-loader"]
              })
            : ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?limit=30000&name=images/[name].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: "./client/public",
    publicPath: "/dist/",
    historyApiFallback: true,
    hot: true
  },
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          cssExtract,
          new webpack.optimize.ModuleConcatenationPlugin(),

          new UglifyJsPlugin({
            uglifyOptions: {
              warnings: false,
              ie8: false,
              output: {
                comments: false
              }
            }
          }),

          
          
        ]
      : [new webpack.HotModuleReplacementPlugin()],
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "cheap-module-eval-source-map"
};
