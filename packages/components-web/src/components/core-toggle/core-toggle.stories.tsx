import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-toggle",
  title: "Buttons & Inputs/Toggle",
};

const colors = {
  black: "black",
  blue: "blue",
  green: "green",
  yellow: "yellow",
  red: "red",
};

const labelPositions = {
  left: "left",
  right: "right",
};

const sizes = {
  default: "default",
  large: "large",
};

const variations = {
  default: "default",
  alt: "alt",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-toggle
      checked="${boolean("Checked", false)}"
      color="${select("Color", colors, "blue")}"
      disabled="${boolean("Disabled", false)}"
      required="${boolean("Required", false)}"
      label=${text("Label", "Label")}
      label-position=${select("Label position", labelPositions, "right")}
      size=${select("Size", sizes, "default")}
      variation=${select("Variation", variations, "default")}
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
    </core-toggle>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-toggle></core-toggle>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-toggle size="large"></core-toggle>
  `;
};

export const LeftLabel = (): TemplateResult => {
  return html`
    <core-toggle label="Label" label-position="left"></core-toggle>
  `;
};

export const AltVariationDefault = (): TemplateResult => {
  return html`
    <core-toggle variation="alt"></core-toggle>
  `;
};

export const AltVariationLarge = (): TemplateResult => {
  return html`
    <core-toggle variation="alt" size="large"></core-toggle>
  `;
};
