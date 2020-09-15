import { html, TemplateResult } from "lit-html";

export default {
  component: "core-tab-group",
  title: "Page Elements/Tabs",
};

export const Large = (): TemplateResult => {
  return html`
    <core-tab-group size="large">
      <core-tab active>Active</core-tab>
      <core-tab>Default</core-tab>
      <core-tab>
        With Badge
        <core-badge slot="badge" color="black" size="small">3</core-badge>
      </core-tab>
      <core-tab disabled>Disabled</core-tab>
    </core-tab-group>
  `;
};

export const Small = (): TemplateResult => {
  return html`
    <core-tab-group size="small">
      <core-tab active>Active</core-tab>
      <core-tab>Default</core-tab>
      <core-tab disabled>Disabled</core-tab>
    </core-tab-group>
  `;
};
