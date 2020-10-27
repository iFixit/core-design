import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-badge",
  styleUrl: "core-badge.less",
  shadow: true,
})
export class Badge implements ComponentInterface {
  /**
   * Color of the element.
   */
  @Prop({ reflect: true }) color?: "black" | "red" = "red";

  /**
   * The pre-defined element size.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The element variation.
   */
  @Prop({ reflect: true }) variation?: "border" | "dot" | "fill" = "fill";

  render() {
    return (
      <Host class={{ "core-badge": true }}>
        <div class="native-element">
          <div class="dot-inner"></div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
