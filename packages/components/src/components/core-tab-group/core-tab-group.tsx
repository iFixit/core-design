import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-tab-group",
  styleUrl: "core-tab-group.less",
  shadow: true,
})
export class TabGroup implements ComponentInterface {
  @Element() el!: HTMLCoreTabGroupElement;

  /**
   * The pre-defined tab size.
   * Use: `"small"` or `"large"`.
   */
  @Prop() size: "small" | "large" = "large";

  render() {
    return (
      <Host
        class={{
          "core-tab-group": true,
        }}
      >
        <ul class="native-element">
          <slot name="tab-group-left"></slot>
          <slot></slot>
          <slot name="tab-group-right"></slot>
        </ul>
      </Host>
    );
  }
}
