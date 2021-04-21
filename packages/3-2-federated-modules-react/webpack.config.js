const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.jsx",
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
  output: {
    library: {
      type: "umd"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "umd" },
      remotes: {
        my_widget_remote: "my_widget_remote",
      },
      shared: {
        react: { eager: true },
        "react-dom": { eager: true },
      },
    }),
  ],
};
