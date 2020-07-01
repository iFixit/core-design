import { addDecorator, addParameters, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { coreTheme } from "./core-theme";

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  docs: {
    iframeHeight: "250px",
    inlineStories: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme: coreTheme,
  },
});

const req = require.context(
  "../../packages/components/src",
  true,
  /.stories.(js|ts)$/
);

configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
