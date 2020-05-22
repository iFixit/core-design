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
  @Element() el!: HTMLElement;

  /**
   * Optional primary color of the alert. Defaults to `black`.
   * Use: `color="gray"`, `color="green"`, `color="yellow"`, `color="red"`.
   * Defaults to `color="gray"`.
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
