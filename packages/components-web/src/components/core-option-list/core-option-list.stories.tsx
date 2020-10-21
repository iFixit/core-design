import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-option-list",
  title: "Buttons & Inputs/Option List",
};

const alignments = {
  left: "left",
  center: "center",
  right: "right",
};

const directions = {
  up: "up",
  down: "down",
};

export const PropStates = (): TemplateResult => {
  return html`
    <div class="center">
      <core-option-list
        active=${boolean("Active", false)}
        alignment=${select("Alignment", alignments, "left")}
        direction=${select("Direction", directions, "down")}
        hoverable=${boolean("Hoverable", false)}
        wrap=${boolean("wrap", false)}
      >
        <div slot="trigger">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </div>
        <core-option-list-item href="#">
          <core-icon
            slot="icon"
            icon="cart"
            color="green"
            style="margin-right:8px"
          ></core-icon>
          Option 1
        </core-option-list-item>
        <core-option-list-item href="#">
          <core-icon slot="icon" icon="gear" color="red"></core-icon>
          <span style="margin-left:8px">Option 2</span>
        </core-option-list-item>
        <core-option-list-item href="#">
          <core-icon
            slot="icon"
            icon="archive"
            color="blue"
            style="margin-right:8px"
          ></core-icon>
          Option 3
        </core-option-list-item>
        <core-option-list-item>
          Nested content can be anything
        </core-option-list-item>
      </core-option-list>
    </div>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <div class="center">
      <core-option-list>
        <div slot="trigger">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </div>
        <core-option-list-item href="#">
          <core-icon
            slot="icon"
            icon="cart"
            color="green"
            style="margin-right:8px"
          ></core-icon>
          Option 1
        </core-option-list-item>
        <core-option-list-item href="#">
          <core-icon slot="icon" icon="gear" color="red"></core-icon>
          <span style="margin-left:8px">Option 2</span>
        </core-option-list-item>
        <core-option-list-item href="#">
          <core-icon
            slot="icon"
            icon="archive"
            color="blue"
            style="margin-right:8px"
          ></core-icon>
          Option 3
        </core-option-list-item>
        <core-option-list-item>
          Nested content can be anything
        </core-option-list-item>
      </core-option-list>
    </div>
  `;
};
