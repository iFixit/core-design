import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-button-group",
  styleUrl: "core-button-group.less",
  shadow: true,
})
export class ButtonGroup implements ComponentInterface {
  /**
   * The button-group type.
   * Use: `"button"` or `"icon"`.
   */
  @Prop() type?: "button" | "icon" = "button";

  /**
   * The button variation.
   */
  @Prop() variation?: "outline" | "secondary" = "outline";

  render() {
    return (
      <Host
        class={{
          "core-button-group": true,
        }}
      >
        <div class="native-element">
          <div class="button-group-inner">
            <slot name="button-group-left"></slot>
            <slot></slot>
            <slot name="button-group-right"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
