import { text, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-dropdown-item",
  title: "Dropdown Item",
};

const targets = {
  _blank: "_blank",
  _self: "_self",
  _parent: "_parent",
  _top: "_top",
};

export const Default = (): TemplateResult => {
  return html`
    <div class="font-inherited">
      <core-dropdown-item
        href="${text("href", null)}"
        target="${select("target", targets, null)}"
        >Option</core-dropdown-item
      >
    </div>
  `;
};
