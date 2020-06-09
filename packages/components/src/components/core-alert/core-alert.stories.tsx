import { select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-alert",
  title: "Informers/Alert",
};

const colors = {
  gray: "gray",
  green: "green",
  yellow: "yellow",
  red: "red",
};

export const Default = (): TemplateResult => {
  return html`
    <Story>
      <core-alert color="${select("Color", colors, "gray")}">
        <core-icon slot="icon" icon="globe"></core-icon>
        A notification message of information.
      </core-alert>
    </Story>
  `;
};
