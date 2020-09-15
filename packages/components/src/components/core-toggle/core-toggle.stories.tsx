import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-toggle",
  title: "Buttons & Inputs/Toggle",
};

const colors = {
  black: "black",
  green: "green",
  yellow: "yellow",
  red: "red",
};

const labelpositions = {
  "--": "--",
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
      color="${select("Color", colors, "black")}"
      disabled="${boolean("Disabled", false)}"
      required="${boolean("Required", false)}"
      label=${text("Label", "Label")}
      labelPosition=${select("Label position", labelpositions, "left")}
      size=${select("Size", sizes, "default")}
      variation=${select("Variation", variations, "default")}
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
    </core-toggle>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-toggle>The file <strong>benchmark2</strong> was deleted.</core-toggle>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-toggle size="large"
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
  `;
};

export const AltDefault = (): TemplateResult => {
  return html`
    <core-toggle variation="alt"
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
  `;
};

export const AltLarge = (): TemplateResult => {
  return html`
    <core-toggle variation="alt" size="large"
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
  `;
};
