import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";
import { colorPropsPrimary } from "../../assets/script/global";

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
  @Prop() color?: colorPropsPrimary = "black";

  /**
   * The pre-defined spinner size.
   */
  @Prop({ reflect: true }) size?: "small" | "default" | "large" = "default";

  render() {
    return (
      <Host class={{ "core-spinner": true }}>
        <div class="spinner"></div>
      </Host>
    );
  }
}
