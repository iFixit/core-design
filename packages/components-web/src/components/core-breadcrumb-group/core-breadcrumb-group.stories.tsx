import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-breadcrumb-group",
  title: "Page Elements/Breadcrumb",
};

const dividers = {
  slash: "slash",
  chevron: "chevron",
  triangle: "triangle",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-breadcrumb-group
      divider="${select("Divider", dividers, "slash")}"
      overflow=${boolean("Overflow", false)}
    >
      <core-breadcrumb href="#">Folder</core-breadcrumb>
      <core-breadcrumb href="#">Folder</core-breadcrumb>
      <core-breadcrumb active>Current Page</core-breadcrumb>
    </core-breadcrumb-group>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-breadcrumb-group>
      <core-breadcrumb href="#">Folder</core-breadcrumb>
      <core-breadcrumb href="#">Folder</core-breadcrumb>
      <core-breadcrumb active>Current Page</core-breadcrumb>
    </core-breadcrumb-group>
  `;
};

export const Overflow = (): TemplateResult => {
  return html`
    <core-breadcrumb-group overflow>
      <core-breadcrumb href="#breadcrumb-section">Folder</core-breadcrumb>
      <core-breadcrumb href="#breadcrumb-section">Folder</core-breadcrumb>
      <core-breadcrumb active>Current Page</core-breadcrumb>
    </core-breadcrumb-group>
  `;
};
