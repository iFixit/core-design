import { boolean } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-radio",
  title: "Buttons & Inputs/Radio",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-radio
        slot="label-left"
        checked="${boolean("Checked", false)}"
        large="${boolean("Large", false)}"
      ></core-radio>
    </core-label>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-radio slot="label-left"></core-radio>
    </core-label>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-radio slot="label-left" large></core-radio>
    </core-label>
  `;
};
