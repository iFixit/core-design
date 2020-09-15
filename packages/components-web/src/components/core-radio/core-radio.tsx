import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-radio",
  styleUrl: "core-radio.less",
  shadow: true,
})
export class Radio implements ComponentInterface {
  @Element() el!: HTMLCoreRadioElement;

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
  @Prop({ reflect: true }) labelposition?: "left" | "right" = "right";

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
        aria-disabled={this.disabled ? "true" : null}
        class={{ "core-radio": true }}
        onClick={this.handleClick}
      >
        <div class="radio-outer">
          {this.label && (
            <div class="label-outer">
              <label htmlFor={this.label}>{this.label}</label>
            </div>
          )}
          <input
            id={this.label || ""}
            class="native-element"
            type="radio"
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
          />
        </div>
      </Host>
    );
  }
}
