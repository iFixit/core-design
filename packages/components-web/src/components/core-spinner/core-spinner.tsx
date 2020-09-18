import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";
import { colorsPrimary } from "../../global/script/global";

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
  @Prop({ reflect: true }) color?: colorsPrimary = "black";

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
