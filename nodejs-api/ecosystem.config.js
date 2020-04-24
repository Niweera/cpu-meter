module.exports = {
  apps: [
    {
      name: "cpu-meter",
      script: "./index.js",
      watch: true,
      args: ["--color"],
    },
  ],
};
