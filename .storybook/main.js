module.exports = {
  stories: [
    "../src/Intro.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: "@storybook/react",
 // staticDirs: ['../storybook-static'],
}
  //staticDirs: ["../public"],
