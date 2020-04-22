import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  State,
  Method,
  h,
} from "@stencil/core";

@Component({
  tag: "core-textarea",
  styleUrl: "core-textarea.less",
  shadow: true,
})
export class Textarea implements ComponentInterface {
  private nativeInput?: HTMLTextAreaElement;

  @Element() el!: HTMLElement;

  @State() hasFocus = false;

  /**
   * If `true`, the user cannot interact with the textarea.
   */
  @Prop() disabled = false;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | null = "";

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
    const value = this.getValue();
    return (
      <Host
        class={{
          "core-textarea": true,
        }}
        aria-disabled={this.disabled ? "true" : null}
      >
        <textarea
          class="native-element"
          ref={(el) => (this.nativeInput = el)}
          disabled={this.disabled}
          placeholder={this.placeholder || ""}
          required={this.required}
          cols={this.cols}
          rows={this.rows}
        >
          {value}
        </textarea>
      </Host>
    );
  }
}
