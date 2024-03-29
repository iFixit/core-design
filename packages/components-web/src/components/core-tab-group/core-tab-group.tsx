import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-tab-group",
  styleUrl: "core-tab-group.less",
  shadow: true,
})
export class TabGroup implements ComponentInterface {
  /**
   * The pre-defined tab size.
   */
  @Prop({ reflect: true }) size: "small" | "large" = "large";

  render() {
    return (
      <Host>
        <ul class="native-element">
          <slot name="tab-group-left" />
          <slot />
          <slot name="tab-group-right" />
        </ul>
      </Host>
    );
  }
}
