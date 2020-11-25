import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-dropdown",
  title: "Buttons & Inputs/Dropdown",
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
      <core-dropdown
        active=${boolean("Active", false)}
        alignment=${select("Alignment", alignments, "left")}
        direction=${select("Direction", directions, "down")}
        hoverable=${boolean("Hoverable", false)}
        trigger-centered=${boolean("Trigger Centered", true)}
        wrap=${boolean("Wrap", false)}
      >
        <div slot="trigger">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </div>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="cart"
            color="green"
            style="margin-right:8px"
          ></core-icon>
          Option 1
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon slot="icon" icon="gear" color="red"></core-icon>
          <span style="margin-left:8px">Option 2</span>
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="archive"
            color="blue"
            style="margin-right:8px"
          ></core-icon>
          Option 3
        </core-dropdown-item>
        <core-dropdown-item>
          Nested content can be anything
        </core-dropdown-item>
      </core-dropdown>
    </div>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <div class="center">
      <core-dropdown>
        <div slot="trigger">
          Flexible trigger content
        </div>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="cart"
            color="green"
            style="margin-right:8px"
          ></core-icon>
          Option 1
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon slot="icon" icon="gear" color="red"></core-icon>
          <span style="margin-left:8px">Option 2</span>
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="archive"
            color="blue"
            style="margin-right:8px"
          ></core-icon>
          Option 3
        </core-dropdown-item>
        <core-dropdown-item>
          Nested content can be anything
        </core-dropdown-item>
      </core-dropdown>
    </div>
  `;
};

export const TriggerCentered = (): TemplateResult => {
  return html`
    <div class="center">
      <core-dropdown trigger-centered>
        <div slot="trigger">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </div>
        <core-dropdown-item href="#">
          Use "trigger-centered" when trigger elements are less than 30px wide,
          such as icons.
        </core-dropdown-item>
      </core-dropdown>
    </div>
  `;
};

export const Up = (): TemplateResult => {
  return html`
    <div class="center">
      <core-dropdown direction="up" trigger-centered>
        <div slot="trigger">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </div>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="cart"
            color="green"
            style="margin-right:8px"
          ></core-icon>
          Option 1
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon slot="icon" icon="gear" color="red"></core-icon>
          <span style="margin-left:8px">Option 2</span>
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="archive"
            color="blue"
            style="margin-right:8px"
          ></core-icon>
          Option 3
        </core-dropdown-item>
      </core-dropdown>
    </div>
  `;
};

export const Wrap = (): TemplateResult => {
  return html`
    <div class="center">
      <core-dropdown wrap trigger-centered>
        <div slot="trigger">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </div>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="cart"
            color="green"
            style="margin-right:8px"
          ></core-icon>
          Option 1
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon slot="icon" icon="gear" color="red"></core-icon>
          <span style="margin-left:8px">Option 2</span>
        </core-dropdown-item>
        <core-dropdown-item href="#">
          <core-icon
            slot="icon"
            icon="archive"
            color="blue"
            style="margin-right:8px"
          ></core-icon>
          Option 3
        </core-dropdown-item>
        <core-dropdown-item>
          Nested content can be anything
        </core-dropdown-item>
      </core-dropdown>
    </div>
  `;
};
