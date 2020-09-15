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
  @Element() el!: HTMLCoreTagElement;

  /**
   * Allows the tag to be closable and removed from
   * the view.
   */
  @Prop({ reflect: true }) closable = false;

  /**
   * Optional primary color of the tag. Defaults to `black`.
   * Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop({ reflect: true }) color?:
    | "black"
    | "blue"
    | "green"
    | "yellow"
    | "red" = "black";

  /**
   * The pre-defined tag size.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The tag variation.
   */
  @Prop({ reflect: true }) variation?: "default" | "light" = "default";

  render() {
    return (
      <Host class={{ "core-tag": true }}>
        <div class="native-element">
          <slot name="tag-left"></slot>
          <slot></slot>
          <slot name="tag-right"></slot>
          <div class="closable">
            <core-icon icon="cross-sm"></core-icon>
          </div>
        </div>
      </Host>
    );
  }
}
