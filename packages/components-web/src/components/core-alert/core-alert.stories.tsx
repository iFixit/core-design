import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-alert",
  title: "Informers/Alert",
};

const colors = {
  gray: "gray",
  green: "green",
  yellow: "yellow",
  red: "red",
};

const radii = {
  "none": "none",
  "md": "md",
  "lg": "lg",
  pill: "pill",
};

export const PropStates = (): TemplateResult => {
  return html`
    <Story>
      <core-alert color="${select("Color", colors, "gray")}" radius="${select("Border Radius", radii, "md")}" >
        A notification message of information.
      </core-alert>
    </Story>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <Story>
      <core-alert>A notification message of information.</core-alert>
    </Story>
  `;
};
