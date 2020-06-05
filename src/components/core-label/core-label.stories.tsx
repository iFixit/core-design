import { select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-label",
  title: "Components/Label",
};

const displays = {
  inline: "inline",
  block: "block",
};

export const Default = (): TemplateResult => {
  return html`
    <core-label
      color=${text("color", "gray-5")}
      display=${select("Display", displays, "block")}
      >Form Label</core-label
    >
  `;
};

export const HelpURL = (): TemplateResult => {
  return html`
    <div style="max-width: 200px">
      <core-label helpurl=${text("Help URL", "https://www.dozuki.com/")}
        >Form Help Label</core-label
      >
    </div>
  `;
};
