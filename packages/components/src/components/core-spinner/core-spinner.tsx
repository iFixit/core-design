import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-spinner",
  styleUrl: "core-spinner.less",
  shadow: true,
})
export class Spinner implements ComponentInterface {
  @Element() el!: HTMLCoreSpinnerElement;

  /**
   * Color of the spinner.
   * Use: `color="black"` or `color="red"`.
   */
  @Prop() color?: "black" | "red" | "blue" | "green" | "yellow" = "black";

  /**
   * The pre-defined spinner size.
   * Use: `"small"`, `"medium"`, `"large"`, ect.
   */
  @Prop({ reflect: true }) size?: "small" | "medium" | "large" = "medium";

  render() {
    const { color } = this;

    return (
      <Host
        class={{
          "core-spinner": true,
          [`${color}`]: color !== undefined,
        }}
      >
        <div class="spinner"></div>
      </Host>
    );
  }
}
