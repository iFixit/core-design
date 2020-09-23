import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";
import { colorsAll, labelPosition } from "../../assets/script/global";

@Component({
  tag: "core-checkbox",
  styleUrl: "core-checkbox.less",
  shadow: true,
})
export class Checkbox implements ComponentInterface {
  @State() hasFocus = false;

  @Element() el!: HTMLCoreCheckboxElement;

  /**
   * If applied, the element is checked.
   */
  @Prop() checked = false;

  /**
   * Optional color of the label (inherited).
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop() color?: colorsAll = "gray-8";

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
  @Prop() required = false;

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
        aria-disabled={this.disabled ? "true" : null}
        class={{ "core-checkbox": true }}
        onClick={this.handleClick}
      >
        <div class="checkbox-outer">
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
