import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-toast",
  title: "Informers/Toast",
};

const colors = {
  white: "white",
  green: "green",
  yellow: "yellow",
  red: "red",
};

export const Default = (): TemplateResult => {
  return html`
    <core-toast color="${select("Color", colors, "white")}"
      >The file <strong>benchmark2</strong> was deleted.</core-toast
    >
  `;
};
