import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-select",
  title: "Buttons & Inputs/Select",
};

const labelDisplays = {
  block: "block",
  inline: "inline",
};

const labelPositions = {
  left: "left",
  right: "right",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-select
      autofocus=${boolean("Autofocus", false)}
      disabled=${boolean("Disabled", false)}
      label=${text("Label", "Label")}
      label-display=${select("Label Display", labelDisplays, "block")}
      label-position=${select("Label Position", labelPositions, "left")}
      required=${boolean("Required", false)}
    >
      <option value="option-1" selected>Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </core-select>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-select>
      <option value="option-1" selected>Option 1</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
    </core-select>
  `;
};
