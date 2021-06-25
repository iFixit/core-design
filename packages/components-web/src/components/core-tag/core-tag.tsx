import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Method,
  Prop,
  h,
} from "@stencil/core";
import { colorPropsPrimary } from "../../assets/script/global";

@Component({
  tag: "core-tag",
  styleUrl: "core-tag.css",
  shadow: true,
})
export class Tag implements ComponentInterface {
  @Element() el: HTMLCoreTagElement;

  /**
   * `core-tag` close async method to remove from DOM
   */
  @Method()
  async close() {
    this.el.remove();
  }

  /**
   * Allows the tag to be closable and removed from
   * the view.
   */
  @Prop() closable = false;

  /**
   * Optional color of the tag. Defaults to `black`.
   * Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.css) without `@color-`.
   */
  @Prop({ reflect: true }) color?: colorPropsPrimary = "black";

  /**
   * The pre-defined tag size.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The tag variation.
   */
  @Prop() variation?: "default" | "light" = "default";

  render() {
    return (
      <Host>
        <div class="native-element">
          <slot name="tag-left" />
          <slot />
          <slot name="tag-right" />
          {this.closable && (
            <div class="close" onClick={() => this.close()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="cross-sm"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"
                />
              </svg>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
