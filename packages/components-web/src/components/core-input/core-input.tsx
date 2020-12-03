/* eslint-disable @stencil/strict-boolean-conditions */
import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";
import { colorPropsAll, labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-input",
  styleUrl: "core-input.less",
  shadow: true,
})
export class Input implements ComponentInterface {
  @State() hasFocus = false;

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
   * Optional color of the label (inherited).
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop() labelColor?: colorPropsAll = "gray-8";

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the pre-defined error state is applied.
   */
  @Prop() error = false;

  /**
   * The core-icon to render inside the text input.
   */
  @Prop() icon?: string;

  /**
   * A hint to the browser for which keyboard to display.
   */
  @Prop() inputKeyboard?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * The label element associated with the element.
   */
  @Prop() label: string | undefined;

  /**
   * Sets the optional label to `inline` or `block` style [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   */
  @Prop() labelDisplay?: "block" | "inline" = "block";

  /**
   * The label element position.
   */
  @Prop() labelPosition?: labelPositionProps = "left";

  /**
   * Instructional placeholder text that shows before the element has a value.
   */
  @Prop() placeholder?: string | undefined;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * Apply the large pre-defined element size and styling.
   */
  @Prop() size?: "large";

  /**
   * If `true`, the pre-defined success state is applied.
   */
  @Prop() success = false;

  /**
   * How an <input> works varies considerably depending on the value of
   * its type attribute, hence the different types are covered in their
   * own separate reference pages. If this attribute is not specified,
   * the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  @Prop() type?: string = "text";

  render() {
    const lowerCaseLabel = this.label
      ? `${this.label.toLowerCase()}-input`
      : "";

    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "core-input": true,
          "has-focus": this.hasFocus,
        }}
      >
        <div class="input-outer">
          {this.label && <label htmlFor={lowerCaseLabel}>{this.label}</label>}
          <div class="input-inner">
            <slot name="input-left">
              {this.icon && (
                <core-icon slot="input-left" icon={this.icon}></core-icon>
              )}
            </slot>
            <input
              id={lowerCaseLabel}
              class="native-element"
              disabled={this.disabled}
              autoFocus={this.autofocus}
              placeholder={this.placeholder || ""}
              required={this.required}
              type={this.type}
            />
            {this.clearInput && !this.disabled && (
              <button type="button" class="input-clear-icon" tabindex="-1" />
            )}
            <slot name="input-right"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
