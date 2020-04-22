import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Method,
  Prop,
  State,
  h,
} from "@stencil/core";
import { findItemLabel } from "../../utils/helpers";

@Component({
  tag: "core-input",
  styleUrl: "core-input.less",
  shadow: true,
})
export class Input implements ComponentInterface {
  private nativeInput?: HTMLInputElement;
  private inputId = `core-input--${inputIds++}`;

  @State() hasFocus = false;

  @Element() el!: HTMLElement;

  /**
   * The large pre-defined input size and styling.
   * Use: `"large"`.
   */
  @Prop({ reflectToAttr: true }) size?: "large";

  /**
   * Boolean attribute lets you specify that a form control should
   * have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, a clear icon will appear in the input when there is a
   * value. Clicking it clears the input.
   */
  @Prop() clearInput = false;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * How an <input> works varies considerably depending on the value of
   * its type attribute, hence the different types are covered in their
   * own separate reference pages. If this attribute is not specified,
   * the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  @Prop({ reflectToAttr: true }) type?: string | "text" = "text";

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputkeyboard?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Instructional placeholder text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * The core-icon to render inside the text input.
   */
  @Prop() icon?: string;

  /**
   * Returns the native `<input>` element.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!);
  }

  render() {
    const labelId = this.inputId;
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }

    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "core-input": true,
          "has-focus": this.hasFocus,
        }}
      >
        <div class="input-inner">
          <slot name="input-left">
            {this.icon ? (
              <core-icon slot="input-left" icon={this.icon}></core-icon>
            ) : undefined}
          </slot>
          <input
            class="native-element"
            ref={(input) => (this.nativeInput = input)}
            disabled={this.disabled}
            autoFocus={this.autofocus}
            placeholder={this.placeholder || ""}
            required={this.required}
            type={this.type}
          />
          {this.clearInput && !this.disabled && (
            <button type="button" class="input-clear-icon" tabindex="-1" />
          )}
        </div>
      </Host>
    );
  }
}

let inputIds = 0;
