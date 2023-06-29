const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common = require("./webpack.common.config");
const deps = require("./package.json").dependencies;

module.exports = {
  ...common,
  output: {
    publicPath: "https://cat-alogue.netlify.app/",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cat-alogue",
      filename: "remoteEntry.js",
      remotes: {
        components: "components@https://cat-components.netlify.app/loader.js",
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
