const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: ['./src', './dist'],
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true,
    liveReload: true,
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'localhost',
  },
});
