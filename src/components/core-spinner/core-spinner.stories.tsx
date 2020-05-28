import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-spinner",
  title: "Components|Spinner",
};

const colors = {
  black: "black",
  red: "red",
  blue: "blue",
  green: "green",
  yellow: "yellow",
};

const sizes = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const Default = (): TemplateResult => {
  return html`
    <core-spinner
      color="${select("Color", colors, "black")}"
      size="${select("size", sizes, "medium")}"
    ></core-spinner>
  `;
};
