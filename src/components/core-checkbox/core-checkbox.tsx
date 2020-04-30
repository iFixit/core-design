import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-checkbox",
  styleUrl: "core-checkbox.less",
  shadow: true,
})
export class Checkbox implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * Apply the large pre-defined large checkbox size.
   * Use: `"large"`.
   */
  @Prop({ reflectToAttr: true }) large = false;

  render() {
    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "core-checkbox": true,
        }}
      >
        <slot name="checkbox-left"></slot>
        <input
          class="native-element"
          type="checkbox"
          disabled={this.disabled}
          required={this.required}
        />
        <slot name="checkbox-right"></slot>
      </Host>
    );
  }
}
