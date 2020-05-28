import { text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-icon",
  title: "Components|Icon",
};

export const Default = (): TemplateResult => {
  return html`
    <core-icon
      color="${text("Color", "gray-5")}"
      icon="${text("Icon", "menu")}"
      src="${text("Src", null)}"
    ></core-icon>
  `;
};
