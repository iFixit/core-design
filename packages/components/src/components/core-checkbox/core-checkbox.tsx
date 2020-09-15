import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";

@Component({
  tag: "core-checkbox",
  styleUrl: "core-checkbox.less",
  shadow: true,
})
export class Checkbox implements ComponentInterface {
  @State() hasFocus = false;

  @Element() el!: HTMLCoreCheckboxElement;

  /**
   * If applied, the element is checked.
   */
  @Prop() checked = false;

  /**
   * Optional color of the label (inherited).
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop() color?:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "white"
    | "black"
    | "blue-light-4"
    | "blue-light-3"
    | "blue-light-2"
    | "blue-light-1"
    | "blue-dark-1"
    | "blue-dark-2"
    | "blue-dark-3"
    | "blue-dark-4"
    | "green-light-4"
    | "green-light-3"
    | "green-light-2"
    | "green-light-1"
    | "green-dark-1"
    | "green-dark-2"
    | "green-dark-3"
    | "green-dark-4"
    | "yellow-light-4"
    | "yellow-light-3"
    | "yellow-light-2"
    | "yellow-light-1"
    | "yellow-dark-1"
    | "yellow-dark-2"
    | "yellow-dark-3"
    | "yellow-dark-4"
    | "red-light-4"
    | "red-light-3"
    | "red-light-2"
    | "red-light-1"
    | "red-dark-1"
    | "red-dark-2"
    | "red-dark-3"
    | "red-dark-4"
    | "gray-1"
    | "gray-2"
    | "gray-3"
    | "gray-4"
    | "gray-5"
    | "gray-6"
    | "gray-7"
    | "gray-8" = "gray-8";

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
        class={{ "core-checkbox": true }}
        onClick={this.handleClick}
      >
        <div class="checkbox-outer">
          {this.label && (
            <div class="label-outer">
              <label htmlFor={this.label}>{this.label}</label>
            </div>
          )}
          <input
            id={this.label || ""}
            class="native-element"
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
          />
        </div>
      </Host>
    );
  }
}
