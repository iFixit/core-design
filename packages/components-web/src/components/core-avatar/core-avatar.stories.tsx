import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-avatar",
  title: "Misc Components/Avatar",
};

const hexColors = {
  "--": "--",
  blue: "#1975F1",
  green: "#33B464",
  yellow: "#F9C03E",
  white: "#FFFFFF",
  black: "#11161A",
};

const sizes = {
  small: "small",
  large: "large",
};

const variations = {
  circle: "circle",
  square: "square",
};

export const PropStates = (): TemplateResult => {
  return html`
    <Story>
      <core-avatar
        notification="${boolean("Notification", true)}"
        notification-bg="${select("Notification BG", hexColors, "white")}"
        size="${select("Size", sizes, "small")}"
        variation="${select("Variation", variations, "circle")}"
      >
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          alt="user avatar"
      /></core-avatar>
    </Story>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <Story>
      <core-avatar>
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          alt="user avatar"
      /></core-avatar>
    </Story>
  `;
};

export const Square = (): TemplateResult => {
  return html`
    <Story>
      <core-avatar variation="square">
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          alt="user avatar"
      /></core-avatar>
    </Story>
  `;
};

export const Large = (): TemplateResult => {
  return html`
    <Story>
      <core-avatar size="large">
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          alt="user avatar"
      /></core-avatar>
    </Story>
  `;
};

export const Notification = (): TemplateResult => {
  return html`
    <Story>
      <core-avatar notification>
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          alt="user avatar"
      /></core-avatar>
    </Story>
  `;
};
