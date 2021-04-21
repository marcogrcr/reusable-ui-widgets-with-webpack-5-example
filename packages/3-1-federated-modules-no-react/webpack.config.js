const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  plugins: [new ModuleFederationPlugin({
    library: { type: "var", name: "approach_5" },
    remotes: {
      my_widget_remote: "my_widget_remote"
    }
  })],
};
