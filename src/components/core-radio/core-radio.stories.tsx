import { boolean } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-radio",
  title: "Components|Radio",
};

export const Default = (): TemplateResult => {
  return html`
    <core-radio
      checked="${boolean("Checked", false)}"
      disabled="${boolean("Disabled", false)}"
      large="${boolean("Large", false)}"
    ></core-radio>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-radio
      checked="${boolean("Checked", false)}"
      disabled="${boolean("Disabled", false)}"
      large="${boolean("Large", true)}"
    ></core-radio>
  `;
};
