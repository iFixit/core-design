import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-popover",
  title: "Informers/Popover",
};

const variations = {
  top: "top",
  bottom: "bottom",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-popover
      active=${boolean("Active", false)}
      hoverable=${boolean("Hoverable", false)}
      variation=${select("Variation", variations, "top")}
    >
      <core-button slot="trigger">Trigger</core-button>
      <span slot="title">Popover Title</span>
      <div>The quick brown fox jumps over the lazy dog.</div>
    </core-popover>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-popover>
      <core-button slot="trigger">Trigger</core-button>
      <span slot="title">Popover Title</span>
      <div>The quick brown fox jumps over the lazy dog.</div>
    </core-popover>
  `;
};

export const Bottom = (): TemplateResult => {
  return html`
    <core-popover variation="bottom">
      <core-button slot="trigger">Trigger</core-button>
      <span slot="title">Popover Title</span>
      <div>The quick brown fox jumps over the lazy dog.</div>
    </core-popover>
  `;
};

export const Hoverable = (): TemplateResult => {
  return html`
    <core-popover hoverable>
      <core-button slot="trigger">Trigger</core-button>
      <span slot="title">Popover Title</span>
      <div>The quick brown fox jumps over the lazy dog.</div>
    </core-popover>
  `;
};
