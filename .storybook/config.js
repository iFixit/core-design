import { addParameters, configure, addDecorator } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withActions, configureActions } from "@storybook/addon-actions";
import { withLinks } from "@storybook/addon-links";

addParameters({
  options: {
    panelPosition: "right",
  },
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withLinks);
addDecorator(withActions("click"));

configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20,
});

const loader = require("../loader/index.cjs.js");
const local_stories = require.context(
  "../src",
  true,
  /\/[^/ ]+?\/.+\/.+\.stories\.js$/
);

const loadStories = () => {
  loader.defineCustomElements(window);
  local_stories.keys().forEach((filename) => local_stories(filename));
};

configure(loadStories, module);
