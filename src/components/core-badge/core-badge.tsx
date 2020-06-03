import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-badge",
  styleUrl: "core-badge.less",
  shadow: true,
})
export class Badge implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * Color of the badge.
   * Use: `color="black"` or `color="red"`.
   */
  @Prop() color?: "black" | "red" = "red";

  /**
   * The pre-defined badge size.
   * Use: `"small"` or `"large"`.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The badge variation.
   * Use: `"border"`, `"dot"`, or `"fill"`.
   */
  @Prop() variation?: "border" | "dot" | "fill" = "fill";

  render() {
    const { color, variation } = this;

    return (
      <Host
        class={{
          "core-badge": true,
          [`${color}`]: color !== undefined,
          [`${variation}`]: variation !== undefined,
        }}
      >
        <div class="native-element">
          <div class="dot-inner"></div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
