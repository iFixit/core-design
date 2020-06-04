import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-alert",
  styleUrl: "core-alert.less",
  shadow: true,
})
export class Alert implements ComponentInterface {
  @Element() el!: HTMLCoreAlertElement;

  /**
   * Optional primary color of the alert.
   * Use: `color="gray"`, `color="green"`, `color="yellow"`, `color="red"`.
   */
  @Prop() color?: "gray" | "green" | "yellow" | "red" = "gray";

  render() {
    const { color } = this;

    return (
      <Host
        class={{
          "core-alert": true,
          [`${color}`]: color !== undefined,
        }}
      >
        <div class="native-element">
          <div class="icon-outter">
            <slot name="icon"></slot>
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
