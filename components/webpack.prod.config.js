const common = require("./webpack.common.config");

module.exports = {
  ...common,
  output: {
    publicPath: "https://cat-components.netlify.app/",
  },
};