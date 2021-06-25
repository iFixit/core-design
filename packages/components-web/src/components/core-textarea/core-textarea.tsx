/* eslint-disable @stencil/strict-mutable */
import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  Method,
  h,
} from "@stencil/core";
import { labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-textarea",
  styleUrl: "core-textarea.css",
  shadow: true,
})
export class Textarea implements ComponentInterface {
  private textareaId = `core-textarea-${textareaCount++}`;
  private nativeInput?: HTMLTextAreaElement;

  @State() hasFocus = false;

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * If `true`, the user cannot interact with the textarea.
   */
  @Prop() disabled = false;

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
  @Prop({ reflect: true }) labelPosition?: labelPositionProps = "right";

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | undefined;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | undefined = "";

  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLTextAreaElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private getValue(): string {
    return this.value || "";
  }

  render() {
    const {
      cols,
      disabled,
      label,
      placeholder,
      required,
      rows,
      textareaId,
    } = this;
    const value = this.getValue();

    return (
      <Host aria-disabled={disabled ? "true" : null}>
        <div class="textarea-outer">
          {label && <label htmlFor={textareaId}>{label}</label>}
          <textarea
            id={textareaId}
            class="native-element"
            ref={(el) => (this.nativeInput = el)}
            disabled={disabled}
            placeholder={placeholder || ""}
            required={required}
            cols={cols}
            rows={rows}
          >
            {value}
          </textarea>
        </div>
      </Host>
    );
  }
}

let textareaCount = 1;
