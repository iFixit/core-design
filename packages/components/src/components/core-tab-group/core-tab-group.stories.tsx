import { html, TemplateResult } from "lit-html";

export default {
  component: "core-tab-group",
  title: "Page Elements/Tabs",
};

export const Default = (): TemplateResult => {
  return html`
    <core-tab-group size="large"
      >
        <core-tab class="active">Active</core-tab>
        <core-tab>Default</core-tab>
        <core-tab>
          With Badge
          <core-badge slot="badge" color="black" size="small">3</core-badge>
        </core-tab>
        <core-tab class="disabled">Disabled</core-tab>
      </core-tab-group
    >
  `;
};

export const Small = (): TemplateResult => {
  return html`
    <core-tab-group size="small">
        <core-tab class="active">Active</core-tab>
        <core-tab>Default</core-tab>
        <core-tab class="disabled">Disabled</core-tab>
      </core-tab-group
    >
  `;
};
