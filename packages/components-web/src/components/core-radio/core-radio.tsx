import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";
import { labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-radio",
  styleUrl: "core-radio.less",
  shadow: true,
})
export class Radio implements ComponentInterface {
  /**
   * If applied, the element is checked.
   */
  @Prop({ reflect: true }) checked = false;

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
    const lowerCaseLabel = this.label
      ? `${this.label.toLowerCase()}-radio`
      : "";

    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{ "core-radio": true }}
        onClick={this.handleClick}
      >
        <div class="radio-outer">
          <input
            id={lowerCaseLabel}
            class="native-element"
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
            type="radio"
          />
          {lowerCaseLabel && (
            <label htmlFor={lowerCaseLabel}>{this.label}</label>
          )}
        </div>
      </Host>
    );
  }
}
