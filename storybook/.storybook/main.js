module.exports = {
  stories: [
    "${__dirname}/../packages/components/src/components/**/*.stories.js",
  ],
  presets: ["@storybook/addon-docs/preset"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
  ],
};
