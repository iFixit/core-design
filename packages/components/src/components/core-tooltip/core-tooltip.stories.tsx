import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-tooltip",
  title: "Buttons & Inputs/Tooltip",
};

const colors = {
  dark: "dark",
  light: "light",
};
const variations = {
  top: "top",
  bottom: "bottom",
};

export const Default = (): TemplateResult => {
  return html`
    <div style="display:flex;height:250px;">
      <core-tooltip
        active=${boolean("Active", false)}
        color=${select("Color", colors, "dark")}
        variation=${select("Variation", variations, "top")}
        style="margin:auto auto 0;"
      >
        <span slot="trigger">Tooltip Trigger</span>
        Tooltip Text
      </core-tooltip>
    </div>
  `;
};

export const Light = (): TemplateResult => {
  return html`
    <div style="display:flex;height:250px;">
      <core-tooltip
        active=${boolean("Active", false)}
        color=${select("Color", colors, "light")}
        variation=${select("Variation", variations, "top")}
        style="margin:auto auto 0;"
      >
        <span slot="trigger">Tooltip Trigger</span>
        Tooltip Text
      </core-tooltip>
    </div>
  `;
};

export const Bottom = (): TemplateResult => {
  return html`
    <div style="display:flex;height:250px;">
      <core-tooltip
        active=${boolean("Active", false)}
        color=${select("Color", colors, "dark")}
        variation=${select("Variation", variations, "bottom")}
        style="margin:auto auto 0;"
      >
        <span slot="trigger">Tooltip Trigger</span>
        Tooltip Text
      </core-tooltip>
    </div>
  `;
};
