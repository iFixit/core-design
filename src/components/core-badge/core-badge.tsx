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
  @Element() el!: HTMLCoreBadgeElement;

  /**
   * Color of the badge. Defaults to `red`.
   * Use: `color="black"` or `color="red"`.
   * Default size is `"red"`.
   */
  @Prop() color?: "black" | "red" = "red";

  /**
   * The pre-defined badge size.
   * Use: `"small"` or `"large"`.
   * Default size is `"large"`.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The badge variation.
   * Use: `"border"`, `"dot"`, or `"fill"`.
   * Default variation is `"fill"`.
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
          <slot></slot>
        </div>
      </Host>
    );
  }
}
