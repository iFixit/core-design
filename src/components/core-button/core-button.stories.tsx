import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-button",
  title: "Components|Button",
};

const loading = {
  left: "left",
  right: "right",
  only: "only",
};

const radii = {
  "0": "0",
  "2px": "2px",
  "4px": "4px",
  "8px": "8px",
  "16px": "16px",
  "32px": "32px",
  circle: "circle",
};

const sizes = {
  small: "small",
  default: "default",
  large: "large",
};

const status = {
  alt: "alt",
  success: "success",
  danger: "danger",
  warning: "warning",
  none: null,
};

const variations = {
  basic: "basic",
  primary: "primary",
  secondary: "secondary",
  dark: "dark",
  light: "light",
};

export const Default = (): TemplateResult => {
  return html`
    <core-button
      disabled=${boolean("Disabled", false)}
      radius="${select("Radius", radii, "4px")}"
      size="${select("Size", sizes, "default")}"
      status="${select("Status", status, null)}"
      variation="${select("Variation", variations, "basic")}"
      >Button</core-button
    >
  `;
};

export const Loading = (): TemplateResult => {
  return html`
    <core-button loading="${select("Loading", loading, "left")}"
      >Button</core-button
    >
  `;
};
