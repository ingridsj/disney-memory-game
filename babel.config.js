module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            navigation: "./src/navigation",
            utils: "./src/utils",
            assets: "./src/assets",
            constants: "./src/constants",
            hooks: "./src/hooks",
            context: "./src/context",
            services: "./src/services",
            styles: "./src/styles"
          },
        },
      ],
    ],
  }
}