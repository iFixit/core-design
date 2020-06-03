import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-tag",
  styleUrl: "core-tag.less",
  shadow: true,
})
export class Tag implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * Allows the tag to be closable and removed from
   * the view.
   */
  @Prop() closable = false;

  /**
   * Optional primary color of the tag. Defaults to `black`.
   * Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   * Use: `color="blue"`, `color="green"`, `color="yellow"`, `color="red"`.
   */
  @Prop() color?: "black" | "blue" | "green" | "yellow" | "red" = "black";

  /**
   * The pre-defined tag size.
   * Use: `"small"` or `"large"`.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The tag variation.
   * Use: `"default"` or `"light"`.
   */
  @Prop() variation?: "default" | "light" = "default";

  render() {
    const { color, variation } = this;

    return (
      <Host
        class={{
          "core-tag": true,
          [`${color}`]: color !== undefined,
          [`${variation}`]: variation === "light",
        }}
      >
        <div class="native-element">
          <slot name="tag-left"></slot>
          <slot></slot>
          <slot name="tag-right"></slot>
          <div class="icon-outter">
            <slot name="icon"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
