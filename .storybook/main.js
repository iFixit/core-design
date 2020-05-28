module.exports = {
  stories: [`${__dirname}/../src/**/*.stories.*`],
  presets: ["@storybook/addon-docs/preset"],
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-actions/register",
  ],
};
