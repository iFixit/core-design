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
   * If applied, the user must fill in a value before submitting a form containing this element.
   * Use: `"required"`.
   */
  @Prop() required = false;

  /**
   * Apply the pre-defined large radio size styling.
   * Use: `"large"`.
   */
  @Prop() large = null;

  render() {
    return (
      <Host
        class={{
          "core-radio": true,
        }}
      >
        <input
          class="native-element"
          type="radio"
          checked={this.checked}
          required={this.required}
        />
      </Host>
    );
  }
}
