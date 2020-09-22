import {
  configure,
  addDecorator,
  addParameters,
  setCustomElements,
} from "@storybook/web-components";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { coreTheme } from "./core-theme";

import customElements from "../custom-elements.json";

setCustomElements(customElements);

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
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});

const req = require.context("../src", true, /.stories.(tsx|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
