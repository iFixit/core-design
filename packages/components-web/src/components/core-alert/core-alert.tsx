import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-alert",
  styleUrl: "core-alert.less",
  shadow: true,
})
export class Alert implements ComponentInterface {
  /**
   * Optional color of the element.
   */
  @Prop({ reflect: true }) color?: "gray" | "green" | "yellow" | "red" = "gray";

  /**
   * Set the value of the element border-radius. Default is `md` (4px).
   */
  @Prop() radius?: "none" | "md" | "lg" | "pill" = "md";

  render() {
    return (
      <Host>
        <div class="native-element">
          <div class="icon-outer">
            {this.color == "gray" && (
              <svg
                id="globe"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.8488 14.1317C10.8616 12.4896 11.4504 10.6634 11.6056 8.80265H14.344C14.0264 11.3343 12.2312 13.4103 9.8488 14.1317ZM8.004 14.0046C6.852 12.4457 6.1752 10.6466 5.996 8.80265H10.0048C9.82801 10.6458 9.1536 12.4449 8.004 14.0046ZM1.6552 8.80265H4.39441C4.55121 10.6642 5.1432 12.4921 6.1592 14.1343C3.7728 13.4153 1.9736 11.3376 1.6552 8.80265ZM5.8304 1.98331C4.9408 3.61026 4.45921 5.39658 4.37361 7.20128H1.6552C1.9584 4.78487 3.6096 2.78798 5.8304 1.98331ZM7.97361 1.59737C7.98081 1.58776 7.98799 1.57827 7.99519 1.56866C8.00239 1.57827 8.00879 1.58776 8.01599 1.59737C9.24399 3.26996 9.91441 5.22043 10.0256 7.20128H5.97361C6.08241 5.22123 6.74961 3.27156 7.97361 1.59737ZM14.344 7.20128H11.6256C11.5376 5.39497 11.0528 3.60796 10.1592 1.9794C12.3856 2.78247 14.0408 4.78087 14.344 7.20128ZM8.68401 0.0297939C3.95361 -0.372142 0 3.35881 0 8.00186C0 12.3511 3.46799 15.8741 7.76799 15.9966C12.3096 16.1279 16 12.476 16 8.00186C16 3.87203 12.8544 0.38609 8.68401 0.0297939Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {this.color == "green" && (
              <svg
                id="check"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 3C14.72 3 14.47 3.11 14.29 3.29L7 10.59L3.71 7.29C3.53 7.11 3.28 7 3 7C2.45 7 2 7.45 2 8C2 8.28 2.11 8.53 2.29 8.71L6.29 12.71C6.47 12.89 6.72 13 7 13C7.28 13 7.53 12.89 7.71 12.71L15.71 4.71C15.89 4.53 16 4.28 16 4C16 3.45 15.55 3 15 3Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {this.color == "yellow" && (
              <svg
                id="alert-circle"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8V5C7 4.44772 7.44772 4 8 4C8.55229 4 9 4.44772 9 5V8Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {this.color == "red" && (
              <svg
                id="alert-circle"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8V5C7 4.44772 7.44772 4 8 4C8.55229 4 9 4.44772 9 5V8Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </div>
          <slot />
        </div>
      </Host>
    );
  }
}
