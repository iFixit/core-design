import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-tag",
  title: "Informers/Tag",
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
  default: "default",
  light: "light",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-tag
      closable="${boolean("Closable", false)}"
      color="${select("Color", colors, "black")}"
      size="${select("size", sizes, "large")}"
      variation="${select("variation", variations, "default")}"
      >Tag</core-tag
    >
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-tag>Tag</core-tag>
  `;
};

export const Small = (): TemplateResult => {
  return html`
    <core-tag size="small">Tag</core-tag>
  `;
};

export const Closable = (): TemplateResult => {
  return html`
    <core-tag closable>Tag</core-tag>
  `;
};
