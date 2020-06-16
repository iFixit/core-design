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

export const Default = (): TemplateResult => {
  return html`
    <div class="center">
      <core-dropdown
        active=${boolean("Active", false)}
        alignment=${select("Alignment", alignments, "left")}
        hoverable=${boolean("Hoverable", false)}
        nowrap=${boolean("Nowrap", false)}
      >
        <core-button slot="trigger" variation="borderless">
          <core-icon slot="icon" icon="more" color="gray-5"></core-icon>
        </core-button>
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
          Nested content can be anything, including things that are very very
          long
        </core-dropdown-item>
      </core-dropdown>
    </div>
  `;
};
