import { select, boolean } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-tag",
  title: "Components|Tag",
};

const colors = {
  black: "black",
  blue: "blue",
  green: "green",
  yellow: "yellow",
  red: "red",
};

const sizes = {
  small: "small",
  large: "large",
};

const variations = {
  defualt: "defualt",
  light: "light",
};

export const Default = (): TemplateResult => {
  return html`
    <core-tag
      color="${select("Color", colors, "black")}"
      size="${select("size", sizes, "large")}"
      variation="${select("variation", variations, "default")}"
      >Tag</core-tag
    >
  `;
};

export const Closable = (): TemplateResult => {
  return html`
    <core-tag
      closable=${boolean("Closable", true)}
      color="${select("Color", colors, "yellow")}"
      size="${select("size", sizes, "large")}"
      variation="${select("variation", variations, "default")}"
    >
      Tag
      <core-icon slot="icon" icon="cross-sm"></core-icon>
    </core-tag>
  `;
};
