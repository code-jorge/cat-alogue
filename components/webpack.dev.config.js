const common = require("./webpack.common.config");

module.exports = {
  ...common,
  output: {
    publicPath: "http://localhost:8080/",
  },
};
