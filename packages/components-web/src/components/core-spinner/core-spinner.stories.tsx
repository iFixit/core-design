import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-spinner",
  title: "Informers/Spinner",
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
  default: "default",
  large: "large",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-spinner
      color="${select("Color", colors, "black")}"
      size="${select("size", sizes, "default")}"
    ></core-spinner>
  `;
};

export const Small = (): TemplateResult => {
  return html`
    <core-spinner size="small"></core-spinner>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-spinner size="default"></core-spinner>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-spinner size="large"></core-spinner>
  `;
};
