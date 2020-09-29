import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-button",
  title: "Buttons & Inputs/Button",
};

const loading = {
  "--": "false",
  left: "left",
  right: "right",
  only: "only",
};

const radii = {
  "0": "0",
  "4": "4",
  round: "round",
};

const sizes = {
  default: "default",
  small: "small",
  large: "large",
};

const status = {
  "--": "--",
  success: "success",
  danger: "danger",
  warning: "warning",
};

const variations = {
  basic: "basic",
  primary: "primary",
  secondary: "secondary",
  dark: "dark",
  light: "light",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-button
      disabled="${boolean("Disabled", false)}"
      loading="${select("Loading", loading, "false")}"
      radius="${select("Border Radius", radii, "4")}"
      size="${select("Size", sizes, "default")}"
      status="${select("Status", status, "false")}"
      variation="${select("Variation", variations, "basic")}"
      >Button</core-button
    >
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-button>Button</core-button>
  `;
};

export const Small = (): TemplateResult => {
  return html`
    <core-button size="small">Button</core-button>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <core-button size="large">Button</core-button>
  `;
};

export const Loading = (): TemplateResult => {
  return html`
    <core-button loading="left">Button</core-button>
  `;
};

export const Linked = (): TemplateResult => {
  return html`
    <core-button href="${text("href", "https://www.dozuki.com/")}"
      >Button</core-button
    >
  `;
};

export const OverflowTest = (): TemplateResult => {
  return html`
    <core-button
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
      quis exercitationem culpa nesciunt nihil aut nostrum explicabo
      reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
      Voluptatum ducimus voluptates voluptas?</core-button
    >
  `;
};

export const DualActionRight = (): TemplateResult => {
  return html`
    <core-button>
      Button
      <core-dropdown slot="button-dropdown-right" alignment="right">
        <div slot="trigger">
          <core-icon icon="plus"></core-icon>
        </div>
        <core-dropdown-item href="#">Option 1</core-dropdown-item>
        <core-dropdown-item href="#">Option 2</core-dropdown-item>
        <core-dropdown-item href="#">Option 3</core-dropdown-item>
      </core-dropdown>
    </core-button>
  `;
};

export const DualActionLeft = (): TemplateResult => {
  return html`
    <core-button>
      Button
      <core-dropdown slot="button-dropdown-left" alignment="left">
        <div slot="trigger">
          <core-icon icon="plus"></core-icon>
        </div>
        <core-dropdown-item href="#">Option 1</core-dropdown-item>
        <core-dropdown-item href="#">Option 2</core-dropdown-item>
        <core-dropdown-item href="#">Option 3</core-dropdown-item>
      </core-dropdown>
    </core-button>
  `;
};
