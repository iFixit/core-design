import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";
import { labelPosition } from "../../global/script/global";

@Component({
  tag: "core-toggle",
  styleUrl: "core-toggle.less",
  shadow: true,
})
export class Toggle implements ComponentInterface {
  @Element() el!: HTMLCoreToggleElement;

  /**
   * If applied, the element is rendered with the alternate styling.
   */
  @Prop({ reflect: true }) alt = false;

  /**
   * If applied, the element is checked.
   */
  @Prop({ reflect: true }) checked = false;

  /**
   * Optional color of the icon. Defaults to `blue`.
   * Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop() color?: "green" | "yellow" | "red" | "black" | "blue" = "blue";

  /**
   * If applied, the user cannot interact with the element.
   */
  @Prop() disabled = false;

  /**
   * The label element associated with the element.
   */
  @Prop() label: string | undefined;

  /**
   * The label element position.
   */
  @Prop({ reflect: true }) labelPosition?: labelPosition = "right";

  /**
   * If applied, the user must fill in a value before submitting a form containing this element.
   */
  @Prop({ reflect: true }) required = false;

  /**
   * Apply the pre-defined large element size styling.
   */
  @Prop() size?: "default" | "large" = "default";

  /**
   * Handle Trigger click action
   */
  private handleClick = (): void => {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  };

  render() {
    return (
      <Host
        alt={this.alt}
        aria-disabled={this.disabled ? "true" : null}
        class={{ "core-toggle": true }}
        onClick={this.handleClick}
      >
        <div class="toggle-outer">
          {this.label && (
            <div class="label-outer">
              <label htmlFor={this.label}>{this.label}</label>
            </div>
          )}
          <input
            id={this.label || ""}
            class="native-element"
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
          />
        </div>
      </Host>
    );
  }
}
