import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-avatar",
  styleUrl: "core-avatar.less",
  shadow: true,
})
export class Avatar implements ComponentInterface {
  /**
   * If `true`, the avatar notification dot is shown.
   */
  @Prop() notification = false;

  /**
   * Optional background color of the notification.
   */
  @Prop() notificationBg?: "blue" | "green" | "yellow" | "white" | "black" =
    "black";

  /**
   * Size of the element.
   */
  @Prop() size?: "small" | "large" = "large";

  /**
   * Variation styling of the element.
   */
  @Prop({ reflect: true }) variation?: "circle" | "square" = "circle";

  render() {
    return (
      <Host>
        <slot />
        {this.notification && (
          <div
            class="notification"
            style={{ background: this.notificationBg }}
          ></div>
        )}
      </Host>
    );
  }
}
