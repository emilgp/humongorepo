const deps = require("./package.json").dependencies;

module.exports = {
  name: "help_app",
  exposes: {
    "./Help": "./src/containers/Help",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
