const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  output: {
    library: {
      type: "umd",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "umd" },
      remotes: {
        "my-widget": "my_widget_remote",
      },
      shared: {
        react: { eager: true },
        "react-dom": { eager: true },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".wasm"],
  },
};
