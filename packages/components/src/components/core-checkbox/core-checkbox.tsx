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
  @Element() el!: HTMLCoreCheckboxElement;

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
   * Apply the pre-defined large checkbox size styling.
   * Use: `"large"`.
   */
  @Prop() large = false;

  render() {
    return (
      <Host
        class={{
          "core-checkbox": true,
        }}
      >
        <input
          class="native-element"
          type="checkbox"
          checked={this.checked}
          required={this.required}
        />
      </Host>
    );
  }
}
