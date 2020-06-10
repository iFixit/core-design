import { boolean } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-checkbox",
  title: "Buttons & Inputs/Checkbox",
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

export const Large = (): TemplateResult => {
  return html`
    <core-checkbox
      checked=${boolean("Checked", false)}
      disabled=${boolean("Disabled", false)}
      required=${boolean("Required", false)}
      large=${boolean("Large", true)}
    ></core-checkbox>
  `;
};