import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-toast",
  styleUrl: "core-toast.less",
  shadow: true,
})
export class toast implements ComponentInterface {
  @Element() el!: HTMLCoreToastElement;

  /**
   * Optional primary color of the toast. Defaults to `black`.
   * Use: `color="white"`, `color="green"`, `color="yellow"`, `color="red"`.
   */
  @Prop() color?: "white" | "green" | "yellow" | "red" = "white";

  render() {
    const { color } = this;

    return (
      <Host
        class={{
          "core-toast": true,
          [`${color}`]: color !== undefined,
        }}
      >
        <div class="native-element">
          <div class="toast-slot">
            <slot></slot>
          </div>
          <div class="toast-triggers">
            <div class="undo">Undo</div>
            <div class="close">
              <core-icon icon="cross"></core-icon>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
