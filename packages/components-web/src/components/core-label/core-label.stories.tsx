import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-label",
  title: "Buttons & Inputs/Label",
};

const colors = {
  "--": "--",
  blue: "blue",
  green: "green",
  yellow: "yellow",
  red: "red",
  white: "white",
  black: "black",
  "blue-light-4": "blue-light-4",
  "blue-light-3": "blue-light-3",
  "blue-light-2": "blue-light-2",
  "blue-light-1": "blue-light-1",
  "blue-dark-1": "blue-dark-1",
  "blue-dark-2": "blue-dark-2",
  "blue-dark-3": "blue-dark-3",
  "blue-dark-4": "blue-dark-4",
  "green-light-4": "green-light-4",
  "green-light-3": "green-light-3",
  "green-light-2": "green-light-2",
  "green-light-1": "green-light-1",
  "green-dark-1": "green-dark-1",
  "green-dark-2": "green-dark-2",
  "green-dark-3": "green-dark-3",
  "green-dark-4": "green-dark-4",
  "yellow-light-4": "yellow-light-4",
  "yellow-light-3": "yellow-light-3",
  "yellow-light-2": "yellow-light-2",
  "yellow-light-1": "yellow-light-1",
  "yellow-dark-1": "yellow-dark-1",
  "yellow-dark-2": "yellow-dark-2",
  "yellow-dark-3": "yellow-dark-3",
  "yellow-dark-4": "yellow-dark-4",
  "red-light-4": "red-light-4",
  "red-light-3": "red-light-3",
  "red-light-2": "red-light-2",
  "red-light-1": "red-light-1",
  "red-dark-1": "red-dark-1",
  "red-dark-2": "red-dark-2",
  "red-dark-3": "red-dark-3",
  "red-dark-4": "red-dark-4",
  "gray-1": "gray-1",
  "gray-2": "gray-2",
  "gray-3": "gray-3",
  "gray-4": "gray-4",
  "gray-5": "gray-5",
  "gray-6": "gray-6",
  "gray-7": "gray-7",
  "gray-8": "gray-8",
};

const displays = {
  inline: "inline",
  block: "block",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-label
      color=${select("Color", colors, null)}
      disabled="${boolean("Disabled", false)}"
      display=${select("Display", displays, "block")}
      >Form Label</core-label
    >
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-label>Form Label</core-label>
  `;
};

export const HelpURL = (): TemplateResult => {
  return html`
    <div style="max-width: 200px">
      <core-label helpurl=${text("Help URL", "https://www.dozuki.com/")}
        >Form Help Label</core-label
      >
    </div>
  `;
};
