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
   * Optional primary color of the element.
   */
  @Prop({ reflect: true }) color?: "gray" | "green" | "yellow" | "red" = "gray";

  render() {
    return (
      <Host
        class={{
          "core-alert": true,
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
