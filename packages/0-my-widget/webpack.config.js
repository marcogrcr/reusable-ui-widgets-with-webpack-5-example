const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = {
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
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".wasm"],
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
          "./hello-widget": "./src/hello-widget",
          "./my-widget": "./src/my-widget"
        },
        shared: ["react", "react-dom"],
      }),
    ],
  },
];
