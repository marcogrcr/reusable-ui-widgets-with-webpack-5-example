const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
  plugins: [new ModuleFederationPlugin({
    library: { type: "var", name: "approach_5" },
    remotes: {
      "my-widget": "my_widget_remote"
    }
  })],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".wasm"],
  }
};
