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
   * Use: `"checked"`.
   */
  @Prop() checked = false;

  /**
   * If applied, the user cannot interact with the element.
   * Use: `"disabled"`.
   */
  @Prop() disabled = false;

  /**
   * If applied, the user must fill in a value before submitting a form containing this element.
   * Use: `"required"`.
   */
  @Prop() required = false;

  /**
   * Apply the large pre-defined large radio size styling.
   * Use: `"large"`.
   */
  @Prop({ reflectToAttr: true }) large = false;

  render() {
    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "core-radio": true,
        }}
      >
        <input
          class="native-element"
          type="radio"
          checked={this.checked}
          disabled={this.disabled}
          required={this.required}
        />
      </Host>
    );
  }
}
