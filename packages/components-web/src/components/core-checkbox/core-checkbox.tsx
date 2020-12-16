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
    const { checked, disabled, label, required, size } = this;
    const lowerCaseLabel = label ? `${label.toLowerCase()}-checkbox` : "";

    return (
      <Host aria-disabled={disabled ? "true" : null} onClick={this.handleClick}>
        <div class="checkbox-outer">
          <input
            id={lowerCaseLabel}
            class="native-element"
            type="checkbox"
            checked={checked}
            disabled={disabled}
            required={required}
          />
          {lowerCaseLabel && <label htmlFor={lowerCaseLabel}>{label}</label>}
          {checked && size === "default" && (
            <svg
              height="16"
              width="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
            >
              <path
                d="M12.707 4.793a.999.999 0 0 1 0 1.414l-5 5a.999.999 0 0 1-1.414 0l-2.5-2.5a.999.999 0 1 1 1.414-1.414L7 9.086l4.293-4.293a.999.999 0 0 1 1.414 0z"
                fill="white"
              />
            </svg>
          )}
          {checked && size === "large" && (
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
            >
              <path
                d="M8.707 14.207a.997.997 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8 12.086l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </Host>
    );
  }
}
