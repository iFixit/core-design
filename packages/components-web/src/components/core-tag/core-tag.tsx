import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";
import { colorsPrimary } from "../../global/script/global";

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
   * Optional color of the tag. Defaults to `black`.
   * Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop({ reflect: true }) color?: colorsPrimary = "black";

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
          {this.closable && (
            <div class="closable">
              <core-icon icon="cross-sm"></core-icon>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
