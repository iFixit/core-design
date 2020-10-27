import { Component, ComponentInterface, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "core-tab",
  styleUrl: "core-tab.less",
  shadow: false,
})
export class Tab implements ComponentInterface {
  /**
   * If `true`, the tab element is set to active.
   */
  @Prop() active = false;

  /**
   * If `true`, the user cannot interact with the tab.
   */
  @Prop({ reflect: true }) disabled = false;

  render() {
    const { disabled } = this;
    return (
      <Host
        role="tabpanel"
        aria-hidden={disabled ? "true" : null}
        class={{ "core-tab": true }}
      >
        <li class="native-element">
          <slot></slot>
          <div class="badge-outer">
            <slot name="badge"></slot>
          </div>
        </li>
      </Host>
    );
  }
}
