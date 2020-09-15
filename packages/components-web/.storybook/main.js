module.exports = {
  stories: [`${__dirname}/../src/**/*.stories.*`],
  presets: ["@storybook/addon-docs/preset"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
  ],
};
