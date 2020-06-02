import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-progress",
  styleUrl: "core-progress.less",
  shadow: true,
})
export class Progress implements ComponentInterface {
  @Element() el!: HTMLCoreProgressElement;

  /**
   * Color of the progress bar.
   * Use: `color="black"`, `color="red"`, etc.
   * Default color is `"blue"`.
   */
  @Prop() color?: "black" | "blue" | "green" | "yellow" | "red" = "blue";

  /**
   * The progress bar maximum value.
   */
  @Prop() max = 100;

  /**
   * The pre-defined progress bar size.
   * Use: `"small"` or `"large"`.
   * Default size is `"large"`.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * The progress bar value.
   */
  @Prop() value: number | undefined;

  render() {
    const { color } = this;

    return (
      <Host
        class={{
          "core-progress": true,
          [`${color}`]: color !== undefined,
        }}
      >
        <progress max={this.max} value={this.value}></progress>
      </Host>
    );
  }
}
