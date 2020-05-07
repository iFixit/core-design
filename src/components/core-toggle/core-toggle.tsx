import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-toggle",
  styleUrl: "core-toggle.less",
  shadow: true,
})
export class Toggle implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * If applied, the element is rendered with the alternate styling.
   * Use: `"alt"`.
   */
  @Prop() alt = false;

  /**
   * If applied, the element is checked.
   * Use: `"checked"`.
   */
  @Prop() checked = false;

  /**
   * Optional primary color of the icon. Defaults to `blue`.
   * Use the following `@color` in [core-primatives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   * Use: `color="green"`, `color="yellow"`, `color="red"`, `color="black"`.
   */
  @Prop() color?: string;

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
   * Apply the large pre-defined large toggle size styling.
   * Use: `"large"`.
   */
  @Prop({ reflectToAttr: true }) large = false;

  render() {
    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "core-toggle": true,
        }}
      >
        <input
          class="native-element"
          type="checkbox"
          checked={this.checked}
          disabled={this.disabled}
          required={this.required}
        />
      </Host>
    );
  }
}
