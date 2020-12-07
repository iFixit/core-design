import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Method,
  Prop,
  h,
} from "@stencil/core";

@Component({
  tag: "core-toast",
  styleUrl: "core-toast.less",
  shadow: true,
})
export class Toast implements ComponentInterface {
  @Element() el: HTMLCoreToastElement;

  /**
   * `core-toast` close async method to remove from DOM
   */
  @Method()
  async close() {
    this.el.remove();
  }

  /**
   * Optional color of the toast. Defaults to `black`.
   */
  @Prop({ reflect: true }) color?: "white" | "green" | "yellow" | "red" =
    "white";

  render() {
    return (
      <Host class={{ "core-toast": true }}>
        <div class="native-element">
          <div class="toast-slot">
            <slot></slot>
          </div>
          <div class="toast-triggers">
            <div class="undo">Undo</div>
            <div class="close" onClick={() => this.close()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="cross"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
