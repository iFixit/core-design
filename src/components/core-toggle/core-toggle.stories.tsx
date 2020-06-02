import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-toggle",
  title: "Components/Toggle",
};

const colors = {
  black: "black",
  green: "green",
  yellow: "yellow",
  red: "red",
};

export const Default = (): TemplateResult => {
  return html`
    <core-toggle
      checked="${boolean("Checked", false)}"
      color="${select("Color", colors, "black")}"
      disabled="${boolean("Disabled", false)}"
      required="${boolean("Required", false)}"
      large="${boolean("Large", false)}"
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-toggle
      checked="${boolean("Checked", false)}"
      color="${select("Color", colors, "blue")}"
      disabled="${boolean("Disabled", false)}"
      required="${boolean("Required", false)}"
      large="${boolean("Large", true)}"
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
  `;
};

export const Alt = (): TemplateResult => {
  return html`
    <core-toggle
      alt="${boolean("Alt", true)}"
      checked="${boolean("Checked", false)}"
      color="${select("Color", colors, "red")}"
      disabled="${boolean("Disabled", false)}"
      required="${boolean("Required", false)}"
      large="${boolean("Large", false)}"
      >The file <strong>benchmark2</strong> was deleted.</core-toggle
    >
  `;
};
