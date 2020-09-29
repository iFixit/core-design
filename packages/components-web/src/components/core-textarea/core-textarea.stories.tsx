import { boolean, number, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-textarea",
  title: "Buttons & Inputs/Textarea",
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
    <core-textarea
      cols="${number("Columns", 50)}"
      disabled="${boolean("Disabled", false)}"
      label=${text("Label", "Label")}
      label-display=${select("Label Display", labelDisplays, "block")}
      label-position=${select("Label Position", labelPositions, "left")}
      placeholder="${text("Placeholder", "Placeholder")}"
      required="${boolean("Required", false)}"
      rows="${number("Rows", 10)}"
    ></core-textarea>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-textarea></core-textarea>
  `;
};

export const Value = (): TemplateResult => {
  return html`
    <core-textarea value="Value"></core-textarea>
  `;
};
