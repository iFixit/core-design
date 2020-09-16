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
   */
  @Prop({ reflect: true }) color?:
    | "black"
    | "red"
    | "blue"
    | "green"
    | "yellow" = "black";

  /**
   * The pre-defined spinner size.
   */
  @Prop() size?: "small" | "medium" | "large" = "medium";

  render() {
    return (
      <Host class={{ "core-spinner": true }}>
        <div class="spinner"></div>
      </Host>
    );
  }
}
