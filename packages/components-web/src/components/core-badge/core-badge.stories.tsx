import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-badge",
  title: "Informers/Badge",
};

const colors = {
  red: "red",
  black: "black",
};

const sizes = {
  small: "small",
  large: "large",
};

const variations = {
  fill: "fill",
  border: "border",
  dot: "dot",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-badge
      color="${select("Color", colors, "red")}"
      size="${select("Size", sizes, "large")}"
      variation="${select("Variation", variations, "fill")}"
    >
      23
    </core-badge>
  `;
};

export const Default = (): TemplateResult => {
  return html` <core-badge>23</core-badge> `;
};

export const Small = (): TemplateResult => {
  return html` <core-badge size="small">23</core-badge> `;
};

export const Dot = (): TemplateResult => {
  return html` <core-badge variation="dot">23</core-badge> `;
};
