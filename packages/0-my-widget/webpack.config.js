const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
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
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },
};

module.exports = [
  {
    ...commonConfig,
    entry: "./src/index",
    output: {
      filename: "my-widget.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "umd",
        name: "MyWidget",
      },
    },
  },
  {
    ...commonConfig,
    entry: "./src/federated",
    output: {
      filename: "my-widget-federated.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "my_widget_remote",
        filename: "my-widget-remote.js",
        exposes: {
          ".": "./src/index",
        },
        shared: ["react", "react-dom"],
      }),
    ],
  },
];
