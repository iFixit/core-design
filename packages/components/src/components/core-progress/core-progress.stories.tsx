import { number, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-progress",
  title: "Informers/Progress",
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

export const Default = (): TemplateResult => {
  return html`
    <core-progress
      color="${select("Color", colors, "blue")}"
      size="${select("Size", sizes, "large")}"
      value="${number("Value", 75)}"
    ></core-progress>
  `;
};
