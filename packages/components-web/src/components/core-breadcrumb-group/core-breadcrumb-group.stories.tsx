import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-breadcrumb-group",
  title: "Page Elements/Breadcrumb",
};

const variations = {
  slash: "slash",
  chevron: "chevron",
  triangle: "triangle",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-breadcrumb-group
      variation="${select("Variation", variations, "slash")}"
    >
    </core-breadcrumb-group>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-breadcrumb-group> </core-breadcrumb-group>
  `;
};
