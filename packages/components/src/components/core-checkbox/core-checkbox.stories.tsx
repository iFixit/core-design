import { boolean } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-checkbox",
  title: "Buttons & Inputs/Checkbox",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-checkbox
        slot="label-left"
        checked=${boolean("Checked", false)}
        required=${boolean("Required", false)}
        large=${boolean("Large", false)}
      ></core-checkbox>
    </core-label>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-checkbox id="checkbox" slot="label-left"></core-checkbox>
    </core-label>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-checkbox
        id="checkbox"
        slot="label-left"
        large="true"
      ></core-checkbox>
    </core-label>
  `;
};

export const RightLabel = (): TemplateResult => {
  return html`
    <core-label display="inline">
      Label
      <core-checkbox id="checkbox" slot="label-right"></core-checkbox>
    </core-label>
  `;
};
