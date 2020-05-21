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
   * Use: `"filled"` or `"bordered"`.
   * Default variation is `"filled"`.
   */
  @Prop() variation?: "bordered" | "filled" = "filled";

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
