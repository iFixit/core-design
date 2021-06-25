import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";
import { colorPropsPrimary } from "../../assets/script/global";

@Component({
  tag: "core-spinner",
  styleUrl: "core-spinner.css",
  shadow: true,
})
export class Spinner implements ComponentInterface {
  /**
   * Color of the spinner.
   */
  @Prop() color?: colorPropsPrimary = "black";

  /**
   * The pre-defined spinner size.
   */
  @Prop({ reflect: true }) size?: "small" | "default" | "large" = "default";

  render() {
    return (
      <Host>
        <div class="spinner" />
      </Host>
    );
  }
}
