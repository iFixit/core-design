import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";
import { colorPropsPrimary } from "../../assets/script/global";

@Component({
  tag: "core-progress",
  styleUrl: "core-progress.less",
  shadow: true,
})
export class Progress implements ComponentInterface {
  /**
   * Color of the progress bar.
   */
  @Prop({ reflect: true }) color?: colorPropsPrimary = "blue";

  /**
   * The progress bar maximum value.
   */
  @Prop() max = 100;

  /**
   * The pre-defined progress bar size.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The progress bar value.
   */
  @Prop() value: number | undefined;

  render() {
    return (
      <Host>
        <progress max={this.max} value={this.value} />
      </Host>
    );
  }
}
