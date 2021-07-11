module.exports = {
  stories: ["../src/**/*.stories.@(ts|mdx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "storybook-addon-designs",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal(config) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            oneOf: [
              {
                resourceQuery: /spec/,
                use: ["web-component-analyzer-loader"],
              },
              // https://github.com/storybookjs/storybook/issues/12578
              {
                test: /\.ts$/,
                use: [
                  {
                    loader: require.resolve("ts-loader"),
                    options: {
                      transpileOnly: true,
                    },
                  },
                ],
              },
              // babel-loader used by Storybook throws an unfriendly and incorrect error message
              // on projects that set `type: "module"`. Since this project uses TS for all files,
              // I disabled the babel-loader for all JS files.
              {
                test: /\.js$/,
                type: "javascript/auto",
              },
              ...config.module.rules,
            ],
          },
        ],
      },
    };
  },
};
