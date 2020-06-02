import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-button",
  title: "Components/Button",
};

const loading = {
  left: "left",
  right: "right",
  only: "only",
};

const radii = {
  "0": "0",
  "2": "2",
  "4": "4",
  "8": "8",
  "16": "16",
  "32": "32",
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
      radius="${select("Radius", radii, "4")}"
      size="${select("Size", sizes, "default")}"
      status="${select("Status", status, null)}"
      variation="${select("Variation", variations, "basic")}"
      >Button</core-button
    >
  `;
};

export const Small = (): TemplateResult => {
  return html`
    <core-button
      disabled=${boolean("Disabled", false)}
      radius="${select("Radius", radii, "4")}"
      size="${select("Size", sizes, "small")}"
      status="${select("Status", status, null)}"
      variation="${select("Variation", variations, "basic")}"
      >Button</core-button
    >
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-button
      disabled=${boolean("Disabled", false)}
      radius="${select("Radius", radii, "4")}"
      size="${select("Size", sizes, "large")}"
      status="${select("Status", status, null)}"
      variation="${select("Variation", variations, "basic")}"
      >Button</core-button
    >
  `;
};

export const Loading = (): TemplateResult => {
  return html`
    <core-button
      loading="${select("Loading", loading, "left")}"
      radius="${select("Radius", radii, "4")}"
      size="${select("Size", sizes, "default")}"
      status="${select("Status", status, null)}"
      variation="${select("Variation", variations, "basic")}"
      >Button</core-button
    >
  `;
};

export const Linked = (): TemplateResult => {
  return html`
    <core-button href="${text("href", "https://www.dozuki.com/")}"
      >Button</core-button
    >
  `;
};
