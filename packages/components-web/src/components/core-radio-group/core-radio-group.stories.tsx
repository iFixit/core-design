import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-radio-group",
  title: "Buttons & Inputs/Radio Group",
};

const displays = {
  column: "column",
  row: "row",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-radio-group display=${select("Display", displays, "column")}>
      <core-radio label="Radio 1"></core-radio>
      <core-radio label="Radio 2"></core-radio>
      <core-radio label="Radio 3"></core-radio>
    </core-radio-group>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-radio-group>
      <core-radio label="Radio 1"></core-radio>
      <core-radio label="Radio 2"></core-radio>
      <core-radio label="Radio 3"></core-radio>
    </core-radio-group>
  `;
};
