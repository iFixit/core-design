import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-checkbox",
  title: "Buttons & Inputs/Checkbox",
};

const labelPositions = {
  left: "left",
  right: "right",
};

const sizes = {
  default: "default",
  large: "large",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-checkbox
      checked=${boolean("Checked", false)}
      disabled=${boolean("Disabled", false)}
      label=${text("Label", "Label")}
      labelPosition=${select("Label position", labelPositions, "right")}
      size=${select("Size", sizes, "default")}
    ></core-checkbox>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-checkbox label="Label"></core-checkbox>
  `;
};

export const Checked = (): TemplateResult => {
  return html`
    <core-checkbox label="Label" checked></core-checkbox>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-checkbox label="Label" size="large"></core-checkbox>
  `;
};

export const LeftLabel = (): TemplateResult => {
  return html`
    <core-checkbox label="Label" labelPosition="left"></core-checkbox>
  `;
};
