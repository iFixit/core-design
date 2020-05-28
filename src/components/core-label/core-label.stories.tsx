import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-label",
  title: "Components|Label",
};

const displays = {
  inline: "inline",
  block: "block",
};

export const Default = (): TemplateResult => {
  return html`
    <core-label
      color=${text("color", "gray-2")}
      display=${select("Display", displays, "block")}
      >Form Label</core-label
    >
  `;
};

export const HelpURL = (): TemplateResult => {
  return html`
    <core-label helpurl=${text("Help URL", "https://www.dozuki.com/")}
      >Form Help Label</core-label
    >
  `;
};
