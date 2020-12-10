import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-radio",
  title: "Buttons & Inputs/Radio",
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
    <core-radio
      disabled=${boolean("Disabled", false)}
      label=${text("Label", "Label")}
      label-position=${select("Label position", labelPositions, "right")}
      size=${select("Size", sizes, "default")}
    >
    </core-radio>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-radio label="Label"></core-radio>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-radio label="Label" size="large"></core-radio>
  `;
};

export const LeftLabel = (): TemplateResult => {
  return html`
    <core-radio label="Label" label-position="left"></core-radio>
  `;
};
