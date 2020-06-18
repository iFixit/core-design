import { boolean, number, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-textarea",
  title: "Buttons & Inputs/Textarea",
};

export const Default = (): TemplateResult => {
  return html`
    <core-textarea
      cols="${number("Columns", 50)}"
      disabled="${boolean("Disabled", false)}"
      placeholder="${text("Placeholder", "Placeholder")}"
      required="${boolean("Required", false)}"
      rows="${number("Rows", 10)}"
      >textarea</core-textarea
    >
  `;
};

export const Value = (): TemplateResult => {
  return html`
    <core-textarea
      cols="${number("Columns", 50)}"
      disabled="${boolean("Disabled", false)}"
      placeholder="${text("Placeholder", null)}"
      required="${boolean("Required", false)}"
      rows="${number("Rows", 10)}"
      value="${text("Value", "Value")}"
      >textarea</core-textarea
    >
  `;
};
