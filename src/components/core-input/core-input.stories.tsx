import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-input",
  title: "Components|Input",
};

const inputkeyboards = {
  none: "none",
  text: "text",
  tel: "tel",
  url: "url",
  email: "email",
  numeric: "numeric",
  decimal: "decimal",
  search: "search",
};

export const Default = (): TemplateResult => {
  return html`
    <core-input
      autofocus=${boolean("autofocus", false)}
      disabled=${boolean("Disabled", false)}
      inputkeyboard=${select("Inputkeyboard", inputkeyboards, "none")}
      placeholder=${text("Placeholder", "Placeholder")}
      required=${boolean("Required", false)}
      size=${boolean("Large", false)}
    ></core-input>
  `;
};

export const Icon = (): TemplateResult => {
  return html`
    <core-input
      icon=${text("Icon", "info")}
      placeholder=${text("Placeholder", "Placeholder")}
    ></core-input>
  `;
};
