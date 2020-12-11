import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";
import { colorPropsAll, labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-checkbox",
  styleUrl: "core-checkbox.less",
  shadow: true,
})
export class Checkbox implements ComponentInterface {
  @State() hasFocus = false;

  /**
   * If applied, the element is checked.
   */
  @Prop() checked = false;

  /**
   * Optional color of the label (inherited).
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop() color?: colorPropsAll = "gray-8";

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
  @Prop() labelPositionProps?: labelPositionProps = "right";

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
    const lowerCaseLabel = this.label
      ? `${this.label.toLowerCase()}-checkbox`
      : "";

    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        onClick={this.handleClick}
      >
        <div class="checkbox-outer">
          <input
            id={lowerCaseLabel}
            class="native-element"
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
          />
          {lowerCaseLabel && (
            <label htmlFor={lowerCaseLabel}>{this.label}</label>
          )}
        </div>
      </Host>
    );
  }
}
