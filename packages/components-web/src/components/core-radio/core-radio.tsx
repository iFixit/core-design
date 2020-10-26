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
   * The radio group name that links other radio elements. [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Defining_a_radio_group)
   */
  @Prop({ reflect: true }) name: string | undefined;

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
        class={{ "core-radio": true }}
        onClick={this.handleClick}
      >
        <div class="radio-outer">
          <input
            id={this.label || ""}
            class="native-element"
            type="radio"
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            required={this.required}
          />
          {this.label && <label htmlFor={this.label}>{this.label}</label>}
        </div>
      </Host>
    );
  }
}
