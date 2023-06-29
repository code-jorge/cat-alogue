const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common = require("./webpack.common.config");
const deps = require("./package.json").dependencies;

module.exports = {
  ...common,

  output: {
    publicPath: "http://localhost:8080/",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cat-alogue",
      filename: "remoteEntry.js",
      remotes: {
        components: "components@http://localhost:8081/loader.js",
        source: "source@http://localhost:8082/loader.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    ...common.plugins,
  ],
};
