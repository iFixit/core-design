import { html, TemplateResult } from "lit-html";

export default {
  component: "core-button-group",
  title: "Buttons & Inputs/Button Groups",
};

export const Default = (): TemplateResult => {
  return html`
    <core-button-group type="button" variation="outline">
      <core-button grouped="outline">Button</core-button>
      <core-button grouped="outline">Button</core-button>
      <core-button grouped="outline">Button</core-button>
    </core-button-group>
  `;
};

export const Secondary = (): TemplateResult => {
  return html`
    <core-button-group type="button" variation="secondary">
      <core-button grouped="secondary">Button</core-button>
      <core-button grouped="secondary">Button</core-button>
      <core-button grouped="secondary">Button</core-button>
    </core-button-group>
  `;
};

export const DefaultIcon = (): TemplateResult => {
  return html`
    <core-button-group type="icon" variation="outline">
      <core-icon icon="search" grouped="outline"></core-icon>
      <core-icon icon="link-out" grouped="outline"></core-icon>
      <core-icon icon="pencil" grouped="outline"></core-icon>
      <core-icon icon="heart" grouped="outline"></core-icon>
    </core-button-group>
  `;
};

export const SecondaryIcon = (): TemplateResult => {
  return html`
    <core-button-group type="icon" variation="secondary">
      <core-icon icon="search" grouped="secondary"></core-icon>
      <core-icon icon="link-out" grouped="secondary"></core-icon>
      <core-icon icon="pencil" grouped="secondary"></core-icon>
      <core-icon icon="heart" grouped="secondary"></core-icon>
    </core-button-group>
  `;
};
