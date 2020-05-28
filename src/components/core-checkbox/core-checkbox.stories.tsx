import { boolean } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-checkbox",
  title: "Components|Checkbox",
};

export const Default = (): TemplateResult => {
  return html`
    <core-checkbox
      checked=${boolean("Checked", false)}
      disabled=${boolean("Disabled", false)}
      required=${boolean("Required", false)}
      large=${boolean("Large", false)}
    ></core-checkbox>
  `;
};
