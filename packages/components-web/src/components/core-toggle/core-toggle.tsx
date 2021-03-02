import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";
import { labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-toggle",
  styleUrl: "core-toggle.less",
  shadow: true,
})
export class Toggle implements ComponentInterface {
  private toggleId = `toggle-${toggleCount++}`;

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
  @Prop({ reflect: true }) labelPosition?: labelPositionProps = "right";

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
    const {
      alt,
      checked,
      disabled,
      handleClick,
      label,
      required,
      toggleId,
    } = this;

    return (
      <Host
        alt={alt}
        aria-disabled={disabled ? "true" : null}
        onClick={handleClick}
      >
        <div class="toggle-outer">
          {label && <label htmlFor={toggleId}>{label}</label>}
          <input
            id={toggleId}
            class="native-element"
            type="checkbox"
            checked={checked}
            disabled={disabled}
            required={required}
          />
        </div>
      </Host>
    );
  }
}

let toggleCount = 1;
